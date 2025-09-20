/**
 * 超级菜单组件 (Mega Menu)
 * 
 * 最基础结构，等待详细设计
 * 
 * @example
 * ```tsx
 * <MegaMenu />
 * <MegaMenu isMobile={true} />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  isMobile?: boolean;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4 p-4 bg-gray-50 border-t border-gray-200">
        {/* Mobile - 按业务阶段划分 */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-gray-900">按业务阶段划分</h4>
          <Link href="/solutions/startup" className="text-gray-600 hover:text-blue-600">
            企业落地启动方案
          </Link>
          <Link href="/solutions/operation" className="text-gray-600 hover:text-blue-600">
            企业持续运营支持
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline font-medium">
            全部服务概览
          </Link>
        </div>

        {/* Mobile - 按行业领域划分 */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-gray-900">按行业领域划分</h4>
          <Link href="/industries/technology" className="text-gray-600 hover:text-blue-600">
            科技与软件 (TMT)
          </Link>
          <Link href="/industries/e-commerce" className="text-gray-600 hover:text-blue-600">
            电子商务与零售
          </Link>
          <Link href="/industries/professional-services" className="text-gray-600 hover:text-blue-600">
            专业服务业
          </Link>
          <Link href="/industries/advanced-manufacturing" className="text-gray-600 hover:text-blue-600">
            高端制造业
          </Link>
          <Link href="/industries/medical-devices" className="text-gray-600 hover:text-blue-600">
            医疗器械
          </Link>
          <Link href="/industries" className="text-blue-600 hover:underline font-medium">
            查看所有行业方案
          </Link>
        </div>

        {/* Mobile - 特色内容 */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-gray-900">特色内容</h4>
          <Link href="/case-studies/tech-startup-success" className="text-gray-600 hover:text-blue-600">
            🚀 科技创业成功案例
          </Link>
          <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
            <Link href="/contact">💬 获取免费咨询</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-0 top-full mt-0 w-full bg-white shadow-lg rounded-b-lg border-t border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3 gap-8">
        {/* 第一栏：按业务阶段划分 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">按业务阶段划分</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/solutions/startup" className="text-gray-700 hover:text-blue-600 block">
                企业落地启动方案
                <p className="text-sm text-gray-500">公司注册、银行开户、资质许可</p>
              </Link>
            </li>
            <li>
              <Link href="/solutions/operation" className="text-gray-700 hover:text-blue-600 block">
                企业持续运营支持
                <p className="text-sm text-gray-500">财税合规、人员签证、知识产权</p>
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-100 mt-4">
              <Link href="/services" className="text-blue-600 hover:underline font-medium block">
                全部服务概览 &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* 第二栏：按行业领域划分 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">按行业领域划分</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/industries/technology" className="text-gray-700 hover:text-blue-600 block">
                科技与软件 (TMT)
              </Link>
            </li>
            <li>
              <Link href="/industries/e-commerce" className="text-gray-700 hover:text-blue-600 block">
                电子商务与零售
              </Link>
            </li>
            <li>
              <Link href="/industries/professional-services" className="text-gray-700 hover:text-blue-600 block">
                专业服务业
              </Link>
            </li>
            <li>
              <Link href="/industries/advanced-manufacturing" className="text-gray-700 hover:text-blue-600 block">
                高端制造业
              </Link>
            </li>
            <li>
              <Link href="/industries/medical-devices" className="text-gray-700 hover:text-blue-600 block">
                医疗器械
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-100 mt-4">
              <Link href="/industries" className="text-blue-600 hover:underline font-medium block">
                查看所有行业方案 &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* 第三栏：特色内容 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">特色内容</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/case-studies/tech-startup-success" className="text-gray-700 hover:text-blue-600 block">
                <p className="font-medium">🚀 科技创业成功案例</p>
                <p className="text-sm text-gray-500">了解我们如何助力科技企业在华发展</p>
              </Link>
            </li>
            <li className="mt-6">
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link href="/contact">💬 获取免费咨询</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};