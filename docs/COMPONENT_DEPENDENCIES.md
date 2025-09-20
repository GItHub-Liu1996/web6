# 组件依赖关系详细记录

## 📋 概述

本文档详细记录了每个组件、页面和功能的依赖关系，包括使用的"轮子"（第三方库）、内部依赖、工具函数和常量配置。

## 🏗️ 当前已实现组件

### 1. UI组件库 (src/components/ui/)

#### Button.tsx
**依赖关系**:
- **直接依赖**: 
  - `React.forwardRef` - React核心
  - `cn` - 来自 `@/lib/utils`
- **使用工具函数**: 
  - `cn()` - 类名合并
- **使用常量**: 无
- **测试文件**: `Button.test.tsx`
- **Storybook**: 规划中

**功能**:
- 多种变体样式 (default, destructive, outline, secondary, ghost, link)
- 多种尺寸 (default, sm, lg, icon)
- 加载状态支持
- 无障碍设计

#### Input.tsx
**依赖关系**:
- **直接依赖**: 
  - `React.forwardRef` - React核心
  - `cn` - 来自 `@/lib/utils`
- **使用工具函数**: 
  - `cn()` - 类名合并
- **使用常量**: 无
- **测试文件**: 规划中
- **Storybook**: 规划中

**功能**:
- 多种变体样式 (default, error, success)
- 多种尺寸 (default, sm, lg)
- 错误状态支持
- 标签和帮助文本
- 无障碍设计

#### Card.tsx
**依赖关系**:
- **直接依赖**: 
  - `React.forwardRef` - React核心
  - `cn` - 来自 `@/lib/utils`
- **使用工具函数**: 
  - `cn()` - 类名合并
- **使用常量**: 无
- **测试文件**: 规划中
- **Storybook**: 规划中

**功能**:
- 多种变体样式 (default, outlined, elevated)
- 可点击状态
- 子组件: CardHeader, CardTitle, CardDescription, CardContent, CardFooter

### 2. 布局组件 (src/components/layout/)

#### Header.tsx
**依赖关系**:
- **直接依赖**: 
  - `Link` - 来自 `next/link`
  - `Button` - 来自 `@/components/ui/Button`
  - `cn` - 来自 `@/lib/utils`
- **使用工具函数**: 
  - `cn()` - 类名合并
- **使用常量**: 
  - `SITE_CONFIG` - 来自 `@/lib/constants`
- **测试文件**: 规划中
- **Storybook**: 规划中

**功能**:
- 响应式导航菜单
- Logo和品牌展示
- 联系按钮
- 移动端菜单按钮

#### Footer.tsx
**依赖关系**:
- **直接依赖**: 
  - `Link` - 来自 `next/link`
  - `cn` - 来自 `@/lib/utils`
- **使用工具函数**: 
  - `cn()` - 类名合并
- **使用常量**: 
  - `SITE_CONFIG` - 来自 `@/lib/constants`
- **测试文件**: 规划中
- **Storybook**: 规划中

**功能**:
- 公司信息展示
- 链接组导航
- 社交媒体链接
- 版权信息

### 3. 页面组件 (src/app/)

#### layout.tsx (根布局)
**依赖关系**:
- **直接依赖**: 
  - `Metadata` - 来自 `next`
  - `Geist`, `Geist_Mono` - 来自 `next/font/google`
  - `Header` - 来自 `@/components/layout/Header`
  - `Footer` - 来自 `@/components/layout/Footer`
- **使用常量**: 
  - `SITE_CONFIG` - 来自 `@/lib/constants`
- **配置**: 
  - 字体配置
  - SEO元数据
  - 全局样式

#### page.tsx (首页)
**依赖关系**:
- **直接依赖**: 
  - `Link` - 来自 `next/link`
  - `Button` - 来自 `@/components/ui/Button`
  - `Card` - 来自 `@/components/ui/Card`
- **使用常量**: 
  - `SITE_CONFIG` - 来自 `@/lib/constants`
  - `SERVICE_TYPES` - 来自 `@/lib/constants`
- **功能**:
  - 英雄区域
  - 服务展示
  - 优势展示
  - 统计数据
  - 行动号召

## 🔧 工具函数依赖 (src/lib/)

### utils.ts
**依赖关系**:
- **直接依赖**: 
  - `clsx` - 第三方库
  - `tailwind-merge` - 第三方库
- **导出函数**:
  - `cn()` - 类名合并
  - `formatDate()` - 日期格式化
  - `slugify()` - URL slug生成
  - `truncate()` - 文本截断
  - `isValidEmail()` - 邮箱验证
  - `isValidPhone()` - 手机号验证

### constants.ts
**依赖关系**:
- **直接依赖**: 无
- **导出常量**:
  - `SUPPORTED_LOCALES` - 支持的语言
  - `BLOG_CATEGORIES` - 博客分类
  - `SERVICE_TYPES` - 服务类型
  - `COUNTRIES` - 国家列表
  - `BUDGET_RANGES` - 预算范围
  - `TIMELINE_OPTIONS` - 时间线选项
  - `SITE_CONFIG` - 网站配置
  - `PAGINATION` - 分页配置
  - `VALIDATION_RULES` - 验证规则
  - `UPLOAD_CONFIG` - 上传配置
  - `CACHE_CONFIG` - 缓存配置
  - `ERROR_MESSAGES` - 错误消息
  - `SUCCESS_MESSAGES` - 成功消息

### types/index.ts
**依赖关系**:
- **直接依赖**: 无
- **导出类型**:
  - `BlogPost` - 博客文章类型
  - `Service` - 服务类型
  - `ContactFormData` - 联系表单数据类型
  - `Testimonial` - 用户反馈类型
  - `FAQ` - 常见问题类型
  - `SiteConfig` - 网站配置类型
  - `Locale` - 多语言支持类型
  - `ApiResponse` - API响应类型
  - `PaginationParams` - 分页参数类型
  - `PaginatedResponse` - 分页响应类型

## 📦 第三方依赖详细记录

### 生产依赖 (Production Dependencies)

#### Next.js 生态系统
| 包名 | 版本 | 用途 | 使用位置 | 备注 |
|------|------|------|----------|------|
| `next` | 15.5.3 | React框架 | 全项目 | 核心框架，提供SSR/SSG |
| `react` | 19.1.0 | UI库 | 全项目 | React核心库 |
| `react-dom` | 19.1.0 | DOM渲染 | 全项目 | React DOM渲染器 |

#### 样式和UI
| 包名 | 版本 | 用途 | 使用位置 | 备注 |
|------|------|------|----------|------|
| `tailwindcss` | ^4 | CSS框架 | 全项目 | 原子化CSS框架 |
| `@tailwindcss/postcss` | ^4 | PostCSS插件 | 全项目 | Tailwind CSS处理 |
| `clsx` | ^2.0.0 | 类名合并 | src/lib/utils.ts | 条件类名处理 |
| `tailwind-merge` | ^2.0.0 | 类名冲突解决 | src/lib/utils.ts | Tailwind类名优化 |

#### 内容管理
| 包名 | 版本 | 用途 | 使用位置 | 备注 |
|------|------|------|----------|------|
| `gray-matter` | ^4.0.3 | Frontmatter解析 | 规划中 | Markdown元数据解析 |
| `remark` | ^15.0.1 | Markdown处理 | 规划中 | Markdown解析器 |
| `remark-html` | ^16.0.1 | HTML转换 | 规划中 | Markdown转HTML |

#### 国际化
| 包名 | 版本 | 用途 | 使用位置 | 备注 |
|------|------|------|----------|------|
| `next-intl` | ^3.0.0 | 国际化 | 规划中 | 多语言支持 |

### 开发依赖 (Development Dependencies)

#### 代码质量
| 包名 | 版本 | 用途 | 使用位置 | 备注 |
|------|------|------|----------|------|
| `typescript` | ^5.9.2 | 类型系统 | 全项目 | TypeScript编译器 |
| `eslint` | ^9 | 代码检查 | 全项目 | JavaScript/TypeScript检查 |
| `eslint-config-next` | 15.5.3 | Next.js ESLint配置 | 全项目 | Next.js专用规则 |
| `eslint-plugin-jsx-a11y` | ^6.8.0 | 可访问性检查 | 全项目 | JSX可访问性规则 |
| `prettier` | ^3.0.0 | 代码格式化 | 全项目 | 代码格式化工具 |

#### 测试
| 包名 | 版本 | 用途 | 使用位置 | 备注 |
|------|------|------|----------|------|
| `jest` | ^29.0.0 | 测试框架 | 全项目 | JavaScript测试框架 |
| `@testing-library/react` | ^14.0.0 | React测试工具 | src/components/__tests__ | React组件测试 |
| `@testing-library/jest-dom` | ^6.0.0 | Jest DOM匹配器 | jest.setup.js | DOM测试增强 |
| `jest-environment-jsdom` | ^29.0.0 | JSDOM环境 | jest.config.js | 浏览器环境模拟 |
| `@types/jest` | ^29.0.0 | Jest类型定义 | 全项目 | TypeScript支持 |

#### 类型定义
| 包名 | 版本 | 用途 | 使用位置 | 备注 |
|------|------|------|----------|------|
| `@types/node` | ^20 | Node.js类型定义 | 全项目 | Node.js API类型 |
| `@types/react` | ^19 | React类型定义 | 全项目 | React组件类型 |
| `@types/react-dom` | ^19 | React DOM类型定义 | 全项目 | React DOM类型 |

## 🚀 规划中的组件依赖

### 1. 博客组件 (src/components/blog/)

#### BlogCard.tsx (规划中)
**预期依赖**:
- **直接依赖**: 
  - `Card` - 来自 `@/components/ui/Card`
  - `Button` - 来自 `@/components/ui/Button`
  - `Link` - 来自 `next/link`
- **使用工具函数**: 
  - `cn()` - 类名合并
  - `formatDate()` - 日期格式化
  - `slugify()` - URL slug生成
  - `truncate()` - 文本截断
- **使用常量**: 
  - `BLOG_CATEGORIES` - 博客分类
  - `SITE_CONFIG` - 网站配置
- **使用类型**: 
  - `BlogPost` - 博客文章类型

#### BlogList.tsx (规划中)
**预期依赖**:
- **直接依赖**: 
  - `BlogCard` - 来自 `@/components/blog/BlogCard`
  - `Button` - 来自 `@/components/ui/Button`
- **使用工具函数**: 
  - `cn()` - 类名合并
- **使用常量**: 
  - `PAGINATION` - 分页配置
  - `BLOG_CATEGORIES` - 博客分类
- **使用类型**: 
  - `BlogPost[]` - 博客文章数组
  - `PaginatedResponse<BlogPost>` - 分页响应

### 2. 表单组件 (src/components/forms/)

#### ContactForm.tsx (规划中)
**预期依赖**:
- **直接依赖**: 
  - `Input` - 来自 `@/components/ui/Input`
  - `Button` - 来自 `@/components/ui/Button`
  - `Card` - 来自 `@/components/ui/Card`
- **使用工具函数**: 
  - `cn()` - 类名合并
  - `isValidEmail()` - 邮箱验证
  - `isValidPhone()` - 手机号验证
- **使用常量**: 
  - `VALIDATION_RULES` - 验证规则
  - `COUNTRIES` - 国家列表
  - `SERVICE_TYPES` - 服务类型
  - `BUDGET_RANGES` - 预算范围
  - `TIMELINE_OPTIONS` - 时间线选项
- **使用类型**: 
  - `ContactFormData` - 联系表单数据类型

### 3. 业务组件 (src/components/business/)

#### ServiceCard.tsx (规划中)
**预期依赖**:
- **直接依赖**: 
  - `Card` - 来自 `@/components/ui/Card`
  - `Button` - 来自 `@/components/ui/Button`
- **使用工具函数**: 
  - `cn()` - 类名合并
- **使用常量**: 
  - `SERVICE_TYPES` - 服务类型
- **使用类型**: 
  - `Service` - 服务类型

## 📋 依赖管理最佳实践

### 1. 新增依赖时
- [ ] 评估依赖的必要性
- [ ] 检查版本兼容性
- [ ] 更新package.json
- [ ] 记录使用位置和用途
- [ ] 更新本文档
- [ ] 运行 `npm audit` 检查安全漏洞

### 2. 移除依赖时
- [ ] 确认没有组件在使用
- [ ] 从package.json中移除
- [ ] 更新本文档
- [ ] 测试确保没有破坏性更改

### 3. 更新依赖时
- [ ] 检查更新日志
- [ ] 测试兼容性
- [ ] 更新版本号
- [ ] 更新本文档
- [ ] 运行测试确保功能正常

## 🔍 依赖冲突解决

### 1. 常见冲突
- **React版本冲突**: 确保所有React相关包版本一致
- **TypeScript版本冲突**: 使用 `--legacy-peer-deps` 安装
- **ESLint规则冲突**: 检查配置文件优先级

### 2. 解决方案
- 使用 `npm ls` 检查依赖树
- 使用 `npm audit` 检查安全漏洞
- 使用 `npm outdated` 检查可更新依赖
- 必要时使用 `--legacy-peer-deps` 安装

---

**文档版本**: v1.0.0  
**最后更新**: 2024年1月  
**维护者**: 开发团队
