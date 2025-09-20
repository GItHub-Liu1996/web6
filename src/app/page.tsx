import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { SITE_CONFIG, SERVICE_TYPES } from '@/lib/constants';

/**
 * 首页组件
 * 
 * 展示网站的核心价值主张、主要服务和关键信息。
 * 包含英雄区域、服务介绍、优势展示和行动号召。
 */
export default function Home() {
  const services = [
    {
      title: '公司注册',
      description: '专业协助外国投资者在中国设立各类企业，包括WFOE、合资企业等',
      icon: '🏢',
      features: ['WFOE设立', '合资企业', '代表处', '个体工商户'],
    },
    {
      title: '银行开户',
      description: '协助开设企业银行账户，提供开户指导和文件准备服务',
      icon: '🏦',
      features: ['企业账户', '外汇账户', '人民币账户', '网银服务'],
    },
    {
      title: '税务登记',
      description: '完成税务登记手续，提供税务咨询和合规指导',
      icon: '📊',
      features: ['税务登记', '发票申请', '税务申报', '合规咨询'],
    },
    {
      title: '商标注册',
      description: '保护您的品牌知识产权，提供商标注册和维权服务',
      icon: '™️',
      features: ['商标查询', '商标注册', '商标续展', '侵权维权'],
    },
  ];

  const advantages = [
    {
      title: '专业团队',
      description: '拥有10年以上经验的专业团队，熟悉中国法律法规',
      icon: '👥',
    },
    {
      title: '快速办理',
      description: '平均15-30个工作日完成注册，比传统方式快50%',
      icon: '⚡',
    },
    {
      title: '全程服务',
      description: '从注册到运营，提供一站式全程服务支持',
      icon: '🎯',
    },
    {
      title: '多语言支持',
      description: '支持中英文服务，沟通无障碍',
      icon: '🌐',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              为中国投资提供
              <span className="text-primary">专业服务</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              我们为外国投资者在中国注册公司提供一站式专业服务，
              <br className="hidden md:block" />
              让您的中国投资之路更加顺畅
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                免费咨询
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                查看服务
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              我们的核心服务
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从公司注册到日常运营，我们提供全方位的专业服务，
              帮助您在中国市场取得成功
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 我们的优势 */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              为什么选择我们
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们拥有丰富的经验和专业的团队，
              为您提供最优质的服务体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">成功案例</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">年经验</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">客户满意度</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24h</div>
              <div className="text-lg opacity-90">响应时间</div>
            </div>
          </div>
        </div>
      </section>

      {/* 行动号召 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              准备开始您的中国投资之旅？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              我们的专业团队随时为您提供咨询和支持，
              让您的中国投资之路更加顺畅
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                立即咨询
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
