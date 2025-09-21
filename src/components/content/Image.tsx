/**
 * Image 内容组件
 * 
 * 用于在MDX内容中显示优化的图片
 * 
 * @param {string} src - 图片源路径
 * @param {string} alt - 图片描述
 * @param {string} [caption] - 图片说明
 * @param {string} [width] - 图片宽度
 * @param {string} [height] - 图片高度
 * @param {boolean} [lazy] - 是否懒加载
 * @param {string} [className] - 额外的CSS类名
 * 
 * @example
 * ```mdx
 * <Image 
 *   src="/images/example.jpg" 
 *   alt="示例图片" 
 *   caption="这是一个示例图片"
 *   width="800"
 *   height="600"
 * />
 * ```
 */

import React from 'react';
import NextImage from 'next/image';
import { cn } from '@/lib/utils';

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
  lazy?: boolean;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  caption,
  width = "800",
  height = "600",
  lazy = true,
  className,
}) => {
  // TODO: 实现 Image 组件
  return (
    <figure className={cn("image-container my-6", className)}>
      <div className="relative overflow-hidden rounded-lg">
        <NextImage
          src={src}
          alt={alt}
          width={parseInt(width)}
          height={parseInt(height)}
          loading={lazy ? "lazy" : "eager"}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
