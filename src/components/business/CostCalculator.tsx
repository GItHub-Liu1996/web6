/**
 * CostCalculator 业务组件
 *
 * 用于计算企业退出过程中的各项成本
 * 支持不同退出类型的定制化成本计算
 *
 * @param {string} exitType - 退出类型 (equity-transfer, asset-sale, liquidation, etc.)
 * @param {CostItem[]} [costItems] - 自定义成本项目
 * @param {boolean} [showBreakdown] - 是否显示详细分解
 * @param {string} [className] - 额外的CSS类名
 *
 * @example
 * ```tsx
 * <CostCalculator 
 *   exitType="equity-transfer"
 *   showBreakdown={true}
 * />
 * ```
 */

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
// TODO: 导入cn工具函数
// import { cn } from '@/lib/utils';

interface CostItem {
  id: string;
  name: string;
  description: string;
  category: 'legal' | 'tax' | 'hr' | 'financial' | 'administrative';
  baseAmount: number;
  variable?: boolean;
  unit?: string;
  multiplier?: number;
}

interface CostCalculatorProps {
  exitType: 'equity-transfer' | 'asset-sale' | 'liquidation-deregistration' | 'funds-liquidation-repatriation' | 'employee-severance-compensation' | 'alternative-strategy-consulting';
  costItems?: CostItem[];
  showBreakdown?: boolean;
  className?: string;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({
  exitType,
  costItems = [],
  showBreakdown = true,
  className,
}) => {
  // TODO: 实现 CostCalculator 组件
  
  const [inputValues, setInputValues] = useState<Record<string, number>>({});
  
  // TODO: 根据exitType生成默认成本项目
  const getDefaultCostItems = (type: string): CostItem[] => {
    // TODO: 实现不同退出类型的默认成本项目
    return [
      {
        id: '1',
        name: '法律咨询费',
        description: '律师费用和法务咨询',
        category: 'legal',
        baseAmount: 50000,
        variable: true,
        unit: '元',
        multiplier: 1
      },
      {
        id: '2',
        name: '税务清算费',
        description: '税务申报和清算费用',
        category: 'tax',
        baseAmount: 30000,
        variable: false,
        unit: '元'
      },
      {
        id: '3',
        name: '员工补偿金',
        description: '员工遣散和补偿费用',
        category: 'hr',
        baseAmount: 0,
        variable: true,
        unit: '元/人',
        multiplier: 1
      },
      {
        id: '4',
        name: '审计费用',
        description: '财务审计和评估费用',
        category: 'financial',
        baseAmount: 40000,
        variable: true,
        unit: '元',
        multiplier: 1
      },
      {
        id: '5',
        name: '行政费用',
        description: '政府审批和行政手续费用',
        category: 'administrative',
        baseAmount: 10000,
        variable: false,
        unit: '元'
      }
    ];
  };

  const defaultCostItems = getDefaultCostItems(exitType);
  const items = costItems.length > 0 ? costItems : defaultCostItems;
  
  // TODO: 计算总成本
  const calculateTotalCost = (): number => {
    return items.reduce((total, item) => {
      const inputValue = inputValues[item.id] || 0;
      if (item.variable && item.multiplier) {
        return total + (inputValue * item.multiplier);
      }
      return total + item.baseAmount;
    }, 0);
  };

  const totalCost = calculateTotalCost();

  return (
    <Card className={`cost-calculator-placeholder ${className || ''}`}>
      <div className="calculator-header">
        {/* TODO: 实现计算器标题 */}
        <h3 className="calculator-title">退出成本计算器</h3>
        <Badge variant="outline">预估费用</Badge>
      </div>
      
      <div className="calculator-content">
        {/* TODO: 实现成本项目输入 */}
        {items.map((item) => (
          <div key={item.id} className={`cost-item category-${item.category}`}>
            <div className="item-header">
              <h4 className="item-name">{item.name}</h4>
              <Badge variant="secondary" className="category-badge">
                {item.category}
              </Badge>
            </div>
            
            <p className="item-description">{item.description}</p>
            
            <div className="item-input">
              {item.variable ? (
                <div className="variable-input">
                  {/* TODO: 实现可变成本输入 */}
                  <Input
                    type="number"
                    placeholder={`请输入${item.name}`}
                    value={inputValues[item.id] || ''}
                    onChange={(e) => setInputValues(prev => ({
                      ...prev,
                      [item.id]: Number(e.target.value) || 0
                    }))}
                  />
                  <span className="unit">{item.unit}</span>
                </div>
              ) : (
                <div className="fixed-amount">
                  {/* TODO: 实现固定成本显示 */}
                  <span className="amount">{item.baseAmount.toLocaleString()}</span>
                  <span className="unit">{item.unit}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="calculator-summary">
        {/* TODO: 实现成本汇总 */}
        <div className="total-cost">
          <h4>预估总成本</h4>
          <div className="cost-amount">
            <span className="currency">¥</span>
            <span className="amount">{totalCost.toLocaleString()}</span>
          </div>
        </div>
        
        {showBreakdown && (
          <div className="cost-breakdown">
            {/* TODO: 实现成本分解显示 */}
            <h5>成本分解:</h5>
            <ul>
              {items.map((item) => {
                const itemCost = item.variable && item.multiplier 
                  ? (inputValues[item.id] || 0) * item.multiplier
                  : item.baseAmount;
                return (
                  <li key={item.id}>
                    {item.name}: ¥{itemCost.toLocaleString()}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      
      <div className="calculator-footer">
        {/* TODO: 实现计算器底部操作 */}
        <Button variant="outline" className="reset-btn">
          重置计算
        </Button>
        <Button variant="default" className="contact-btn">
          获取详细报价
        </Button>
        
        <p className="calculator-note">
          * 以上费用仅供参考，实际费用可能因具体情况而有所调整
        </p>
      </div>
    </Card>
  );
};
