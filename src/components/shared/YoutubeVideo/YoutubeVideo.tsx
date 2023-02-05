import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

interface Props {
  id: string;
  title: string;
}

function YoutubeVideo({ id, title }: Props) {
  return (
    <LiteYouTubeEmbed id={id} title={title} adNetwork={true} cookie={true} />
  );
}

export default YoutubeVideo;
