type Author = {
  id: string;
  name: string;
  bio: string;

  image?: string;
  // socials
  Facebook?: string | null;
  LinkedIn?: string | null;
  Github?: string | null;
  Twitter?: string | null;
  Youtube?: string | null;
  Instagram?: string | null;

  // donation
  buyMeACoffee?: string | null;
};
