/**
 * CorporateRestructuringCard 业务组件
 *
 * 用于展示企业重组与退出相关的服务卡片
 * 支持不同的服务类型和状态显示
 *
 * @param {string} title - 服务标题
 * @param {string} description - 服务描述
 * @param {string} serviceType - 服务类型 (equity-transfer, asset-sale, liquidation, etc.)
 * @param {string} href - 服务详情页链接
 * @param {string[]} [features] - 服务特性列表
 * @param {string} [status] - 服务状态 (available, coming-soon, featured)
 * @param {string} [className] - 额外的CSS类名
 *
 * @example
 * ```tsx
 * <CorporateRestructuringCard 
 *   title="股权转让服务"
 *   description="专业的股权转让解决方案"
 *   serviceType="equity-transfer"
 *   href="/services/equity-transfer"
 *   features={["法律合规", "税务处理", "风险评估"]}
 *   status="available"
 * />
 * ```
 */

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
// TODO: 导入cn工具函数
// import { cn } from '@/lib/utils';

interface CorporateRestructuringCardProps {
  title: string;
  description: string;
  serviceType: 'equity-transfer' | 'asset-sale' | 'liquidation-deregistration' | 'funds-liquidation-repatriation' | 'employee-severance-compensation' | 'alternative-strategy-consulting';
  href: string;
  features?: string[];
  status?: 'available' | 'coming-soon' | 'featured';
  className?: string;
}

export const CorporateRestructuringCard: React.FC<CorporateRestructuringCardProps> = ({
  title,
  description,
  serviceType,
  href,
  features = [],
  status = 'available',
  className,
}) => {
  // TODO: 实现 CorporateRestructuringCard 组件
  return (
    <Card className={`corporate-restructuring-card-placeholder ${className || ''}`}>
      <div className="card-header">
        {/* TODO: 实现服务类型图标 */}
        <div className="service-icon">
          {/* TODO: 根据serviceType显示对应图标 */}
        </div>
        
        {/* TODO: 实现状态标签 */}
        {status === 'featured' && (
          <Badge variant="default">推荐</Badge>
        )}
        {status === 'coming-soon' && (
          <Badge variant="secondary">即将推出</Badge>
        )}
      </div>
      
      <div className="card-content">
        {/* TODO: 实现标题显示 */}
        <h3 className="card-title">{title}</h3>
        
        {/* TODO: 实现描述显示 */}
        <p className="card-description">{description}</p>
        
        {/* TODO: 实现特性列表 */}
        {features.length > 0 && (
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                {/* TODO: 实现特性项显示 */}
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="card-footer">
        {/* TODO: 实现操作按钮 */}
        <Button 
          variant="outline" 
          className="learn-more-btn"
          // TODO: 实现点击跳转逻辑
        >
          了解更多
        </Button>
        
        {status === 'available' && (
          <Button 
            variant="default" 
            className="contact-btn"
            // TODO: 实现联系咨询逻辑
          >
            立即咨询
          </Button>
        )}
      </div>
    </Card>
  );
};
