import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * 超级菜单组件的属性接口
 */
interface MegaMenuProps {
  /**
   * 是否显示超级菜单
   * @default false
   */
  isOpen: boolean;
  /**
   * 关闭菜单的回调函数
   */
  onClose: () => void;
}

/**
 * 超级菜单组件
 * 
 * 实现三栏布局的响应式超级菜单：
 * - 第一栏：按业务阶段划分
 * - 第二栏：按行业领域划分  
 * - 第三栏：特色内容
 * 
 * 在移动端自动转换为折叠式列表
 *
 * @example
 * ```tsx
 * <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
 * ```
 */
export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* 超级菜单内容 */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50",
        "lg:left-auto lg:right-0 lg:w-[800px] lg:shadow-xl",
        "transform transition-all duration-300 ease-in-out",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      )}>
        {/* 桌面端三栏布局 */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-0">
          {/* 第一栏：按业务阶段划分 */}
          <div className="p-6 border-r border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              按业务阶段划分
            </h3>
            <div className="space-y-3">
              {/* 企业落地启动方案 */}
              <Link 
                href="/solutions/startup"
                className="block group"
                onClick={onClose}
              >
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    企业落地启动方案
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    主体资格、银行账户、跨境资金等基础服务
                  </div>
                </div>
              </Link>
              
              {/* 企业持续运营支持 */}
              <Link 
                href="/solutions/operation"
                className="block group"
                onClick={onClose}
              >
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    企业持续运营支持
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    财税托管、税务合规、人员签证等增值服务
                  </div>
                </div>
              </Link>
            </div>
            
            {/* 底部链接 */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link 
                href="/services"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                onClick={onClose}
              >
                全部服务概览 →
              </Link>
            </div>
          </div>

          {/* 第二栏：按行业领域划分 */}
          <div className="p-6 border-r border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              按行业领域划分
            </h3>
            <div className="space-y-3">
              {/* 科技与软件 */}
              <Link 
                href="/industries/technology"
                className="block group"
                onClick={onClose}
              >
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    科技与软件 (TMT)
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    互联网、软件、人工智能等科技企业
                  </div>
                </div>
              </Link>
              
              {/* 电子商务与零售 */}
              <Link 
                href="/industries/e-commerce"
                className="block group"
                onClick={onClose}
              >
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    电子商务与零售
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    跨境电商、零售、品牌运营等
                  </div>
                </div>
              </Link>
              
              {/* 专业服务业 */}
              <Link 
                href="/industries/professional-services"
                className="block group"
                onClick={onClose}
              >
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    专业服务业
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    咨询、法律、财务等专业服务
                  </div>
                </div>
              </Link>
              
              {/* 高端制造业 */}
              <Link 
                href="/industries/advanced-manufacturing"
                className="block group"
                onClick={onClose}
              >
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    高端制造业
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    精密制造、工业4.0、智能制造等
                  </div>
                </div>
              </Link>
              
              {/* 医疗器械 */}
              <Link 
                href="/industries/medical-devices"
                className="block group"
                onClick={onClose}
              >
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    医疗器械
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    医疗设备、生物技术、健康科技等
                  </div>
                </div>
              </Link>
            </div>
            
            {/* 底部链接 */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link 
                href="/industries"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                onClick={onClose}
              >
                查看所有行业方案 →
              </Link>
            </div>
          </div>

          {/* 第三栏：特色内容 */}
          <div className="p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              特色内容
            </h3>
            <div className="space-y-4">
              {/* 推广链接1 */}
              <Link 
                href="/case-studies/tech-startup-success"
                className="block group"
                onClick={onClose}
              >
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    🚀 科技创业成功案例
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    德国AI公司6个月完成中国落地
                  </div>
                </div>
              </Link>
              
              {/* 推广链接2 - 免费咨询按钮 */}
              <Link 
                href="/contact"
                className="block"
                onClick={onClose}
              >
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all text-center">
                  <div className="font-semibold">
                    💬 获取免费咨询
                  </div>
                  <div className="text-sm opacity-90 mt-1">
                    专业顾问1对1服务
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 移动端折叠式列表 */}
        <div className="lg:hidden">
          <div className="p-4 space-y-6">
            {/* 按业务阶段划分 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                按业务阶段划分
              </h3>
              <div className="space-y-2">
                <Link 
                  href="/solutions/startup"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-gray-900">企业落地启动方案</div>
                  <div className="text-sm text-gray-500">主体资格、银行账户、跨境资金等基础服务</div>
                </Link>
                <Link 
                  href="/solutions/operation"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-gray-900">企业持续运营支持</div>
                  <div className="text-sm text-gray-500">财税托管、税务合规、人员签证等增值服务</div>
                </Link>
                <Link 
                  href="/services"
                  className="block p-3 text-blue-600 hover:text-blue-700 font-medium"
                  onClick={onClose}
                >
                  全部服务概览 →
                </Link>
              </div>
            </div>

            {/* 按行业领域划分 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                按行业领域划分
              </h3>
              <div className="space-y-2">
                <Link 
                  href="/industries/technology"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-gray-900">科技与软件 (TMT)</div>
                  <div className="text-sm text-gray-500">互联网、软件、人工智能等科技企业</div>
                </Link>
                <Link 
                  href="/industries/e-commerce"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-gray-900">电子商务与零售</div>
                  <div className="text-sm text-gray-500">跨境电商、零售、品牌运营等</div>
                </Link>
                <Link 
                  href="/industries/professional-services"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-gray-900">专业服务业</div>
                  <div className="text-sm text-gray-500">咨询、法律、财务等专业服务</div>
                </Link>
                <Link 
                  href="/industries/advanced-manufacturing"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-gray-900">高端制造业</div>
                  <div className="text-sm text-gray-500">精密制造、工业4.0、智能制造等</div>
                </Link>
                <Link 
                  href="/industries/medical-devices"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-gray-900">医疗器械</div>
                  <div className="text-sm text-gray-500">医疗设备、生物技术、健康科技等</div>
                </Link>
                <Link 
                  href="/industries"
                  className="block p-3 text-blue-600 hover:text-blue-700 font-medium"
                  onClick={onClose}
                >
                  查看所有行业方案 →
                </Link>
              </div>
            </div>

            {/* 特色内容 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                特色内容
              </h3>
              <div className="space-y-3">
                <Link 
                  href="/case-studies/tech-startup-success"
                  className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all"
                  onClick={onClose}
                >
                  <div className="font-medium text-gray-900">🚀 科技创业成功案例</div>
                  <div className="text-sm text-gray-600">德国AI公司6个月完成中国落地</div>
                </Link>
                <Link 
                  href="/contact"
                  className="block p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all text-center"
                  onClick={onClose}
                >
                  <div className="font-semibold">💬 获取免费咨询</div>
                  <div className="text-sm opacity-90">专业顾问1对1服务</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
