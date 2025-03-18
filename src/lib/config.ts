// eslint-disable-next-line import/prefer-default-export
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const GTM = process.env.NEXT_PUBLIC_GTM;

export const SOCIALS: { [k: string]: string } = {
  Youtube: 'https://www.youtube.com/channel/UCYSa_YLoJokZAwHhlwJntIA',
  LinkedIn: 'https://www.linkedin.com/in/vadimsavin/',
  Twitter: 'https://twitter.com/VadimNotJustDev',
  Instagram: 'https://www.instagram.com/VadimNotJustDev/',
};

export const CONVERTKIT = {
  FORM_SRC: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_SRC,
  FORM_ID: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID,
  subscribers: 25986,
  subscribersUpdatedOn: '2024-10-28',
  averageNewSubscribersPerDay: 50,
};

export const SEO = {
  title: 'notJust Development',
  author: 'Vadim Savin',
  keywords: 'React Native, React, Typescript, AWS Amplify',
  hostname: 'https://www.notjust.dev',
  image: '/images/notJustCover.jpg',
  twitter: '@VadimNotJustDev',
};
