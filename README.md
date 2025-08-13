# Modern Business Landing

A professional multi-layout landing page template for businesses and startups to showcase their services and solutions.

## 项目类型
Landing Page - 现代商业着陆页模板，提供多种布局选择

## 主要功能特性

- **多种布局** - 提供5种不同的首页布局设计
- **响应式设计** - 完美适配所有设备和屏幕尺寸
- **现代化UI** - 简洁专业的视觉设计
- **服务展示** - 专业的服务介绍模块
- **项目作品集** - 展示案例和项目成果
- **客户评价** - 客户反馈和推荐展示
- **博客功能** - 新闻和文章发布系统
- **联系表单** - 客户咨询和联系功能
- **滚动动画** - 平滑的滚动和视觉效果

## 技术栈

- **前端框架**: React 18.2
- **构建工具**: Create React App
- **路由管理**: React Router Dom 6.21
- **UI框架**: Bootstrap 5.3 + Reactstrap 9.2
- **样式方案**: SCSS + 自定义CSS
- **图标库**: Feather Icons React + 自定义图标
- **轮播组件**: React Slick + Slick Carousel
- **滚动监听**: React Scrollspy
- **数据库集成**: Supabase (已预配置)

## 项目结构

```
src/
├── component/          # 公共组件
│   ├── Navbar/        # 导航栏组件
│   ├── Footer/        # 页脚组件
│   ├── About.js       # 关于组件
│   ├── Services.js    # 服务组件
│   ├── Project.js     # 项目组件
│   ├── Contact.js     # 联系组件
│   └── ...
├── pages/             # 页面布局
│   ├── Layout1/       # 布局1
│   ├── Layout2/       # 布局2
│   ├── Layout3/       # 布局3
│   ├── Layout4/       # 布局4
│   └── Layout5/       # 布局5
├── assets/            # 静态资源
│   ├── images/        # 图片资源
│   ├── css/          # CSS文件
│   ├── scss/         # SCSS源文件
│   └── fonts/        # 字体文件
├── integrations/      # 第三方集成
│   └── supabase/     # Supabase配置
└── routes.js         # 路由配置
```

## 页面布局

- **Layout 1**: 经典商业布局 - 适用于企业官网
- **Layout 2**: 创意设计布局 - 适用于设计机构
- **Layout 3**: 技术服务布局 - 适用于IT公司
- **Layout 4**: 产品展示布局 - 适用于产品公司
- **Layout 5**: 简约专业布局 - 适用于咨询服务

## 功能模块

- **Hero Section**: 引人注目的首页横幅
- **About Section**: 公司介绍和团队展示
- **Services Section**: 服务项目详细介绍
- **Features Section**: 产品特性和优势
- **Portfolio Section**: 项目案例展示
- **Testimonials Section**: 客户评价和推荐
- **Blog Section**: 最新新闻和文章
- **Contact Section**: 联系方式和表单

## 快速开始

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm start
```

3. 构建生产版本
```bash
npm run build
```

## 环境变量配置

如需使用Supabase功能，请在项目根目录创建 `.env` 文件：

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 自定义说明

- 主要样式配置在 `src/assets/scss/` 目录
- 颜色主题在 `src/assets/scss/_variables.scss`
- 组件样式采用模块化SCSS结构
- 响应式断点遵循Bootstrap标准

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

此模板仅供学习和个人项目使用。
