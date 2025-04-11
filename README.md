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
- 多种白噪音类型（雨声、海浪、森林等）
- 音量调节功能
- 定时关闭功能
- 声音混音功能

##### UI/UX 需求
- 顶部导航栏
  - 左侧：菜单选项按钮
  - 中间：网站介绍、图片和情景关键词
  - 右侧：白天/夜晚模式切换按钮
- 主要内容区
  - 白噪音图标网格布局（每行3个）
  - 适配移动端，两侧留有间距
  - 图标居中显示
  - 鼠标悬浮显示白噪音类型名称
  - 点击图标显示音量控制滑块
  - 再次点击关闭音量控制并停止播放
- 右侧定时功能
  - 固定在页面右侧
  - 点击显示定时选项（1小时/30分钟/立即静音）
  - 简洁的定时器UI设计

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
- 每个声音类型都有详细描述
- 使用相关关键词自然融入文本
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
│   │   ├── SoundButton.tsx    # 音频控制按钮组件
│   │   └── ...
│   ├── data/
│   │   └── sounds.ts         # 音频数据配置
│   ├── globals.css           # 全局样式
│   ├── layout.tsx            # 根布局组件
│   └── page.tsx             # 主页面组件
├── public/
│   └── favicon.ico          # 网站图标
└── package.json            # 项目依赖
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

### 待完成
- [ ] 音频播放功能实现
- [ ] 音量控制
- [ ] 混音功能
- [ ] 定时功能
- [ ] UI美化和动画效果
