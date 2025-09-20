# 🚀 开发指南 - 快速参考

> **⚠️ 重要**: 这是项目的快速参考指南。完整的开发准则请查阅 [开发总纲 - 核心开发细则](./docs/DEVELOPMENT_PRINCIPLES.md)

## 📋 开发前必读

### 1. 核心原则
- **单一职责**: 每个组件只做一件事
- **依赖注入**: 所有外部依赖通过 props 传入
- **受控组件**: 表单组件由父组件控制
- **错误处理**: 所有可能失败的操作都要有错误处理

### 2. 强制要求
- ✅ 每个组件必须有完整的 JSDoc 注释
- ✅ 所有组件必须通过 props 传入依赖
- ✅ 必须包含错误处理逻辑
- ✅ 必须使用语义化 HTML 标签
- ✅ 必须编写单元测试

### 3. 禁止事项
- ❌ 组件内部直接调用 API
- ❌ 使用 dangerouslySetInnerHTML
- ❌ 创建"万能组件"
- ❌ 提交敏感信息到 Git

## 🛠️ 快速命令

```bash
# 启动开发服务器
npm run dev

# 代码检查
npm run lint

# 自动修复
npm run lint:fix

# 类型检查
npm run type-check

# 运行测试
npm run test

# 构建项目
npm run build
```

## 📁 项目结构

```
web6/
├── docs/                           # 项目文档
│   ├── DEVELOPMENT_PRINCIPLES.md   # 开发总纲 ⭐
│   ├── GIT_WORKFLOW.md            # Git工作流
│   └── ARCHITECTURE.md            # 架构文档
├── src/
│   ├── app/                       # Next.js App Router
│   ├── components/                # 组件库
│   │   ├── ui/                    # 基础UI组件
│   │   └── layout/                # 布局组件
│   ├── lib/                       # 工具函数
│   └── types/                     # 类型定义
├── content/                       # 内容管理
└── scripts/                       # 脚本文件
```

## 🎯 开发流程

1. **查阅总纲**: 先读 [开发总纲](./docs/DEVELOPMENT_PRINCIPLES.md)
2. **创建分支**: `git checkout -b feature/your-feature`
3. **编写代码**: 遵循所有开发原则
4. **添加测试**: 为组件编写单元测试
5. **提交代码**: 使用 Conventional Commits 规范
6. **创建PR**: 通过 Pull Request 审查

## 📚 重要文档

- [开发总纲 - 核心开发细则](./docs/DEVELOPMENT_PRINCIPLES.md) ⭐ **必读**
- [架构文档](./ARCHITECTURE.md)
- [Git工作流](./docs/GIT_WORKFLOW.md)
- [项目总结](./PROJECT_SUMMARY.md)

## 🚨 紧急联系

如有任何开发问题，请：
1. 查阅 [开发总纲](./docs/DEVELOPMENT_PRINCIPLES.md)
2. 检查 [架构文档](./ARCHITECTURE.md)
3. 联系项目负责人

---

**记住**: 质量第一，遵循原则，持续改进！
