#!/bin/bash

# Git 工作流设置脚本
# 用于配置项目的Git工作流

echo "🚀 设置Git工作流..."

# 检查是否在Git仓库中
if [ ! -d ".git" ]; then
    echo "❌ 错误：当前目录不是Git仓库"
    exit 1
fi

# 设置Git配置
echo "📝 配置Git设置..."

# 设置默认分支为main
git config init.defaultBranch main

# 设置推送策略
git config push.default simple

# 启用颜色输出
git config color.ui auto

# 设置有用的别名
git config alias.st status
git config alias.co checkout
git config alias.br branch
git config alias.ci commit
git config alias.unstage 'reset HEAD --'
git config alias.last 'log -1 HEAD'
git config alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

echo "✅ Git配置完成"

# 检查当前分支
current_branch=$(git branch --show-current)
echo "📍 当前分支: $current_branch"

# 如果当前是main分支，创建develop分支
if [ "$current_branch" = "main" ]; then
    echo "🌿 创建develop分支..."
    git checkout -b develop
    echo "✅ develop分支创建完成"
    git checkout main
else
    echo "ℹ️  当前不在main分支，跳过develop分支创建"
fi

# 显示分支状态
echo ""
echo "📊 当前分支状态:"
git branch -a

echo ""
echo "📋 提交历史 (最近5次):"
git log --oneline -5

echo ""
echo "🎉 Git工作流设置完成！"
echo ""
echo "📚 下一步："
echo "1. 阅读 docs/GIT_WORKFLOW.md 了解详细工作流"
echo "2. 创建功能分支开始开发: git checkout -b feature/your-feature"
echo "3. 遵循Conventional Commits规范提交代码"
echo ""
echo "💡 提示："
echo "- 使用 'git st' 查看状态"
echo "- 使用 'git lg' 查看美化后的提交历史"
echo "- 使用 'git last' 查看最后一次提交"
