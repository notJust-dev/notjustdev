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
  handle?: string;
}

const SocialIcons: { [key in SocialMediaPlatform]: typeof FaFacebookSquare } = {
  Facebook: FaFacebookSquare,
  LinkedIn: FaLinkedin,
  Github: FaGithubSquare,
  Twitter: FaTwitterSquare,
  Youtube: FaYoutubeSquare,
  Instagram: FaInstagramSquare,
};

const SocialUrls: { [key in SocialMediaPlatform]: string } = {
  Facebook: 'https://www.facebook.com/',
  LinkedIn: 'https://www.linkedin.com/in/',
  Github: 'https://github.com/',
  Twitter: 'https://twitter.com/',
  Youtube: 'https://www.youtube.com/channel/',
  Instagram: 'https://www.instagram.com/',
};

const SocialIconLink = ({ type, handle }: ISocialIconLink) => {
  const Icon = SocialIcons[type];

  if (!handle) {
    return null;
  }

  return (
    <a
      href={`${SocialUrls[type]}${handle}`}
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
