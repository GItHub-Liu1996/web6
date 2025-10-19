import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/molecules/Container';
import { Stack } from '@/components/molecules/Stack';
import { Grid } from '@/components/molecules/Grid';
import { WeChatQRCode } from '@/components/molecules/WeChatQRCode';
import { Button } from '@/components/ui/Button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Smartphone, 
  Linkedin, 
  Twitter, 
  Facebook,
  Music
} from 'lucide-react';

/**
 * Footer 页脚组件
 * 
 * 响应式页脚，包含服务链接、资源中心、公司信息、联系信息和社交媒体
 * 使用方案C图标设计：默认灰色，悬停时显示品牌色彩
 * 
 * @param className - 额外的CSS类名
 */
interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  // 社交媒体配置
  const socialMedia = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/go-china-advisors',
      icon: Linkedin,
      brandColor: '#0077B5'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/gochinaadvisors',
      icon: Twitter,
      brandColor: '#1DA1F2'
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/gochinaadvisors',
      icon: Facebook,
      brandColor: '#1877F2'
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@gochinaadvisors',
      icon: Music, // 使用Music图标代替TikTok
      brandColor: '#000000'
    }
  ];

  // 服务链接
  const services = [
    { name: '企业落地启动方案', href: '/solutions/startup' },
    { name: '企业持续运营支持', href: '/solutions/operation' },
    { name: '企业重组与退出', href: '/services/corporate-restructuring-and-exit' },
    { name: '按行业划分的解决方案', href: '/industries' }
  ];

  // 资源中心
  const resources = [
    { name: '博客文章', href: '/blog' },
    { name: '成功案例', href: '/case-studies' },
    { name: '白皮书', href: '/resources/whitepapers' },
    { name: '新闻动态', href: '/news' }
  ];

  // 公司信息
  const companyInfo = [
    { name: '关于我们', href: '/about' },
    { name: '团队介绍', href: '/about#team' },
    { name: '资质认证', href: '/about#certifications' },
    { name: '发展历程', href: '/about#history' }
  ];

  // 联系信息
  const contactInfo = {
    address: '北京市朝阳区国贸大厦A座',
    phone: '+86 400-123-4567',
    email: 'info@go-china-advisors.com',
    wechatId: 'GoChinaAdvisors'
  };

  // 社交媒体图标组件
  const SocialIcon = ({ platform }: { platform: typeof socialMedia[0] }) => {
    const IconComponent = platform.icon;
    
    return (
      <a
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group transition-transform duration-200 hover:scale-110"
      >
        <IconComponent 
          className={cn(
            "transition-colors duration-200",
            // 响应式图标尺寸
            "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          )}
          style={{
            color: platform.brandColor
          }}
        />
      </a>
    );
  };

  // 链接列表组件
  const LinkList = ({ title, links }: { title: string; links: Array<{ name: string; href: string }> }) => (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={cn('bg-gray-50 border-t border-gray-200', className)}>
      {/* 主要内容区域 */}
      <Container maxWidth="xl" className="py-16">
        {/* 桌面端：四栏布局 */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-12 mb-12">
            {/* 服务链接 */}
            <LinkList title="服务链接" links={services} />
            
            {/* 资源中心 */}
            <LinkList title="资源中心" links={resources} />
            
            {/* 联系我们 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">联系我们</h3>
              <Stack spacing="md">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{contactInfo.wechatId}</span>
                </div>
              </Stack>
            </div>
            
            {/* 社交媒体 - 垂直排列 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">关注我们</h3>
              <div className="flex flex-col gap-3">
                {socialMedia.map((platform, index) => (
                  <SocialIcon key={index} platform={platform} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 移动端：两栏布局 */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-12 mb-12">
            {/* 联系我们 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">联系我们</h3>
              <Stack spacing="md">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">地址</div>
                    <div className="text-sm text-gray-600">{contactInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">邮箱</div>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Smartphone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">微信</div>
                    <div className="text-sm text-gray-600">{contactInfo.wechatId}</div>
                  </div>
                </div>
              </Stack>
            </div>
            
            {/* 社交媒体 - 水平排列 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 text-center">关注我们</h3>
              <div className="flex flex-row justify-center gap-4 sm:gap-5">
                {socialMedia.map((platform, index) => (
                  <SocialIcon key={index} platform={platform} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 法律声明区域 */}
      <div className="border-t border-gray-200 bg-white">
        <Container maxWidth="xl" className="py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="text-xs text-gray-500">
              © 2025 Go China Advisors. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-4 text-xs text-gray-500">
              <a 
                href="/privacy-policy" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                隐私政策
              </a>
              <a 
                href="/terms-of-service" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                服务条款
              </a>
              <a 
                href="/cookie-policy" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Cookie政策
              </a>
              <a 
                href="/disclaimer" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                免责声明
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;