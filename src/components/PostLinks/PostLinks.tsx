import { ReactNode } from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

type PostLinksProps = {
  post: Post;
};

const PostLink = ({
  href,
  children,
}: {
  href?: string | null;
  children: ReactNode;
}) => {
  if (!href) {
    return null;
  }
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="flex flex-row items-center gap-2 hover:text-primary"
      >
        {children}
        <FaArrowRightLong />
      </a>
    </li>
  );
};

export default function PostLinks({ post }: PostLinksProps) {
  const youtube =
    post.youtubeID && `https://www.youtube.com/watch?v=${post.youtubeID}`;

  if (!youtube && !post.githubUrl) {
    return null;
  }

  return (
    <div>
      <h3 className="mb-4 pl-3 border-l-4 border-secondary text-xl">Links</h3>

      <ul className="flex flex-col gap-2">
        <PostLink href={youtube}>
          <FaYoutube />
          Watch on Youtube
        </PostLink>

        <PostLink href={post.githubUrl}>
          <FaGithub />
          Source code
        </PostLink>

        {youtube && (
          <li>
            <a
              href={youtube}
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-primary"
            ></a>
          </li>
        )}
      </ul>
    </div>
  );
}
