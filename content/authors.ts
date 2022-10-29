import Lukas from '../public/images/authors/lukas.jpeg';
import Vadim from '../public/images/authors/vadim.jpg';

const authors: Author[] = [
  {
    id: 'vadim',
    name: 'Vadim Savin',
    image: Vadim,
    description: `Hi 👋 Let me introduce myself

I started my career as a Fullstack Developer when I was 16 y.o.

In search of more freedom, I transitioned to freelancing, which quickly grew into a global software development agency 🔥

Because that was not challenging enough, I started my startup which is used by over 20k users. This experience gave another meaning to being a (notJust) developer 🚀

I am also a proud ex-Amazon SDE and Certified AWS Architect, Developer and SysOps. You are in good hands 👌`,
    socials: {
      Twitter: 'VadimNotJustDev',
      Github: 'Savinvadim1312',
      LinkedIn: 'vadimsavin/',
      Youtube: 'UCYSa_YLoJokZAwHhlwJntIA',
      Instagram: 'VadimNotJustDev/',
      Facebook: 'vadik.savin.9',
    },
    buyMeACoffee: 'VadimNotJustDev',
  },
  {
    id: 'lukas',
    name: 'Lukas Grinevičius',
    image: Lukas,
    description: `Hey! 👋  I\'m Lukas and I\'m a Fullstack Developer with a passion for building new exciting projects, coding, and sharing my knowledge with others. 
    
    I'm also a co-founder as well as a CTO of a startup that is used by over 20k users.
    
    You are in good hands because I will always try my best to help You to improve and become the next rock star developer! 🚀
    
    Therefore, I think I can call myself (notJust) developer, and I'm sure You can too! 😎
    `,
    socials: {
      LinkedIn: 'lukas-grinevičius-b16740198',
      Instagram: 'lgrinevicius/',
      Twitter: 'GrinLukas',
    },
    buyMeACoffee: 'LukasGrin',
  },
];

export default authors;
