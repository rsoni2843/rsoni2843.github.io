//  icons
import {
  FiYoutube,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiDribbble,
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

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

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
  // {
  //   name: 'contact',
  //   href: 'testimonials',
  // },

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
    id: "2",
    image: Netmeds,
    name: "Netmeds (Clone)",
    category: "e-commerce (medicine)",
    description:
      "Netmeds Marketplace Limited operates as an online pharmacy. TheCompany offers eyewear, fitness, personal care, prescribed medicines, and health products.",
    link: "https://brief-battle-8574-rsoni2843.vercel.app/",
  },
  {
    id: "3",
    image: Orbitz,
    name: "Orbitz (Clone)",
    category: "Hotel Booking",
    description:
      "Orbitz.com is a travel website that enables consumers to search for and book a broad range of hotels, flights, rentals, cruises, vacation packages and destination activities.",
    link: "https://cheery-kringle-54f279.netlify.app/",
  },
  {
    id: "4",
    image: Mailtrap,
    name: "Mailtrap (Clone)",
    category: "E-Mail Testing",
    description:
      "Mailtrap.io represents a cloud-based email testing service with a fake SMTP server under the hood. You send test emails from your app and Mailtrap catches and puts them into a virtual inbox.",
    link: "https://cerulean-pika-267e02.netlify.app/",
  },
  {
    id: "1",
    image: Firstpost,
    name: "Firstpost (Clone)",
    category: "News",
    description:
      "Firstpost is an Indian online news and media website. Firstpost is a part of the Network 18 media conglomerate owned by Reliance Industries.",
    link: "https://www.google.com",
  },
  {
    id: "5",
    image: NDTV,
    name: "NDTV (Clone)",
    category: "News",
    description:
      "NDTV.com provides latest news from India and around the world. Get breaking news alerts from India and follow today's live news updates from various categories",
    link: "https://stalwart-pika-fa453c.netlify.app/",
  },
  {
    id: "6",
    image: Youtube,
    name: "Youtube (Clone)",
    category: "Social Media",
    description:
      "YouTube is a video sharing service where users can watch, like, share, comment and upload their own videos.",
    link: "https://glittering-klepon-7d8234.netlify.app/",
  },
  {
    id: "7",
    image: Weather,
    name: "Weather App",
    category: "Weather Information",
    description:
      "Weather app provides the weather information across the world for daily and weekly updates.",
    link: "https://splendorous-granita-7d159d.netlify.app/",
  },
  {
    id: "8",
    image: StarWar,
    name: "Starwar",
    category: "Star War Character Search",
    description:
      "Star War character search using the debouncing feature in the JavaScript",
    link: "https://brilliant-unicorn-47c550.netlify.app",
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
  {
    image: "https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png",
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
    subtitle: "Lucknow, Uttar Pradesh",
  },
  {
    icon: <FiPhoneCall />,
    title: "Contact Information",
    subtitle: "+91 8004657369",
  },
];
