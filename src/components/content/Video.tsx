/**
 * Video 内容组件
 * 
 * 用于在MDX内容中嵌入视频
 * 
 * @param {string} src - 视频源路径
 * @param {string} [poster] - 视频封面图
 * @param {string} [caption] - 视频说明
 * @param {boolean} [autoplay] - 是否自动播放
 * @param {boolean} [controls] - 是否显示控制条
 * @param {boolean} [loop] - 是否循环播放
 * @param {string} [className] - 额外的CSS类名
 * 
 * @example
 * ```mdx
 * <Video 
 *   src="/videos/example.mp4" 
 *   poster="/images/video-poster.jpg"
 *   caption="这是一个示例视频"
 *   controls
 * />
 * ```
 */

import React from 'react';

interface VideoProps {
  src: string;
  poster?: string;
  caption?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  className?: string;
}

export const Video: React.FC<VideoProps> = ({
  src,
  poster,
  caption,
  autoplay = false,
  controls = true,
  loop = false,
  className,
}) => {
  // TODO: 实现 Video 组件
  return (
    <div className={`video-placeholder ${className || ''}`}>
      {/* TODO: 实现视频组件 */}
      <div>Video: {src}</div>
      {poster && <div>Poster: {poster}</div>}
      {caption && <div>Caption: {caption}</div>}
      <div>Autoplay: {autoplay ? 'yes' : 'no'}</div>
      <div>Controls: {controls ? 'yes' : 'no'}</div>
      <div>Loop: {loop ? 'yes' : 'no'}</div>
    </div>
  );
};
