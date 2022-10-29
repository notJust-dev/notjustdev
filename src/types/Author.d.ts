type Author = {
  id: string;
  name: string;
  image: import('next/image').StaticImageData;
  description: string;
  socials: { [key in SocialMediaPlatform]?: string };
  buyMeACoffee?: string;
};
