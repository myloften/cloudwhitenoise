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

### 2024-03-26
- [x] 优化 SEO 配置
  - 添加 robots.ts 详细爬虫规则
  - 配置主要搜索引擎（Google、Bing、百度）的爬虫规则
  - 设置爬虫延迟和主机名
  - 优化 sitemap.xml 配置
- [x] 完善网站内容
  - 创建 About 页面，介绍网站功能和特点
  - 添加 Blog 页面，提供白噪音相关文章
  - 优化页面元数据和描述
- [x] 配置搜索引擎站点
  - 提交 Google Search Console
  - 配置站点地图
  - 验证网站所有权
  - 监控索引状态

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

### 技术实现
- [x] robots.txt 配置
  - 针对不同搜索引擎设置爬虫规则
  - 设置合理的爬取延迟
  - 指定站点地图位置
  - 配置主机名和禁止访问规则
- [x] 站点地图优化
  - 自动生成 sitemap.xml
  - 设置页面优先级
  - 配置更新频率
  - 确保所有重要页面都被收录
- [x] 元数据优化
  - 完善页面标题和描述
  - 添加 Open Graph 标签
  - 配置 Twitter Cards
  - 添加结构化数据
- [x] 内容策略
  - 每个声音类型都有详细描述
  - 使用相关关键词自然融入文本
  - 添加专业的博客文章
  - 优化内部链接结构

### 搜索引擎收录
- [x] Google Search Console
  - 验证网站所有权
  - 提交站点地图
  - 监控索引状态
  - 跟踪搜索表现
- [ ] Bing Webmaster Tools
  - 待配置站点验证
  - 待提交站点地图
- [ ] 百度搜索资源平台
  - 待配置站点验证
  - 待提交站点地图

## 数据分析与扩展计划

### 第一阶段：数据收集与分析（1-2个月）

#### Google Analytics 关键指标
1. 流量指标
   - 每日访问量（DAU）
   - 平均会话时长
   - 跳出率
   - 用户地理分布

2. 用户行为
   - 最受欢迎的白噪音类型
   - 平均播放时长
   - 混音组合使用频率
   - 定时器使用情况

3. 用户来源
   - 有机搜索占比
   - 主要流量来源国家
   - 关键词排名情况

#### Google Search Console 数据分析
1. 关键词表现监控
   - "white noise for sleep"
   - "relaxation sounds"
   - "focus music"
   - "meditation sounds"
   - 长尾关键词排名和点击率

2. 页面表现
   - 展示量最高的页面
   - CTR最高的页面
   - 平均排名位置

### 投资决策指标（2-3个月后评估）
值得扩展的标准：
- 月活用户（MAU）> 10,000
- 平均会话时长 > 15分钟
- 跳出率 < 40%
- 有机搜索流量月环比增长 > 20%
- 关键词前10排名 > 5个
- 主要市场（美国/英国）流量占比 > 50%

### 变现策略路径

#### 第一阶段：广告收入（3-6个月）
1. Google AdSense
   - 优化广告位置
   - A/B测试广告形式
   - 预期月收入目标：$500-1000

2. 附属营销
   - 推荐助眠产品
   - 推荐冥想APP
   - 推荐降噪耳机

#### 第二阶段：会员订阅（6-12个月）
- 优质音效包订阅
- 压力测试高级报告
- 去除广告会员

#### 第三阶段：企业服务（12个月后）
- 专业版功能
- API接口服务
- 企业解决方案

### 功能迭代计划

#### 第一期：基础白噪音播放器（当前）
- [x] 多种白噪音类型
- [x] 音量调节功能
- [x] 定时关闭功能
- [x] 声音混音功能

#### 第一期优化：AI 生成白噪音（评估中）
##### 技术可行性分析
1. API 选项：
   - OpenAI Whisper API（音频转换）
   - Stable Audio API（音频生成）
   - Replicate API（开源模型部署）
   
2. 功能特点：
   - 根据文本描述生成自定义白噪音
   - 混合多种自然声音生成新的环境音
   - 个性化音频参数调整
   
3. 实现难度：
   - API 成本评估
   - 音频质量控制
   - 生成速度优化
   - 用户体验设计

4. 优先级评估：
   - 创新性：高
   - 技术难度：中
   - 成本：中高
   - 用户需求：待验证
   - 建议：先小规模测试

##### MVP 功能范围
1. 基础功能
   - 文本到白噪音转换
   - 3-5个预设场景模板
   - 基本参数调整

2. 进阶功能（后续迭代）
   - 自定义场景保存
   - 社区分享功能
   - AI 混音推荐

##### 开发计划
1. 第一阶段（2周）：
   - API 评估和选型
   - 概念验证原型
   - 成本核算

2. 第二阶段（2周）：
   - MVP 开发
   - 内部测试
   - 性能优化

3. 第三阶段（2周）：
   - 小规模用户测试
   - 数据收集
   - 反馈优化

#### 第二期：压力测试功能
- [ ] 科学的压力评估问卷
- [ ] 个性化建议
- [ ] 进度追踪
- [ ] 结果分析报告

#### 第三期：减压游戏
- [ ] 简单有趣的互动游戏
- [ ] 进度保存
- [ ] 成就系统
- [ ] 分享功能

### 竞品监控
定期监控对标网站：
1. A Soft Murmur
2. Noisli
3. Rainy Mood

监控指标：
- Similarweb 流量数据
- SEMrush 关键词排名
- 新功能更新
- 定价策略变化

### 近期行动计划

#### 1个月内
- [ ] 完善 Google Analytics 事件追踪
- [ ] 设置数据看板
- [ ] 申请 Google AdSense
- [ ] 开始撰写SEO文章（每周1篇）
- [ ] 评估 AI 生成白噪音功能

#### 3个月内
- [ ] 分析用户行为数据
- [ ] 优化现有功能
- [ ] 测试不同广告位
- [ ] 建立邮件列表
- [ ] 如可行，启动 AI 功能开发

#### 6个月内
- [ ] 评估扩展可行性
- [ ] 准备第二期功能
- [ ] 开发会员体系
- [ ] 建立社区运营
