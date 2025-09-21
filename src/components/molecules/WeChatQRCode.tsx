/**
 * WeChatQRCode 分子组件
 *
 * 用于优雅地展示微信公众号二维码，支持不同尺寸和配置选项。
 * 作为本地化沟通渠道的重要组成部分。
 *
 * @param {string} qrCodeImage - 微信公众号二维码图片URL
 * @param {string} [title] - 标题，默认为"关注微信公众号"
 * @param {string} [description] - 描述文字
 * @param {'sm' | 'md' | 'lg'} [size='md'] - 二维码尺寸
 * @param {boolean} [showDescription=true] - 是否显示描述文字
 * @param {string} [className] - 额外的CSS类名
 *
 * @example
 * ```tsx
 * <WeChatQRCode 
 *   qrCodeImage="/images/wechat-qr.png"
 *   title="关注我们的微信公众号"
 *   description="获取最新政策资讯和咨询服务"
 *   size="md"
 * />
 * ```
 */

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { cn } from '@/lib/utils';

interface WeChatQRCodeProps {
  qrCodeImage: string;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
  className?: string;
}

export const WeChatQRCode: React.FC<WeChatQRCodeProps> = ({
  qrCodeImage,
  title = "关注微信公众号",
  description = "获取最新政策资讯和咨询服务",
  size = 'md',
  showDescription = true,
  className,
}) => {
  // TODO: 实现 WeChatQRCode 组件
  return (
    <Card className={cn("wechat-qr-code-placeholder", className)}>
      <div className="qr-code-container">
        {/* TODO: 实现二维码图片显示 */}
        <img 
          src={qrCodeImage} 
          alt="微信公众号二维码" 
          className={`qr-image qr-image-${size}`}
        />
        
        {/* TODO: 实现标题显示 */}
        <Typography variant="body-regular" className="qr-title">
          {title}
        </Typography>
        
        {/* TODO: 实现描述文字显示 */}
        {showDescription && (
          <Typography variant="body-small" className="qr-description">
            {description}
          </Typography>
        )}
      </div>
    </Card>
  );
};
