//  icons
import {
  FiLinkedin,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiDownload,
  FiPhoneCall,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images

import NDTV from "./assets/img/projects/NDTV ss.png";
import Mailtrap from "./assets/img/projects/Mailtrap ss.png";
import Orbitz from "./assets/img/projects/Orbitz ss.png";
import Firstpost from "./assets/img/projects/Firstpost ss.png";
import Netmeds from "./assets/img/projects/Netmeds SS.png";
import Youtube from "./assets/img/projects/Youtube ss.png";
import Weather from "./assets/img/projects/Weather ss.png";
import StarWar from "./assets/img/projects/StarWar ss.png";
import Job from "./assets/img/projects/Job App.png";
import Food from "./assets/img/projects/Food.png";
import TravelGo from "./assets/img/projects/TravelGo.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg7 from "./assets/img/skills/git.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
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

// social
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

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
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
    image: Netmeds,
    name: "Netmeds (Individual)",
    github: "https://github.com/rsoni2843/brief-battle-8574",
    stack: "React JS, Redux, Firebase, Mongo DB, Express JS, Chakra UI",
    category: "e-commerce (medicine)",
    description:
      "Netmeds Marketplace Limited operates as an online pharmacy. TheCompany offers eyewear, fitness, personal care, prescribed medicines, and health products.",
    link: "https://charming-flan-ec1097.netlify.app/",
  },
  {
    id: 10,
    image: TravelGo,
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
    image: Mailtrap,
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
    image: Firstpost,
    name: "Firstpost (Individual)",
    github: "https://github.com/rsoni2843/wrong-mother-4289",
    stack: "React JS, Chakra UI, Bootstrap, React Router DOM",
    category: "News",
    description:
      "Firstpost is an Indian online news and media website. Firstpost is a part of the Network 18 media conglomerate owned by Reliance Industries.",
    link: "https://beautiful-queijadas-33f507.netlify.app/",
  },
  {
    id: "5",
    image: NDTV,
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
    image: Food,
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
    image: Youtube,
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
    image: Weather,
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
    image: Job,
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

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
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
    image: SkillImg7,
  },
  {
    image: "https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png",
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

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
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
