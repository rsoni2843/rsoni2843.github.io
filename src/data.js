import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiMapPin,
  FiDownload,
  FiPhoneCall,
} from "react-icons/fi";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about me",
    href: "about",
  },
  {
    name: "skills",
    href: "portfolio",
  },
  {
    name: "project",
    href: "services",
  },

  {
    name: "contact",
    href: "contact",
  },
];

export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/rsoni2843",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/nipendra-soni-31b85017a",
  },
  {
    icon: <FiDownload />,
    href: "https://drive.google.com/uc?export=download&id=1-L34BLuSuGmlDiFZV4QNBgoBK_7kCm8x",
    description: "(Resume)",
  },
];

export const projectsData = [
  {
    id: "3",
    image:
      "https://user-images.githubusercontent.com/105920688/208405066-668ca6c8-6d31-4f17-a055-623228bed1a0.png",
    name: "Care&Fit (Collaborative)",
    github: "https://github.com/dinesh0085/trite-arithmetic-7774",
    stack:
      "React JS, Redux, TypeScript, Node JS, Express JS, Mongo DB, Chakra UI",
    category: "Fitness",
    description:
      "Care&Fit is a health and fitness platform where you can buy online checkup tests and also book session for mind therapy and consult doctors.",
    link: "https://moonlit-gumption-211089.netlify.app/",
  },
  {
    id: 20,
    image: "https://i.stack.imgur.com/6HeP9.png",
    name: "ChatApp (Individual)",
    github: "https://github.com/rsoni2843/Chat-app-with-typescript",
    stack:
      "React JS, Redux, TypeScript, Socket IO, Node JS, Express JS, Mongo DB, Chakra UI",
    category: "Messaging",
    description:
      "Chatting application where user can interact with other users present on the dashboard.",
    link: "https://teal-creponne-2efc7a.netlify.app",
  },
  {
    id: "2",
    image: "https://i.stack.imgur.com/QoWU4.png",
    name: "Netmeds (Individual)",
    github: "https://github.com/rsoni2843/brief-battle-8574",
    stack:
      "React JS, Redux, Firebase, Node JS, Express JS, Mongo DB, Chakra UI",
    category: "e-commerce (medicine)",
    description:
      "Netmeds Marketplace Limited operates as an online pharmacy. TheCompany offers eyewear, fitness, personal care, prescribed medicines, and health products.",
    link: "https://charming-flan-ec1097.netlify.app/",
  },
  {
    id: 10,
    image: "https://i.stack.imgur.com/wqlPS.jpg",
    name: "TravelGo (Collaborative)",
    github: "https://github.com/rsoni2843/Tripadvisor-Clone",
    stack: "React JS, Redux, Node JS, Express JS, Mongo DB, TypeScript",
    category: "travelling (Hotel Booking)",
    description:
      "TravelGo is a clone of Tripadvisor & Tripadvisor is an American online travel company that operates a website and mobile app with user-generated content and a comparison shopping website",
    link: "https://cheery-dasik-4fae30.netlify.app/",
  },

  {
    id: "4",
    image: "https://i.stack.imgur.com/c6rlc.png",
    name: "Mailtrap (Collaborative)",
    stack: "HTML, CSS, JavaScript, JSON-Server",
    category: "E-Mail Testing",
    github: "https://github.com/rsoni2843/Mailtrap-Clone",
    description:
      "Mailtrap.io represents a cloud-based email testing service with a fake SMTP server under the hood. You send test emails from your app and Mailtrap catches and puts them into a virtual inbox.",
    link: "https://cerulean-pika-267e02.netlify.app/",
  },
  {
    id: "1",
    image: "https://i.stack.imgur.com/XIN6e.jpg",
    name: "Firstpost (Individual)",
    github: "https://github.com/rsoni2843/wrong-mother-4289",
    stack: "React JS, Chakra UI, Bootstrap, React Router DOM",
    category: "News",
    description:
      "Firstpost is an Indian online news and media website. Firstpost is a part of the Network 18 media conglomerate owned by Reliance Industries.",
    link: "https://beautiful-queijadas-33f507.netlify.app/",
  },
  {
    id: "11",
    image: "https://i.stack.imgur.com/nJIPE.png",
    stack: "React JS, Redux, Chakra UI, Node JS, Express JS, Mongo DB",
    name: "Quizzy (Individual)",
    category: "Quiz app",
    github: "https://github.com/rsoni2843/Quiz-app-with-mern",
    description:
      "Quiz app with mern stack where you can play the quiz according to you category choice, difficulty level and number of questions",
    link: "https://gleaming-mousse-e57839.netlify.app/",
  },
  {
    id: "5",
    image: "https://i.stack.imgur.com/gIhoj.jpg",
    stack: "HTML, CSS, JavaScript",
    name: "NDTV (Collaborative)",
    category: "News",
    github: "https://github.com/rsoni2843/ndtv",
    description:
      "NDTV.com provides latest news from India and around the world. Get breaking news alerts from India and follow today's live news updates from various categories",
    link: "https://stalwart-pika-fa453c.netlify.app/",
  },
  {
    id: "10",
    image: "https://i.stack.imgur.com/CZhHP.jpg",
    github: "https://github.com/rsoni2843/Food_App_in_JS_with_Auth",
    stack: "HTML, CSS, JavaScript, Local Storage",
    name: "Food App",
    category: "Food Search app",
    description:
      "Food App helps to search for the food which you want to search for and also shows some random recipe which is made with the help of the HTML, CSS & Javascript which shows the recipes when logged in.",
    link: "https://transcendent-sunshine-d102aa.netlify.app/",
  },
  {
    id: "6",
    image: "https://i.stack.imgur.com/UA9vq.png",
    stack: "HTML, CSS, JavaScript, Rest API",
    name: "Youtube",
    github: "https://github.com/rsoni2843/Youtube-Clone-JS",
    category: "Social Media",
    description:
      "YouTube is a video sharing service where users can watch, like, share, comment and upload their own videos.",
    link: "https://glittering-klepon-7d8234.netlify.app/",
  },
  {
    id: "7",
    image: "https://i.stack.imgur.com/SvfDs.png",
    github: "https://github.com/rsoni2843/Weather_App_in_JS",
    stack: "HTML, CSS, JavaScript, Rest API",
    name: "Weather App",
    category: "Weather Information",
    description:
      "Weather app provides the weather information across the world for daily and weekly updates.",
    link: "https://splendorous-granita-7d159d.netlify.app/",
  },
  // {
  //   id: "8",
  //   image: StarWar,
  //   github: "https://github.com/rsoni2843/Star-War_character_search_with_JS",
  //   stack: "HTML, CSS, JavaScript",
  //   name: "Starwar",
  //   category: "Star War Character Search",
  //   description:
  //     "Star War character search using the debouncing feature in the JavaScript",
  //   link: "https://brilliant-unicorn-47c550.netlify.app",
  // },
  {
    id: "9",
    image: "https://i.stack.imgur.com/InmnU.png",
    github:
      "https://github.com/rsoni2843/Job_App_with_JS_with_Sorting-Bookmark",
    stack: "HTML, CSS, JavaScript, Local Storage",
    name: "Job App",
    category: "Job app",
    description:
      "Job App made with the help of HTML, CSS & JavaScript with sorting, bookmarking & delete functionality.",
    link: "https://transcendent-sunshine-d102aa.netlify.app/",
  },
];

// skill
export const skills = [
  {
    image: "https://i.stack.imgur.com/8bTDJ.png",
  },
  {
    image: "https://i.stack.imgur.com/bNKw4.png",
  },
  {
    image: "https://i.stack.imgur.com/UZkXg.png",
  },
  {
    image:
      "https://media0.giphy.com/media/RJzm826vu7WbJvBtxX/giphy.gif?cid=6c09b952f2tzzhgaacs16r6qc70g8s7labhgrwhuicih0wc3&rid=giphy.gif&ct=s",
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    image: "https://i.stack.imgur.com/80vyT.png",
  },
  {
    image: "https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
  },
  {
    image: "https://www.coffeeclass.io/logos/chakra-ui.png",
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
];

// contact
export const contact = [
  {
    icon: <FiGithub />,
    title: "Github",
    subtitle: "Click Here",
    description: "",
    link: "https://github.com/rsoni2843",
  },
  {
    icon: <FiLinkedin />,
    title: "LinkedIn",
    subtitle: "Click Here",
    description: "",
    link: "https://www.linkedin.com/in/nipendra-soni-31b85017a",
  },
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at rsoni2843@gmail.com.",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    // subtitle: "",
    description: "Lucknow, Uttar Pradesh",
  },
  {
    icon: <FiPhoneCall />,
    title: "Contact Information",
    subtitle: "",
    description: "+91 8004657369",
  },
];
