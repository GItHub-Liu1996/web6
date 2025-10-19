import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { QrCode, Copy, Check } from 'lucide-react';
import { useState } from 'react';

/**
 * WeChatQRCode 微信二维码组件
 * 
 * 展示微信二维码和相关信息，组合Card、Button、Typography原子组件
 * 
 * @param qrCodeUrl - 二维码图片URL
 * @param wechatId - 微信号
 * @param title - 标题
 * @param description - 描述
 * @param className - 额外的CSS类名
 */
interface WeChatQRCodeProps {
  qrCodeUrl: string;
  wechatId: string;
  title?: string;
  description?: string;
  className?: string;
}

export function WeChatQRCode({
  qrCodeUrl,
  wechatId,
  title = '扫码添加微信',
  description = '扫描二维码或搜索微信号联系我们',
  className
}: WeChatQRCodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyWechatId = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <Card className={cn('w-full max-w-sm', className)}>
      <CardContent className="p-6 text-center">
        <div className="space-y-4">
          {/* 二维码图片 */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={qrCodeUrl}
                alt="微信二维码"
                className="w-32 h-32 rounded-lg border-2 border-gray-200"
              />
              <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                <QrCode className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* 标题和描述 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          {/* 微信号和复制按钮 */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-medium text-gray-700">微信号:</span>
              <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                {wechatId}
              </span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyWechatId}
              className="w-full"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  已复制
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  复制微信号
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default WeChatQRCode;