# 中国公司注册服务网站

[![GitHub](https://img.shields.io/badge/GitHub-web6-blue?style=flat-square&logo=github)](https://github.com/GItHub-Liu1996/web6)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

为外国用户在中国注册公司提供专业、高效的一站式服务网站。

> **⚠️ 开发前必读**: 请务必先查阅 [开发总纲 - 核心开发细则](./docs/DEVELOPMENT_PRINCIPLES.md)，该文档包含了项目开发的最高准则和强制执行规则。

## 🚀 项目概述

这是一个基于 Next.js 14 + TypeScript + Tailwind CSS 构建的现代化网站，专注于为中国公司注册服务提供专业的在线平台。网站以博客内容为核心，通过高质量的SEO内容获取有机流量，推动业务获客。

## ✨ 核心功能

- **专业服务展示**：公司注册、银行开户、税务登记、商标注册等服务
- **博客系统**：高质量内容营销，SEO优化
- **响应式设计**：完美适配桌面端和移动端
- **多语言支持**：中英文双语（规划中）
- **SEO优化**：完整的元数据和结构化数据
- **无障碍设计**：符合WCAG标准

## 🛠️ 技术栈

- **框架**：Next.js 14 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **字体**：Geist Sans & Geist Mono
- **图标**：Lucide React
- **测试**：Jest + React Testing Library
- **代码质量**：ESLint + Prettier

## 📁 项目结构

```
web6/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # 全局样式
│   │   ├── layout.tsx          # 根布局
│   │   └── page.tsx            # 首页
│   ├── components/             # 可复用组件
│   │   ├── ui/                 # 基础UI组件
│   │   └── layout/             # 布局组件
│   ├── lib/                    # 工具函数和配置
│   └── types/                  # TypeScript类型定义
├── public/                     # 静态资源
├── docs/                       # 项目文档
└── tests/                      # 测试文件
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
