#!/usr/bin/env python3
"""Build the Chinese AI Ideas Manager installation demo with local Windows tools."""

from __future__ import annotations

import base64
import math
import random
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "docs" / "install-demo.mp4"
SRT = ROOT / "docs" / "install-demo.srt"
FFMPEG = Path(r"D:\FFmpeg\ffmpeg-9.0-full_build\bin\ffmpeg.exe")
FFPROBE = Path(r"D:\FFmpeg\ffmpeg-9.0-full_build\bin\ffprobe.exe")
WIDTH, HEIGHT = 1280, 720

if not FFMPEG.exists():
    FFMPEG = Path(shutil.which("ffmpeg") or "")
if not FFPROBE.exists():
    FFPROBE = Path(shutil.which("ffprobe") or "")
if not FFMPEG.exists() or not FFPROBE.exists():
    raise SystemExit("ffmpeg and ffprobe are required")

FONT_REGULAR = Path(r"C:\Windows\Fonts\msyh.ttc")
FONT_BOLD = Path(r"C:\Windows\Fonts\msyhbd.ttc")
FONT_MONO = Path(r"C:\Windows\Fonts\consola.ttf")

if not FONT_REGULAR.exists():
    raise SystemExit("Microsoft YaHei is required for Chinese text rendering")


def font(size: int, bold: bool = False, mono: bool = False) -> ImageFont.FreeTypeFont:
    path = FONT_MONO if mono else FONT_BOLD if bold else FONT_REGULAR
    return ImageFont.truetype(str(path), size)


def size_of(draw: ImageDraw.ImageDraw, value: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), value, font=fnt)
    return box[2] - box[0], box[3] - box[1]


def wrap(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    lines: list[str] = []
    current = ""
    for char in text:
        candidate = current + char
        if size_of(draw, candidate, fnt)[0] <= max_width or not current:
            current = candidate
        else:
            lines.append(current)
            current = char
    if current:
        lines.append(current)
    return lines


def panel(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str, radius: int = 18) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=1)


def base_canvas(seed: int, glow: tuple[int, int] = (880, 110)) -> Image.Image:
    image = Image.new("RGB", (WIDTH, HEIGHT), "#08090d")
    draw = ImageDraw.Draw(image)
    for y in range(HEIGHT):
        t = y / HEIGHT
        color = (
            int(8 + 6 * t),
            int(9 + 5 * t),
            int(14 + 13 * t),
        )
        draw.line((0, y, WIDTH, y), fill=color)
    for radius, alpha in [(280, 13), (210, 20), (140, 28)]:
        overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
        od = ImageDraw.Draw(overlay)
        od.ellipse(
            (glow[0] - radius, glow[1] - radius, glow[0] + radius, glow[1] + radius),
            fill=(122, 88, 210, alpha),
        )
        image = Image.alpha_composite(image.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(image)
    rng = random.Random(seed)
    for _ in range(100):
        x = rng.randrange(0, WIDTH)
        y = rng.randrange(0, HEIGHT)
        tone = rng.choice([(70, 72, 84), (98, 93, 118), (54, 86, 80)])
        draw.ellipse((x, y, x + 1, y + 1), fill=tone)
    return image


def chrome(image: Image.Image, index: int, total: int, label: str) -> None:
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((48, 34, 84, 70), radius=10, outline="#6f58ad", fill="#181522")
    draw.text((57, 41), "✦", font=font(20, True), fill="#d6c8ff")
    draw.text((97, 40), "AI IDEAS MANAGER", font=font(15, True), fill="#e8e4f2")
    draw.text((97, 59), "DeepSeek Harness · Install Guide", font=font(10), fill="#777d89")
    draw.text((1090, 43), f"{index:02d} / {total:02d}", font=font(11, mono=True), fill="#7b7890")
    draw.line((48, 92, 1232, 92), fill="#252833", width=1)


def caption_bar(image: Image.Image, text: str) -> None:
    draw = ImageDraw.Draw(image)
    fnt = font(19)
    lines = wrap(draw, text, fnt, 1100)
    height = 28 + len(lines) * 28
    panel(draw, (56, HEIGHT - height - 40, WIDTH - 56, HEIGHT - 38), "#0e1015", "#30323b", 12)
    y = HEIGHT - height - 24
    for line in lines:
        draw.text((78, y), line, font=fnt, fill="#c6c4cc")
        y += 28


def progress(image: Image.Image, index: int, total: int) -> None:
    draw = ImageDraw.Draw(image)
    width = 1232
    draw.rectangle((24, HEIGHT - 8, 24 + width * index / total, HEIGHT - 4), fill="#a78bfa")


def title_scene() -> Image.Image:
    image = base_canvas(1, (1010, 185))
    draw = ImageDraw.Draw(image)
    chrome(image, 1, 7, "Intro")
    draw.text((78, 168), "让每一个想法，", font=font(55, True), fill="#f4f2f8")
    draw.text((78, 238), "都有一个下一步。", font=font(55, True), fill="#b89ff6")
    draw.text((82, 325), "AI IDEAS MANAGER", font=font(14, True), fill="#8d94a0")
    draw.text((82, 350), "AI 创作事项与灵感管理 DSH 插件", font=font(19), fill="#a1a5ae")
    for offset, color in [(0, "#a78bfa"), (96, "#69d8b4"), (192, "#e9b85b")]:
        x = 820 + offset
        draw.ellipse((x - 52, 234, x + 52, 338), fill="#11131a", outline="#3c344f", width=1)
        draw.arc((x - 112, 238, x + 112, 334), 20, 160, fill=color, width=2)
        draw.ellipse((x - 13, 273, x + 13, 299), fill=color)
    draw.text((813, 374), "CAPTURE  ·  CHOOSE  ·  CREATE", font=font(11, mono=True), fill="#777b87")
    caption_bar(image, "AI Ideas Manager 是运行在 DeepSeek Harness Web 客户端里的个人 AI 创作工作台。")
    progress(image, 1, 7)
    return image


def value_scene() -> Image.Image:
    image = base_canvas(2, (1030, 120))
    draw = ImageDraw.Draw(image)
    chrome(image, 2, 7, "Why")
    draw.text((72, 130), "把零散灵感，变成可持续的创造记录", font=font(34, True), fill="#f1eff6")
    cards = [
        ("✦", "今日推进", "选一个最小的下一步，\n不再被庞大的计划卡住。", "#a78bfa"),
        ("◇", "灵感收件箱", "先无压力地保存，\n再决定什么值得行动。", "#e9b85b"),
        ("⌁", "创作轨迹", "完成和转化自动留痕，\n随时回看自己的积累。", "#69d8b4"),
    ]
    for i, (icon, title, body, color) in enumerate(cards):
        x = 72 + i * 380
        panel(draw, (x, 230, x + 340, 500), "#12151b", "#2e323c", 16)
        draw.ellipse((x + 24, 254, x + 70, 300), fill="#1b1923", outline=color)
        draw.text((x + 40, 266), icon, font=font(17, True), fill=color)
        draw.text((x + 24, 328), title, font=font(21, True), fill="#e9e7ee")
        draw.multiline_text((x + 24, 374), body, font=font(15), fill="#858b96", spacing=9)
        draw.line((x + 24, 466, x + 118, 466), fill=color, width=2)
    caption_bar(image, "它把灵感、今日事项、完成记录和创作日志放在同一张安静的工作桌面里。")
    progress(image, 2, 7)
    return image


def mock_ui(x: int, y: int, w: int, h: int) -> None:
    draw = ImageDraw.Draw(CURRENT_IMAGE)
    panel(draw, (x, y, x + w, y + h), "#0d0f14", "#393443", 14)
    draw.rectangle((x + 1, y + 1, x + 126, y + h - 1), fill="#111319")
    draw.text((x + 18, y + 18), "✦  AI Ideas", font=font(13, True), fill="#ddd7ea")
    for row, label in enumerate(["今日面板", "创作事项", "灵感收件箱", "已完成", "创作日志"]):
        yy = y + 62 + row * 30
        if row == 0:
            draw.rounded_rectangle((x + 9, yy - 5, x + 117, yy + 20), radius=5, fill="#25212e")
        draw.text((x + 22, yy), label, font=font(9), fill="#b6b3bd" if row == 0 else "#737985")
    draw.text((x + 151, y + 25), "今天，想用 AI 做点什么？", font=font(18, True), fill="#f0eef4")
    panel(draw, (x + 151, y + 64, x + w - 20, y + 124), "#16181f", "#2c3039", 8)
    draw.text((x + 171, y + 82), "＋  记录一个想法、事项，或准备开始的东西…", font=font(10), fill="#848995")
    draw.rounded_rectangle((x + w - 122, y + 78, x + w - 34, y + 109), radius=5, fill="#b09aee")
    draw.text((x + w - 109, y + 87), "加入今天", font=font(8, True), fill="#17131f")
    panel(draw, (x + 151, y + 143, x + w * 64 // 100, y + h - 26), "#12151b", "#2b2f38", 8)
    draw.text((x + 170, y + 159), "今天要推进", font=font(12, True), fill="#e8e6ec")
    for row, color in enumerate(["#69d8b4", "#e9b85b", "#7d8692"]):
        yy = y + 193 + row * 54
        draw.ellipse((x + 169, yy, x + 184, yy + 15), outline=color)
        draw.text((x + 198, yy - 2), ["整理可复用 Prompt", "家庭支出小工具", "研究 DSH 权限边界"][row], font=font(9), fill="#d3d1d8")
        draw.text((x + 198, yy + 16), ["已完成", "进行中 · 下一步：搭界面", "待开始"][row], font=font(7), fill="#747a85")
    panel(draw, (x + w * 66 // 100, y + 143, x + w - 20, y + h - 26), "#12151b", "#2b2f38", 8)
    draw.text((x + w * 66 // 100 + 16, y + 159), "灵感收件箱", font=font(12, True), fill="#e8e6ec")
    draw.text((x + w * 66 // 100 + 16, y + 192), "把每天的练习\n变成一张周报", font=font(10), fill="#bdbac5")
    draw.text((x + w * 66 // 100 + 16, y + 248), "给旧平板做\n一个专注模式", font=font(10), fill="#777d88")


def features_scene() -> Image.Image:
    image = base_canvas(3, (1050, 210))
    global CURRENT_IMAGE
    CURRENT_IMAGE = image
    draw = ImageDraw.Draw(image)
    chrome(image, 3, 7, "Features")
    draw.text((70, 126), "一个工作台，管理完整创作循环", font=font(32, True), fill="#f2eff7")
    mock_ui(70, 178, 1140, 340)
    labels = ["一句话快速收集", "状态筛选", "灵感转事项", "周统计", "标签聚合", "JSON 导出"]
    for i, label in enumerate(labels):
        x = 84 + (i % 3) * 200
        y = 540 + (i // 3) * 30
        draw.rounded_rectangle((x, y, x + 172, y + 22), radius=11, fill="#151820", outline="#2a2e37")
        draw.text((x + 11, y + 5), label, font=font(9), fill="#a8acb5")
    caption_bar(image, "收集、推进、完成、回顾都在同一处，重要变化会自动写入创作日志。")
    progress(image, 3, 7)
    return image


def terminal_scene(index: int, heading: str, commands: list[tuple[str, str]], note: str) -> Image.Image:
    image = base_canvas(3 + index, (1030, 120))
    draw = ImageDraw.Draw(image)
    chrome(image, 3 + index, 7, "Install")
    draw.text((72, 130), heading, font=font(33, True), fill="#f1eff6")
    draw.text((74, 181), note, font=font(14), fill="#888e99")
    panel(draw, (72, 226, 1208, 548), "#101217", "#333640", 15)
    draw.rounded_rectangle((72, 226, 1208, 268), radius=15, fill="#171a20")
    draw.rectangle((72, 250, 1208, 268), fill="#171a20")
    for i, color in enumerate(["#ec7d78", "#e9b85b", "#69d8b4"]):
        draw.ellipse((94 + i * 22, 240, 104 + i * 22, 250), fill=color)
    draw.text((169, 239), "PowerShell", font=font(10, mono=True), fill="#858a95")
    y = 298
    for command, outcome in commands:
        draw.text((100, y), "PS>", font=font(17, True, True), fill="#a78bfa")
        draw.text((145, y), command, font=font(16, mono=True), fill="#e5e2eb")
        y += 36
        if outcome:
            draw.text((100, y), outcome, font=font(13), fill="#69d8b4")
            y += 38
    caption_bar(image, "命令会把本地插件目录加入 DSH Web profile；安装完成后重启客户端。")
    progress(image, 3 + index, 7)
    return image


def launch_scene() -> Image.Image:
    image = base_canvas(6, (1000, 220))
    global CURRENT_IMAGE
    CURRENT_IMAGE = image
    draw = ImageDraw.Draw(image)
    chrome(image, 6, 7, "Launch")
    draw.text((72, 127), "打开你的创造工作台", font=font(34, True), fill="#f1eff6")
    panel(draw, (72, 183, 1208, 530), "#0d0f14", "#353540", 16)
    draw.rectangle((72, 183, 281, 530), fill="#111319")
    draw.text((99, 211), "✦  创作空间", font=font(15, True), fill="#e7e2f0")
    for row, label in enumerate(["今日面板", "创作事项", "灵感收件箱", "已完成记录"]):
        y = 271 + row * 40
        if row == 0:
            draw.rounded_rectangle((82, y - 8, 270, y + 24), radius=7, fill="#282231")
        draw.text((104, y), label, font=font(12), fill="#c3becb" if row == 0 else "#747a85")
    draw.rounded_rectangle((94, 480, 259, 514), radius=7, outline="#494158", fill="#191721")
    draw.text((108, 490), "✦  灵感      Ctrl J", font=font(10, True), fill="#c3acef")
    draw.text((320, 218), "今天，想用 AI 做点什么？", font=font(23, True), fill="#f1eff6")
    panel(draw, (320, 270, 1168, 510), "#12151b", "#2c3038", 12)
    draw.text((347, 298), "今天要推进", font=font(16, True), fill="#e9e6ef")
    for row, (title, meta, color) in enumerate([
        ("整理可复用 Prompt", "已完成", "#69d8b4"),
        ("做一个家庭支出记录小工具", "进行中 · 下一步：搭输入界面", "#e9b85b"),
        ("研究 DSH 插件权限边界", "待开始", "#757e8b"),
    ]):
        y = 348 + row * 48
        draw.ellipse((345, y, 363, y + 18), outline=color)
        draw.text((380, y - 2), title, font=font(11), fill="#d7d4dc")
        draw.text((380, y + 16), meta, font=font(8), fill=color)
    draw.rounded_rectangle((953, 211, 1118, 249), radius=7, fill="#a78bfa")
    draw.text((972, 223), "＋  新增事项", font=font(10, True), fill="#17131f")
    draw.text((874, 297), "也可以按 Ctrl+J", font=font(10), fill="#777d88")
    caption_bar(image, "在 DSH 左栏底部点击“灵感”，或按 Ctrl+J，即可打开完整工作台。")
    progress(image, 6, 7)
    return image


def close_scene() -> Image.Image:
    image = base_canvas(7, (920, 210))
    draw = ImageDraw.Draw(image)
    chrome(image, 7, 7, "Start")
    draw.text((84, 165), "从一句话开始。", font=font(52, True), fill="#f4f1f8")
    draw.text((86, 241), "记录灵感  →  选择下一步  →  留下创造轨迹", font=font(20), fill="#b1a6ca")
    panel(draw, (86, 324, 1194, 470), "#11141a", "#383344", 14)
    draw.text((119, 354), "＋  记录一个想法、事项，或准备开始的东西…", font=font(17), fill="#a7a2af")
    draw.rounded_rectangle((951, 348, 1162, 392), radius=7, fill="#b59df2")
    draw.text((984, 361), "加入今天  →", font=font(12, True), fill="#17131f")
    draw.text((90, 515), "github.com/vincent-1223/ai_ideas_manager", font=font(20, True, True), fill="#a78bfa")
    draw.text((90, 551), "MIT License  ·  DSH 0.2.1-rc.5  ·  No runtime dependencies", font=font(12), fill="#6f7580")
    caption_bar(image, "源码、功能说明和更新版安装步骤都在 GitHub 仓库 ai_ideas_manager。")
    progress(image, 7, 7)
    return image


SCENES = [
    (
        "AI Ideas Manager 是运行在 DeepSeek Harness Web 客户端里的个人 AI 创作工作台。它把灵感、今日事项、完成记录和创作日志放在同一张安静的工作桌面里。",
        title_scene,
    ),
    (
        "为什么要用它？因为想法常常散落在聊天、文件和便签里。这个插件先帮你保存想法，再把它拆成今天可以立刻开始的一小步。",
        value_scene,
    ),
    (
        "你可以一句话快速收集，按状态筛选事项，把灵感转成任务，查看本周积累，用标签发现关注方向，并随时导出 JSON 备份。完成、重开和转化都会自动写入创作日志。",
        features_scene,
    ),
    (
        "开始安装。先打开 PowerShell，克隆公开仓库，然后进入项目目录。下面的命令使用已经验证过的 DSH 0.2.1 候选版本。",
        lambda: terminal_scene(
            4,
            "第一步：获取代码",
            [
                ("git clone https://github.com/vincent-1223/ai_ideas_manager.git", ""),
                ("cd ai_ideas_manager", ""),
            ],
            "需要 Git 与 Node.js；DSH Web profile 会在首次使用时初始化。",
        ),
    ),
    (
        "第二步，把当前目录作为插件加入 Web profile。安装器会自动把插件 bundle 写入 dsh.profile.bundles。如果你已经有 dsh 命令，也可以直接运行 dsh plugin。",
        lambda: terminal_scene(
            5,
            "第二步：安装插件",
            [
                ("npx --yes @deepseek-ai/dsh@0.2.1-rc.5 plugin --profile web add (Get-Location).Path", "dependencies: + @local/ai-ideas-manager"),
                ("npx --yes @deepseek-ai/dsh@0.2.1-rc.5 web", "dsh web: http://127.0.0.1:3080"),
            ],
            "安装完成后启动 DSH Web。更新插件代码后，重启 Web profile 即可加载新版本。",
        ),
    ),
    (
        "DSH 打开后，在左侧栏底部找到“灵感”入口，点击它；也可以在任意页面按 Ctrl J。工作台覆盖在当前页面之上，关闭后回到原来的聊天界面。",
        launch_scene,
    ),
    (
        "现在记录你的第一个想法，选择加入今天，或收进灵感收件箱。更多说明、数据边界和安装故障排查，请访问 GitHub 仓库 AI IDEAS MANAGER。",
        close_scene,
    ),
]


def synthesize(text: str, output: Path) -> None:
    voice_text = base64.b64encode(text.encode("utf-8")).decode("ascii")
    output_path = str(output).replace("'", "''")
    script = f"""
Add-Type -AssemblyName System.Speech
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$s.SelectVoice('Microsoft Huihui Desktop')
$s.Rate = -1
$s.Volume = 100
$s.SetOutputToWaveFile('{output_path}')
$text = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('{voice_text}'))
$s.Speak($text)
$s.Dispose()
"""
    encoded_script = base64.b64encode(script.encode("utf-16le")).decode("ascii")
    subprocess.run(
        ["powershell", "-NoProfile", "-EncodedCommand", encoded_script],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.PIPE,
    )


def duration(path: Path) -> float:
    result = subprocess.run(
        [
            str(FFPROBE),
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(path),
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    return float(result.stdout.strip())


def srt_timestamp(seconds: float) -> str:
    ms = int(round(seconds * 1000))
    hours, ms = divmod(ms, 3_600_000)
    minutes, ms = divmod(ms, 60_000)
    secs, ms = divmod(ms, 1000)
    return f"{hours:02d}:{minutes:02d}:{secs:02d},{ms:03d}"


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    srt_entries: list[str] = []
    cursor = 0.0
    with tempfile.TemporaryDirectory(prefix="ai-ideas-video-") as temp_dir_name:
        temp_dir = Path(temp_dir_name)
        segments: list[Path] = []
        concat_lines: list[str] = []
        for index, (narration, scene_builder) in enumerate(SCENES, start=1):
            wav = temp_dir / f"scene-{index:02d}.wav"
            png = temp_dir / f"scene-{index:02d}.png"
            segment = temp_dir / f"scene-{index:02d}.mp4"
            synthesize(narration, wav)
            scene = scene_builder()
            scene.save(png, "PNG")
            audio_duration = duration(wav)
            total_duration = audio_duration + 1.0
            fade_out = max(0.2, total_duration - 0.35)
            subprocess.run(
                [
                    str(FFMPEG),
                    "-y",
                    "-loop",
                    "1",
                    "-framerate",
                    "30",
                    "-i",
                    str(png),
                    "-i",
                    str(wav),
                    "-t",
                    f"{total_duration:.3f}",
                    "-vf",
                    f"fade=t=in:st=0:d=0.25,fade=t=out:st={fade_out:.3f}:d=0.35,format=yuv420p",
                    "-c:v",
                    "libx264",
                    "-preset",
                    "medium",
                    "-crf",
                    "22",
                    "-c:a",
                    "aac",
                    "-b:a",
                    "128k",
                    "-movflags",
                    "+faststart",
                    "-shortest",
                    str(segment),
                ],
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.PIPE,
            )
            segments.append(segment)
            concat_lines.append(f"file '{segment.as_posix()}'")
            srt_entries.append(
                f"{index}\n{srt_timestamp(cursor)} --> {srt_timestamp(cursor + total_duration)}\n{narration}\n"
            )
            cursor += total_duration
        concat_file = temp_dir / "concat.txt"
        concat_file.write_text("\n".join(concat_lines), encoding="utf-8")
        subprocess.run(
            [
                str(FFMPEG),
                "-y",
                "-f",
                "concat",
                "-safe",
                "0",
                "-i",
                str(concat_file),
                "-c",
                "copy",
                "-movflags",
                "+faststart",
                str(OUTPUT),
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.PIPE,
        )
    SRT.write_text("\n".join(srt_entries), encoding="utf-8")
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size} bytes)")
    print(f"Wrote {SRT} ({cursor:.1f}s)")


if __name__ == "__main__":
    build()
