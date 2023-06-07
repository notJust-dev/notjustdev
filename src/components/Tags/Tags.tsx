import Tag from './Tag';

export default function Tags({
  tags,
  highlighted,
}: {
  tags: NotionMultiSelect[];
  highlighted?: NotionMultiSelect;
}) {
  return (
    <div
      className="flex flex-wrap gap-2 self-start justify-center md:justify-start  w-full
    "
    >
      {tags.map((tag) => (
        <Tag
          key={tag.id}
          tag={tag}
          dimmed={highlighted && highlighted.id !== tag.id}
        />
      ))}
    </div>
  );
}
