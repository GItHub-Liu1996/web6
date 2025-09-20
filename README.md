# GoChinaAdvisors (仮)

[![GitHub](https://img.shields.io/badge/GitHub-web6-blue?style=flat-square&logo=github)](https://github.com/GItHub-Liu1996/web6)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

为外国用户在中国注册和运营公司提供一站式专业服务的权威内容与业务平台。

> **⚠️ 开发前必读**: 请务必先查阅 [00-项目总览](./00-DOCUMENTATION/00-项目总览.md)，了解项目整体情况。然后阅读 [01-开发前必读](./00-DOCUMENTATION/01-开发前必读.md)，该文档包含了开发前必读的所有核心文档。

## 🚀 项目概述

GoChinaAdvisors (仮) 是一个基于 Next.js 15 + TypeScript + Tailwind CSS 构建的现代化权威内容与业务平台。我们专注于为外国用户在中国注册和运营公司提供一站式专业服务。

### 🎯 核心设计哲学

- **解决方案驱动 (Solution-Oriented)**: 网站结构围绕"解决客户问题"组织，引导用户而非让他们自己寻找
- **移动端优先 (Mobile-First)**: 所有页面和组件首先在移动端达到完美体验，再增强至桌面端
- **转化漏斗设计 (Conversion Funnel Design)**: 整个网站是精心设计的转化漏斗，将访问者引导至"联系咨询"环节

## ✨ 核心功能

### 🎯 解决方案导向的服务体系
- **企业落地启动方案**: 主体资格、银行账户开设、跨境资金流动等基础服务
- **企业持续运营支持**: 财税托管、税务合规、人员签证等增值服务
- **专业服务详情**: 10+ 专业服务领域，每个都有详细的解决方案页面

### 📚 权威内容中心
- **高质量博客系统**: 解决特定问题的深度内容，吸引精准流量
- **成功案例研究**: 建立深度信任的案例展示
- **资源中心**: 多语言内容营销，SEO优化

### 🔄 内容转化飞轮
- **有机内容链接**: 博客文章 → 服务详情页 → 案例研究 → 联系咨询
- **智能引导**: 基于用户需求的内容推荐和路径引导
- **转化优化**: 精心设计的转化漏斗，最大化咨询转化率

### 🌐 多语言与移动优先
- **双语支持**: 中文和英文完整支持
- **移动端优先**: 所有功能在移动端完美体验
- **响应式设计**: 桌面端增强体验

## 🛠️ 技术栈

- **框架**：Next.js 15 (App Router)
- **语言**：TypeScript 5
- **样式**：Tailwind CSS 4
- **字体**：Geist Sans & Geist Mono
- **国际化**：next-intl
- **内容管理**：MDX + gray-matter
- **测试**：Jest + React Testing Library
- **代码质量**：ESLint + Prettier
- **营销集成**：Zoho CRM + Campaigns + PageSense

## 📁 项目结构

```
gochina-advisors/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (main)/            # 主要路由组
│   │   │   ├── solutions/     # 解决方案页面
│   │   │   │   ├── startup/   # 企业落地启动方案
│   │   │   │   └── operation/ # 企业持续运营支持
│   │   │   ├── services/      # 服务详情页面
│   │   │   │   ├── page.tsx   # 服务列表页
│   │   │   │   └── [service]/ # 动态服务详情页
│   │   │   ├── case-studies/  # 成功案例页面
│   │   │   ├── blog/          # 博客/资源中心
│   │   │   ├── about/         # 关于我们
│   │   │   ├── contact/       # 联系我们
│   │   │   └── pricing/       # 服务定价（规划中）
│   │   ├── api/               # API路由
│   │   ├── globals.css        # 全局样式
│   │   ├── layout.tsx         # 根布局
│   │   └── page.tsx           # 首页
│   ├── components/            # 可复用组件
│   │   ├── ui/                # 基础UI组件
│   │   ├── layout/            # 布局组件
│   │   ├── forms/             # 表单组件
│   │   ├── solutions/         # 解决方案组件
│   │   ├── case-studies/      # 案例研究组件
│   │   └── blog/              # 博客组件
│   ├── lib/                   # 工具函数和配置
│   │   ├── utils.ts           # 通用工具函数
│   │   ├── validations.ts     # 表单验证
│   │   └── constants.ts       # 常量定义
│   └── types/                 # TypeScript类型定义
├── content/                   # 内容管理（与src分离）
│   ├── blog/                 # 博客文章
│   ├── case-studies/         # 成功案例
│   └── translations/          # 多语言翻译文件
├── public/                   # 静态资源
├── docs/                     # 项目文档
└── tests/                    # 测试文件
```

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install --legacy-peer-deps
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 其他命令

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint

# 自动修复代码格式
npm run lint:fix

# 类型检查
npm run type-check

# 运行测试
npm run test

# 监听模式运行测试
npm run test:watch
```

## 🎨 设计系统

项目采用统一的设计系统，包括：

- **颜色主题**：支持明暗主题切换
- **组件库**：可复用的UI组件
- **响应式布局**：移动优先的设计理念
- **无障碍支持**：完整的键盘导航和屏幕阅读器支持

## 📝 开发规范

### 代码规范

- 使用 TypeScript 严格模式
- 遵循 ESLint 和 Prettier 配置
- 组件必须包含 JSDoc 注释
- 遵循单一职责原则

### Git 工作流

- 使用语义化提交信息
- 功能分支开发
- 代码审查流程

### 组件开发

- 所有组件必须支持 TypeScript
- 使用 Props 驱动，避免内部状态
- 优先使用组合而非配置
- 受控组件优先

## 🔧 配置说明

### 环境变量

项目使用环境变量进行配置，请参考 `.env.local.example` 文件。

### Tailwind CSS

项目使用 Tailwind CSS 4.0，配置文件位于 `postcss.config.mjs`。

### TypeScript

TypeScript 配置位于 `tsconfig.json`，使用严格模式。

## 📚 文档

- [架构文档](./ARCHITECTURE.md) - 详细的技术架构和决策记录
- [组件文档](./docs/components.md) - 组件使用说明
- [API文档](./docs/api.md) - API接口文档

## 🧪 测试

项目使用 Jest 和 React Testing Library 进行测试：

```bash
# 运行所有测试
npm run test

# 监听模式
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

## 🚀 部署

### 本地部署

```bash
npm run build
npm run start
```

### Vercel 部署

项目已配置 Vercel 部署，可直接连接 GitHub 仓库进行自动部署。

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- 邮箱：info@china-company-registration.com
- 电话：+86 400-123-4567
- 网站：https://china-company-registration.com

## 🔗 相关链接

- **GitHub仓库**: [https://github.com/GItHub-Liu1996/web6](https://github.com/GItHub-Liu1996/web6)
- **在线预览**: [即将部署]
- **项目文档**: [开发总纲](./docs/DEVELOPMENT_PRINCIPLES.md)

## 📊 项目状态

- ✅ 基础架构完成
- ✅ 开发总纲建立
- ✅ Git工作流配置
- ✅ 组件库基础
- 🚧 博客系统开发中
- 🚧 服务页面开发中

---

**注意**：这是一个开发中的项目，某些功能可能仍在开发中。
