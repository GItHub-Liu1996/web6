import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

/**
 * SolutionPackageCard 解决方案卡片组件
 * 
 * 展示解决方案套餐的基本信息，组合Card、Typography、Badge、Button原子组件
 * 
 * @param title - 解决方案标题
 * @param description - 解决方案描述
 * @param features - 功能特性列表
 * @param price - 价格（可选）
 * @param duration - 服务周期
 * @param category - 解决方案分类
 * @param slug - 解决方案URL slug
 * @param popular - 是否为热门方案
 * @param className - 额外的CSS类名
 * @param onClick - 点击回调
 */
interface SolutionPackageCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  duration?: string;
  category: string;
  slug: string;
  popular?: boolean;
  className?: string;
  onClick?: () => void;
}

export function SolutionPackageCard({
  title,
  description,
  features,
  price,
  duration,
  category,
  slug,
  popular = false,
  className,
  onClick
}: SolutionPackageCardProps) {
  return (
    <Card 
      className={cn(
        'group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
        popular && 'ring-2 ring-primary/20',
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* 标题和分类 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant={popular ? 'default' : 'secondary'}>
                {category}
              </Badge>
              {popular && (
                <div className="flex items-center space-x-1 text-primary">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">热门</span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>

          {/* 描述 */}
          <p className="text-sm text-gray-600 line-clamp-3">
            {description}
          </p>

          {/* 功能特性 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">包含服务</h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-xs text-gray-500">
                  还有 {features.length - 3} 项服务...
                </li>
              )}
            </ul>
          </div>

          {/* 价格和周期 */}
          {(price || duration) && (
            <div className="flex items-center justify-between text-sm">
              {price && (
                <div className="font-medium text-primary">
                  {price}
                </div>
              )}
              {duration && (
                <div className="text-gray-500">
                  服务周期: {duration}
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          variant={popular ? 'default' : 'outline'}
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          了解详情
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SolutionPackageCard;