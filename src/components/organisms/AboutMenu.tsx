// src/components/organisms/AboutMenu.tsx

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  // 注意：我们不再直接使用 DropdownMenuItem，因为我们将创建自定义的 ListItem
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

/**
 * "关于我们"下拉菜单组织组件
 * @description 使用 Shadcn/ui 的 DropdownMenu 构建，实现一个纯粹由"点击"触发的下拉菜单。
 * @remarks v4.9 修复了垂直布局问题，并采用了 ListItem 子组件的最佳实践。
 */
export function AboutMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-base font-semibold">
          About Us
          <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      
      {/* 下拉内容：我们在这里加入了一个ul列表来确保垂直布局 */}
      <DropdownMenuContent className="w-56" align="start">
        <ul className="grid w-[200px] gap-1 p-3 list-none">
          <ListItem href="/about" title="About Us" />
          <ListItem href="/about#team" title="Our Team" />
          <ListItem href="/about#history" title="Our Story" />
          <ListItem href="/contact" title="Contact Us" />
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// 【最佳实践】创建一个ListItem子组件，用于统一菜单项的样式和行为
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  { href: string; title: string }
>(({ href, title, ...props }, ref) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </Link>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default AboutMenu; // 这一行可以去掉，因为我们已经有了具名导出