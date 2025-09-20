import React from 'react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Stack } from '@/components/layout/Stack';
import { CaseStudyCard } from '@/components/content/CaseStudyCard';
import { SearchBox } from '@/components/molecules/SearchBox';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  href: string;
}

interface CaseStudyTemplateProps {
  /**
   * 案例研究列表
   */
  caseStudies: CaseStudy[];
  /**
   * 搜索查询
   */
  searchQuery?: string;
  /**
   * 搜索回调函数
   */
  onSearch?: (query: string) => void;
  /**
   * 当前选中的行业
   */
  selectedIndustry?: string;
  /**
   * 行业列表
   */
  industries?: string[];
  /**
   * 行业选择回调
   */
  onIndustrySelect?: (industry: string) => void;
  /**
   * 页面标题
   * @default '成功案例'
   */
  title?: string;
  /**
   * 页面描述
   */
  description?: string;
  /**
   * 额外的CSS类名
   */
  className?: string;
}

/**
 * 案例研究列表页模板组件 (CaseStudyTemplate)
 *
 * 提供案例研究列表页的完整布局结构，包括搜索、行业筛选和案例列表。
 * 这是一个模板组件，只负责布局，不包含具体的数据获取逻辑。
 *
 * @param {CaseStudyTemplateProps} props - 组件属性
 * @example
 * ```tsx
 * <CaseStudyTemplate
 *   caseStudies={caseStudies}
 *   searchQuery={searchQuery}
 *   onSearch={handleSearch}
 *   industries={['科技', '制造业', '服务业']}
 *   onIndustrySelect={handleIndustrySelect}
 *   title="成功案例"
 *   description="了解我们如何帮助客户在中国市场取得成功"
 * />
 * ```
 */
export const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  caseStudies,
  searchQuery,
  onSearch,
  selectedIndustry,
  industries = [],
  onIndustrySelect,
  title = '成功案例',
  description,
  className,
}) => {
  return (
    <Container className={cn('py-8', className)}>
      <Stack space="lg">
        {/* 页面标题和描述 */}
        <Stack space="sm" alignCenter={false}>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </Stack>

        {/* 搜索和筛选区域 */}
        <div className="space-y-4">
          {/* 搜索框 */}
          {onSearch && (
            <div className="max-w-md">
              <SearchBox
                value={searchQuery}
                onChange={(value) => onSearch?.(value)}
                placeholder="搜索成功案例..."
                searchText="搜索"
              />
            </div>
          )}

          {/* 行业筛选 */}
          {industries.length > 0 && onIndustrySelect && (
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedIndustry === 'all' ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => onIndustrySelect('all')}
              >
                全部行业
              </Badge>
              {industries.map((industry) => (
                <Badge
                  key={industry}
                  variant={selectedIndustry === industry ? 'default' : 'secondary'}
                  className="cursor-pointer"
                  onClick={() => onIndustrySelect(industry)}
                >
                  {industry}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* 案例研究列表 */}
        {caseStudies.length > 0 ? (
          <Grid cols={1} mdCols={2} lgCols={3} gap="lg">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                title={caseStudy.title}
                company={caseStudy.company}
                industry={caseStudy.industry}
                challenge={caseStudy.challenge}
                solution={caseStudy.solution}
                results={caseStudy.results}
                href={caseStudy.href}
                variant="preview"
                className="h-full"
              />
            ))}
          </Grid>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无成功案例</p>
            {searchQuery && (
              <p className="text-gray-400 mt-2">
                没有找到包含 "{searchQuery}" 的案例
              </p>
            )}
          </div>
        )}
      </Stack>
    </Container>
  );
};
