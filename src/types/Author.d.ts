type Author = {
  id: string;
  name: string;
  image: string;
  description: string;
  socials: { [key in SocialMediaPlatform]?: string };
  buyMeACoffee?: string;
};
