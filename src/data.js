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
    href: "https://drive.usercontent.google.com/download?id=1wOHthJlffp8QNzpe01T55SppZQqTTBKT&export=download&authuser=0&confirm=t&uuid=92d7fd2f-4a05-4384-a6e6-f2e0ddfafb4a&at=AN_67v2P6ZnNcX8wDdj0-P_oeYWy:1728099185726",
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
    id: "2",
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.38.10%E2%80%AFAM.png?updatedAt=1728101304098",
    name: "Netmeds Clone (Individual)",
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
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.41.06%E2%80%AFAM.png?updatedAt=1728101487556",
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
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.41.42%E2%80%AFAM.png?updatedAt=1728101957699",
    name: "Mailtrap Clone (Collaborative)",
    stack: "HTML, CSS, JavaScript, JSON-Server",
    category: "E-Mail Testing",
    github: "https://github.com/rsoni2843/Mailtrap-Clone",
    description:
      "Mailtrap.io represents a cloud-based email testing service with a fake SMTP server under the hood. You send test emails from your app and Mailtrap catches and puts them into a virtual inbox.",
    link: "https://cerulean-pika-267e02.netlify.app/",
  },
  {
    id: "1",
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.42.08%E2%80%AFAM.png?updatedAt=1728101960455",
    name: "Firstpost Clone (Individual)",
    github: "https://github.com/rsoni2843/wrong-mother-4289",
    stack: "React JS, Chakra UI, Bootstrap, React Router DOM",
    category: "News",
    description:
      "Firstpost is an Indian online news and media website. Firstpost is a part of the Network 18 media conglomerate owned by Reliance Industries.",
    link: "https://beautiful-queijadas-33f507.netlify.app/",
  },
  {
    id: "11",
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.42.36%E2%80%AFAM.png?updatedAt=1728101955699",
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
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.43.08%E2%80%AFAM.png?updatedAt=1728101960628",
    stack: "HTML, CSS, JavaScript",
    name: "NDTV Clone (Collaborative)",
    category: "News",
    github: "https://github.com/rsoni2843/ndtv",
    description:
      "NDTV.com provides latest news from India and around the world. Get breaking news alerts from India and follow today's live news updates from various categories",
    link: "https://stalwart-pika-fa453c.netlify.app/",
  },
  {
    id: "10",
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.45.41%E2%80%AFAM.png?updatedAt=1728101961652",
    github: "https://github.com/rsoni2843/Food_App_in_JS_with_Auth",
    stack: "HTML, CSS, JavaScript, Local Storage",
    name: "Food App",
    category: "Food Search app",
    description:
      "Food App helps to search for the food which you want to search for and also shows some random recipe which is made with the help of the HTML, CSS & Javascript which shows the recipes when logged in.",
    link: "https://symphonious-cactus-087af5.netlify.app/",
  },
  {
    id: "6",
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.46.47%E2%80%AFAM.png?updatedAt=1728101959302",
    stack: "HTML, CSS, JavaScript, Rest API",
    name: "Youtube Clone",
    github: "https://github.com/rsoni2843/Youtube-Clone-JS",
    category: "Social Media",
    description:
      "YouTube is a video sharing service where users can watch, like, share, comment and upload their own videos.",
    link: "https://glittering-klepon-7d8234.netlify.app/",
  },
  {
    id: "7",
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.47.33%E2%80%AFAM.png?updatedAt=1728101957578",
    github: "https://github.com/rsoni2843/Weather_App_in_JS",
    stack: "HTML, CSS, JavaScript, Rest API",
    name: "Weather App",
    category: "Weather Information",
    description:
      "Weather app provides the weather information across the world for daily and weekly updates.",
    link: "https://splendorous-granita-7d159d.netlify.app/",
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
  // {
  //   id: "8",
  //   image: StarWar,
  //   github: "https://github.com/rsoni2843/Star-War_characfter_search_with_JS",
  //   stack: "HTML, CSS, JavaScript",
  //   name: "Starwar",
  //   category: "Star War Character Search",
  //   description:
  //     "Star War character search using the debouncing feature in the JavaScript",
  //   link: "https://brilliant-unicorn-47c550.netlify.app",
  // },
  {
    id: "9",
    image:
      "https://ik.imagekit.io/rqsoynsuq/Screenshot%202024-10-05%20at%209.48.42%E2%80%AFAM.png?updatedAt=1728101955398",
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
    image:
      "https://ik.imagekit.io/rqsoynsuq/ReactImage.webp?updatedAt=1722054563408",
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
  },
  {
    image: "https://nestjs.com/logo-small-gradient.76616405.svg",
  },
  {
    image:
      "https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png",
  },
  {
    image: "https://www.postgresql.org/media/img/about/press/elephant.png",
  },
  {
    image:
      "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
  },
  {
    image:
      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    image:
      "https://ik.imagekit.io/rqsoynsuq/JavaScript-logo.png?updatedAt=1722055494115",
  },
  {
    image:
      "https://ik.imagekit.io/rqsoynsuq/DOCKER%20LOGO.png?updatedAt=1722055677202",
  },
  // {
  //   image: "https://www.coffeeclass.io/logos/chakra-ui.png",
  // },
  // {
  //   image: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
  // },
  // {
  //   image: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
  // },
  {
    image:
      "https://ik.imagekit.io/rqsoynsuq/AWS_LOGO.png?updatedAt=1722055570066",
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

export const liveProjects = [
  {
    title: "Price Comparison Scraping Tool",
    description:
      "Developed a price comparison scraping tool for Dentalkart, which automates daily data collection from competitors, including product stock, price, and name updates. I worked on both frontend and backend, using React.js for the UI and NestJS for the server. I integrated a third-party scraping API and set up cron jobs to ensure regular data updates. This tool helps the company analyze competitor pricing trends, enabling strategic adjustments to stay competitive in the market.",
  },
  {
    title: "Interface Microservice",
    description:
      "Developed both the backend and frontend for Dentalkart's interface microservice, which stores and manages data for banners, product carousels, brands, categories, and country-specific content. This system powers the homepage and banners across various pages. Additionally, I built the admin APIs and integrated them into the admin side, providing the content and management teams with the flexibility to easily update and modify banners on the website in real-time.",
  },
  {
    title: "Automated Competitor Data Scraping",
    description:
      "Automated the process of scraping competitor products for Dentalkart using Puppeteer. This system runs weekly to gather comprehensive product data from competitor websites, generating detailed reports in CSV format. These reports are automatically sent to the marketing team, providing valuable insights for market analysis and strategy.",
  },
  {
    title: "Buy X Get Y Functionality",
    description:
      "Developed a 'Buy X Get Y' functionality as part of a microservice-based cart service. This feature allows users to purchase a specified quantity (n) of item X and receive a specified quantity (m) of item Y for free. The feature is integrated seamlessly into the cart system, handling complex promotions and ensuring accurate calculations at checkout. This functionality enhances the shopping experience by offering promotional deals and boosts customer engagement.",
  },
  {
    title: "Referral System",
    description:
      "Developed a referral system for Dentalkart that enhances customer engagement by offering rewards and memberships for both referrers and recipients during sign-up and product sharing. This system encourages users to invite others, providing mutual benefits and driving growth for the company.",
  },
  {
    title: "Dental Feeds System",
    description:
      "Developed the backend for Dentalkart's shorts video app, enabling users to watch dental-related short videos. The app includes features for liking, commenting, and sharing videos, along with detailed analytics to track video engagement and user activity. This helps enhance user interaction and provides valuable insights into content performance.",
  },
  {
    title: "Dentalkart Admin Panel",
    description:
      "Developed and integrated various modules of Dentalkart's admin panel, enabling efficient management of key features such as Buy X Gey Y, Coupon, Feeds, and content updates. This streamlined the workflow for administrators, allowing for seamless control and operation of the platform.",
  },
  {
    title: "Dentalkart Frontend",
    description:
      "Worked on various modules of Dentalkart's old frontend, developing some from scratch and resolving bugs to improve functionality. Additionally, I contributed to the new website's frontend development and handled bug fixes, ensuring a smooth user experience across both versions of the platform.",
  },
];
