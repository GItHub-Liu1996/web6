# 依赖轮子使用记录表

## 📋 概述

本文档详细记录项目中使用的每个"轮子"（第三方库）的具体用途、使用位置、版本信息和注意事项。

## 🎯 核心轮子 (Core Wheels)

### 1. Next.js 生态系统

#### next (15.5.3)
**用途**: React全栈框架
**使用位置**: 全项目
**具体功能**:
- App Router路由系统
- 服务端渲染 (SSR)
- 静态站点生成 (SSG)
- API路由
- 图片优化
- 字体优化
- 代码分割

**使用示例**:
```typescript
// src/app/layout.tsx
import type { Metadata } from "next";

// src/app/page.tsx
export default function Home() {
  return <div>首页内容</div>;
}

// src/app/api/contact/route.ts (规划中)
export async function POST(request: Request) {
  // API处理逻辑
}
```

**注意事项**:
- 使用App Router而非Pages Router
- 优先使用SSG而非SSR
- 使用next/image优化图片

#### react (19.1.0)
**用途**: UI库核心
**使用位置**: 全项目
**具体功能**:
- 组件化开发
- 状态管理
- 生命周期管理
- 事件处理

**使用示例**:
```typescript
// src/components/ui/Button.tsx
import React from 'react';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
```

**注意事项**:
- 使用React 19新特性
- 优先使用函数组件
- 使用forwardRef处理ref

#### react-dom (19.1.0)
**用途**: DOM渲染器
**使用位置**: 全项目
**具体功能**:
- DOM操作
- 事件系统
- 渲染优化

**使用示例**:
```typescript
// 自动使用，无需显式导入
// Next.js自动处理DOM渲染
```

## 🎨 样式轮子 (Styling Wheels)

### 1. Tailwind CSS 生态系统

#### tailwindcss (^4)
**用途**: 原子化CSS框架
**使用位置**: 全项目
**具体功能**:
- 原子化CSS类
- 响应式设计
- 主题系统
- 暗色模式支持

**使用示例**:
```typescript
// src/components/ui/Button.tsx
<button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
  {children}
</button>
```

**配置文件**: `postcss.config.mjs`
**注意事项**:
- 使用Tailwind 4.0新特性
- 优先使用内置类名
- 避免自定义CSS

#### @tailwindcss/postcss (^4)
**用途**: PostCSS插件
**使用位置**: 构建过程
**具体功能**:
- CSS处理
- 类名优化
- 未使用类名清理

**配置文件**: `postcss.config.mjs`
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

#### clsx (^2.0.0)
**用途**: 条件类名合并
**使用位置**: `src/lib/utils.ts`
**具体功能**:
- 条件类名处理
- 类名数组合并
- 对象形式类名

**使用示例**:
```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 使用示例
<button className={cn(
  'base-styles',
  variant === 'default' && 'default-styles',
  size === 'lg' && 'large-styles',
  className
)}>
```

**注意事项**:
- 与tailwind-merge配合使用
- 支持多种输入格式

#### tailwind-merge (^2.0.0)
**用途**: Tailwind类名冲突解决
**使用位置**: `src/lib/utils.ts`
**具体功能**:
- 类名冲突检测
- 智能类名合并
- Tailwind优化

**使用示例**:
```typescript
// src/lib/utils.ts
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 解决冲突示例
cn('px-2 py-1', 'px-4') // 返回 'py-1 px-4'
```

**注意事项**:
- 自动解决Tailwind类名冲突
- 保持最后定义的类名

## 📝 内容管理轮子 (Content Wheels)

### 1. Markdown处理

#### gray-matter (^4.0.3)
**用途**: Frontmatter解析
**使用位置**: 规划中 - `src/lib/content.ts`
**具体功能**:
- Markdown文件元数据解析
- YAML/JSON Frontmatter支持
- 内容分离

**使用示例**:
```typescript
// src/lib/content.ts (规划中)
import matter from 'gray-matter';

export function parseMarkdown(content: string) {
  const { data, content: markdown } = matter(content);
  return {
    frontmatter: data,
    content: markdown
  };
}
```

**注意事项**:
- 支持YAML和JSON格式
- 自动解析Frontmatter

#### remark (^15.0.1)
**用途**: Markdown解析器
**使用位置**: 规划中 - `src/lib/content.ts`
**具体功能**:
- Markdown语法解析
- AST生成
- 插件系统

**使用示例**:
```typescript
// src/lib/content.ts (规划中)
import { remark } from 'remark';

export function parseMarkdownToAST(content: string) {
  const processor = remark();
  return processor.parse(content);
}
```

**注意事项**:
- 强大的插件生态
- 支持自定义处理

#### remark-html (^16.0.1)
**用途**: Markdown转HTML
**使用位置**: 规划中 - `src/lib/content.ts`
**具体功能**:
- Markdown转HTML
- 安全HTML输出
- 自定义渲染

**使用示例**:
```typescript
// src/lib/content.ts (规划中)
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export async function markdownToHtml(content: string) {
  const processor = remark().use(remarkHtml);
  const result = await processor.process(content);
  return result.toString();
}
```

**注意事项**:
- 自动转义HTML
- 支持自定义渲染器

## 🌐 国际化轮子 (i18n Wheels)

### 1. 多语言支持

#### next-intl (^3.0.0)
**用途**: Next.js国际化
**使用位置**: 规划中 - 全项目
**具体功能**:
- 多语言路由
- 翻译文件管理
- 类型安全翻译
- SEO优化

**使用示例**:
```typescript
// src/app/[locale]/layout.tsx (规划中)
import { NextIntlClientProvider } from 'next-intl';

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <NextIntlClientProvider locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}

// 组件中使用
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('Navigation');
  return <h1>{t('title')}</h1>;
}
```

**配置文件**: `next.config.ts`
**注意事项**:
- 与App Router完美集成
- 支持类型安全翻译
- 自动SEO优化

## 🧪 测试轮子 (Testing Wheels)

### 1. 测试框架

#### jest (^29.0.0)
**用途**: JavaScript测试框架
**使用位置**: 全项目
**具体功能**:
- 单元测试
- 集成测试
- 快照测试
- 覆盖率报告

**配置文件**: `jest.config.js`
```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

**使用示例**:
```typescript
// src/components/ui/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });
});
```

#### @testing-library/react (^14.0.0)
**用途**: React组件测试工具
**使用位置**: `src/components/__tests__/`
**具体功能**:
- 组件渲染测试
- 用户交互测试
- 可访问性测试
- 查询元素

**使用示例**:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';

test('button click triggers callback', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### @testing-library/jest-dom (^6.0.0)
**用途**: Jest DOM匹配器
**使用位置**: `jest.setup.js`
**具体功能**:
- DOM断言匹配器
- 可访问性断言
- 样式断言

**配置文件**: `jest.setup.js`
```javascript
import '@testing-library/jest-dom';
```

**使用示例**:
```typescript
expect(screen.getByRole('button')).toBeInTheDocument();
expect(screen.getByRole('button')).toBeDisabled();
expect(screen.getByRole('button')).toHaveClass('btn-primary');
```

## 🔧 开发工具轮子 (Dev Tools Wheels)

### 1. 代码质量

#### typescript (^5.9.2)
**用途**: TypeScript编译器
**使用位置**: 全项目
**具体功能**:
- 类型检查
- 编译转换
- 类型定义
- 智能提示

**配置文件**: `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### eslint (^9)
**用途**: JavaScript/TypeScript代码检查
**使用位置**: 全项目
**具体功能**:
- 代码质量检查
- 风格一致性
- 错误检测
- 最佳实践

**配置文件**: `eslint.config.mjs`
```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;
```

#### prettier (^3.0.0)
**用途**: 代码格式化
**使用位置**: 全项目
**具体功能**:
- 代码格式化
- 风格统一
- 自动修复
- 配置灵活

**配置文件**: `.prettierrc`
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf",
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "jsxSingleQuote": true,
  "quoteProps": "as-needed"
}
```

## 📊 轮子使用统计

### 1. 按类别统计

| 类别 | 轮子数量 | 主要用途 |
|------|----------|----------|
| 核心框架 | 3 | React, Next.js, TypeScript |
| 样式系统 | 4 | Tailwind CSS, PostCSS, 类名工具 |
| 内容管理 | 3 | Markdown处理 |
| 国际化 | 1 | 多语言支持 |
| 测试工具 | 3 | Jest, Testing Library |
| 开发工具 | 3 | ESLint, Prettier, 类型检查 |

### 2. 按使用状态统计

| 状态 | 轮子数量 | 说明 |
|------|----------|------|
| 已使用 | 8 | 当前项目中正在使用 |
| 规划中 | 4 | 计划在后续开发中使用 |
| 测试中 | 3 | 测试相关轮子 |

### 3. 按重要性统计

| 重要性 | 轮子数量 | 说明 |
|--------|----------|------|
| 核心 | 3 | 项目基础，不可移除 |
| 重要 | 5 | 主要功能，建议保留 |
| 可选 | 2 | 增强功能，可考虑移除 |

## 🚨 轮子管理最佳实践

### 1. 新增轮子时
- [ ] 评估轮子的必要性
- [ ] 检查版本兼容性
- [ ] 查看维护状态和社区活跃度
- [ ] 检查安全漏洞
- [ ] 更新本文档
- [ ] 添加使用示例

### 2. 更新轮子时
- [ ] 查看更新日志
- [ ] 测试兼容性
- [ ] 检查破坏性更改
- [ ] 更新文档
- [ ] 运行测试确保功能正常

### 3. 移除轮子时
- [ ] 确认没有组件在使用
- [ ] 检查依赖关系
- [ ] 更新package.json
- [ ] 更新本文档
- [ ] 测试确保没有破坏性更改

### 4. 安全审计
- [ ] 定期运行 `npm audit`
- [ ] 检查已知漏洞
- [ ] 更新有安全问题的轮子
- [ ] 考虑使用 `npm audit fix`

---

**文档版本**: v1.0.0  
**最后更新**: 2024年1月  
**维护者**: 开发团队
