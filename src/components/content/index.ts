/**
 * 内容组件索引文件
 * 文件路径: src/components/content/index.ts
 * 描述: 导出所有内容组件，供MDX内容使用
 * 
 * 基于ADR-002: 内容管理策略 (v2.0 深化版)
 */

export { Alert } from './Alert';
export { Callout } from './Callout';
export { CodeBlock } from './CodeBlock';
export { Image } from './Image';
export { Video } from './Video';
export { Table } from './Table';
export { Quote } from './Quote';

// TODO: 导出组件类型
export type { default as AlertProps } from './Alert';
export type { default as CalloutProps } from './Callout';
export type { default as CodeBlockProps } from './CodeBlock';
export type { default as ImageProps } from './Image';
export type { default as VideoProps } from './Video';
export type { default as TableProps } from './Table';
export type { default as QuoteProps } from './Quote';
