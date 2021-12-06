import React from 'react';

interface Props {
  id: string;
}

function YoutubeVideo({ id }: Props) {
  return (
    <iframe
      title="Youtube video"
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeVideo;
