import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, X } from 'lucide-react';

/**
 * SearchBox 搜索框组件
 * 
 * 组合Input和Button原子组件，提供统一的搜索交互体验
 * 
 * @param placeholder - 占位符文本
 * @param value - 搜索值
 * @param onChange - 值变化回调
 * @param onSearch - 搜索回调
 * @param onClear - 清空回调
 * @param loading - 加载状态
 * @param className - 额外的CSS类名
 * @param disabled - 是否禁用
 */
interface SearchBoxProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
}

export function SearchBox({
  placeholder = '搜索...',
  value,
  onChange,
  onSearch,
  onClear,
  loading = false,
  className,
  disabled = false
}: SearchBoxProps) {
  const handleSearch = () => {
    if (onSearch && value.trim()) {
      onSearch(value.trim());
    }
  };

  const handleClear = () => {
    onChange('');
    if (onClear) {
      onClear();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="relative flex-1">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          className="pr-10"
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
            disabled={disabled}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Button
        onClick={handleSearch}
        disabled={disabled || loading || !value.trim()}
        className="shrink-0"
      >
        {loading ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <Search className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

export default SearchBox;