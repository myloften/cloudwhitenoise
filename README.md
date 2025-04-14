# StressLess - 减压放松网站

StressLess 是一个面向欧美用户的减压放松网站，提供白噪音、压力测试和减压游戏等功能，帮助用户缓解压力、改善睡眠质量。

## 项目概述

### 目标用户
- 主要面向欧美用户
- 有减压需求的群体
- 学生、职场人士
- 有睡眠问题的人群
- 需要专注力提升的用户

### 核心功能

#### 第一期：白噪音播放器
- 多种白噪音类型（雨声、海浪、森林等）✅
- 音量调节功能 ✅
- 定时关闭功能 ✅
- 声音混音功能 ✅

##### UI/UX 需求
- 顶部导航栏 ✅
  - 左侧：网站名称 ✅
  - 右侧：白天/夜晚模式切换按钮 ✅
- 主要内容区 ✅
  - 白噪音图标网格布局（每行3个）✅
  - 适配移动端，两侧留有间距 ✅
  - 图标居中显示 ✅
  - 鼠标悬浮显示白噪音类型名称 ✅
  - 点击图标显示音量控制滑块 ✅
  - 再次点击关闭音量控制并停止播放 ✅
- 右侧定时功能 ✅
  - 固定在页面右侧 ✅
  - 点击显示定时选项（1小时/30分钟/立即静音）✅
  - 简洁的定时器UI设计 ✅

#### 第二期：压力测试
- 科学的压力评估问卷
- 个性化建议
- 进度追踪
- 结果分析报告

#### 第三期：减压游戏
- 简单有趣的互动游戏
- 进度保存
- 成就系统
- 分享功能

## SEO 优化策略

### 主要关键词
- white noise
- relaxation sounds
- stress relief
- calming sounds
- meditation sounds

### 长尾关键词
- free white noise for sleep
- calming sounds for anxiety
- relaxation sounds for work
- stress relief sounds
- meditation music for focus

### 内容策略
- 每个声音类型都有详细描述 ✅
- 使用相关关键词自然融入文本 ✅
- 提供使用建议和好处
- 添加用户评价和反馈

## 技术栈

- Next.js 15.3.0
- React
- TypeScript
- TailwindCSS
- Howler.js (音频处理)

## 项目结构

```
stressless/
├── app/
│   ├── components/
│   │   ├── SoundIcon.tsx     # 音频图标组件
│   │   ├── Timer.tsx         # 定时器组件
│   │   └── ...
│   ├── data/
│   │   ├── sounds.ts        # 音频数据配置
│   │   └── icons.ts         # SVG图标配置
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局组件
│   └── page.tsx            # 主页面组件
├── public/
│   └── favicon.ico         # 网站图标
└── package.json           # 项目依赖
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

## 部署

项目使用 Vercel 进行部署，每次推送到 main 分支会自动触发部署。

### Vercel 部署配置
- 免费方案限制：
  - 每个项目 100GB 带宽/月
  - 每个文件最大 50MB
  - 无限项目数量
  - 自动 HTTPS 和 CDN
  - 支持自定义域名

### 音频文件结构
```
public/
  sounds/
    nature/
      rain.mp3
      thunder.mp3
      waves.mp3
      birds.mp3
    city/
      cafe.mp3
      train.mp3
      keyboard.mp3
    meditation/
      om.mp3
      bowls.mp3
    white-noise/
      white-noise.mp3
```

### 音频文件来源
建议从以下网站下载免费音频：
1. Pixabay (https://pixabay.com/music/)
   - 完全免费
   - 无需署名
   - 可商用
   - 推荐下载 128kbps MP3 格式

2. Freesound (https://freesound.org/)
   - 免费音频库
   - 需要注册
   - 注意查看许可证

3. Free Music Archive (https://freemusicarchive.org/)
   - 免费音乐库
   - 需要查看具体许可证

### 音频文件优化
1. 使用 ffmpeg 压缩音频：
```bash
ffmpeg -i input.mp3 -b:a 128k output.mp3
```

2. 使用在线工具压缩：
- https://www.media.io/audio-compressor.html
- https://www.youcompress.com/

### 音频文件命名规范
- 使用小写字母
- 使用连字符（-）代替空格
- 保持文件名简短
- 使用有意义的名称

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

[MIT License](LICENSE)

## 更新记录

### 2024-03-21
- [x] 完成项目初始化
- [x] 基础架构搭建
- [x] 音频数据配置
- [x] 在线音频资源整合
- [x] 基础UI组件开发

### 2024-03-22
- [x] 完成顶部导航栏设计
- [x] 实现深色/浅色模式切换
- [x] 优化白噪音图标布局
- [x] 实现音频播放控制
- [x] 实现音量调节功能
- [x] 添加定时器功能
- [x] 移除社交媒体链接
- [x] 优化深色模式样式
- [x] 使用本地 SVG 图标替换 react-icons

### 2024-03-23
- [x] 实现多音效同时播放
- [x] 实现独立音量控制
- [x] 优化音频加载体验
- [x] 完善响应式布局

### 2024-03-24
- [x] 添加场景预设功能（冥想、专注、放松等）
- [x] 实现一键切换音效组合
- [x] 优化音效切换过渡效果
- [x] 完善标签交互体验
- [x] 更新网站名称为 Cloud White Noise
- [x] 优化图标显示效果

### 2024-03-25
- [x] 集成 Google Analytics
- [x] 添加音频事件追踪
- [x] 添加场景预设事件追踪
- [x] 添加定时器事件追踪
- [x] 配置域名 cloudwhitenoise.space
- [x] 配置 Cloudflare CDN
- [x] 优化 DNS 设置

### MVP 待完成功能
- [ ] 添加音频预加载机制
- [ ] 添加用户使用引导
- [ ] 添加基础数据分析
- [ ] 实现音效组合保存功能（可选）
- [ ] 添加音频可视化效果（可选）

## 市场调研

### 综合性混合白噪音

#### A Soft Murmur
- 特点：支持混合雨声、雷声、海浪声等自然音效
- 功能：可自定义音量和组合模式
- 链接：https://asoftmurmur.com

#### Noisli
- 特点：提供雨声、森林、咖啡厅等环境音效
- 功能：支持颜色背景切换和便签功能
- 链接：https://www.noisli.com

#### Defonic
- 特点：24种自然音效自由组合
- 功能：界面轻拟物风格，支持浅色/暗黑模式切换
- 链接：https://defonic.com

### 雨声主题

#### Rainy Mood
- 特点：专注于逼真雨声模拟
- 功能：每30分钟变换雨声形式（如暴雨、细雨）
- 链接：https://www.rainymood.com

#### Rainyscope
- 特点：模拟四季雨声
- 功能：搭配透过窗户的动态雨滴视觉效果
- 链接：https://rainyscope.com

#### Raining.FM
- 特点：提供多种雨声场景
- 功能：支持雷声、鸟鸣等细节调整
- 链接：https://raining.fm

### 海洋与自然音效

#### Virtocean / Virtual Ocean
- 特点：模拟海洋环境音效
- 功能：可潜水听海底生物声音或控制海浪强度
- 链接：http://virtocean.com

#### Nature Sound Map
- 特点：收录全球自然声音
- 功能：通过地图选择不同地区的鸟鸣、水流等音效
- 链接：https://www.naturesoundmap.com

### 场景化白噪音

#### 泡泡白噪音
- 特点：提供工作、助眠、冥想模式
- 功能：支持电子木鱼、番茄钟等功能
- 链接：https://www.ppbzy.com

#### 猫看白噪音
- 特点：分类涵盖大自然、小动物、城市等场景
- 功能：支持在线播放和下载
- 链接：http://www.maokan.cc

#### Sound Box
- 特点：专业级白噪音调音台
- 功能：预设晨间冥想、雨天咖啡等组合音效
- 链接：https://soundbox.fun

### 特色工具

#### Purrli
- 特点：模拟猫咪呼吸声
- 功能：适合喜欢宠物陪伴的用户
- 链接：https://purrli.com

#### FreeMind
- 特点：支持音效叠加（如雨声+蛙鸣+轻音乐）
- 功能：可随机调整音量
- 链接：https://www.freemindapp.com

### 其他推荐

#### Moodist
- 特点：开源免费，内置75种白噪音
- 功能：支持番茄时钟和快捷键
- 链接：https://moodist.app

#### 小睡眠（网站版）
- 特点：提供白噪音、冥想音频
- 功能：支持音效组合与睡眠监测
- 链接：https://web.xiaoshuim.com
