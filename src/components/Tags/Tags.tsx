import Tag from './Tag';

export default function Tags({ tags }: { tags: NotionMultiSelect[] }) {
  return (
    <div
      className="flex flex-wrap gap-2 self-start
    "
    >
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
}
