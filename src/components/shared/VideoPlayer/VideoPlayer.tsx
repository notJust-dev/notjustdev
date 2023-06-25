import React from 'react';
import dynamic from 'next/dynamic';
import { Config } from 'react-player';

// https://github.com/cookpete/react-player/issues/1474#issuecomment-1184645105
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface VideoPlayerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  autoplay?: boolean;
  poster?: string;
}

export default function VideoPlayer({
  url,
  width = '100%',
  height = '100%',
  autoplay = false,
  poster,
}: VideoPlayerProps) {
  const config: Config = {};
  if (poster) {
    config.file = {
      attributes: {
        poster,
      },
    };
  }

  return (
    <ReactPlayer
      className="react-player"
      url={url}
      controls={true}
      width={width}
      height={height}
      muted={autoplay}
      playing={autoplay}
      config={config}
    />
  );
}
