import React from 'react';
// import LiteYouTubeEmbed from 'react-lite-youtube-embed';

interface Props {
  id: string;
  title: string;
}

function YoutubeVideo({ id, title }: Props) {
  // return (
  //   <LiteYouTubeEmbed id={id} title={title} adNetwork={true} cookie={true} />
  // );
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
      style={{ width: '100%', aspectRatio: 16 / 9 }}
    />
  );
}

export default YoutubeVideo;
