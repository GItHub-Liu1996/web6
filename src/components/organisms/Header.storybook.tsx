import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/molecules/Container';
import { Navigation } from './Navigation.storybook';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export function Header({ className, children }: HeaderProps) {
  return (
    <header className={cn('', className)}>
      <Container maxWidth="xl">
        <div className="flex flex-col">
          {/* 主导航区域 */}
          <Navigation />
          
          {/* 可选的额外内容区域 */}
          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}

export default Header;
