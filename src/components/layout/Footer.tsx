import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * 页脚链接组类型
 */
interface FooterLinkGroup {
  /** 组标题 */
  title: string;
  /** 链接列表 */
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

/**
 * 页脚组件的属性接口
 */
interface FooterProps {
  /**
   * 自定义样式类名
   */
  className?: string;
}

/**
 * 网站页脚组件
 * 
 * 包含网站信息、服务链接、联系方式和社交媒体链接。
 * 支持响应式设计，在移动端垂直排列。
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export const Footer: React.FC<FooterProps> = ({ className }) => {
  const footerLinks: FooterLinkGroup[] = [
    {
      title: '服务',
      links: [
        { label: '公司注册', href: '/services/company-registration' },
        { label: '银行开户', href: '/services/bank-account' },
        { label: '税务登记', href: '/services/tax-registration' },
        { label: '商标注册', href: '/services/trademark' },
      ],
    },
    {
      title: '资源',
      links: [
        { label: '博客', href: '/blog' },
        { label: '常见问题', href: '/faq' },
        { label: '下载中心', href: '/downloads' },
        { label: '政策解读', href: '/blog/category/policy' },
      ],
    },
    {
      title: '公司',
      links: [
        { label: '关于我们', href: '/about' },
        { label: '成功案例', href: '/cases' },
        { label: '联系我们', href: '/contact' },
        { label: '隐私政策', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: SITE_CONFIG.social.linkedin,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: SITE_CONFIG.social.twitter,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: SITE_CONFIG.social.facebook,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className={cn('bg-muted/50 border-t', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">中</span>
              </div>
              <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 {SITE_CONFIG.contact.email}</p>
              <p>📞 {SITE_CONFIG.contact.phone}</p>
              <p>📍 {SITE_CONFIG.contact.address}</p>
            </div>
          </div>

          {/* 链接组 */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 社交媒体和版权 */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} {SITE_CONFIG.name}. 保留所有权利。
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
