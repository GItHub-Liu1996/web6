# GoChinaAdvisors (仮) 组件架构设计

## 📋 组件分类与设计原则

### 🎯 **设计原则**

1. **单一职责原则**: 每个组件只负责一个功能
2. **高度可复用**: UI组件应该可以在任何地方使用
3. **低耦合**: 组件之间尽量减少依赖关系
4. **组合优于继承**: 通过组合简单组件构建复杂功能
5. **移动端优先**: 所有组件都支持响应式设计

### 🏗️ **组件层次结构**

```
src/components/
├── ui/                    # 基础UI轮子组件 (高度可复用)
│   ├── Button.tsx         # 按钮组件
│   ├── Input.tsx          # 输入框组件
│   ├── Card.tsx           # 卡片组件
│   ├── Badge.tsx          # 徽章组件
│   ├── Separator.tsx      # 分割线组件
│   ├── Modal.tsx          # 模态框组件
│   ├── Toast.tsx          # 消息提示组件
│   ├── Loading.tsx        # 加载组件
│   ├── Avatar.tsx         # 头像组件
│   └── __tests__/         # 组件测试
├── layout/                 # 布局组件 (中等可复用)
│   ├── Container.tsx      # 响应式容器
│   ├── Grid.tsx           # 网格布局
│   ├── Stack.tsx          # 堆叠布局
│   ├── Header.tsx         # 页面头部 (特定用途)
│   ├── Footer.tsx         # 页面底部 (特定用途)
│   ├── Navigation.tsx     # 主导航 (特定用途)
│   └── MegaMenu.tsx       # 超级菜单 (特定用途)
├── forms/                  # 表单组件 (业务相关)
│   ├── ContactForm.tsx    # 联系表单
│   ├── NewsletterForm.tsx # 邮件订阅
│   └── SearchForm.tsx     # 搜索表单
├── content/                # 内容展示组件 (中等可复用)
│   ├── BlogCard.tsx       # 博客卡片
│   ├── CaseStudyCard.tsx  # 案例卡片
│   ├── ServiceCard.tsx    # 服务卡片
│   ├── TestimonialCard.tsx # 客户评价
│   └── FAQCard.tsx        # FAQ卡片
└── business/               # 业务特定组件 (低可复用)
    ├── PricingCard.tsx    # 价格卡片
    ├── SolutionCard.tsx   # 解决方案卡片
    └── IndustryCard.tsx    # 行业卡片
```

## 🎨 **UI轮子组件详细设计**

### 1. **Button 组件**
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
```

**特点**:
- 多种变体样式
- 多种尺寸
- 加载状态支持
- 无障碍设计
- 高度可复用

### 2. **Input 组件**
```typescript
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  label?: string;
  helpText?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}
```

**特点**:
- 多种输入类型
- 错误状态显示
- 标签和帮助文本
- 验证支持
- 高度可复用

### 3. **Card 组件**
```typescript
interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  clickable?: boolean;
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

**特点**:
- 多种样式变体
- 可点击状态
- 悬停效果
- 子组件支持
- 高度可复用

### 4. **Badge 组件**
```typescript
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  children: React.ReactNode;
  className?: string;
}
```

**特点**:
- 多种颜色变体
- 多种尺寸
- 标签显示
- 高度可复用

### 5. **Separator 组件**
```typescript
interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}
```

**特点**:
- 水平/垂直方向
- 简单分割线
- 高度可复用

## 🏗️ **布局组件详细设计**

### 1. **Container 组件**
```typescript
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
  className?: string;
}
```

**特点**:
- 响应式容器
- 多种尺寸
- 居中布局
- 中等可复用

### 2. **Grid 组件**
```typescript
interface GridProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}
```

**特点**:
- 响应式网格
- 多种列数
- 多种间距
- 中等可复用

### 3. **Stack 组件**
```typescript
interface StackProps {
  direction?: 'horizontal' | 'vertical';
  spacing?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'stretch';
  children: React.ReactNode;
  className?: string;
}
```

**特点**:
- 水平/垂直堆叠
- 多种间距
- 多种对齐方式
- 中等可复用

## 📝 **内容组件详细设计**

### 1. **BlogCard 组件**
```typescript
interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
  image?: string;
  variant?: 'default' | 'featured';
  className?: string;
}
```

**特点**:
- 博客文章展示
- 多种显示模式
- 分类和阅读时间
- 中等可复用

### 2. **CaseStudyCard 组件**
```typescript
interface CaseStudyCardProps {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  href: string;
  variant?: 'preview' | 'full';
  className?: string;
}
```

**特点**:
- 案例研究展示
- 多种显示模式
- 结构化内容
- 中等可复用

## 🔄 **组件开发流程**

### 1. **开发顺序**
1. **UI轮子组件** → 2. **布局组件** → 3. **内容组件** → 4. **业务组件**

### 2. **开发步骤**
1. 设计组件接口
2. 实现基础功能
3. 添加样式变体
4. 编写单元测试
5. 更新Storybook
6. 编写文档

### 3. **质量保证**
- 每个组件都有JSDoc注释
- 每个组件都有TypeScript类型定义
- 每个组件都有单元测试
- 每个组件都在Storybook中展示
- 每个组件都支持响应式设计

## 🎯 **组件使用原则**

### 1. **组合使用**
```tsx
// 好的做法：组合简单组件
<Card>
  <CardHeader>
    <Badge variant="secondary">分类</Badge>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>
    <p>内容</p>
  </CardContent>
  <CardFooter>
    <Button>操作</Button>
  </CardFooter>
</Card>
```

### 2. **避免过度抽象**
```tsx
// 避免：过度抽象的组件
<ComplexCard 
  type="blog"
  showImage={true}
  showCategory={true}
  showReadTime={true}
  showExcerpt={true}
  variant="featured"
  size="large"
  // ... 太多props
/>
```

### 3. **保持简单**
```tsx
// 好的做法：简单明确的组件
<BlogCard 
  title="标题"
  excerpt="摘要"
  category="分类"
  readTime="5分钟"
  href="/blog/slug"
/>
```

## 📋 **开发检查清单**

### 新增UI轮子组件时：
- [ ] 设计清晰的Props接口
- [ ] 实现多种变体样式
- [ ] 支持响应式设计
- [ ] 添加无障碍支持
- [ ] 编写单元测试
- [ ] 更新Storybook
- [ ] 编写使用文档

### 新增业务组件时：
- [ ] 基于UI轮子组件构建
- [ ] 保持业务逻辑简单
- [ ] 支持多种使用场景
- [ ] 编写使用示例
- [ ] 更新相关文档

---

**这个架构确保了组件的可复用性、可维护性和可扩展性，为后续开发提供了坚实的基础。**
