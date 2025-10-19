import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/molecules/Container';
import { ActionButton } from '@/components/molecules/ActionButton';
import { Stack } from '@/components/molecules/Stack';
import { ArrowRight, CheckCircle, Users, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
  backgroundImage?: string;
}

export function HeroSection({ className, backgroundImage }: HeroSectionProps) {
  return (
    <section 
      className={cn(
        'relative py-20 lg:py-32 min-h-[85vh] flex items-center overflow-hidden',
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 渐变遮罩层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      {/* 装饰性几何图形 */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-lg" />
      
      {/* 内容层 */}
      <div className="relative z-10 w-full">
        <Container maxWidth="xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧内容区 */}
            <div className="space-y-8">
              {/* 徽章 */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white/90 text-sm font-medium">专业认证咨询机构</span>
              </div>
              
              {/* 主标题 */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Go China
                  </span>
                  <br />
                  <span className="text-white">Advisors</span>
                </h1>
                
                {/* 副标题 */}
                <h2 className="text-2xl lg:text-3xl font-semibold text-white/95 leading-relaxed">
                  专业的中国商业咨询服务
                </h2>
              </div>
              
              {/* 描述 */}
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                助力国际企业在中国市场成功，提供全方位的商业咨询、市场分析和战略规划服务
              </p>
              
              {/* 统计数据 */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-white/70">成功案例</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm text-white/70">年经验</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-white/70">客户满意度</div>
                </div>
              </div>
              
              {/* CTA按钮组 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <ActionButton 
                  variant="primary" 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  免费咨询
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </ActionButton>
                <ActionButton 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                >
                  查看见解
                </ActionButton>
              </div>
            </div>
            
            {/* 右侧内容区 */}
            <div className="lg:block hidden">
              <div className="relative">
                {/* 主要卡片 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">市场洞察</h3>
                        <p className="text-white/70">深度分析中国市场趋势</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white/90">实时市场数据</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white/90">竞争分析报告</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white/90">投资机会识别</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 浮动卡片 */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">500+ 企业</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;
