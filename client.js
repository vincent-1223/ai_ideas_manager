window.__ModuleLoader__.load({
  id: "@local/ai-ideas-manager",
  factory(require) {
    const React = require("react");
    const h = React.createElement;
    const NS = "ai-ideas-manager";
    const STORAGE_KEY = "ai-ideas-manager:v1";
    const DAY_MS = 24 * 60 * 60 * 1000;
    const zh = {
      "launcher.label": "AI 灵感工作台",
      "launcher.short": "灵感",
      "overlay.close": "关闭工作台",
      "nav.product": "AI 灵感工作台",
      "nav.tagline": "每日创作面板",
      "nav.dashboard": "今日面板",
      "nav.tasks": "我的创作事项",
      "nav.ideas": "灵感收件箱",
      "nav.completed": "已完成记录",
      "nav.logs": "创作日志",
      "nav.tags": "标签与分类",
      "nav.view": "查看",
      "nav.local": "本地数据",
      "nav.space": "我的创作空间",
      "search.placeholder": "搜索事项、灵感或日志",
      "search.clear": "清除搜索",
      "search.results": "搜索结果",
      "search.count": "{count} 条结果",
      "search.empty": "没有找到匹配内容。",
      "action.addTask": "新增事项",
      "action.addIdea": "收集灵感",
      "action.addLog": "记录进展",
      "action.export": "导出 JSON",
      "action.save": "保存",
      "action.cancel": "取消",
      "action.edit": "编辑",
      "action.delete": "删除",
      "action.today": "加入今天",
      "action.toTask": "转为事项",
      "action.viewAll": "查看全部",
      "action.manage": "管理事项",
      "action.reopen": "重新打开",
      "welcome.eyebrow": "DAILY AI CREATION DESK",
      "welcome.title": "今天，想用 AI 做点什么？",
      "welcome.body": "把想法放进来，选一个最小的下一步，持续留下创造记录。",
      "welcome.progress": "今日进度",
      "welcome.focus": "专注事项",
      "quick.placeholder": "记录一个想法、事项，或准备开始的东西…",
      "quick.today": "加入今天",
      "quick.idea": "收进灵感",
      "focus.title": "今天要推进",
      "focus.empty": "今天还没有要推进的事，从灵感或一个新事项开始。",
      "ideas.title": "灵感收件箱",
      "ideas.empty": "收件箱是空的。任何小念头都值得先被保存下来。",
      "week.title": "本周积累",
      "week.completed": "完成事项",
      "week.focus": "专注事项",
      "week.days": "活跃天数",
      "week.next": "下一步建议",
      "week.nextDefault": "今天只需要推进一个最小步骤，不必一次做完。",
      "logs.title": "最近记录",
      "logs.empty": "还没有记录。完成事项或收集灵感后，这里会自动留下轨迹。",
      "tasks.title": "我的创作事项",
      "tasks.subtitle": "把想法拆成可以立刻开始的一小步。",
      "tasks.empty": "没有符合条件的事项。",
      "ideas.subtitle": "先保存，再决定它是否值得成为今天的行动。",
      "ideas.emptyFiltered": "没有符合筛选条件的灵感。",
      "completed.title": "已完成记录",
      "completed.subtitle": "回看已经走过的每一步。",
      "completed.empty": "还没有完成记录。",
      "logs.subtitle": "自动记录完成、收集和转化，也可以手动写下进展。",
      "tags.title": "标签与分类",
      "tags.subtitle": "从标签里看到你的创作关注点。",
      "tags.empty": "还没有标签。",
      "tags.usage": "使用次数",
      "storage.error": "数据已更新，但浏览器存储写入失败。请导出 JSON 保留副本。",
      "storage.recovered": "检测到损坏的本地数据，原内容已备份并创建了新的工作区。",
      "filter.all": "全部",
      "filter.today": "今天",
      "filter.backlog": "待开始",
      "filter.progress": "进行中",
      "filter.completed": "已完成",
      "filter.recent": "最近收集",
      "filter.used": "已转事项",
      "sort.created": "最近创建",
      "sort.updated": "最近更新",
      "sort.title": "标题排序",
      "label.tags": "标签",
      "label.due": "截止日期",
      "label.today": "安排到今日",
      "label.taskTitle": "事项名称",
      "label.ideaTitle": "灵感标题",
      "label.taskNote": "下一步或补充说明",
      "label.ideaNote": "它为什么值得做？",
      "label.logTitle": "这次进展",
      "label.logNote": "补充说明",
      "label.tagsHint": "用逗号分隔，例如：Prompt, 产品",
      "status.backlog": "待开始",
      "status.in_progress": "进行中",
      "status.completed": "已完成",
      "modal.newTask": "新增创作事项",
      "modal.editTask": "编辑创作事项",
      "modal.newIdea": "收集一个新灵感",
      "modal.editIdea": "编辑灵感",
      "modal.newLog": "记录一次进展",
      "confirm.deleteTask": "确定删除这个事项？此操作无法撤销。",
      "confirm.deleteIdea": "确定删除这个灵感？此操作无法撤销。",
      "toast.taskCreated": "事项已加入工作台。",
      "toast.taskCompleted": "完成了一件事项。",
      "toast.taskReopened": "事项已重新打开。",
      "toast.taskUpdated": "事项已更新。",
      "toast.taskDeleted": "事项已删除。",
      "toast.ideaCreated": "灵感已收进收件箱。",
      "toast.ideaUpdated": "灵感已更新。",
      "toast.ideaDeleted": "灵感已删除。",
      "toast.ideaMoved": "灵感已加入今天。",
      "toast.logCreated": "进展已记录。",
      "toast.exported": "JSON 已导出。",
      "error.titleRequired": "请先填写标题。",
      "meta.madeWithAi": "MADE WITH AI",
      "meta.updated": "更新于",
      "meta.created": "创建于",
      "meta.planned": "计划今天",
      "meta.due": "截止",
    };
    const en = {
      "launcher.label": "AI Ideas Manager",
      "launcher.short": "Ideas",
      "overlay.close": "Close workspace",
      "nav.product": "AI Ideas Manager",
      "nav.tagline": "Daily creation desk",
      "nav.dashboard": "Today",
      "nav.tasks": "Creation tasks",
      "nav.ideas": "Idea inbox",
      "nav.completed": "Completed",
      "nav.logs": "Creation log",
      "nav.tags": "Tags",
      "nav.view": "VIEW",
      "nav.local": "LOCAL DATA",
      "nav.space": "My creation space",
      "search.placeholder": "Search tasks, ideas, or logs",
      "search.clear": "Clear search",
      "search.results": "Search results",
      "search.count": "{count} results",
      "search.empty": "No matching content.",
      "action.addTask": "New task",
      "action.addIdea": "Capture idea",
      "action.addLog": "Log progress",
      "action.export": "Export JSON",
      "action.save": "Save",
      "action.cancel": "Cancel",
      "action.edit": "Edit",
      "action.delete": "Delete",
      "action.today": "Add to today",
      "action.toTask": "Convert to task",
      "action.viewAll": "View all",
      "action.manage": "Manage tasks",
      "action.reopen": "Reopen",
      "welcome.eyebrow": "DAILY AI CREATION DESK",
      "welcome.title": "What will you make with AI today?",
      "welcome.body": "Put the idea down, choose the smallest next step, and leave a trail of creation.",
      "welcome.progress": "Today's progress",
      "welcome.focus": "focus items",
      "quick.placeholder": "Capture an idea, task, or something you want to start…",
      "quick.today": "Add to today",
      "quick.idea": "Save as idea",
      "focus.title": "Today's focus",
      "focus.empty": "Nothing planned yet. Start from an idea or a new task.",
      "ideas.title": "Idea inbox",
      "ideas.empty": "The inbox is empty. Save even the smallest spark first.",
      "week.title": "This week",
      "week.completed": "Completed",
      "week.focus": "Focus items",
      "week.days": "Active days",
      "week.next": "Next step suggestion",
      "week.nextDefault": "Choose one small step today. There is no need to finish everything at once.",
      "logs.title": "Recent activity",
      "logs.empty": "No activity yet. Completing tasks and capturing ideas will leave a trail here.",
      "tasks.title": "Creation tasks",
      "tasks.subtitle": "Turn ideas into a small step you can start immediately.",
      "tasks.empty": "No tasks match this view.",
      "ideas.subtitle": "Save first, then decide whether it deserves to become today's action.",
      "ideas.emptyFiltered": "No ideas match these filters.",
      "completed.title": "Completed work",
      "completed.subtitle": "Look back at every step you have taken.",
      "completed.empty": "No completed work yet.",
      "logs.subtitle": "Capture, conversion, and completion events are recorded automatically.",
      "tags.title": "Tags and topics",
      "tags.subtitle": "See where your creative attention is gathering.",
      "tags.empty": "No tags yet.",
      "tags.usage": "uses",
      "storage.error": "Data changed, but browser storage rejected the write. Export JSON to keep a copy.",
      "storage.recovered": "Damaged local data was backed up and a fresh workspace was created.",
      "filter.all": "All",
      "filter.today": "Today",
      "filter.backlog": "Backlog",
      "filter.progress": "In progress",
      "filter.completed": "Completed",
      "filter.recent": "Recent",
      "filter.used": "Converted",
      "sort.created": "Recently created",
      "sort.updated": "Recently updated",
      "sort.title": "Title A–Z",
      "label.tags": "Tags",
      "label.due": "Due date",
      "label.today": "Plan for today",
      "label.taskTitle": "Task title",
      "label.ideaTitle": "Idea title",
      "label.taskNote": "Next step or details",
      "label.ideaNote": "Why is it worth pursuing?",
      "label.logTitle": "What moved forward?",
      "label.logNote": "Additional notes",
      "label.tagsHint": "Comma-separated, for example: Prompt, Product",
      "status.backlog": "Backlog",
      "status.in_progress": "In progress",
      "status.completed": "Completed",
      "modal.newTask": "New creation task",
      "modal.editTask": "Edit creation task",
      "modal.newIdea": "Capture a new idea",
      "modal.editIdea": "Edit idea",
      "modal.newLog": "Log progress",
      "confirm.deleteTask": "Delete this task? This cannot be undone.",
      "confirm.deleteIdea": "Delete this idea? This cannot be undone.",
      "toast.taskCreated": "Task added to the workspace.",
      "toast.taskCompleted": "Task completed.",
      "toast.taskReopened": "Task reopened.",
      "toast.taskUpdated": "Task updated.",
      "toast.taskDeleted": "Task deleted.",
      "toast.ideaCreated": "Idea saved to the inbox.",
      "toast.ideaUpdated": "Idea updated.",
      "toast.ideaDeleted": "Idea deleted.",
      "toast.ideaMoved": "Idea added to today.",
      "toast.logCreated": "Progress logged.",
      "toast.exported": "JSON exported.",
      "error.titleRequired": "Add a title first.",
      "meta.madeWithAi": "MADE WITH AI",
      "meta.updated": "Updated",
      "meta.created": "Created",
      "meta.planned": "Planned today",
      "meta.due": "Due",
    };
    function uid(prefix) {
      const value = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      return `${prefix}-${value}`;
    }
    function localDateKey(value = new Date()) {
      const date = value instanceof Date ? value : new Date(value);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    function dateAtDayOffset(offset, hour = 10, minute = 0) {
      const date = new Date();
      date.setDate(date.getDate() + offset);
      date.setHours(hour, minute, 0, 0);
      return date;
    }
    function startOfWeek(value = new Date()) {
      const date = new Date(value);
      const day = date.getDay();
      const offset = day === 0 ? -6 : 1 - day;
      date.setDate(date.getDate() + offset);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    function createSeedState() {
      const now = new Date();
      const today = localDateKey(now);
      const task = (id, title, note, status, plannedFor, dayOffset, tags, hour) => ({
        id,
        title,
        note,
        status,
        plannedFor,
        dueDate: "",
        tags,
        createdAt: dateAtDayOffset(dayOffset, hour, 0).toISOString(),
        updatedAt: dateAtDayOffset(dayOffset, hour, 20).toISOString(),
        completedAt: status === "completed" ? dateAtDayOffset(dayOffset, hour + 1, 0).toISOString() : "",
      });
      return {
        version: 1,
        initializedAt: now.toISOString(),
        tasks: [
          task("task-demo-prompt", "整理昨天的 AI 对话，提取可复用 Prompt", "已完成第一轮整理", "completed", today, 0, ["Prompt", "记录"], 9),
          task("task-demo-budget", "做一个家庭支出记录小工具的第一版", "下一步：先搭输入和列表界面", "in_progress", today, 0, ["前端", "家庭"], 10),
          task("task-demo-dsh", "研究 DSH 插件能否读取本地项目目录", "先确认官方 API 和权限边界", "backlog", today, 0, ["DSH", "探索"], 11),
          task("task-demo-english", "给儿童英语 App 补一个家长反馈入口", "从一个低保真表单开始", "backlog", localDateKey(dateAtDayOffset(1)), 1, ["产品", "创作"], 9),
          task("task-demo-week-1", "完成 Prompt 分类规则", "把常用提示词按创作阶段整理", "completed", localDateKey(dateAtDayOffset(-1)), -1, ["Prompt"], 16),
          task("task-demo-week-2", "验证电视启动器的遥控焦点", "完成方向键和返回交互", "completed", localDateKey(dateAtDayOffset(-3)), -3, ["Android", "家庭"], 15),
        ],
        ideas: [
          {
            id: "idea-demo-weekly",
            title: "把每天的 AI 练习变成一张周报",
            note: "自动收集今天做过的事情，周末回看时能看到自己真的在积累。",
            tags: ["自动化", "周报"],
            createdAt: now.toISOString(),
            updatedAt: now.toISOString(),
            convertedTaskId: "",
          },
          {
            id: "idea-demo-tablet",
            title: "给家里的旧平板做一个专注模式",
            note: "只保留阅读、计时、白噪音和家庭日程，减少无意识刷屏。",
            tags: ["家庭", "专注"],
            createdAt: dateAtDayOffset(-1, 21, 6).toISOString(),
            updatedAt: dateAtDayOffset(-1, 21, 6).toISOString(),
            convertedTaskId: "",
          },
          {
            id: "idea-demo-manual",
            title: "做一个自己的 AI 工具使用手册",
            note: "记录哪些模型适合什么任务，积累自己的工作方法。",
            tags: ["AI 工具", "方法"],
            createdAt: dateAtDayOffset(-2, 18, 12).toISOString(),
            updatedAt: dateAtDayOffset(-2, 18, 12).toISOString(),
            convertedTaskId: "",
          },
        ],
        logs: [
          {
            id: "log-demo-1",
            type: "task.completed",
            entityId: "task-demo-prompt",
            title: "完成 Prompt 整理",
            note: "把 6 段对话归档到「可复用提示词」。",
            createdAt: dateAtDayOffset(0, 9, 42).toISOString(),
          },
          {
            id: "log-demo-2",
            type: "task.created",
            entityId: "task-demo-budget",
            title: "新增创作事项",
            note: "完成家庭支出工具的需求拆解，第一版只保留记录、分类和月度汇总。",
            createdAt: dateAtDayOffset(-1, 21, 6).toISOString(),
          },
          {
            id: "log-demo-3",
            type: "idea.created",
            entityId: "idea-demo-tablet",
            title: "收集了一个新灵感",
            note: "给家里的旧平板做一个专注模式。",
            createdAt: dateAtDayOffset(-1, 21, 18).toISOString(),
          },
        ],
      };
    }
    function normalizeList(value) {
      return Array.isArray(value) ? value.filter((item) => item && typeof item === "object" && item.id) : [];
    }
    function normalizeState(raw) {
      if (!raw || typeof raw !== "object") return createSeedState();
      return {
        version: 1,
        initializedAt: raw.initializedAt || new Date().toISOString(),
        tasks: normalizeList(raw.tasks).map((task) => ({
          ...task,
          tags: Array.isArray(task.tags) ? task.tags : [],
          status: ["backlog", "in_progress", "completed"].includes(task.status) ? task.status : "backlog",
          plannedFor: typeof task.plannedFor === "string" ? task.plannedFor : "",
          dueDate: typeof task.dueDate === "string" ? task.dueDate : "",
          completedAt: typeof task.completedAt === "string" ? task.completedAt : "",
        })),
        ideas: normalizeList(raw.ideas).map((idea) => ({
          ...idea,
          tags: Array.isArray(idea.tags) ? idea.tags : [],
          convertedTaskId: typeof idea.convertedTaskId === "string" ? idea.convertedTaskId : "",
        })),
        logs: normalizeList(raw.logs).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      };
    }
    function loadInitialState() {
      let raw = null;
      try {
        raw = globalThis.localStorage?.getItem(STORAGE_KEY) ?? null;
      } catch (error) {
        return { data: createSeedState(), error: error instanceof Error ? error.message : String(error), recovery: false };
      }
      if (!raw) {
        const seeded = createSeedState();
        try {
          globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(seeded));
          return { data: seeded, error: "", recovery: false };
        } catch (error) {
          return { data: seeded, error: error instanceof Error ? error.message : String(error), recovery: false };
        }
      }
      try {
        return { data: normalizeState(JSON.parse(raw)), error: "", recovery: false };
      } catch {
        try {
          globalThis.localStorage?.setItem(`${STORAGE_KEY}:corrupt:${Date.now()}`, raw);
        } catch {}
        return { data: createSeedState(), error: "", recovery: true };
      }
    }
    const initial = loadInitialState();
    let snapshot = {
      open: false,
      data: initial.data,
      storageError: initial.error,
      recoveryNotice: initial.recovery,
    };
    const listeners = new Set();
    function publish(patch) {
      snapshot = { ...snapshot, ...patch };
      listeners.forEach((listener) => listener());
    }
    function subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
    function getSnapshot() {
      return snapshot;
    }
    function useAppState() {
      return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
    }
    function setOverlayOpen(open) {
      if (snapshot.open === open) return;
      publish({ open });
    }
    function writeState(data) {
      let storageError = "";
      try {
        globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (error) {
        storageError = error instanceof Error ? error.message : String(error);
      }
      publish({ data, storageError, recoveryNotice: false });
    }
    function appendLog(data, type, title, note, entityId) {
      return {
        ...data,
        logs: [
          {
            id: uid("log"),
            type,
            entityId: entityId || "",
            title,
            note: note || "",
            createdAt: new Date().toISOString(),
          },
          ...data.logs,
        ].slice(0, 300),
      };
    }
    function splitTags(value) {
      return String(value || "")
        .split(/[,，]/)
        .map((tag) => tag.trim())
        .filter(Boolean)
        .filter((tag, index, list) => list.indexOf(tag) === index)
        .slice(0, 12);
    }
    function addTask(input, message) {
      const now = new Date().toISOString();
      const item = {
        id: uid("task"),
        title: input.title.trim(),
        note: input.note.trim(),
        status: input.planToday ? "in_progress" : input.status || "backlog",
        plannedFor: input.planToday ? localDateKey() : input.plannedFor || "",
        dueDate: input.dueDate || "",
        tags: splitTags(input.tagsText),
        createdAt: now,
        updatedAt: now,
        completedAt: "",
      };
      let data = { ...snapshot.data, tasks: [item, ...snapshot.data.tasks] };
      data = appendLog(data, "task.created", message, item.title, item.id);
      writeState(data);
      return item;
    }
    function updateTask(id, input, message) {
      let updated;
      const data = {
        ...snapshot.data,
        tasks: snapshot.data.tasks.map((task) => {
          if (task.id !== id) return task;
          const completing = input.status === "completed" && task.status !== "completed";
          const reopening = input.status !== "completed" && task.status === "completed";
          updated = {
            ...task,
            ...input,
            title: input.title.trim(),
            note: input.note.trim(),
            tags: splitTags(input.tagsText),
            plannedFor: input.planToday ? localDateKey() : input.plannedFor || "",
            updatedAt: new Date().toISOString(),
            completedAt: completing ? new Date().toISOString() : reopening ? "" : task.completedAt,
          };
          delete updated.tagsText;
          delete updated.planToday;
          return updated;
        }),
      };
      writeState(appendLog(data, "task.updated", message, input.title, id));
      return updated;
    }
    function toggleTask(id, completeMessage, reopenMessage) {
      const current = snapshot.data.tasks.find((task) => task.id === id);
      if (!current) return;
      const done = current.status === "completed";
      const next = {
        ...current,
        status: done ? "in_progress" : "completed",
        completedAt: done ? "" : new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      let data = {
        ...snapshot.data,
        tasks: snapshot.data.tasks.map((task) => (task.id === id ? next : task)),
      };
      data = appendLog(data, done ? "task.reopened" : "task.completed", done ? reopenMessage : completeMessage, current.title, id);
      writeState(data);
    }
    function deleteTask(id, message) {
      const current = snapshot.data.tasks.find((task) => task.id === id);
      if (!current) return;
      let data = {
        ...snapshot.data,
        tasks: snapshot.data.tasks.filter((task) => task.id !== id),
        ideas: snapshot.data.ideas.map((idea) => (idea.convertedTaskId === id ? { ...idea, convertedTaskId: "" } : idea)),
      };
      data = appendLog(data, "task.deleted", message, current.title, id);
      writeState(data);
    }
    function addIdea(input, message) {
      const now = new Date().toISOString();
      const item = {
        id: uid("idea"),
        title: input.title.trim(),
        note: input.note.trim(),
        tags: splitTags(input.tagsText),
        createdAt: now,
        updatedAt: now,
        convertedTaskId: "",
      };
      let data = { ...snapshot.data, ideas: [item, ...snapshot.data.ideas] };
      data = appendLog(data, "idea.created", message, item.title, item.id);
      writeState(data);
      return item;
    }
    function updateIdea(id, input, message) {
      const data = {
        ...snapshot.data,
        ideas: snapshot.data.ideas.map((idea) =>
          idea.id === id
            ? {
                ...idea,
                title: input.title.trim(),
                note: input.note.trim(),
                tags: splitTags(input.tagsText),
                updatedAt: new Date().toISOString(),
              }
            : idea,
        ),
      };
      writeState(appendLog(data, "idea.updated", message, input.title, id));
    }
    function deleteIdea(id, message) {
      const current = snapshot.data.ideas.find((idea) => idea.id === id);
      if (!current) return;
      let data = { ...snapshot.data, ideas: snapshot.data.ideas.filter((idea) => idea.id !== id) };
      data = appendLog(data, "idea.deleted", message, current.title, id);
      writeState(data);
    }
    function ideaToTask(id, message) {
      const idea = snapshot.data.ideas.find((item) => item.id === id);
      if (!idea || idea.convertedTaskId) return;
      const now = new Date().toISOString();
      const task = {
        id: uid("task"),
        title: idea.title,
        note: idea.note,
        status: "in_progress",
        plannedFor: localDateKey(),
        dueDate: "",
        tags: idea.tags,
        createdAt: now,
        updatedAt: now,
        completedAt: "",
      };
      let data = {
        ...snapshot.data,
        tasks: [task, ...snapshot.data.tasks],
        ideas: snapshot.data.ideas.map((item) => (item.id === id ? { ...item, convertedTaskId: task.id, updatedAt: now } : item)),
      };
      data = appendLog(data, "idea.converted", message, idea.title, task.id);
      writeState(data);
    }
    function addLogEntry(input) {
      writeState(appendLog(snapshot.data, "manual", input.title.trim(), input.note.trim(), ""));
    }
    function activeLocale() {
      return document.documentElement.lang || "zh-CN";
    }
    function formatShortDate(value) {
      if (!value) return "—";
      const date = /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T00:00:00`) : new Date(value);
      return new Intl.DateTimeFormat(activeLocale(), { month: "2-digit", day: "2-digit" }).format(date);
    }
    function formatFullDate(value) {
      if (!value) return "—";
      return new Intl.DateTimeFormat(activeLocale(), { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(value));
    }
    function formatRelative(value) {
      if (!value) return "";
      const diff = new Date(value).getTime() - Date.now();
      const minutes = Math.round(diff / 60000);
      if (Math.abs(minutes) < 60) return new Intl.RelativeTimeFormat(activeLocale(), { numeric: "auto" }).format(minutes, "minute");
      const hours = Math.round(minutes / 60);
      if (Math.abs(hours) < 24) return new Intl.RelativeTimeFormat(activeLocale(), { numeric: "auto" }).format(hours, "hour");
      const days = Math.round(hours / 24);
      if (Math.abs(days) < 7) return new Intl.RelativeTimeFormat(activeLocale(), { numeric: "auto" }).format(days, "day");
      return formatShortDate(value);
    }
    const iconPaths = {
      spark: "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z",
      home: "M4 10.5L12 4l8 6.5V20h-6v-5h-4v5H4v-9.5z",
      tasks: "M5 5h14v3H5V5zm0 5.5h14v3H5v-3zM5 16h9v3H5v-3z",
      inbox: "M4 5h16v11H8l-4 4V5zm4 4h8M8 12h5",
      check: "M5 12l4 4L19 6",
      archive: "M4 6h16v4H4V6zm2 4v9h12v-9M9 14h6",
      history: "M4 12a8 8 0 1 0 2.3-5.7L4 8.6M4 4v4.6h4.6M12 8v5l3 2",
      tag: "M4 5v6.2L12.8 20 20 12.8 11.2 4H5a1 1 0 0 0-1 1zm4 2h.01",
      plus: "M12 5v14M5 12h14",
      search: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm5-2l5 5",
      close: "M6 6l12 12M18 6L6 18",
      edit: "M4 20l4.2-1 10.6-10.6-3.2-3.2L5 15.8 4 20zM14 6l3 3",
      trash: "M5 7h14M9 7V4h6v3m-8 0l1 13h8l1-13M10 11v5m4-5v5",
      arrow: "M5 12h13M14 7l5 5-5 5",
      download: "M12 4v11m-4-4l4 4 4-4M5 20h14",
      more: "M5 12h.01M12 12h.01M19 12h.01",
      calendar: "M5 6h14v14H5V6zm3-3v5m8-5v5M5 10h14",
      bulb: "M9 18h6M10 21h4M8.6 15.5A6 6 0 1 1 15.4 15.5c-.9.8-1.4 1.5-1.4 2.5h-4c0-1-.5-1.7-1.4-2.5z",
      clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v5l3 2",
    };
    function Icon({ name, size = 18, className = "" }) {
      return h(
        "svg",
        {
          viewBox: "0 0 24 24",
          width: size,
          height: size,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: name === "spark" ? 1.5 : 1.7,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className,
          "aria-hidden": true,
        },
        h("path", { d: iconPaths[name] || iconPaths.spark }),
      );
    }
    function Launcher({ wide, t }) {
      const state = useAppState();
      return h(
        "button",
        {
          type: "button",
          className: "aim-launcher",
          "data-open": state.open || undefined,
          "aria-label": t("launcher.label"),
          title: t("launcher.label"),
          onClick: () => setOverlayOpen(true),
        },
        h("span", { className: "aim-launcher-icon" }, h(Icon, { name: "spark", size: 17 })),
        wide ? h("span", { className: "aim-launcher-label" }, t("launcher.short")) : null,
        wide ? h("span", { className: "aim-launcher-kbd" }, "Ctrl J") : null,
      );
    }
    function ProgressRing({ value, label }) {
      const radius = 34;
      const circumference = 2 * Math.PI * radius;
      const dash = circumference * Math.max(0, Math.min(1, value));
      return h(
        "div",
        { className: "aim-progress-ring", "aria-label": label },
        h(
          "svg",
          { viewBox: "0 0 84 84", width: 84, height: 84, "aria-hidden": true },
          h("circle", { cx: 42, cy: 42, r: radius, className: "aim-ring-track" }),
          h("circle", {
            cx: 42,
            cy: 42,
            r: radius,
            className: "aim-ring-value",
            strokeDasharray: `${dash} ${circumference}`,
          }),
        ),
        h("span", null, `${Math.round(value * 100)}%`),
      );
    }
    function StatusBadge({ status, t }) {
      return h("span", { className: `aim-status aim-status-${status}` }, h("i"), t(`status.${status}`));
    }
    function Tag({ children }) {
      return h("span", { className: "aim-tag" }, children);
    }
    function EmptyState({ icon = "spark", title }) {
      return h(
        "div",
        { className: "aim-empty" },
        h("span", { className: "aim-empty-icon" }, h(Icon, { name: icon, size: 22 })),
        h("p", null, title),
      );
    }
    function PageHeading({ eyebrow, title, subtitle, actions }) {
      return h(
        "div",
        { className: "aim-page-heading" },
        h(
          "div",
          null,
          eyebrow ? h("span", { className: "aim-eyebrow" }, h("i"), eyebrow) : null,
          h("h1", null, title),
          h("p", null, subtitle),
        ),
        actions ? h("div", { className: "aim-heading-actions" }, actions) : null,
      );
    }
    function TaskRow({ task, t, onToggle, onEdit, onDelete, selected = false }) {
      const done = task.status === "completed";
      return h(
        "article",
        { className: `aim-task-row${done ? " is-complete" : ""}${selected ? " is-selected" : ""}` },
        h(
          "button",
          {
            type: "button",
            className: "aim-check",
            "aria-label": done ? t("action.reopen") : `${t("status.completed")}: ${task.title}`,
            onClick: () => onToggle(task.id),
          },
          done ? h(Icon, { name: "check", size: 12 }) : null,
        ),
        h(
          "div",
          { className: "aim-task-main" },
          h("h3", null, task.title),
          h("p", null, task.note || t("label.taskNote")),
          h(
            "div",
            { className: "aim-row-meta" },
            task.plannedFor === localDateKey() ? h("span", { className: "aim-meta-chip is-today" }, h(Icon, { name: "calendar", size: 12 }), t("filter.today")) : null,
            task.tags.slice(0, 3).map((tag) => h(Tag, { key: tag }, tag)),
            task.dueDate ? h("span", null, `${t("meta.due")} ${formatShortDate(task.dueDate)}`) : null,
          ),
        ),
        h(StatusBadge, { status: task.status, t }),
        h(
          "div",
          { className: "aim-row-actions" },
          h("button", { type: "button", title: t("action.edit"), "aria-label": t("action.edit"), onClick: () => onEdit(task) }, h(Icon, { name: "edit", size: 15 })),
          h("button", { type: "button", title: t("action.delete"), "aria-label": t("action.delete"), onClick: () => onDelete(task) }, h(Icon, { name: "trash", size: 15 })),
        ),
      );
    }
    function IdeaCard({ idea, t, onToday, onEdit, onDelete }) {
      const converted = Boolean(idea.convertedTaskId);
      return h(
        "article",
        { className: "aim-idea-card" },
        h(
          "div",
          { className: "aim-idea-top" },
          h("span", { className: "aim-idea-symbol" }, h(Icon, { name: "bulb", size: 18 })),
          h("small", null, formatRelative(idea.createdAt)),
        ),
        h("h3", null, idea.title),
        h("p", null, idea.note || t("label.ideaNote")),
        h("div", { className: "aim-tags" }, idea.tags.slice(0, 4).map((tag) => h(Tag, { key: tag }, tag))),
        h(
          "div",
          { className: "aim-idea-actions" },
          h("button", { type: "button", className: "is-primary-text", disabled: converted, onClick: () => onToday(idea.id) }, converted ? t("filter.used") : t("action.toTask"), !converted ? h(Icon, { name: "arrow", size: 13 }) : null),
          h("button", { type: "button", onClick: () => onEdit(idea) }, h(Icon, { name: "edit", size: 14 }), t("action.edit")),
          h("button", { type: "button", onClick: () => onDelete(idea) }, h(Icon, { name: "trash", size: 14 }), t("action.delete")),
        ),
      );
    }
    function LogList({ logs, t, limit = 3 }) {
      if (!logs.length) return h(EmptyState, { icon: "history", title: t("logs.empty") });
      return h(
        "div",
        { className: "aim-log-list" },
        logs.slice(0, limit).map((log) =>
          h(
            "article",
            { className: "aim-log-item", key: log.id },
            h("i", { className: `aim-log-dot aim-log-${log.type.split(".")[0]}` }),
            h(
              "div",
              null,
              h("strong", null, log.title),
              log.note ? h("p", null, log.note) : null,
            ),
            h("time", null, formatRelative(log.createdAt)),
          ),
        ),
      );
    }
    function WeeklyPanel({ data, t }) {
      const weekStart = startOfWeek();
      const days = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(weekStart);
        date.setDate(date.getDate() + index);
        const key = localDateKey(date);
        const completed = data.tasks.filter((task) => task.completedAt && localDateKey(task.completedAt) === key).length;
        return { date, key, completed };
      });
      const max = Math.max(1, ...days.map((day) => day.completed));
      const completedThisWeek = days.reduce((count, day) => count + day.completed, 0);
      const activeDays = days.filter((day) => day.completed > 0).length;
      const focusCount = data.tasks.filter((task) => task.plannedFor >= localDateKey(weekStart) && task.status !== "completed").length;
      const nextTask = data.tasks.find((task) => task.status !== "completed" && task.plannedFor === localDateKey());
      return h(
        "section",
        { className: "aim-week-panel" },
        h("div", { className: "aim-panel-title" }, h("span", null, "THIS WEEK"), h("h2", null, t("week.title"))),
        h(
          "div",
          { className: "aim-week-stats" },
          h("div", null, h("strong", null, completedThisWeek), h("small", null, t("week.completed"))),
          h("div", null, h("strong", null, focusCount), h("small", null, t("week.focus"))),
          h("div", null, h("strong", null, activeDays), h("small", null, t("week.days"))),
        ),
        h(
          "div",
          { className: "aim-week-chart" },
          days.map((day) =>
            h(
              "div",
              { key: day.key, className: "aim-week-day" },
              h("i", { style: { height: `${Math.max(8, (day.completed / max) * 100)}%` } }),
              h("span", null, new Intl.DateTimeFormat(activeLocale(), { weekday: "narrow" }).format(day.date)),
            ),
          ),
        ),
        h(
          "div",
          { className: "aim-next-step" },
          h("span", null, t("week.next")),
          h("p", null, nextTask ? nextTask.note || nextTask.title : t("week.nextDefault")),
        ),
      );
    }
    function QuickCapture({ t, onCreateTask, onCreateIdea }) {
      const [value, setValue] = React.useState("");
      const submit = (destination) => {
        const title = value.trim();
        if (!title) return;
        if (destination === "today") {
          onCreateTask({ title, note: "", tagsText: "", planToday: true, status: "in_progress", dueDate: "" });
        } else {
          onCreateIdea({ title, note: "", tagsText: "" });
        }
        setValue("");
      };
      return h(
        "div",
        { className: "aim-quick-capture" },
        h("span", { className: "aim-quick-icon" }, h(Icon, { name: "plus", size: 18 })),
        h("input", {
          value,
          placeholder: t("quick.placeholder"),
          "aria-label": t("quick.placeholder"),
          onChange: (event) => setValue(event.target.value),
          onKeyDown: (event) => {
            if (event.key === "Enter") submit("today");
          },
        }),
        value.trim() ? h("button", { type: "button", className: "aim-quick-secondary", onClick: () => submit("idea") }, t("quick.idea")) : null,
        h("button", { type: "button", className: "aim-quick-primary", onClick: () => submit("today") }, t("quick.today"), h(Icon, { name: "arrow", size: 13 })),
      );
    }
    function Dashboard({ data, t, onToggle, onEditTask, onDeleteTask, onIdeaToday, onEditIdea, onDeleteIdea, onCreateTask, onCreateIdea, onNavigate }) {
      const today = localDateKey();
      const todayItems = data.tasks.filter((task) => task.plannedFor === today || task.dueDate === today);
      const pendingToday = todayItems.filter((task) => task.status !== "completed").length;
      const completedToday = data.tasks.filter((task) => task.status === "completed" && task.completedAt && localDateKey(task.completedAt) === today).length;
      const totalToday = completedToday + pendingToday;
      const progress = totalToday ? completedToday / totalToday : 0;
      const recentIdeas = data.ideas.filter((idea) => !idea.convertedTaskId).slice(0, 3);
      return h(
        "div",
        { className: "aim-page aim-dashboard" },
        h(
          "section",
          { className: "aim-welcome", style: { "--aim-progress": progress } },
          h(
            "div",
            null,
            h("span", { className: "aim-eyebrow" }, h("i"), t("welcome.eyebrow")),
            h("h1", null, t("welcome.title")),
            h("p", null, t("welcome.body")),
          ),
          h(
            "div",
            { className: "aim-progress-card" },
            h(ProgressRing, { value: progress, label: t("welcome.progress") }),
            h(
              "div",
              null,
              h("span", null, t("welcome.progress")),
              h("strong", null, `${completedToday} / ${totalToday}`),
              h("small", null, t("welcome.focus")),
            ),
          ),
          h("span", { className: "aim-welcome-star star-a", "aria-hidden": true }, "✦"),
          h("span", { className: "aim-welcome-star star-b", "aria-hidden": true }, "·"),
        ),
        h(QuickCapture, { t, onCreateTask, onCreateIdea }),
        h(
          "div",
          { className: "aim-dashboard-grid" },
          h(
            "section",
            { className: "aim-focus-panel" },
            h(
              "div",
              { className: "aim-section-head" },
              h("div", null, h("span", null, "TODAY'S FOCUS"), h("h2", null, t("focus.title"))),
              h("button", { type: "button", onClick: () => onNavigate("tasks") }, t("action.manage"), h(Icon, { name: "arrow", size: 13 })),
            ),
            h(
              "div",
              { className: "aim-focus-list" },
              todayItems.length
                ? todayItems.map((task) =>
                    h(TaskRow, {
                      key: task.id,
                      task,
                      t,
                      onToggle: () => onToggle(task.id),
                      onEdit: onEditTask,
                      onDelete: onDeleteTask,
                    }),
                  )
                : h(EmptyState, { icon: "calendar", title: t("focus.empty") }),
            ),
            h(
              "div",
              { className: "aim-section-head aim-section-head-spaced" },
              h("div", null, h("span", null, "RECENT ACTIVITY"), h("h2", null, t("logs.title"))),
              h("button", { type: "button", onClick: () => onNavigate("logs") }, t("action.viewAll"), h(Icon, { name: "arrow", size: 13 })),
            ),
            h(LogList, { logs: data.logs, t, limit: 3 }),
          ),
          h(
            "aside",
            { className: "aim-side-stack" },
            h(
              "section",
              { className: "aim-ideas-panel" },
              h(
                "div",
                { className: "aim-section-head" },
                h("div", null, h("span", null, "IDEA INBOX"), h("h2", null, t("ideas.title"))),
                h("button", { type: "button", onClick: () => onNavigate("ideas") }, t("action.viewAll"), h(Icon, { name: "arrow", size: 13 })),
              ),
              recentIdeas.length
                ? recentIdeas.map((idea) =>
                    h(
                      "article",
                      { className: "aim-compact-idea", key: idea.id },
                      h("button", { type: "button", className: "aim-compact-title", onClick: () => onEditIdea(idea) }, idea.title),
                      h("p", null, idea.note),
                      h(
                        "div",
                        null,
                        h("button", { type: "button", onClick: () => onIdeaToday(idea.id) }, t("action.today")),
                        h("span", null, formatRelative(idea.createdAt)),
                      ),
                    ),
                  )
                : h(EmptyState, { icon: "inbox", title: t("ideas.empty") }),
            ),
            h(WeeklyPanel, { data, t }),
          ),
        ),
      );
    }
    function Modal({ title, t, children, onClose, onSubmit, submitLabel }) {
      const firstRef = React.useRef(null);
      React.useEffect(() => {
        const onKeyDown = (event) => {
          if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        firstRef.current?.focus();
        return () => window.removeEventListener("keydown", onKeyDown);
      }, [onClose]);
      return h(
        "div",
        { className: "aim-modal-backdrop", role: "presentation", onMouseDown: (event) => event.target === event.currentTarget && onClose() },
        h(
          "form",
          { className: "aim-modal", role: "dialog", "aria-modal": "true", "aria-label": title, onSubmit },
          h(
            "div",
            { className: "aim-modal-head" },
            h("div", null, h("span", null, "CAPTURE"), h("h2", null, title)),
            h("button", { type: "button", className: "aim-icon-button", onClick: onClose, "aria-label": t("action.cancel") }, h(Icon, { name: "close", size: 17 })),
          ),
          h("div", { className: "aim-modal-body", ref: firstRef }, children),
          h(
            "div",
            { className: "aim-modal-actions" },
            h("button", { type: "button", className: "aim-button-secondary", onClick: onClose }, t("action.cancel")),
            h("button", { type: "submit", className: "aim-button-primary" }, submitLabel || t("action.save")),
          ),
        ),
      );
    }
    function Field({ label, hint, children }) {
      return h(
        "label",
        { className: "aim-field" },
        h("span", null, label, hint ? h("small", null, hint) : null),
        children,
      );
    }
    function TaskEditor({ task, t, onClose, onSave }) {
      const [title, setTitle] = React.useState(task?.title || "");
      const [note, setNote] = React.useState(task?.note || "");
      const [tagsText, setTagsText] = React.useState((task?.tags || []).join(", "));
      const [plannedFor, setPlannedFor] = React.useState(task?.plannedFor || "");
      const [dueDate, setDueDate] = React.useState(task?.dueDate || "");
      const [status, setStatus] = React.useState(task?.status || "backlog");
      const [planToday, setPlanToday] = React.useState(task?.plannedFor === localDateKey());
      return h(
        Modal,
        {
          title: task ? t("modal.editTask") : t("modal.newTask"),
          t,
          onClose,
          onSubmit: (event) => {
            event.preventDefault();
            if (!title.trim()) return;
            onSave({ title, note, tagsText, plannedFor, dueDate, status, planToday });
          },
        },
        h(Field, { label: t("label.taskTitle") }, h("input", { autoFocus: true, value: title, onChange: (event) => setTitle(event.target.value), placeholder: t("label.taskTitle") })),
        h(Field, { label: t("label.taskNote") }, h("textarea", { rows: 4, value: note, onChange: (event) => setNote(event.target.value), placeholder: t("label.taskNote") })),
        h(Field, { label: t("label.tags"), hint: t("label.tagsHint") }, h("input", { value: tagsText, onChange: (event) => setTagsText(event.target.value), placeholder: "Prompt, 产品, 家庭" })),
        h(
          "div",
          { className: "aim-field-grid" },
          h(Field, { label: t("filter.progress") }, h(
            "select",
            { value: status, onChange: (event) => setStatus(event.target.value) },
            h("option", { value: "backlog" }, t("status.backlog")),
            h("option", { value: "in_progress" }, t("status.in_progress")),
            h("option", { value: "completed" }, t("status.completed")),
          )),
          h(Field, { label: t("label.due") }, h("input", { type: "date", value: dueDate, onChange: (event) => setDueDate(event.target.value) })),
        ),
        h(
          "label",
          { className: "aim-toggle-row" },
          h("input", { type: "checkbox", checked: planToday, onChange: (event) => setPlanToday(event.target.checked) }),
          h("span", null, t("label.today")),
        ),
      );
    }
    function IdeaEditor({ idea, t, onClose, onSave }) {
      const [title, setTitle] = React.useState(idea?.title || "");
      const [note, setNote] = React.useState(idea?.note || "");
      const [tagsText, setTagsText] = React.useState((idea?.tags || []).join(", "));
      return h(
        Modal,
        {
          title: idea ? t("modal.editIdea") : t("modal.newIdea"),
          t,
          onClose,
          onSubmit: (event) => {
            event.preventDefault();
            if (!title.trim()) return;
            onSave({ title, note, tagsText });
          },
        },
        h(Field, { label: t("label.ideaTitle") }, h("input", { autoFocus: true, value: title, onChange: (event) => setTitle(event.target.value), placeholder: t("label.ideaTitle") })),
        h(Field, { label: t("label.ideaNote") }, h("textarea", { rows: 5, value: note, onChange: (event) => setNote(event.target.value), placeholder: t("label.ideaNote") })),
        h(Field, { label: t("label.tags"), hint: t("label.tagsHint") }, h("input", { value: tagsText, onChange: (event) => setTagsText(event.target.value), placeholder: "产品, AI 工具" })),
      );
    }
    function LogEditor({ t, onClose, onSave }) {
      const [title, setTitle] = React.useState("");
      const [note, setNote] = React.useState("");
      return h(
        Modal,
        {
          title: t("modal.newLog"),
          t,
          onClose,
          onSubmit: (event) => {
            event.preventDefault();
            if (!title.trim()) return;
            onSave({ title, note });
          },
        },
        h(Field, { label: t("label.logTitle") }, h("input", { autoFocus: true, value: title, onChange: (event) => setTitle(event.target.value), placeholder: t("label.logTitle") })),
        h(Field, { label: t("label.logNote") }, h("textarea", { rows: 5, value: note, onChange: (event) => setNote(event.target.value), placeholder: t("label.logNote") })),
      );
    }
    function Toolbar({ tabs, value, onChange, children }) {
      return h(
        "div",
        { className: "aim-toolbar" },
        h("div", { className: "aim-filter-tabs" }, tabs.map((tab) => h("button", { key: tab.id, type: "button", className: value === tab.id ? "is-active" : "", onClick: () => onChange(tab.id) }, tab.label, tab.count != null ? h("span", null, tab.count) : null))),
        h("div", { className: "aim-toolbar-actions" }, children),
      );
    }
    function TasksPage({ data, t, onToggle, onEdit, onDelete, onCreate }) {
      const [filter, setFilter] = React.useState("all");
      const [sort, setSort] = React.useState("updated");
      const tasks = React.useMemo(() => {
        const filtered = data.tasks.filter((task) => {
          if (filter === "today") return task.plannedFor === localDateKey();
          if (filter === "backlog") return task.status === "backlog";
          if (filter === "progress") return task.status === "in_progress";
          if (filter === "completed") return task.status === "completed";
          return true;
        });
        return [...filtered].sort((a, b) => {
          if (sort === "title") return a.title.localeCompare(b.title, activeLocale());
          if (sort === "created") return new Date(b.createdAt) - new Date(a.createdAt);
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
      }, [data.tasks, filter, sort]);
      const tabs = [
        { id: "all", label: t("filter.all"), count: data.tasks.length },
        { id: "today", label: t("filter.today"), count: data.tasks.filter((task) => task.plannedFor === localDateKey()).length },
        { id: "backlog", label: t("filter.backlog"), count: data.tasks.filter((task) => task.status === "backlog").length },
        { id: "progress", label: t("filter.progress"), count: data.tasks.filter((task) => task.status === "in_progress").length },
        { id: "completed", label: t("filter.completed"), count: data.tasks.filter((task) => task.status === "completed").length },
      ];
      return h(
        "div",
        { className: "aim-page" },
        h(PageHeading, {
          eyebrow: "CREATION TASKS",
          title: t("tasks.title"),
          subtitle: t("tasks.subtitle"),
          actions: h("button", { type: "button", className: "aim-button-primary", onClick: onCreate }, h(Icon, { name: "plus", size: 15 }), t("action.addTask")),
        }),
        h(Toolbar, { tabs, value: filter, onChange: setFilter },
          h("select", { value: sort, onChange: (event) => setSort(event.target.value), "aria-label": t("sort.updated") },
            h("option", { value: "updated" }, t("sort.updated")),
            h("option", { value: "created" }, t("sort.created")),
            h("option", { value: "title" }, t("sort.title")),
          ),
        ),
        h("div", { className: "aim-task-list" },
          tasks.length
            ? tasks.map((task) => h(TaskRow, { key: task.id, task, t, onToggle: () => onToggle(task.id), onEdit, onDelete }))
            : h(EmptyState, { icon: "tasks", title: t("tasks.empty") }),
        ),
      );
    }
    function IdeasPage({ data, t, onToday, onEdit, onDelete, onCreate }) {
      const [filter, setFilter] = React.useState("all");
      const ideas = data.ideas.filter((idea) => (filter === "used" ? idea.convertedTaskId : filter === "recent" ? new Date(idea.createdAt) > new Date(Date.now() - 7 * DAY_MS) : true));
      const tabs = [
        { id: "all", label: t("filter.all"), count: data.ideas.length },
        { id: "recent", label: t("filter.recent"), count: data.ideas.filter((idea) => new Date(idea.createdAt) > new Date(Date.now() - 7 * DAY_MS)).length },
        { id: "used", label: t("filter.used"), count: data.ideas.filter((idea) => idea.convertedTaskId).length },
      ];
      return h(
        "div",
        { className: "aim-page" },
        h(PageHeading, {
          eyebrow: "IDEA INBOX",
          title: t("ideas.title"),
          subtitle: t("ideas.subtitle"),
          actions: h("button", { type: "button", className: "aim-button-primary", onClick: onCreate }, h(Icon, { name: "plus", size: 15 }), t("action.addIdea")),
        }),
        h(Toolbar, { tabs, value: filter, onChange: setFilter }),
        h("div", { className: "aim-idea-grid" },
          ideas.length
            ? ideas.map((idea) => h(IdeaCard, { key: idea.id, idea, t, onToday, onEdit, onDelete }))
            : h(EmptyState, { icon: "inbox", title: filter === "all" ? t("ideas.empty") : t("ideas.emptyFiltered") }),
        ),
      );
    }
    function CompletedPage({ data, t, onToggle, onEdit, onDelete }) {
      const completed = data.tasks.filter((task) => task.status === "completed").sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
      return h(
        "div",
        { className: "aim-page" },
        h(PageHeading, { eyebrow: "MILESTONES", title: t("completed.title"), subtitle: t("completed.subtitle") }),
        h("div", { className: "aim-completed-summary" },
          h("strong", null, completed.length),
          h("span", null, t("week.completed")),
          h("p", null, t("completed.subtitle")),
        ),
        h("div", { className: "aim-task-list" },
          completed.length
            ? completed.map((task) => h(TaskRow, { key: task.id, task, t, onToggle: () => onToggle(task.id), onEdit, onDelete }))
            : h(EmptyState, { icon: "check", title: t("completed.empty") }),
        ),
      );
    }
    function LogsPage({ data, t, onCreate }) {
      return h(
        "div",
        { className: "aim-page" },
        h(PageHeading, {
          eyebrow: "CREATION LOG",
          title: t("logs.title"),
          subtitle: t("logs.subtitle"),
          actions: h("button", { type: "button", className: "aim-button-secondary", onClick: onCreate }, h(Icon, { name: "plus", size: 15 }), t("action.addLog")),
        }),
        h("section", { className: "aim-log-panel" }, h(LogList, { logs: data.logs, t, limit: 100 })),
      );
    }
    function TagsPage({ data, t, onExport }) {
      const counts = new Map();
      [...data.tasks, ...data.ideas].forEach((item) => item.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1)));
      const tags = [...counts.entries()].sort((a, b) => b[1] - a[1]);
      const max = Math.max(1, ...tags.map((tag) => tag[1]));
      return h(
        "div",
        { className: "aim-page" },
        h(PageHeading, {
          eyebrow: "TOPIC MAP",
          title: t("tags.title"),
          subtitle: t("tags.subtitle"),
          actions: h("button", { type: "button", className: "aim-button-secondary", onClick: onExport }, h(Icon, { name: "download", size: 15 }), t("action.export")),
        }),
        tags.length
          ? h("div", { className: "aim-tag-list" }, tags.map(([tag, count]) => h("article", { key: tag, className: "aim-tag-row" }, h("span", null, tag), h("i", null, h("b", { style: { width: `${(count / max) * 100}%` } })), h("strong", null, count), h("small", null, t("tags.usage")))))
          : h(EmptyState, { icon: "tag", title: t("tags.empty") }),
      );
    }
    function SearchResults({ data, query, t, onToggle, onEditTask, onDeleteTask, onEditIdea, onDeleteIdea, onIdeaToday }) {
      const needle = query.trim().toLocaleLowerCase(activeLocale());
      const matches = (item) => [item.title, item.note, ...(item.tags || [])].join(" ").toLocaleLowerCase(activeLocale()).includes(needle);
      const tasks = data.tasks.filter(matches);
      const ideas = data.ideas.filter(matches);
      const logs = data.logs.filter(matches);
      const count = tasks.length + ideas.length + logs.length;
      return h(
        "div",
        { className: "aim-page" },
        h(PageHeading, { eyebrow: "SEARCH", title: t("search.results"), subtitle: t("search.count").replace("{count}", String(count)) }),
        tasks.length ? h("h2", { className: "aim-result-title" }, t("tasks.title"), h("span", null, tasks.length)) : null,
        h("div", { className: "aim-task-list" }, tasks.map((task) => h(TaskRow, { key: task.id, task, t, onToggle: () => onToggle(task.id), onEdit: onEditTask, onDelete: onDeleteTask }))),
        ideas.length ? h("h2", { className: "aim-result-title" }, t("ideas.title"), h("span", null, ideas.length)) : null,
        ideas.length ? h("div", { className: "aim-idea-grid" }, ideas.map((idea) => h(IdeaCard, { key: idea.id, idea, t, onToday: onIdeaToday, onEdit: onEditIdea, onDelete: onDeleteIdea }))) : null,
        logs.length ? h("h2", { className: "aim-result-title" }, t("logs.title"), h("span", null, logs.length)) : null,
        logs.length ? h("section", { className: "aim-log-panel" }, h(LogList, { logs, t, limit: 100 })) : null,
        !count ? h(EmptyState, { icon: "search", title: t("search.empty") }) : null,
      );
    }
    function App({ t, onClose }) {
      const appState = useAppState();
      const [page, setPage] = React.useState("dashboard");
      const [query, setQuery] = React.useState("");
      const [editor, setEditor] = React.useState(null);
      const [toast, setToast] = React.useState("");
      const toastTimer = React.useRef(null);
      const { data } = appState;
      const showToast = (message) => {
        if (toastTimer.current) window.clearTimeout(toastTimer.current);
        setToast(message);
        toastTimer.current = window.setTimeout(() => setToast(""), 2400);
      };
      React.useEffect(() => () => {
        if (toastTimer.current) window.clearTimeout(toastTimer.current);
      }, []);
      const messages = {
        taskCreated: t("toast.taskCreated"),
        taskCompleted: t("toast.taskCompleted"),
        taskReopened: t("toast.taskReopened"),
        taskUpdated: t("toast.taskUpdated"),
        taskDeleted: t("toast.taskDeleted"),
        ideaCreated: t("toast.ideaCreated"),
        ideaUpdated: t("toast.ideaUpdated"),
        ideaDeleted: t("toast.ideaDeleted"),
        ideaMoved: t("toast.ideaMoved"),
        logCreated: t("toast.logCreated"),
      };
      const toggle = (id) => {
        toggleTask(id, messages.taskCompleted, messages.taskReopened);
        const current = data.tasks.find((task) => task.id === id);
        showToast(current?.status === "completed" ? messages.taskReopened : messages.taskCompleted);
      };
      const removeTask = (task) => {
        if (!window.confirm(t("confirm.deleteTask"))) return;
        deleteTask(task.id, messages.taskDeleted);
        showToast(messages.taskDeleted);
      };
      const removeIdea = (idea) => {
        if (!window.confirm(t("confirm.deleteIdea"))) return;
        deleteIdea(idea.id, messages.ideaDeleted);
        showToast(messages.ideaDeleted);
      };
      const createTask = (input) => {
        addTask(input, messages.taskCreated);
        showToast(messages.taskCreated);
      };
      const saveTask = (input) => {
        if (editor?.kind === "task" && editor.item) {
          updateTask(editor.item.id, input, messages.taskUpdated);
          showToast(messages.taskUpdated);
        } else {
          addTask(input, messages.taskCreated);
          showToast(messages.taskCreated);
        }
        setEditor(null);
      };
      const createIdea = (input) => {
        addIdea(input, messages.ideaCreated);
        showToast(messages.ideaCreated);
      };
      const saveIdea = (input) => {
        if (editor?.kind === "idea" && editor.item) {
          updateIdea(editor.item.id, input, messages.ideaUpdated);
          showToast(messages.ideaUpdated);
        } else {
          addIdea(input, messages.ideaCreated);
          showToast(messages.ideaCreated);
        }
        setEditor(null);
      };
      const convertIdea = (id) => {
        const idea = data.ideas.find((item) => item.id === id);
        if (!idea || idea.convertedTaskId) return;
        ideaToTask(id, messages.ideaMoved);
        showToast(messages.ideaMoved);
      };
      const exportData = () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `ai-ideas-manager-${localDateKey()}.json`;
        anchor.click();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        showToast(t("toast.exported"));
      };
      const navigate = (next) => {
        setPage(next);
        setQuery("");
      };
      const counts = {
        tasks: data.tasks.filter((task) => task.status !== "completed").length,
        ideas: data.ideas.filter((idea) => !idea.convertedTaskId).length,
      };
      const nav = [
        { id: "dashboard", icon: "home", label: t("nav.dashboard") },
        { id: "tasks", icon: "tasks", label: t("nav.tasks"), count: counts.tasks },
        { id: "ideas", icon: "inbox", label: t("nav.ideas"), count: counts.ideas },
      ];
      const secondary = [
        { id: "completed", icon: "check", label: t("nav.completed") },
        { id: "logs", icon: "history", label: t("nav.logs") },
        { id: "tags", icon: "tag", label: t("nav.tags") },
      ];
      let content;
      if (query.trim()) {
        content = h(SearchResults, {
          data,
          query,
          t,
          onToggle: toggle,
          onEditTask: (task) => setEditor({ kind: "task", item: task }),
          onDeleteTask: removeTask,
          onEditIdea: (idea) => setEditor({ kind: "idea", item: idea }),
          onDeleteIdea: removeIdea,
          onIdeaToday: convertIdea,
        });
      } else if (page === "tasks") {
        content = h(TasksPage, { data, t, onToggle: toggle, onEdit: (task) => setEditor({ kind: "task", item: task }), onDelete: removeTask, onCreate: () => setEditor({ kind: "task", item: null }) });
      } else if (page === "ideas") {
        content = h(IdeasPage, { data, t, onToday: convertIdea, onEdit: (idea) => setEditor({ kind: "idea", item: idea }), onDelete: removeIdea, onCreate: () => setEditor({ kind: "idea", item: null }) });
      } else if (page === "completed") {
        content = h(CompletedPage, { data, t, onToggle: toggle, onEdit: (task) => setEditor({ kind: "task", item: task }), onDelete: removeTask });
      } else if (page === "logs") {
        content = h(LogsPage, { data, t, onCreate: () => setEditor({ kind: "log", item: null }) });
      } else if (page === "tags") {
        content = h(TagsPage, { data, t, onExport: exportData });
      } else {
        content = h(Dashboard, {
          data,
          t,
          onToggle: toggle,
          onEditTask: (task) => setEditor({ kind: "task", item: task }),
          onDeleteTask: removeTask,
          onIdeaToday: convertIdea,
          onEditIdea: (idea) => setEditor({ kind: "idea", item: idea }),
          onDeleteIdea: removeIdea,
          onCreateTask: createTask,
          onCreateIdea: createIdea,
          onNavigate: navigate,
        });
      }
      const pageLabel = [...nav, ...secondary].find((item) => item.id === page)?.label || t("nav.dashboard");
      return h(
        "div",
        { className: "aim-workspace" },
        h(
          "aside",
          { className: "aim-sidebar" },
          h(
            "div",
            { className: "aim-brand" },
            h("span", { className: "aim-brand-mark" }, h(Icon, { name: "spark", size: 18 })),
            h("div", null, h("strong", null, t("nav.product")), h("small", null, t("nav.tagline"))),
          ),
          h("span", { className: "aim-nav-label" }, "WORKSPACE"),
          h("nav", { className: "aim-nav" }, nav.map((item) => h("button", { key: item.id, type: "button", className: page === item.id && !query ? "is-active" : "", onClick: () => navigate(item.id) }, h(Icon, { name: item.icon, size: 17 }), h("span", null, item.label), item.count != null ? h("b", null, item.count) : null))),
          h("span", { className: "aim-nav-label" }, t("nav.view")),
          h("nav", { className: "aim-nav aim-nav-secondary" }, secondary.map((item) => h("button", { key: item.id, type: "button", className: page === item.id && !query ? "is-active" : "", onClick: () => navigate(item.id) }, h(Icon, { name: item.icon, size: 16 }), h("span", null, item.label)))),
          h("div", { className: "aim-sidebar-bottom" }, h("span", { className: "aim-avatar" }, "AI"), h("div", null, h("strong", null, t("nav.space")), h("small", null, t("nav.local")))),
        ),
        h(
          "main",
          { className: "aim-main" },
          h(
            "header",
            { className: "aim-topbar" },
            h("div", { className: "aim-crumb" }, h("span", null, t("nav.product")), h("i", null, "/"), h("strong", null, query ? t("search.results") : pageLabel)),
            h(
              "div",
              { className: "aim-top-actions" },
              h("label", { className: "aim-search" }, h(Icon, { name: "search", size: 15 }), h("input", { value: query, placeholder: t("search.placeholder"), onChange: (event) => setQuery(event.target.value) }), query ? h("button", { type: "button", "aria-label": t("search.clear"), onClick: () => setQuery("") }, h(Icon, { name: "close", size: 13 })) : h("kbd", null, "Ctrl K")),
              h("button", { type: "button", className: "aim-button-secondary aim-top-add", onClick: () => setEditor({ kind: "idea", item: null }) }, h(Icon, { name: "bulb", size: 15 }), t("action.addIdea")),
              h("button", { type: "button", className: "aim-button-primary", onClick: () => setEditor({ kind: "task", item: null }) }, h(Icon, { name: "plus", size: 15 }), t("action.addTask")),
              h("button", { type: "button", className: "aim-close-button", "aria-label": t("overlay.close"), onClick: onClose }, h(Icon, { name: "close", size: 18 })),
            ),
          ),
          appState.storageError ? h("div", { className: "aim-banner is-error" }, t("storage.error"), h("code", null, appState.storageError)) : null,
          appState.recoveryNotice ? h("div", { className: "aim-banner" }, t("storage.recovered")) : null,
          h("div", { className: "aim-content" }, content),
        ),
        editor?.kind === "task" ? h(TaskEditor, { task: editor.item, t, onClose: () => setEditor(null), onSave: saveTask }) : null,
        editor?.kind === "idea" ? h(IdeaEditor, { idea: editor.item, t, onClose: () => setEditor(null), onSave: saveIdea }) : null,
        editor?.kind === "log" ? h(LogEditor, { t, onClose: () => setEditor(null), onSave: (input) => { addLogEntry(input); showToast(messages.logCreated); setEditor(null); } }) : null,
        toast ? h("div", { className: "aim-toast", role: "status" }, h(Icon, { name: "check", size: 15 }), toast) : null,
      );
    }
    function WorkspaceOverlay({ t }) {
      const state = useAppState();
      const closeRef = React.useRef(null);
      React.useEffect(() => {
        if (!state.open) return undefined;
        const onKeyDown = (event) => {
          if (event.key === "Escape" && !document.querySelector(".aim-modal-backdrop")) setOverlayOpen(false);
          if ((event.ctrlKey || event.metaKey) && String(event.key).toLowerCase() === "k") {
            event.preventDefault();
            document.querySelector(".aim-search input")?.focus();
          }
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        closeRef.current?.focus();
        return () => {
          document.body.style.overflow = previousOverflow;
          window.removeEventListener("keydown", onKeyDown);
        };
      }, [state.open]);
      if (!state.open) return null;
      return h(
        "div",
        { className: "aim-shell", role: "dialog", "aria-modal": "true", "aria-label": t("nav.product") },
        h("button", { ref: closeRef, className: "aim-focus-sentinel", type: "button", onClick: () => setOverlayOpen(false) }, t("overlay.close")),
        h(App, { t, onClose: () => setOverlayOpen(false) }),
      );
    }
    const styles = `
      .aim-launcher{width:100%;height:34px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);display:flex;align-items:center;gap:9px;padding:0 10px;cursor:pointer;font:inherit}
      .aim-launcher:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
      .aim-launcher[data-open=true]{color:var(--dsw-alias-label-primary)}
      .aim-launcher-icon{width:20px;display:grid;place-items:center;color:#a78bfa}
      .aim-launcher-label{font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .aim-launcher-kbd{margin-left:auto;font-size:9px;color:var(--dsw-alias-label-tertiary);border:1px solid var(--dsw-alias-border-l2);border-radius:4px;padding:2px 5px}
      .aim-shell{--aim-bg:#090a0e;--aim-panel:#111319;--aim-panel-2:#161920;--aim-line:rgba(255,255,255,.09);--aim-line-strong:rgba(255,255,255,.14);--aim-text:#f4f4f6;--aim-muted:#9296a2;--aim-dim:#626773;--aim-purple:#a78bfa;--aim-purple-deep:#7557d6;--aim-mint:#69d8b4;--aim-amber:#e9b85b;--aim-coral:#ec7d78;position:fixed!important;inset:0!important;z-index:80!important;pointer-events:auto!important;background:var(--aim-bg);color:var(--aim-text);font-family:Inter,"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;animation:aim-fade .2s ease-out;overflow:hidden}
      .aim-shell *,.aim-shell *::before,.aim-shell *::after{box-sizing:border-box}
      .aim-shell button,.aim-shell input,.aim-shell textarea,.aim-shell select{font:inherit}
      .aim-shell button{color:inherit}
      .aim-shell button:focus-visible,.aim-shell input:focus-visible,.aim-shell textarea:focus-visible,.aim-shell select:focus-visible{outline:2px solid rgba(167,139,250,.8);outline-offset:2px}
      .aim-focus-sentinel{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}
      .aim-workspace{height:100%;display:grid;grid-template-columns:232px minmax(0,1fr);background:radial-gradient(circle at 72% -10%,rgba(126,87,214,.11),transparent 30%),var(--aim-bg)}
      /* DSH publishes --dsh-frame-top-clearance on the root for the macOS window strip (traffic
         lights) and the Windows caption. The overlay is frame-wide, so the sidebar must pad its
         own content by that strip and stay out from under the native window controls. */
      .aim-sidebar{min-height:0;display:flex;flex-direction:column;padding:calc(24px + var(--dsh-frame-top-clearance,0px)) 16px 17px;background:#0d0e13;border-right:1px solid var(--aim-line);position:relative;z-index:2}
      .aim-brand{display:flex;align-items:center;gap:12px;padding:2px 8px 28px}
      .aim-brand-mark{width:34px;height:34px;border:1px solid rgba(167,139,250,.46);border-radius:9px;display:grid;place-items:center;color:#c4b5fd;background:linear-gradient(145deg,rgba(167,139,250,.12),rgba(105,216,180,.04));box-shadow:0 0 24px rgba(167,139,250,.12)}
      .aim-brand strong,.aim-brand small{display:block}
      .aim-brand strong{font-size:15px;letter-spacing:.1px}
      .aim-brand small{font-size:9px;color:var(--aim-dim);margin-top:4px}
      .aim-nav-label{padding:0 11px;margin:4px 0 9px;font-size:8px;letter-spacing:1.6px;color:#545965;text-transform:uppercase}
      .aim-nav{display:grid;gap:4px}
      .aim-nav button{height:41px;width:100%;border:0;border-radius:7px;background:transparent;color:#8c919d;display:flex;align-items:center;gap:11px;padding:0 11px;text-align:left;cursor:pointer;font-size:12px;position:relative}
      .aim-nav button:hover{background:rgba(255,255,255,.035);color:#d7d8dc}
      .aim-nav button.is-active{background:rgba(167,139,250,.12);color:#fff;box-shadow:inset 2px 0 var(--aim-purple)}
      .aim-nav button svg{flex:none;color:#9ba0ab}
      .aim-nav button.is-active svg{color:#bfa9ff}
      .aim-nav button b{margin-left:auto;font-size:9px;line-height:20px;padding:0 7px;border-radius:10px;background:rgba(255,255,255,.08);color:#858a95;font-weight:500}
      .aim-nav-secondary{margin-top:3px}.aim-nav-secondary button{height:36px;font-size:11px}
      .aim-sidebar-bottom{margin-top:auto;border-top:1px solid var(--aim-line);padding:15px 7px 0;display:flex;align-items:center;gap:10px}
      .aim-avatar{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#272231;color:#cbbcf4;border:1px solid #3c334e;font-size:9px;font-weight:700}
      .aim-sidebar-bottom strong,.aim-sidebar-bottom small{display:block}.aim-sidebar-bottom strong{font-size:10px}.aim-sidebar-bottom small{font-size:8px;color:#5f6470;margin-top:3px}
      .aim-main{min-width:0;display:flex;flex-direction:column;overflow:hidden}
      .aim-topbar{height:66px;flex:none;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:0 28px;border-bottom:1px solid var(--aim-line);background:rgba(9,10,14,.89);backdrop-filter:blur(16px)}
      .aim-crumb{display:flex;align-items:center;gap:8px;font-size:10px;color:#636975;white-space:nowrap;overflow:hidden}.aim-crumb strong{color:#b2b5bd;font-weight:500;overflow:hidden;text-overflow:ellipsis}.aim-crumb i{font-style:normal;color:#3e424c}
      .aim-top-actions{display:flex;align-items:center;gap:8px;min-width:0}
      .aim-search{height:34px;width:min(300px,28vw);min-width:130px;border:1px solid var(--aim-line);border-radius:7px;background:#12141a;display:flex;align-items:center;gap:7px;padding:0 9px;color:#666d78}
      .aim-search input{flex:1;min-width:0;border:0;outline:0;background:none;color:#e7e8ec;font-size:11px}.aim-search input::placeholder{color:#626a76}
      .aim-search kbd{font-size:8px;white-space:nowrap;padding:3px 5px;border:1px solid #292d36;background:#1a1d24;border-radius:4px;color:#6d7480}.aim-search button{display:grid;place-items:center;border:0;background:none;color:#777e89;cursor:pointer;padding:2px}
      .aim-button-primary,.aim-button-secondary,.aim-close-button,.aim-icon-button{border-radius:7px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:7px;white-space:nowrap}
      .aim-button-primary{height:34px;padding:0 13px;border:0;background:var(--aim-purple);color:#100e17!important;font-size:10px;font-weight:700}.aim-button-primary:hover{background:#b7a1ff}
      .aim-button-secondary{height:34px;padding:0 12px;border:1px solid var(--aim-line-strong);background:#14161c;color:#aaaeb7!important;font-size:10px}.aim-button-secondary:hover{background:#1c1f27;color:#fff!important}
      .aim-close-button{width:34px;height:34px;border:1px solid var(--aim-line);background:#12141a;color:#9da2ab!important}.aim-close-button:hover{color:#fff!important;background:#1b1e25}
      .aim-banner{padding:10px 28px;background:rgba(233,184,91,.1);border-bottom:1px solid rgba(233,184,91,.18);color:#dcc284;font-size:10px;display:flex;justify-content:space-between;gap:15px}.aim-banner.is-error{background:rgba(236,125,120,.1);border-color:rgba(236,125,120,.2);color:#f2a29e}.aim-banner code{max-width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:.7}
      .aim-content{min-height:0;flex:1;overflow:auto;scrollbar-color:#3b3447 transparent}.aim-page{max-width:1440px;margin:0 auto;padding:31px 34px 42px;animation:aim-page-in .25s ease-out}
      .aim-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:8px;letter-spacing:1.7px;color:#747985;text-transform:uppercase}.aim-eyebrow i{display:block;width:16px;height:1px;background:var(--aim-purple);box-shadow:0 0 8px var(--aim-purple)}
      .aim-welcome{min-height:185px;position:relative;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--aim-line);overflow:hidden}.aim-welcome::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.15) .6px,transparent .7px),radial-gradient(rgba(167,139,250,.18) .8px,transparent .8px);background-size:31px 31px,71px 71px;mask-image:linear-gradient(to right,transparent 15%,#000 55%,#000);opacity:.32;pointer-events:none}
      .aim-welcome h1{position:relative;font-size:36px;line-height:1.18;letter-spacing:-.8px;margin:14px 0 10px;font-weight:600;max-width:720px}.aim-welcome p{position:relative;margin:0;color:#888d99;font-size:12px;line-height:1.7}
      .aim-progress-card{position:relative;display:flex;align-items:center;gap:14px;margin-right:20px;padding:13px 18px 13px 13px;border:1px solid var(--aim-line);background:rgba(17,19,25,.72);border-radius:12px;backdrop-filter:blur(10px)}
      .aim-progress-ring{width:84px;height:84px;position:relative;display:grid;place-items:center}.aim-progress-ring svg{position:absolute;inset:0;transform:rotate(-90deg)}.aim-progress-ring circle{fill:none;stroke-width:5}.aim-ring-track{stroke:#252933}.aim-ring-value{stroke:var(--aim-mint);stroke-linecap:round;filter:drop-shadow(0 0 6px rgba(105,216,180,.22));transition:stroke-dasharray .35s ease}.aim-progress-ring span{font-size:17px;font-weight:600}
      .aim-progress-card>div:last-child span,.aim-progress-card>div:last-child strong,.aim-progress-card>div:last-child small{display:block}.aim-progress-card>div:last-child span{font-size:9px;color:#707682}.aim-progress-card>div:last-child strong{font-size:20px;margin:5px 0}.aim-progress-card>div:last-child small{font-size:8px;color:#5d626d}
      .aim-welcome-star{position:absolute;color:#c8b8f1;opacity:.7}.star-a{right:7%;top:18%;font-size:12px}.star-b{right:3%;bottom:12%;font-size:26px}
      .aim-quick-capture{margin:23px 0;height:52px;display:flex;align-items:center;border:1px solid #3b3450;border-radius:9px;background:linear-gradient(90deg,rgba(116,86,190,.09),rgba(17,19,25,.9));box-shadow:inset 0 0 0 1px rgba(167,139,250,.03)}
      .aim-quick-icon{width:46px;display:grid;place-items:center;color:#bda8fa}.aim-quick-capture input{flex:1;min-width:0;border:0;outline:0;background:none;color:#ebebef;font-size:11px}.aim-quick-capture input::placeholder{color:#6f7480}
      .aim-quick-secondary,.aim-quick-primary{height:31px;border-radius:6px;cursor:pointer;font-size:9px;padding:0 11px;margin-right:8px}.aim-quick-secondary{border:1px solid #3c344d;background:#211c2a;color:#b6a5dd}.aim-quick-primary{border:0;background:#f0edf8;color:#17131f!important;font-weight:600;display:flex;align-items:center;gap:5px}
      .aim-dashboard-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(300px,.65fr);gap:22px}.aim-side-stack{min-width:0;display:grid;gap:18px}
      .aim-section-head,.aim-panel-title{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:12px}.aim-section-head>div>span,.aim-panel-title>span{font-size:8px;letter-spacing:1.5px;color:#5f6470}.aim-section-head h2,.aim-panel-title h2{margin:4px 0 0;font-size:16px;font-weight:500}.aim-section-head>button{border:0;background:none;color:#9c91c3;font-size:9px;display:flex;align-items:center;gap:5px;cursor:pointer;padding:3px 0}.aim-section-head-spaced{margin-top:24px}
      .aim-focus-panel,.aim-ideas-panel,.aim-week-panel,.aim-log-panel,.aim-completed-summary{border:1px solid var(--aim-line);background:rgba(17,19,25,.78);border-radius:10px}.aim-focus-panel{padding:18px}.aim-ideas-panel{padding:17px}.aim-week-panel{padding:16px}
      .aim-focus-list{display:grid;gap:7px}.aim-task-list{display:grid;gap:8px}
      .aim-task-row{display:grid;grid-template-columns:19px minmax(0,1fr) auto auto;align-items:start;gap:11px;padding:13px 12px;border:1px solid #292d36;border-radius:7px;background:#15181e;transition:border-color .15s,transform .15s}.aim-task-row:hover{border-color:#3d3a4d;transform:translateY(-1px)}.aim-task-row.is-complete{opacity:.68}.aim-task-row.is-complete h3{text-decoration:line-through;color:#8b8f98}
      .aim-check{width:17px;height:17px;margin-top:2px;border-radius:50%;border:1px solid #5b6270;background:none;display:grid;place-items:center;cursor:pointer;color:#0d1714;padding:0}.aim-task-row.is-complete .aim-check{background:var(--aim-mint);border-color:var(--aim-mint)}
      .aim-task-main{min-width:0}.aim-task-main h3{font-size:11px;line-height:1.45;margin:0 0 5px;font-weight:500;color:#e7e7ea}.aim-task-main p{font-size:9px;line-height:1.5;color:#747a85;margin:0;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
      .aim-row-meta{display:flex;align-items:center;gap:5px;flex-wrap:wrap;margin-top:8px;color:#656b76;font-size:8px}.aim-meta-chip{display:inline-flex;align-items:center;gap:4px}.aim-meta-chip.is-today{color:#c0b1e9}.aim-tag{display:inline-flex;padding:3px 6px;border:1px solid #323741;border-radius:4px;background:rgba(255,255,255,.02);font-size:8px;color:#8e949f}
      .aim-status{display:flex;align-items:center;gap:5px;font-size:8px;white-space:nowrap;color:#858b96;margin-top:3px}.aim-status i{width:6px;height:6px;border-radius:50%;background:#727986}.aim-status-backlog i{background:#737b87}.aim-status-in_progress i{background:var(--aim-amber);box-shadow:0 0 7px rgba(233,184,91,.32)}.aim-status-completed{color:var(--aim-mint)}.aim-status-completed i{background:var(--aim-mint)}
      .aim-row-actions{display:flex;gap:1px;opacity:0;transition:opacity .15s}.aim-task-row:hover .aim-row-actions,.aim-task-row:focus-within .aim-row-actions{opacity:1}.aim-row-actions button{width:27px;height:27px;border:0;background:transparent;border-radius:5px;color:#707681;display:grid;place-items:center;cursor:pointer}.aim-row-actions button:hover{background:#242730;color:#d6d7dd}
      .aim-empty{min-height:120px;display:grid;place-items:center;align-content:center;gap:10px;border:1px dashed #2d313a;border-radius:8px;padding:20px;color:#686e78;text-align:center}.aim-empty-icon{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#191b22;color:#82739f}.aim-empty p{font-size:9px;line-height:1.6;margin:0;max-width:330px}
      .aim-compact-idea{padding:12px 0;border-bottom:1px solid var(--aim-line)}.aim-compact-idea:last-child{border-bottom:0}.aim-compact-title{border:0;background:none;color:#dadbdf;font-size:11px;font-weight:500;text-align:left;padding:0;cursor:pointer}.aim-compact-idea p{font-size:8px;line-height:1.55;color:#737984;margin:6px 0}.aim-compact-idea>div{display:flex;justify-content:space-between;align-items:center}.aim-compact-idea>div button{border:0;background:none;color:#aa92ed;font-size:8px;padding:0;cursor:pointer}.aim-compact-idea>div span{font-size:7px;color:#585e69}
      .aim-week-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.aim-week-stats div{padding:10px;background:#171a21;border-radius:6px}.aim-week-stats strong{display:block;font-size:20px;font-weight:500}.aim-week-stats small{display:block;font-size:7px;color:#666d78;margin-top:4px}
      .aim-week-chart{height:66px;display:flex;align-items:flex-end;gap:7px;padding-top:12px}.aim-week-day{height:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:5px}.aim-week-day i{width:100%;min-height:4px;border-radius:3px 3px 1px 1px;background:linear-gradient(180deg,#8f72df,#4c3a76);box-shadow:inset 0 1px rgba(255,255,255,.12)}.aim-week-day span{font-size:7px;color:#636975}
      .aim-next-step{margin-top:14px;padding:11px 12px;border-left:2px solid var(--aim-amber);background:rgba(233,184,91,.055)}.aim-next-step span{display:block;font-size:7px;color:#8f8267;letter-spacing:.5px}.aim-next-step p{font-size:8px;line-height:1.55;color:#8f8b80;margin:5px 0 0}
      .aim-log-list{display:grid}.aim-log-item{display:grid;grid-template-columns:9px minmax(0,1fr) auto;gap:10px;align-items:start;padding:11px 0;border-bottom:1px solid var(--aim-line)}.aim-log-item:last-child{border-bottom:0}.aim-log-dot{width:7px;height:7px;margin-top:4px;border-radius:50%;background:var(--aim-purple);box-shadow:0 0 0 3px rgba(167,139,250,.09)}.aim-log-task{background:var(--aim-mint);box-shadow:0 0 0 3px rgba(105,216,180,.08)}.aim-log-idea{background:var(--aim-amber);box-shadow:0 0 0 3px rgba(233,184,91,.08)}.aim-log-manual{background:var(--aim-coral);box-shadow:0 0 0 3px rgba(236,125,120,.08)}.aim-log-item strong{display:block;font-size:10px;font-weight:500;color:#dddde1}.aim-log-item p{font-size:8px;line-height:1.5;color:#6e747f;margin:4px 0 0}.aim-log-item time{font-size:7px;color:#585e68;white-space:nowrap;padding-top:2px}
      .aim-page-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;padding:8px 0 24px;border-bottom:1px solid var(--aim-line)}.aim-page-heading h1{font-size:30px;letter-spacing:-.5px;margin:10px 0 7px;font-weight:600}.aim-page-heading p{font-size:10px;color:#777d88;margin:0;line-height:1.65}.aim-heading-actions{display:flex;gap:8px}
      .aim-toolbar{height:61px;display:flex;align-items:center;justify-content:space-between;gap:20px}.aim-filter-tabs{display:flex;align-items:stretch;height:100%;gap:20px}.aim-filter-tabs button{height:100%;border:0;border-bottom:2px solid transparent;background:none;color:#737985;font-size:9px;display:flex;align-items:center;gap:5px;cursor:pointer;padding:0}.aim-filter-tabs button.is-active{color:#fff;border-color:var(--aim-purple)}.aim-filter-tabs button span{font-size:8px;color:#555b66}.aim-toolbar-actions{display:flex;gap:7px}.aim-toolbar-actions select,.aim-toolbar-actions button{height:31px;border:1px solid var(--aim-line-strong);border-radius:6px;background:#14161c;color:#8e949f;font-size:9px;padding:0 9px;outline:none}
      .aim-idea-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px}.aim-idea-card{border:1px solid var(--aim-line);border-radius:10px;background:linear-gradient(145deg,#16181f,#111319);padding:17px;display:flex;flex-direction:column;min-height:220px;transition:transform .18s,border-color .18s}.aim-idea-card:hover{transform:translateY(-2px);border-color:rgba(167,139,250,.32)}.aim-idea-top{display:flex;align-items:center;justify-content:space-between}.aim-idea-symbol{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:rgba(167,139,250,.1);color:#b8a2f6}.aim-idea-top small{font-size:8px;color:#606772}.aim-idea-card h3{font-size:14px;line-height:1.45;margin:15px 0 7px;font-weight:500}.aim-idea-card>p{font-size:9px;line-height:1.65;color:#747a85;margin:0 0 12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.aim-tags{display:flex;gap:5px;flex-wrap:wrap}.aim-idea-actions{margin-top:auto;padding-top:15px;display:flex;gap:10px;align-items:center}.aim-idea-actions button{border:0;background:none;color:#737a85;font-size:8px;padding:0;cursor:pointer;display:flex;align-items:center;gap:4px}.aim-idea-actions button.is-primary-text{color:#bba8ee}.aim-idea-actions button:disabled{color:#5b6069;cursor:default}.aim-idea-actions button:last-child{margin-left:auto}
      .aim-completed-summary{margin:20px 0;padding:18px;display:grid;grid-template-columns:auto auto 1fr;align-items:center;gap:10px}.aim-completed-summary strong{font-size:28px;color:var(--aim-mint);font-weight:500}.aim-completed-summary span{font-size:10px;color:#89908f}.aim-completed-summary p{font-size:9px;color:#727984;margin:0;text-align:right}
      .aim-log-panel{padding:18px;margin-top:20px}.aim-panel-title{margin-bottom:0}.aim-tag-list{display:grid;gap:8px;margin-top:20px}.aim-tag-row{display:grid;grid-template-columns:130px minmax(0,1fr) 30px 50px;align-items:center;gap:12px;padding:13px 15px;border:1px solid var(--aim-line);border-radius:7px;background:#13161c}.aim-tag-row>span{font-size:10px}.aim-tag-row>i{height:4px;background:#242731;border-radius:3px;overflow:hidden}.aim-tag-row>i b{display:block;height:100%;background:linear-gradient(90deg,var(--aim-purple-deep),var(--aim-mint));border-radius:3px}.aim-tag-row strong{font-size:11px;text-align:right}.aim-tag-row small{font-size:7px;color:#646a75}
      .aim-result-title{font-size:12px;font-weight:500;color:#c7c8ce;margin:24px 0 10px;display:flex;align-items:center;gap:7px}.aim-result-title span{font-size:8px;color:#6b717c;border:1px solid var(--aim-line);border-radius:9px;padding:2px 6px}
      .aim-modal-backdrop{position:fixed;inset:0;z-index:4;background:rgba(4,5,8,.74);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;animation:aim-fade .15s ease-out}.aim-modal{width:min(560px,94vw);max-height:90vh;overflow:auto;border:1px solid rgba(255,255,255,.13);border-radius:12px;background:#12141a;box-shadow:0 30px 90px rgba(0,0,0,.5);display:flex;flex-direction:column}.aim-modal-head{display:flex;align-items:center;justify-content:space-between;padding:19px 21px;border-bottom:1px solid var(--aim-line)}.aim-modal-head span{font-size:7px;letter-spacing:1.6px;color:#756b8d}.aim-modal-head h2{font-size:17px;margin:4px 0 0;font-weight:500}.aim-icon-button{width:30px;height:30px;border:1px solid var(--aim-line);background:#181b22;color:#858b96!important}.aim-modal-body{padding:20px 21px;display:grid;gap:15px}.aim-field{display:grid;gap:7px}.aim-field>span{font-size:9px;color:#a5a9b2}.aim-field small{font-size:7px;color:#5c626d;margin-left:6px}.aim-field input,.aim-field textarea,.aim-field select{width:100%;border:1px solid #303540;border-radius:7px;background:#171a21;color:#e3e4e8;padding:10px 11px;font-size:10px;outline:none;resize:vertical}.aim-field input:focus,.aim-field textarea:focus,.aim-field select:focus{border-color:#66558e}.aim-field-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.aim-toggle-row{height:38px;display:flex;align-items:center;gap:9px;border:1px solid var(--aim-line);border-radius:7px;padding:0 11px;color:#a2a7b0;font-size:9px;cursor:pointer}.aim-toggle-row input{accent-color:var(--aim-purple)}.aim-modal-actions{display:flex;justify-content:flex-end;gap:8px;padding:15px 21px 19px;border-top:1px solid var(--aim-line)}
      .aim-toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:5;display:flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid rgba(105,216,180,.24);border-radius:8px;background:rgba(17,24,22,.95);color:#bde8da;box-shadow:0 14px 45px rgba(0,0,0,.35);font-size:9px;animation:aim-toast-in .2s ease-out}
      @keyframes aim-fade{from{opacity:0}to{opacity:1}}@keyframes aim-page-in{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}@keyframes aim-toast-in{from{opacity:0;transform:translate(-50%,6px)}to{opacity:1;transform:translate(-50%,0)}}
      @media(max-width:1120px){.aim-dashboard-grid{grid-template-columns:minmax(0,1fr) 300px}.aim-idea-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.aim-search{width:210px}.aim-top-add{display:none}.aim-page{padding-left:26px;padding-right:26px}}
      @media(max-width:860px){.aim-workspace{grid-template-columns:68px minmax(0,1fr)}.aim-sidebar{padding:calc(20px + var(--dsh-frame-top-clearance,0px)) 10px 14px}.aim-brand{padding:2px 7px 24px}.aim-brand>div,.aim-nav-label,.aim-nav button>span,.aim-nav button>b,.aim-sidebar-bottom>div{display:none}.aim-nav button{justify-content:center;padding:0}.aim-nav button svg{width:18px;height:18px}.aim-sidebar-bottom{justify-content:center;padding-left:0;padding-right:0}.aim-welcome{align-items:flex-start;flex-direction:column;gap:20px;padding:25px 0}.aim-progress-card{align-self:flex-end;margin:-15px 0 0}.aim-dashboard-grid{grid-template-columns:1fr}.aim-idea-grid{grid-template-columns:1fr}.aim-topbar{padding:0 18px}.aim-crumb span,.aim-crumb i,.aim-search kbd{display:none}.aim-search{width:180px}.aim-page{padding:24px 18px 36px}.aim-welcome h1{font-size:31px}.aim-task-row{grid-template-columns:19px minmax(0,1fr) auto}.aim-task-row>.aim-status{display:none}.aim-row-actions{opacity:1}.aim-toolbar{height:auto;min-height:61px;align-items:flex-start;gap:10px;padding:12px 0;flex-wrap:wrap}.aim-filter-tabs{height:35px;overflow:auto;max-width:100%}.aim-heading-actions .aim-button-primary,.aim-heading-actions .aim-button-secondary{font-size:0;width:34px;padding:0}.aim-heading-actions svg{width:16px;height:16px}.aim-completed-summary{grid-template-columns:auto auto}.aim-completed-summary p{grid-column:1/-1;text-align:left}}
      @media(max-width:640px){.aim-workspace{grid-template-columns:56px minmax(0,1fr)}.aim-top-actions .aim-button-secondary,.aim-crumb{display:none}.aim-topbar{justify-content:flex-end;padding:0 12px}.aim-search{width:min(230px,52vw)}.aim-page{padding:20px 13px 30px}.aim-welcome h1{font-size:27px}.aim-progress-card{display:none}.aim-quick-capture{height:auto;min-height:48px;flex-wrap:wrap;padding:8px 0}.aim-quick-capture input{min-width:calc(100% - 60px)}.aim-quick-secondary{display:none}.aim-quick-primary{margin:4px 8px 4px auto}.aim-filter-tabs{gap:14px}.aim-task-row{grid-template-columns:17px minmax(0,1fr)}.aim-row-actions{grid-column:2}.aim-field-grid{grid-template-columns:1fr}.aim-modal-body{padding:16px}.aim-tag-row{grid-template-columns:90px minmax(0,1fr) 25px}.aim-tag-row small{display:none}}
      @media(prefers-reduced-motion:reduce){.aim-shell,.aim-page,.aim-toast{animation:none}.aim-task-row,.aim-idea-card,.aim-ring-value{transition:none}}
    `;
    return {
      inject: ["slots", "locale"],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, { zh, en }), "ai-ideas-manager: locale");
        ctx.effect(() => {
          const tag = document.createElement("style");
          tag.dataset.plugin = "@local/ai-ideas-manager";
          tag.textContent = styles;
          document.head.appendChild(tag);
          return () => tag.remove();
        }, "ai-ideas-manager: styles");
        ctx.effect(() => {
          const onKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && String(event.key).toLowerCase() === "j") {
              event.preventDefault();
              setOverlayOpen(!snapshot.open);
            }
          };
          window.addEventListener("keydown", onKeyDown);
          return () => window.removeEventListener("keydown", onKeyDown);
        }, "ai-ideas-manager: shortcut");
        ctx.slots.inject("sidebar.footer.action", () =>
          ctx.slots.register({
            name: "sidebar.footer.action",
            id: "ai-ideas-launcher",
            order: 10,
            label: "AI Ideas Manager",
            locale: NS,
          }, Launcher),
        );
        ctx.slots.inject("shell.overlay", () =>
          ctx.slots.register({
            name: "shell.overlay",
            id: "ai-ideas-overlay",
            order: 10,
            locale: NS,
          }, WorkspaceOverlay),
        );
      },
    };
  },
});
