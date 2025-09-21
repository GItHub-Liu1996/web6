/**
 * Table 内容组件
 * 
 * 用于在MDX内容中显示表格
 * 
 * @param {React.ReactNode} children - 表格内容
 * @param {boolean} [striped] - 是否显示斑马纹
 * @param {boolean} [bordered] - 是否显示边框
 * @param {boolean} [hover] - 是否显示悬停效果
 * @param {string} [className] - 额外的CSS类名
 * 
 * @example
 * ```mdx
 * <Table striped bordered hover>
 *   <thead>
 *     <tr>
 *       <th>列1</th>
 *       <th>列2</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>数据1</td>
 *       <td>数据2</td>
 *     </tr>
 *   </tbody>
 * </Table>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
  children: React.ReactNode;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  className?: string;
}

export const Table: React.FC<TableProps> = ({
  children,
  striped = true,
  bordered = true,
  hover = true,
  className,
}) => {
  // TODO: 实现 Table 组件
  const baseClasses = "w-full overflow-x-auto";
  
  const tableClasses = cn(
    "min-w-full",
    {
      "table-striped": striped,
      "table-bordered": bordered,
      "table-hover": hover,
    }
  );

  return (
    <div className={cn(baseClasses, className)}>
      <table className={tableClasses}>
        {children}
      </table>
    </div>
  );
};
