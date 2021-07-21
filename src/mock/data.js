import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Ina Wise',
  subtitle: 'Software developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'AB2ACECD-FAA9-45FF-98B8-85858BED9DF8.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Horiseon (1).png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/InaWise/Horiseon-code', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iambored-home.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/InaWise/8.-Interactive-Front-End-Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Note-Taker.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/InaWise/11.-Express.js-Challenge-Note-Taker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'blissful.simplicity16@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.linkedin.com/in/ina-wise-016896153/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://www.linkedin.com/in/ina-wise-016896153/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ina-wise-016896153/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/InaWise?tab=repositories',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
