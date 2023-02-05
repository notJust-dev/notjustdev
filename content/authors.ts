import Lukas from '../public/images/authors/lukas.jpeg';
import Vadim from '../public/images/authors/vadim.jpg';
import Wynstan from '../public/images/authors/wynstan.png';
import Saad from '../public/images/authors/saad.jpeg';

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
      LinkedIn: 'vadimsavin',
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
  {
    id: 'wynstan',
    name: 'Wynstan',
    image: Wynstan,
    description: `Hey there! 👋  I\'m Wynstan and I am excited to work with you and help you become a confident and capable mobile developer. Let's get started!
    `,
    socials: {
      // LinkedIn: 'lukas-grinevičius-b16740198',
      // Instagram: 'lgrinevicius/',
      // Twitter: 'GrinLukas',
    },
    // buyMeACoffee: 'LukasGrin',
  },
  {
    id: 'Saad',
    name: 'Saad Bin Bashar',
    image: Saad,
    description: `Hey there! 👋  I\'m Saad, I am a senior mobile enginner focused mainly on React Native. 

    I have been working with React Native for over 4 years now. I have worked on a variety of projects ranging from small to large scale projects. I have also worked on a few open source projects.
    
    I love sharing my knowledge with others and helping them become better developers.`,
    socials: {
      LinkedIn: 'https://www.linkedin.com/in/saad-khan27/',
      Instagram: '',
      Twitter: 'https://twitter.com/saad_khan27',
    },
  },
];

export default authors;
