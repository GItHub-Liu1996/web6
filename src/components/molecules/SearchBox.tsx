import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface SearchBoxProps {
  /**
   * 搜索框的值
   */
  value?: string;
  /**
   * 值变化时的回调函数
   */
  onChange?: (value: string) => void;
  /**
   * 搜索按钮点击回调
   */
  onSearch?: (query: string) => void;
  /**
   * 占位符文本
   * @default '搜索...'
   */
  placeholder?: string;
  /**
   * 搜索按钮文本
   * @default '搜索'
   */
  searchText?: string;
  /**
   * 是否显示搜索按钮
   * @default true
   */
  showButton?: boolean;
  /**
   * 额外的CSS类名
   */
  className?: string;
}

/**
 * 搜索框分子组件 (SearchBox)
 *
 * 由Input和Button原子组成的分子组件，提供完整的搜索功能。
 * 支持实时搜索和按钮触发搜索两种模式。
 *
 * @param {SearchBoxProps} props - 组件属性
 * @example
 * ```tsx
 * <SearchBox
 *   value={searchQuery}
 *   onChange={setSearchQuery}
 *   onSearch={handleSearch}
 *   placeholder="搜索博客文章..."
 * />
 * ```
 */
export const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = '搜索...',
  searchText = '搜索',
  showButton = true,
  className,
}) => {
  const handleSearch = () => {
    if (onSearch && value) {
      onSearch(value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={cn('flex gap-2', className)}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        className="flex-1"
      />
      {showButton && (
        <Button onClick={handleSearch} className="flex-shrink-0">
          {searchText}
        </Button>
      )}
    </div>
  );
};
