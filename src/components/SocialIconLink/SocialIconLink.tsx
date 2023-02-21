import {
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

interface ISocialIconLink {
  type: SocialMediaPlatform;
  url?: string | null;
}

const SocialIcons: { [key in SocialMediaPlatform]: typeof FaFacebookSquare } = {
  Facebook: FaFacebookSquare,
  LinkedIn: FaLinkedin,
  Github: FaGithubSquare,
  Twitter: FaTwitterSquare,
  Youtube: FaYoutubeSquare,
  Instagram: FaInstagramSquare,
};

const SocialIconLink = ({ type, url }: ISocialIconLink) => {
  const Icon = SocialIcons[type];

  if (!url) {
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mr-1 hover:text-primary text-gray-100"
    >
      <Icon size={30} title={type} />
    </a>
  );
};

SocialIconLink.defaultProps = {
  href: undefined,
} as Partial<ISocialIconLink>;

export default SocialIconLink;
