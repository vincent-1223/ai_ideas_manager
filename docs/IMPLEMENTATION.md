# DSH 插件实现说明

## 基线

本仓库按官方 DSH `0.2.1-rc.5` 的 persistent bundle 机制实现，而不是独立 HTML 页面或临时动态插件。

使用的官方依据：

- `@deepseek-ai/dsh-agent-preset@0.1.7-alpha.1` 中的 `cordis-plugin-development` Skill：bundle manifest、`dsh.client`、slot 注册与验证流程。
- `@deepseek-ai/dsh-package-manifest@0.0.1-rc.1`：`DshBundleManifest`、`DshClientManifest`、`PluginLocalizedMeta`。
- `@deepseek-ai/dsh-client-ui-layout@0.0.1-rc.1`：`shell.overlay` 为 additive、click-through 的 frame-wide list slot。
- `@deepseek-ai/dsh-client-ui-sidebar@0.0.1-rc.1`：`sidebar.footer.action` 为 additive list slot，owner props 只有 `wide`。
- `@deepseek-ai/dsh-client-ui-slots@0.0.1-rc.1`：`ctx.slots.inject`、`ctx.slots.register`、locale seat 和生命周期约定。
- `@deepseek-ai/dsh-client-locale@0.0.1-rc.1`：`ctx.locale.register(namespace, { zh, en })` 与 slot 的 `locale` 声明。
- `@deepseek-ai/dsh-storage-domain@0.0.1-rc.1`：Host 侧有 schema-validated durable domain，但浏览器侧访问需要额外的 Host/Client RPC。

## 接入方式

插件向两个 slot 注册：

| Slot | 作用 | 是否替换 DSH 原生 UI |
| --- | --- | --- |
| `sidebar.footer.action` | 侧栏底部的“灵感”入口 | 否，append-only |
| `shell.overlay` | 覆盖整个 Web 工作区的个人工作台 | 否，append-only |

不占用 `root`、`sidebar` 或 `conversation`，因此不会替换 DSH 原生聊天和应用框架。

## 数据边界

MVP 的数据全部是浏览器本地结构化数据，不需要模型上下文，也不进入会话日志。基础版本优先减少跨进程协议与迁移成本，所以使用带版本号的 `localStorage` 存储。

后续如果需要多设备、跨端口或浏览器数据清理后的恢复能力，应将当前数据模型迁移到 Host 侧 `storage-domain`，再通过 Typert/Remote 接口与 Client 交互。迁移时保持 `version` 字段和现有 JSON 结构，可无损导入。

## 质量门槛

`npm run verify` 执行无依赖静态与装配检查。安装层通过 `dsh --profile web --dump-config` 验证 bundle 已进入组合树，Web 服务生成并返回 `@local/ai-ideas-manager/client.js` 资产。

视觉验收在 macOS 桌面端 DSH 中完成：修复前品牌区被红绿灯压住，修复后侧栏内容整体让出窗口条，导航与右侧正文标题对齐。

## 窗口控制区适配

`shell.overlay` 覆盖整个 frame，桌面端窗口条也在覆盖范围内。macOS 的红绿灯是原生控件，始终画在网页内容之上，插件必须自己让位；DSH 在根元素发布 `--dsh-frame-top-clearance`（macOS 为 48px，Windows 为标题栏高度），普通浏览器没有该变量。

侧栏上内边距因此写成 `calc(24px + var(--dsh-frame-top-clearance,0px))`（窄屏媒体查询同样保留 20px 基准），品牌区不再压在红绿灯上，正文区保持不变。回退值 `0px` 保证浏览器环境与修复前完全一致。

对话框层同理：`.aim-modal-backdrop` 的上内边距用 `--dsh-frame-overlay-top`（macOS 为 68px，原生全屏与浏览器为 20px），矮窗口下 90vh 的编辑器不会顶进窗口条。

## 灵感开工链路

「开始执行」要先有目录名、再开会话，而 DSH **没有**给客户端插件"调一次模型拿回复"的能力：`llm` 命名空间只有 `discoverModels` / `listProviders` 这类目录查询，`session/prompt` 与 `subagents/prompt` 都只投递消息、不返回回复。

可用的替代是一次临时会话往返（`session/create` → `session/prompt` → `session/wait`，其中 `wait` 返回有界 assistant 输出）：

1. 弹窗打开时取一次英文目录名：发"只输出一个 kebab-case 名字"，从 `wait` 的 `output.records[].event`（`assistant/message`）里解析文本，随后 `workspace/archiveSession` 归档临时会话。失败则回退到 `idea-<日期>-<随机>` 并把错误原因显示在弹窗里，目录名仍可手动改。
2. 确认后依次：`directoryPicker.createDirectory` 建 `~/ideas/<名字>`（撞名自动加 `-2`、`-3`）→ `workspaces.create` 注册工作区 → 灵感转事项并给事项与灵感写入 `workspacePath` / `workspaceId` → 关闭覆盖层 → `uiWorkspace.startSession(workspaceId, { prompt })` 预填首条消息。
3. 首条消息的约定是"先不要写代码，先提出 3-5 个需要确认的问题"，答案由用户在新会话的输入框里给出——那也是补充想法的第二个入口。

`~/ideas` 根目录由当前工作区路径推导（`/Users/<name>`、`/home/<name>`、`C:\Users\<name>`），结果缓存在 `ai-ideas-manager:v1:ideasRoot`，只推导一次。

数据边界不变：工作区锚点只写进 localStorage 里的事项/灵感记录，插件不读写工作区文件（`workspaceFiles` 是只读的，且这里用不上）。
