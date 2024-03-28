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
      className="flex-1 flex flex-wrap gap-2 items-center justify-center md:justify-end 
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
