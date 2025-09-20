# 📚 GoChinaAdvisors (仮) 开发文档指南

## 🎯 概述

本文档是GoChinaAdvisors (仮)项目的**开发前必读指南**，帮助开发者快速了解项目中的所有文档及其职责。项目严格按照解决方案驱动、移动端优先、转化漏斗设计的核心哲学构建。

> **⚠️ 重要提醒**: 在开始任何开发工作前，请务必先阅读 [开发总纲 - 核心开发细则](./DEVELOPMENT_PRINCIPLES.md)，该文档包含了项目开发的最高准则和强制执行规则。

## 📋 文档分类与职责

### 🏗️ **核心架构文档**

#### 1. [ARCHITECTURE.md](../ARCHITECTURE.md) - 项目架构总纲
**职责**: 项目的核心架构文档，记录所有技术决策和"为什么"
**主要内容**:
- 项目目标与核心设计哲学
- 技术栈选择与理由
- 架构决策记录 (ADRs)
- 核心功能模块设计
- 开发规范与工作流程
- 组件库与设计系统
- 营销技术栈与Zoho生态集成
- 性能、安全、可访问性要求

**何时使用**: 技术决策、架构设计、新人入职必读

#### 2. [CODE_ARCHITECTURE.md](./CODE_ARCHITECTURE.md) - 代码架构与交互拓扑图
**职责**: 详细的代码结构、组件交互关系、依赖使用情况
**主要内容**:
- 整体架构图 (Mermaid图表)
- 详细代码结构 (页面、组件、工具)
- 组件交互拓扑图
- 数据流拓扑
- 用户交互路径
- API交互拓扑
- 响应式交互设计
- 性能优化策略
- 开发检查清单

**何时使用**: 代码开发、组件设计、架构理解

#### 3. [INTERACTION_TOPOLOGY.md](./INTERACTION_TOPOLOGY.md) - 交互拓扑图
**职责**: 网站交互拓扑结构，包括导航关系、数据流、用户路径
**主要内容**:
- 网站导航拓扑
- 页面间导航关系
- 组件交互拓扑
- 数据流拓扑
- 用户交互路径 (新用户、现有用户、服务咨询)
- API交互拓扑
- 响应式交互拓扑
- 内容转化飞轮交互
- 性能优化交互

**何时使用**: UI/UX设计、用户路径优化、转化漏斗设计

#### 4. [COMPONENT_DEPENDENCIES.md](./COMPONENT_DEPENDENCIES.md) - 组件依赖关系详细记录
**职责**: 记录每个组件、页面和功能的依赖关系
**主要内容**:
- 当前已实现组件依赖
- UI组件库依赖关系
- 布局组件依赖关系
- 业务组件依赖关系
- 页面组件依赖关系
- 工具函数依赖
- 类型定义依赖
- 常量配置依赖
- 第三方库依赖记录
- 规划中组件依赖

**何时使用**: 组件开发、依赖管理、故障排除

### 📖 **开发指导文档**

#### 5. [DEVELOPMENT_PRINCIPLES.md](./DEVELOPMENT_PRINCIPLES.md) - 开发总纲与核心开发细则
**职责**: 项目开发的最高准则和强制执行规则
**主要内容**:
- 设计思想原则 (SRP、依赖注入、组合优于配置等)
- 开发工作流程 (Git分支、Storybook、合并审查)
- AI协作规约 (指令遵从、任务分解、迭代审查)
- 文档与记录策略 (架构文档、JSDoc、依赖记录)
- 环境与配置管理 (环境分离、敏感信息管理)
- 安全性原则 (依赖安全、输入验证)
- 性能监控与优化 (可度量性能、监控分析)
- 可访问性要求 (语义化HTML、自动化检查)

**何时使用**: 开发前必读、代码审查、质量保证

#### 6. [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) - Git工作流程规范
**职责**: 标准化的Git工作流程和协作规范
**主要内容**:
- 分支策略 (main、develop、feature分支)
- 提交信息规范 (Conventional Commits)
- 代码审查流程
- 合并策略
- 发布流程
- 自动化脚本

**何时使用**: Git操作、团队协作、代码管理

#### 7. [DEVELOPMENT_GUIDE.md](../DEVELOPMENT_GUIDE.md) - 开发快速参考指南
**职责**: 开发者的快速参考手册
**主要内容**:
- 项目结构概览
- 开发环境设置
- 常用命令
- 调试技巧
- 最佳实践
- 常见问题解决

**何时使用**: 日常开发、快速查询、问题解决

### 📊 **项目状态文档**

#### 8. [PROJECT_RESTRUCTURE_SUMMARY.md](./PROJECT_RESTRUCTURE_SUMMARY.md) - 项目重构总结
**职责**: 记录GoChinaAdvisors (仮)项目重构的完整过程
**主要内容**:
- 重构背景与目标
- 核心设计哲学实施
- 网站信息架构优化
- 文件结构重构
- 新组件创建
- 页面内容策略实施
- 内容转化飞轮设计
- 技术实现细节
- 下一步开发计划

**何时使用**: 了解项目历史、重构背景、开发规划

#### 9. [STRATEGIC_OPTIMIZATION_V2.md](./STRATEGIC_OPTIMIZATION_V2.md) - 战略优化总结 (v2.0)
**职责**: 记录项目战略优化的实施情况
**主要内容**:
- 内容管理策略优化
- 国际化策略深化
- 营销技术栈集成
- Zoho生态集成方案
- 技术实现细节
- 安全考虑
- 性能优化

**何时使用**: 了解战略决策、技术选型、集成方案

#### 10. [ARCHITECTURE_OPTIMIZATION_SUMMARY.md](../ARCHITECTURE_OPTIMIZATION_SUMMARY.md) - 架构优化总结
**职责**: 记录架构优化的实施情况
**主要内容**:
- 项目结构优化
- 多语言支持策略
- 用户认证模块
- Git工作流规范
- 组件库与设计系统

**何时使用**: 了解架构演进、优化历史

### 🔧 **技术配置文档**

#### 11. [GITHUB_SETUP.md](./GITHUB_SETUP.md) - GitHub仓库配置
**职责**: GitHub仓库连接和配置说明
**主要内容**:
- 仓库连接步骤
- CI/CD自动化配置
- 协作模板设置
- 分支保护规则
- 自动化工作流

**何时使用**: 仓库管理、CI/CD配置、团队协作

#### 12. [README.md](../README.md) - 项目说明文档
**职责**: 项目的总体介绍和快速开始指南
**主要内容**:
- 项目概述
- 核心设计哲学
- 核心功能特性
- 技术栈
- 项目结构
- 快速开始
- 开发指南
- 项目状态

**何时使用**: 项目介绍、新人入门、快速了解

### 📚 **文档管理**

#### 13. [README.md](./README.md) - 文档中心索引
**职责**: 文档中心的导航和索引
**主要内容**:
- 文档分类导航
- 使用说明
- 维护指南
- 更新记录

**何时使用**: 文档查找、导航使用

## 🚀 开发工作流程

### 1. **开发前准备**
1. 阅读 [DEVELOPMENT_PRINCIPLES.md](./DEVELOPMENT_PRINCIPLES.md) - 核心开发细则
2. 阅读 [ARCHITECTURE.md](../ARCHITECTURE.md) - 项目架构总纲
3. 阅读 [CODE_ARCHITECTURE.md](./CODE_ARCHITECTURE.md) - 代码架构
4. 阅读 [INTERACTION_TOPOLOGY.md](./INTERACTION_TOPOLOGY.md) - 交互拓扑

### 2. **开发过程中**
1. 参考 [COMPONENT_DEPENDENCIES.md](./COMPONENT_DEPENDENCIES.md) - 组件依赖关系
2. 遵循 [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) - Git工作流程
3. 使用 [DEVELOPMENT_GUIDE.md](../DEVELOPMENT_GUIDE.md) - 开发参考

### 3. **开发完成后**
1. 更新相关文档
2. 提交代码审查
3. 更新项目状态文档

## 📋 文档使用检查清单

### 开发前必读
- [ ] [DEVELOPMENT_PRINCIPLES.md](./DEVELOPMENT_PRINCIPLES.md) - 核心开发细则
- [ ] [ARCHITECTURE.md](../ARCHITECTURE.md) - 项目架构总纲
- [ ] [CODE_ARCHITECTURE.md](./CODE_ARCHITECTURE.md) - 代码架构
- [ ] [INTERACTION_TOPOLOGY.md](./INTERACTION_TOPOLOGY.md) - 交互拓扑

### 开发中参考
- [ ] [COMPONENT_DEPENDENCIES.md](./COMPONENT_DEPENDENCIES.md) - 组件依赖关系
- [ ] [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) - Git工作流程
- [ ] [DEVELOPMENT_GUIDE.md](../DEVELOPMENT_GUIDE.md) - 开发参考

### 项目理解
- [ ] [PROJECT_RESTRUCTURE_SUMMARY.md](./PROJECT_RESTRUCTURE_SUMMARY.md) - 项目重构总结
- [ ] [STRATEGIC_OPTIMIZATION_V2.md](./STRATEGIC_OPTIMIZATION_V2.md) - 战略优化总结
- [ ] [README.md](../README.md) - 项目说明

## 🔍 快速查找指南

### 按开发阶段查找
- **项目理解**: README.md → ARCHITECTURE.md → PROJECT_RESTRUCTURE_SUMMARY.md
- **开发准备**: DEVELOPMENT_PRINCIPLES.md → CODE_ARCHITECTURE.md → INTERACTION_TOPOLOGY.md
- **开发过程**: COMPONENT_DEPENDENCIES.md → DEVELOPMENT_GUIDE.md → GIT_WORKFLOW.md
- **项目管理**: GITHUB_SETUP.md → STRATEGIC_OPTIMIZATION_V2.md

### 按问题类型查找
- **架构问题**: ARCHITECTURE.md → CODE_ARCHITECTURE.md
- **组件问题**: COMPONENT_DEPENDENCIES.md → CODE_ARCHITECTURE.md
- **交互问题**: INTERACTION_TOPOLOGY.md → CODE_ARCHITECTURE.md
- **开发规范**: DEVELOPMENT_PRINCIPLES.md → GIT_WORKFLOW.md
- **项目历史**: PROJECT_RESTRUCTURE_SUMMARY.md → ARCHITECTURE_OPTIMIZATION_SUMMARY.md

## 📝 文档维护指南

### 文档更新原则
1. **及时性**: 代码变更后及时更新相关文档
2. **准确性**: 确保文档内容与实际代码一致
3. **完整性**: 新功能开发时同步更新文档
4. **可读性**: 保持文档结构清晰、内容易懂

### 文档更新流程
1. 代码变更
2. 更新相关技术文档
3. 更新架构文档 (如需要)
4. 更新项目状态文档
5. 提交文档变更

### 文档质量检查
- [ ] 内容准确性
- [ ] 结构清晰性
- [ ] 链接有效性
- [ ] 格式一致性
- [ ] 更新及时性

## 🎯 总结

GoChinaAdvisors (仮)项目拥有完整的文档体系，从核心架构到具体实现，从开发规范到项目历史，为开发团队提供了全面的指导和支持。

**关键文档优先级**:
1. **最高优先级**: DEVELOPMENT_PRINCIPLES.md (开发前必读)
2. **高优先级**: ARCHITECTURE.md, CODE_ARCHITECTURE.md, INTERACTION_TOPOLOGY.md
3. **中优先级**: COMPONENT_DEPENDENCIES.md, GIT_WORKFLOW.md, DEVELOPMENT_GUIDE.md
4. **参考优先级**: 其他项目状态和技术配置文档

通过遵循这个文档指南，开发者可以快速了解项目结构，高效进行开发工作，确保代码质量和项目一致性。

---

**文档版本**: v1.0.0  
**最后更新**: 2024年1月  
**维护者**: 开发团队  
**项目**: GoChinaAdvisors (仮)
