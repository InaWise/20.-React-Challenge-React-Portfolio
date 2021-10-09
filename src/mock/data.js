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
  paragraphOne: 'Front-End Web Developer leveraging my knowledge to build more intuitive user experiences on the web. Recently earned a certificate in Full Stack Development from the University of Central Florida and developed skills in Html, JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem-solver passionate about developing apps, with a focus on mobile-first design and development. Aim for each project is to best engage the audience for an impactful user-experience.   Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.',
  paragraphTwo: '  ',
  paragraphThree: '   ',
  resume: 'https://docs.google.com/document/d/1GQUmA-lUHfghLqYYOBQDMpTVupjaVaaYL5-lG29CgoI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Horiseon (1).png',
    title: 'Horiseon',
    info: 'In this Challenge, a marketing agency has hired me to refactor an existing site to make it more accessible.',
    info2: '',
    url: '',
    repo: 'https://github.com/InaWise/Horiseon-code', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iambored-home.png',
    title: 'IAMBORED',
    info: 'IAMBORED is an application that randomly chooses an event for you based off of the inputted city. It also allows you to choose a new event in that city. Once an interesting event is found the application provides a map of the location and any health warnings or information due to COVID-19.',
    info2: '',
    url: '',
    repo: 'https://github.com/InaWise/8.-Interactive-Front-End-Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Note-Taker.png',
    title: 'Note-taker',
    info: 'This project is creates an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
    info2: '',
    url: '',
    repo: 'https://github.com/InaWise/11.-Express.js-Challenge-Note-Taker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'inaawise@gmail.com',
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
