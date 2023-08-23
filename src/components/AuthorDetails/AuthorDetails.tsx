import Image from 'next/image';
import SocialIconLink from '../SocialIconLink/SocialIconLink';
import bmcButton from '../../../public/images/bmc-button.png';

interface Props {
  author: Author;
  sectionTitle?: string;
}

const AuthorDetails = ({ author, sectionTitle }: Props) => {
  if (!author) {
    return null;
  }

  return (
    <div>
      <hr className="mt-10 mb-5 border-gray-700" />

      {sectionTitle && (
        <h2 className="text-2xl my-3 text-center text-gray-400">
          {sectionTitle}
        </h2>
      )}

      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className="w-36 h-36 relative rounded-full overflow-hidden">
          {author.image && (
            <Image
              src={author.image}
              width={144}
              height={144}
              alt={`${author.name} profile picture`}
            />
          )}
        </div>

        <div className="flex-1 sm:ml-5 mt-5 sm:mt-0 text-center sm:text-left">
          <h2 className="text-4xl">{author.name}</h2>

          <div className="flex flex-row my-3 justify-center sm:justify-start">
            <SocialIconLink type="Twitter" url={author.Twitter} />
            <SocialIconLink type="LinkedIn" url={author.LinkedIn} />
            <SocialIconLink type="Github" url={author.Github} />
            <SocialIconLink type="Facebook" url={author.Facebook} />
            <SocialIconLink type="Instagram" url={author.Instagram} />
            <SocialIconLink type="Youtube" url={author.Youtube} />
          </div>

          <p
            className="text-gray-400"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: author.bio.replace(/(?:\r\n|\r|\n)/g, '<br>'),
            }}
          />

          {author.buyMeACoffee && (
            <>
              <p className="mt-5 mb-2 font-semibold">
                If you want to support me personally, you can
              </p>
              <a href={author.buyMeACoffee} target="_blank" rel="noreferrer">
                <Image width={218} src={bmcButton} alt="Buy me a coffee" />
              </a>
            </>
          )}
        </div>
      </div>

      <hr className="my-10 border-gray-700" />
    </div>
  );
};

export default AuthorDetails;
