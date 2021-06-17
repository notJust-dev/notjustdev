// eslint-disable-next-line import/prefer-default-export
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const SOCIALS: { [k: string]: string } = {
  Youtube: 'https://www.youtube.com/channel/UCYSa_YLoJokZAwHhlwJntIA',
  LinkedIn: 'https://www.linkedin.com/in/vadimsavin/',
  Twitter: 'https://twitter.com/VadimNotJustDev',
  Instagram: 'https://www.instagram.com/VadimNotJustDev/',
};

export const CHANNEL_ID = 'UCYSa_YLoJokZAwHhlwJntIA';

export const CONVERTKIT = {
  FORM_SRC: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_SRC,
  FORM_ID: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID,
  subscribers: 7100,
  subscribersUpdatedOn: '2021-06-17',
  averageNewSubscribersPerDay: 50,
};
