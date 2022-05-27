import Image from 'next/image';
import SocialIconLink from '../SocialIconLink/SocialIconLink';
import authors from '../../../content/authors';
import bmcButton from '../../../public/images/bmc-button.png';

interface IAuthorDetails {
  authorId: string;
}

const AuthorDetails = ({ authorId }: IAuthorDetails) => {
  const author = authors.find((a) => a.id === authorId);

  if (!author) {
    return null;
  }

  return (
    <div>
      <hr className="my-4 border-gray-700" />

      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className="w-36 h-36 relative rounded-full overflow-hidden">
          <Image
            src={`/images/authors/${author.image}`}
            layout="fill"
            objectFit="cover"
            alt="post image"
          />
        </div>

        <div className="flex-1 sm:ml-5 mt-5 sm:mt-0 text-center sm:text-left">
          <h2 className="text-4xl">{author.name}</h2>

          <div className="flex flex-row my-3 justify-center sm:justify-start">
            <SocialIconLink type="Twitter" handle={author.socials.Twitter} />
            <SocialIconLink type="LinkedIn" handle={author.socials.LinkedIn} />
            <SocialIconLink type="Github" handle={author.socials.Github} />
            <SocialIconLink type="Facebook" handle={author.socials.Facebook} />
            <SocialIconLink
              type="Instagram"
              handle={author.socials.Instagram}
            />
            <SocialIconLink type="Youtube" handle={author.socials.Youtube} />
          </div>

          <p
            className="text-gray-400"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: author.description.replace(/(?:\r\n|\r|\n)/g, '<br>'),
            }}
          />

          {author.buyMeACoffee && (
            <>
              <p className="mt-5 mb-2 font-semibold">
                If you want to support me personally, you can
              </p>
              <a
                href={`https://www.buymeacoffee.com/${author.buyMeACoffee}`}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width={218}
                  height={60}
                  src={bmcButton}
                  alt="Buy me a coffee"
                />
              </a>
            </>
          )}
        </div>
      </div>

      <hr className="my-4 border-gray-700" />
    </div>
  );
};

export default AuthorDetails;
