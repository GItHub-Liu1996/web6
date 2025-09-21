/**
 * 根布局组件
 * 
 * 提供网站的基础HTML结构，包括字体、元数据和全局布局
 * 集成 Zoho SalesIQ 实时聊天功能
 * 
 * @example
 * ```tsx
 * <RootLayout>
 *   <Home />
 * </RootLayout>
 * ```
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Go China Advisors (仮) - 中国公司注册专业服务",
  description: "为外国用户在中国注册和运营公司提供一站式专业服务",
  keywords: "中国公司注册,外国投资,企业服务,商务咨询",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* TODO: 集成 Zoho SalesIQ 实时聊天小部件 */}
        {/* 
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // TODO: 添加 Zoho SalesIQ 脚本
              // 实现非侵入式悬浮聊天图标
              // 支持多语言聊天界面
              // 自动访客识别和追踪
              // 聊天记录自动保存到 CRM
            `,
          }}
        />
        */}
      </body>
    </html>
  );
}