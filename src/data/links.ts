import { FaYoutube, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { MdArticle } from 'react-icons/md';

export type CustomLinkData = {
  text: string;
  Icon: typeof FaYoutube;
  href: string;
};

export const mainLinks: CustomLinkData[] = [
  {
    text: 'notJust.YTChannel',
    Icon: FaYoutube,
    href: 'https://www.youtube.com/@notjustdev?sub_confirmation=1',
  },
  {
    text: 'notJust.Academy',
    Icon: HiAcademicCap,
    href: 'https://academy.notjust.dev',
  },
  {
    text: 'notJust.Blog',
    Icon: MdArticle,
    href: 'https://www.notjust.dev/blog',
  },
];

export const socialLinks = [
  {
    name: 'Twitter',
    Icon: FaTwitter,
    href: 'https://twitter.com/VadimNotJustDev',
  },
  {
    name: 'Instagram',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/vadimnotjustdev/',
  },
  {
    name: 'Discord',
    Icon: FaDiscord,
    href: 'https://discord.gg/VpURUN2',
  },
];
