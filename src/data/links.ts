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
    text: 'Youtube',
    Icon: FaYoutube,
    href: 'http://bit.ly/3KrjgEz',
  },
  {
    text: 'Academy',
    Icon: HiAcademicCap,
    href: 'http://bit.ly/3So5d4l',
  },
  {
    text: 'Blog',
    Icon: MdArticle,
    href: 'http://bit.ly/3Ze10m9',
  },
];

export const socialLinks = [
  {
    name: 'Twitter',
    Icon: FaTwitter,
    href: 'http://bit.ly/3ZfCGAa',
  },
  {
    name: 'Instagram',
    Icon: FaInstagram,
    href: 'http://bit.ly/3Eup4Jo',
  },
  {
    name: 'Discord',
    Icon: FaDiscord,
    href: 'http://bit.ly/3ILxRJF',
  },
];
