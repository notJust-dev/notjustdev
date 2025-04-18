interface Props {
  id: string;
  title: string;
}

export default function YoutubeVideo({ id, title }: Props) {
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
