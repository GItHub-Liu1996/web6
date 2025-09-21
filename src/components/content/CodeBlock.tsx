/**
 * CodeBlock 内容组件
 * 
 * 用于在MDX内容中显示代码块，支持语法高亮
 * 
 * @param {string} language - 编程语言
 * @param {string} [filename] - 文件名
 * @param {boolean} [showLineNumbers] - 是否显示行号
 * @param {React.ReactNode} children - 代码内容
 * @param {string} [className] - 额外的CSS类名
 * 
 * @example
 * ```mdx
 * <CodeBlock language="typescript" filename="example.ts" showLineNumbers>
 *   const example = "Hello World";
 * </CodeBlock>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  filename,
  showLineNumbers = false,
  children,
  className,
}) => {
  // TODO: 实现 CodeBlock 组件
  return (
    <div className={cn("code-block-container mb-4", className)}>
      {filename && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono border-b border-gray-700">
          {filename}
        </div>
      )}
      <div className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
        <pre className="font-mono text-sm">
          <code className={`language-${language}`}>
            {children}
          </code>
        </pre>
      </div>
      {showLineNumbers && (
        <div className="text-xs text-gray-500 mt-1">
          {/* TODO: 实现行号显示 */}
        </div>
      )}
    </div>
  );
};
