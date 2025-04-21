import Form from './form';

export default function KitForm({
  formId,
  beforeTitle,
  title,
  description,
  buttonText,
}: {
  formId: string;
  beforeTitle?: string;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-5 bg-gradient-to-tr from-neutral-900/75 to-neutral-900/50 backdrop-blur-2xl shadow-lg p-5 rounded-lg">
      {beforeTitle && (
        <span className="text-pill self-start">{beforeTitle}</span>
      )}
      <p className="text-3xl text-primary-gradient font-bold font-space-grotesk">
        {title}
      </p>
      <p className="text-white-100">{description}</p>
      <Form formId={formId} buttonText={buttonText} />
    </div>
  );
}
