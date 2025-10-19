import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Building2, Users, TrendingUp, ArrowRight } from 'lucide-react';

/**
 * CaseStudyCard 案例研究卡片组件
 * 
 * 展示成功案例的基本信息，组合Card、Typography、Badge、Button原子组件
 * 
 * @param title - 案例标题
 * @param company - 公司名称
 * @param industry - 行业
 * @param challenge - 挑战描述
 * @param solution - 解决方案
 * @param results - 成果描述
 * @param slug - 案例URL slug
 * @param featured - 是否为特色案例
 * @param className - 额外的CSS类名
 * @param onClick - 点击回调
 */
interface CaseStudyCardProps {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  slug: string;
  featured?: boolean;
  className?: string;
  onClick?: () => void;
}

export function CaseStudyCard({
  title,
  company,
  industry,
  challenge,
  solution,
  results,
  slug,
  featured = false,
  className,
  onClick
}: CaseStudyCardProps) {
  return (
    <Card 
      className={cn(
        'group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
        featured && 'ring-2 ring-primary/20',
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* 公司信息和行业标签 */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm text-gray-600">{company}</span>
              </div>
              <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                {title}
              </h3>
            </div>
            <Badge variant={featured ? 'default' : 'secondary'}>
              {industry}
            </Badge>
          </div>

          {/* 挑战 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">挑战</h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {challenge}
            </p>
          </div>

          {/* 解决方案 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">解决方案</h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {solution}
            </p>
          </div>

          {/* 成果 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-1">
              <TrendingUp className="h-3 w-3" />
              <span>成果</span>
            </h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {results}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          className="group-hover:text-primary transition-colors"
        >
          查看详情
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CaseStudyCard;