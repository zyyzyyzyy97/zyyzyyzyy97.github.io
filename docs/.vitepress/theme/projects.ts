export interface Project {
  title: string
  desc: string
  tags: string[]
  year: string
  badge: string
  color: string
  link?: string
  external?: boolean
  linkText?: string
}

// 项目唯一数据源：首页「项目」栏和 /projects 页面都读这里。
// 添加项目：复制下面注释里的对象，填好信息，push 后站点自动更新。
export const projects: Project[] = [
  {
    title: 'dsh-desktop-pet · 小鲸鱼桌宠',
    desc: '给 DeepSeek Harness 写的桌宠插件：把开源桌宠 Coopanion 的鲸鱼原样搬进桌面，由会话事件驱动（思考/聆听/说话）。有独立的聊天链路与三层长期记忆（node:sqlite），能看屏幕、读图、发表情包、语音对话（TTS/ASR），甚至挂 QQ。核心是一套「心情引擎」：连续情绪状态、冷落分档、过夜宽宥、自画像自述式人格生长，拒绝好感度剧本——49 项自动化测试与一周情绪仿真托底。已收录进社区插件市场 dsh-plugin-market。',
    tags: ['TypeScript', 'Node.js', 'SQLite', 'AGPL-3.0'],
    year: '2026',
    badge: '开源',
    color: '#0f9d75',
    link: 'https://github.com/zyyzyyzyy97/dsh-desktop-pet',
    external: true,
    linkText: '查看源码'
  },
  {
    title: 'dsh-voice-picker · 音色工作台',
    desc: '小鲸鱼的伴侣插件：浏览器里试听 48 种 qwen3-tts 音色，点一下热切换说话声音（经 /api/config 即时生效，无需重启）。apiKey 永不回传页面，独立冒烟测试 9/9。',
    tags: ['Node.js', 'TTS', 'MIT'],
    year: '2026',
    badge: '开源',
    color: '#7c3aed',
    link: 'https://github.com/zyyzyyzyy97/dsh-desktop-pet/tree/main/dsh-voice-picker',
    external: true,
    linkText: '查看源码'
  },
  {
    title: 'dsh-study-buddy · 学习监督插件',
    desc: '对接学校学习中枢 API 的监督插件：自动同步作业与成绩、按截止时刻计算倒计时、到点让小鲸鱼用自己的口吻催交作业（气泡+语音），GPA 独立复算交叉验证，带浏览器状态页。真机验收过 D-1440 提醒链路。',
    tags: ['TypeScript', 'Node.js', '自动化'],
    year: '2026',
    badge: '插件',
    color: '#1a6fd4',
    linkText: '暂未开源'
  },
  {
    title: '个人主页与课程笔记站',
    desc: '你现在看到的这个站：VitePress + GitHub Pages，课程笔记、章节概览、公式速查和项目展示，push 后 GitHub Actions 自动构建部署。',
    tags: ['VitePress', 'Markdown', 'GitHub Actions'],
    year: '2026',
    badge: 'WEB',
    color: '#1a6fd4',
    link: '/notes/fluid-mechanics',
    linkText: '浏览笔记'
  },
  {
    title: 'AstrBot 人格卡与记忆插件',
    desc: '早期作品：给 AstrBot 写的人设卡（6 张）与记忆日记、主动随机消息等自制插件。「让角色从对话里长出性格」的想法最早从这里开始，后来演化成了小鲸鱼的心情引擎。',
    tags: ['Python', 'LLM', '早期'],
    year: '',
    badge: '早期',
    color: '#8b8000',
    linkText: '未开源'
  }
]

// {
//   title: '项目名',
//   desc: '一句话说明它解决什么问题、用了什么技术。',
//   tags: ['Vue', 'Python', '课程作业'],
//   year: '2026',
//   badge: 'APP',
//   color: '#0f9d75',
//   link: 'https://github.com/your-name/repo',
//   external: true,
//   linkText: '查看源码'
// },
