// eslint-disable-next-line import/prefer-default-export
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export const SOCIALS: { [k: string]: string } = {
  Youtube: 'https://www.youtube.com/channel/UCYSa_YLoJokZAwHhlwJntIA',
  LinkedIn: 'https://www.linkedin.com/in/vadimsavin/',
  Twitter: 'https://twitter.com/VadimNotJustDev',
  Instagram: 'https://www.instagram.com/VadimNotJustDev/',
};

export const CONVERTKIT = {
  FORM_SRC: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_SRC,
  FORM_ID: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID,
  subscribers: 33521,
  subscribersUpdatedOn: '2023-06-06',
  averageNewSubscribersPerDay: 50,
};

export const SEO = {
  title: 'notJust Development',
  description:
    'Become a full-stack developer by building real projects. Learn React, React Native, AWS Amplify and other modern technologies that power WEB and Mobile',
  author: 'Vadim Savin',
  keywords: 'React Native, React, Typescript, AWS Amplify',
  hostname: 'https://www.notjust.dev',
  image: '/images/notJustCover.jpg',
  twitter: '@VadimNotJustDev',
};
