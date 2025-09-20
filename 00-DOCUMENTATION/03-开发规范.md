# 开发总纲 - 核心开发细则

> **重要提示**: 这是本项目的最高开发准则，所有开发工作都必须严格遵循此总纲。每次开发前请务必查阅此文档。

## 🎯 项目角色与目标

### 角色分工
- **用户角色**: 领航员与总设计师 (Lead Architect) - 负责制定架构、设计原则、分解任务和最终决策
- **AI角色**: 天才实习生与高效执行者 (Genius Intern & Executor) - 负责在指导下提供高质量、符合规范的代码实现与文档撰写

### 共同目标
构建一个健壮、可维护、可演进的高质量网站，从根源上杜绝"一改就崩"的脆弱性问题。

## 📋 四章核心开发细则

### 第一章：设计思想原则 (The Principles of Design)

#### 1.1 单一职责原则 (SRP)
- 每个组件都必须只关注一个核心功能
- 功能复杂时必须主动提议拆分为更小的、职责单一的组件

#### 1.2 依赖注入原则 (The Props-Driven Principle)
**【黄金规则】** 任何组件都禁止其内部直接包含数据获取逻辑（如 API 请求）或依赖未通过 Props 传入的全局状态。所有外部依赖都必须通过 props 明确传入。

#### 1.3 组合优于配置原则 (Composition over Configuration)
- 优先考虑使用 children prop 或其他"插槽"模式
- 避免创建拥有大量布尔类型 props 的"万能组件"

#### 1.4 状态提升原则 (Lifting State Up)
- 多个子组件需要共享状态时，必须将该状态置于它们最近的共同父组件中
- 通过 props 向下分发状态

#### 1.5 受控组件原则 (Controlled Components)
- 所有表单和输入类组件必须设计为"受控组件"
- 值和状态由父组件通过 props 控制

#### 1.6 错误处理原则 (Error Handling)
- 所有可能失败的操作（尤其是 API 请求）都必须包含明确的错误处理逻辑
- 必须提议一个友好的、可复用的错误提示 UI 组件方案

#### 1.7 状态管理原则 (State Management)
- 简单、跨组件层级不深的全局状态：使用 React Context API
- 复杂、涉及全应用的状态：讨论并选择轻量级状态管理库（如 Zustand）
- 禁止在未经讨论的情况下擅自引入状态管理库

#### 1.8 测试策略 (Testing Strategy)
- 每个核心 UI 组件都必须编写基础的单元测试文件
- 使用 React Testing Library 和 Vitest/Jest

### 第二章：开发工作流程 (The Development Workflow)

#### 2.1 Git 分支隔离
- 在独立的 Git 功能分支上进行所有开发工作

#### 2.2 Storybook 优先开发
- 所有通用 UI 组件必须能够在 Storybook 的隔离环境中运行
- 可能要求为组件创建或更新 .stories.tsx 文件

#### 2.3 合并与审查
- 所有代码最终会通过合并请求（Pull Request）进入主分支
- 这是保证质量的关键环节

### 第三章：AI 协作规约 (The AI Collaboration Protocol)

#### 3.1 指令遵从
- 本指令集是最高准则
- 如果后续指令与本纲要冲突，可以在执行前提出确认

#### 3.2 任务分解
- 生成的代码必须与提出的具体、细分的任务相对应
- 禁止对任务范围之外的文件或代码进行任何未经请求的修改

#### 3.3 迭代式审查
- 生成代码后进行审查，可能提出重构要求
- 必须根据审查意见进行修改，将此视为学习和校准的过程

#### 3.4 上下文引用
- 当使用 @ 符号引用项目文件（如 @/components/Button.tsx）或文档（如 @/ARCHITECTURE.md）时，必须将引用的内容作为当前任务最关键的上下文

### 第四章：文档与记录策略 (The Documentation Strategy)

#### 4.1 高层级架构文档 (ARCHITECTURE.md)
- 维护核心架构文档 ARCHITECTURE.md，用于记录项目的"为什么"
- 完成重要功能或做出技术决策后，根据讨论为该文档生成或更新内容
- 特别是"架构决策记录 (ADR)"

#### 4.2 低层级组件文档 (JSDoc)
**【强制要求】** 生成的每一个 React 组件，都必须在其代码上方包含 JSDoc 格式的注释。

JSDoc 注释必须清晰地说明该组件的用途，并为每一个 prop 提供详细的描述、类型和默认值。

**JSDoc 示例格式:**
```typescript
interface MyComponentProps {
  /**
   * 对这个 prop 的详细中文描述
   * @default '默认值'
   */
  myProp: string;
}

/**
 * 对这个组件用途的详细中文描述。
 * 说明它在什么场景下使用。
 */
export const MyComponent = ({ myProp = '默认值' }: MyComponentProps) => {
  // ... 组件实现
};
```

#### 4.3 依赖库记录
- 所有项目依赖及其版本由 package.json 文件自动管理
- 对于引入的关键第三方库（如 next-intl），在 ARCHITECTURE.md 中记录选择它的用途和理由

### 第五章：环境与配置管理 (Environment & Configuration)

#### 5.1 环境分离原则 (Environment Separation)
项目必须区分至少三种环境：
- **开发环境 (Development)**: 本地电脑，用于日常开发
- **预览/测试环境 (Staging/Preview)**: 临时的、公开可访问的网址，用于在上线前预览和测试新功能
- **生产环境 (Production)**: 正式线上网站，面向所有用户

#### 5.2 敏感信息管理原则 (Secrets Management)
**【黄金规则】** 禁止将任何包含密码、API 密钥 (API Keys)、数据库连接字符串等敏感信息的文件（如 .env）提交到 Git 仓库。

- 必须使用 .env.local 文件来存储本地开发时使用的密钥
- 确保 .env.local 已经被添加到了 .gitignore 文件中
- 生产环境的密钥，必须通过 Vercel 平台的"环境变量 (Environment Variables)"设置界面进行安全配置

### 第六章：安全性原则 (Security)

#### 6.1 依赖安全审查原则 (Dependency Security)
- 项目依赖的所有第三方"轮子"(npm 包) 都可能存在安全漏洞
- 必须定期（至少每月一次）在项目根目录运行 npm audit 命令，检查并修复已知的依赖漏洞
- 如果项目托管在 GitHub，强烈建议开启 Dependabot 功能

#### 6.2 输入验证与输出编码原则 (Input Validation & Output Encoding)
- **永不信任用户输入**：所有来自用户提交的数据（如表单、URL参数），在被后端处理前，必须经过严格的格式和内容验证
- **利用框架特性**：React 默认会对 JSX 中渲染的内容进行编码，能有效防止大部分 XSS (跨站脚本) 攻击
- 必须了解并依赖此特性，避免使用 dangerouslySetInnerHTML 等危险 API

### 第七章：性能监控与优化 (Performance)

#### 7.1 性能可度量原则 (Measurable Performance)
- 网站性能不是"感觉快就好"，必须通过工具进行量化
- 关注 Google 的 核心网页指标 (Core Web Vitals)，包括 LCP, INP, CLS

#### 7.2 性能监控与分析
- 必须定期使用 Google PageSpeed Insights 对线上网站进行性能评估
- 强烈建议开启 Vercel Analytics 功能，提供真实用户的性能数据

#### 7.3 内置优化工具优先原则 (Prioritize Built-in Optimizations)
在进行性能优化时，必须优先使用 Next.js 框架内置的优化方案：
- **图片优化**: 必须使用 <Image> 组件 (next/image) 来处理所有图片
- **代码分割**: 对于大型组件或非首屏内容，必须使用 next/dynamic 进行动态加载

### 第八章：可访问性 (Accessibility - a11y)

#### 8.1 语义化 HTML 优先原则 (Semantic HTML First)
- 在编写 JSX 时，必须优先使用具有明确语义的 HTML 标签（如 <nav>, <main>, <article>, <button>），而不是滥用 <div> 和 <span>
- 所有交互式元素（如链接、按钮）必须是键盘可访问和可操作的

#### 8.2 自动化检查
- 强烈建议在项目中集成 eslint-plugin-jsx-a11y 这个 ESLint 插件
- 它可以在编码时，自动检查并提示常见的可访问性问题

## 🚨 强制执行规则

### 代码审查检查点
每次代码审查时必须检查：
1. ✅ 组件是否遵循单一职责原则
2. ✅ 是否通过 props 传入所有外部依赖
3. ✅ 是否包含完整的 JSDoc 注释
4. ✅ 是否包含错误处理逻辑
5. ✅ 是否遵循受控组件原则
6. ✅ 是否使用语义化 HTML 标签
7. ✅ 是否包含必要的测试

### 违反规则的后果
- 违反任何一条规则都必须立即修正
- 不允许"先提交，后修正"的做法
- 所有代码必须通过审查才能合并

## 📚 参考文档

- [ARCHITECTURE.md](../ARCHITECTURE.md) - 项目架构文档
- [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) - Git工作流规范
- [PROJECT_SUMMARY.md](../PROJECT_SUMMARY.md) - 项目总结

---

**重要提醒**: 此文档是项目开发的最高准则，所有开发工作都必须严格遵循。每次开发前请务必查阅此文档，确保理解和遵循所有规则。

**文档版本**: v1.0.0  
**最后更新**: 2024年1月  
**维护者**: 项目团队
