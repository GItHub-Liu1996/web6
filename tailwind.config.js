/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'  // 最大宽度1400px，参考Vistra的布局
  		}
  	},
  	extend: {
  		/**
  		 * 颜色系统 - 基于Vistra网站风格
  		 * 
  		 * 设计参考：
  		 * - Primary: 深蓝色 (#1e3a8a) - 主要品牌色，用于CTA按钮
  		 * - Secondary: 浅灰色 (#f8fafc) - 用于背景和次要元素
  		 * - Accent: 中蓝色 (#3b82f6) - 用于悬停状态和强调
  		 * - Neutral: 深灰色 (#1f2937) - 用于主要文字内容
  		 * - Muted: 中灰色 (#6b7280) - 用于次要文字和边框
  		 */
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',        // 深蓝色 (#1e3a8a)
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',      // 浅灰色 (#f8fafc)
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',    // 红色 (#ef4444)
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',          // 静音背景 (#f1f5f9)
  				foreground: 'hsl(var(--muted-foreground))'  // 静音文字 (#6b7280)
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',         // 中蓝色 (#3b82f6)
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		
  		/**
  		 * 字体与排版系统 - 基于Vistra的专业排版
  		 * 
  		 * 字体选择：
  		 * - 主字体: Geist Sans (现代无衬线字体)
  		 * - 等宽字体: Geist Mono (代码和数字)
  		 * 
  		 * 字号系统：
  		 * - xs: 12px (小标签)
  		 * - sm: 14px (辅助文字)
  		 * - base: 16px (正文)
  		 * - lg: 18px (小标题)
  		 * - xl: 20px (中标题)
  		 * - 2xl: 24px (大标题)
  		 * - 3xl: 30px (主标题)
  		 * - 4xl: 36px (超大标题)
  		 */
  		fontFamily: {
  			sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-geist-mono)', 'monospace'],
  		},
  		
  		/**
  		 * 边框圆角系统 - 基于Vistra的现代设计
  		 * 
  		 * 圆角规范：
  		 * - sm: 4px (小元素，如按钮)
  		 * - md: 6px (中等元素，如卡片)
  		 * - lg: 8px (大元素，如容器)
  		 * - xl: 12px (超大元素)
  		 * - 2xl: 16px (特殊元素)
  		 */
  		borderRadius: {
  			lg: 'var(--radius)',                    // 8px
  			md: 'calc(var(--radius) - 2px)',        // 6px
  			sm: 'calc(var(--radius) - 4px)',        // 4px
  			xl: 'calc(var(--radius) + 4px)',        // 12px
  			'2xl': 'calc(var(--radius) + 8px)',     // 16px
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
