import { BsFillDatabaseFill } from "react-icons/bs";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { PiFunctionBold } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiReactquery } from "react-icons/si";

interface Skill {
  title: string;
  icon: JSX.Element;
  descr: string;
}

export interface SkillsDetail {
  id: number;
  title: string;
  percent: number;
}
export interface Rings {
  icon: JSX.Element;
  href: string;
}

interface Link {
  title: string;
  url: string;
}

export const links = [
  {
    title: "Home",
    url: "home",
  },
  {
    title: "About",
    url: "about",
  },
  {
    title: "Skills",
    url: "skills",
  },
  {
    title: "Resources",
    url: "resources",
  },
  {
    title: "Projects",
    url: "projects",
  },
  {
    title: "Contacts",
    url: "contacts",
  },
];

export const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description:
      "Website for a restaurant in HTML, CSS, JS and a little bit of PHP.",
    alt: "Project Restaurant",
    imageUrl: "/restaurant1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?",
    alt: "Project",
    imageUrl: "/portfolio2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?",
    alt: "Project",
    imageUrl: "/portfolio3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?",
    alt: "Project",
    imageUrl: "/portfolio4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?",
    alt: "Project",
    imageUrl: "/portfolio5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?",
    alt: "Project",
    imageUrl: "/portfolio1.jpg",
    link: "#",
  },
];

export const mainSkills: SkillsDetail[] = [
  {
    id: 1,
    title: "NEXTJS",
    percent: 90,
  },
  {
    id: 2,
    title: "HTML",
    percent: 10,
  },
  {
    id: 3,
    title: "JS TS",
    percent: 100,
  },
  {
    id: 4,
    title: "TANSTACK QUERY",
    percent: 30,
  },
  {
    id: 5,
    title: "PRISMA",
    percent: 90,
  },
  {
    id: 5,
    title: "MONGOOSE",
    percent: 10,
  },
];

export const secondarySkills: SkillsDetail[] = [
  {
    id: 1,
    title: "TAILWIND CSS",
    percent: 90,
  },
  {
    id: 2,
    title: "CSS MODULES",
    percent: 10,
  },
  {
    id: 3,
    title: "SASS",
    percent: 10,
  },
  {
    id: 4,
    title: "CSS",
    percent: 10,
  },
  {
    id: 5,
    title: "FRAMER MOTION",
    percent: 30,
  },
  {
    id: 6,
    title: "CLOUDINARY",
    percent: 80,
  },
];
export const skills: Skill[] = [
  {
    title: "NEXTJS",
    icon: <RiNextjsFill />,

    descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
			voluptas quam harum neque vel ratione. Iure distinctio aut
			itaque necessitatibus!`,
  },
  {
    title: "JS TS",
    icon: <PiFunctionBold />,

    descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
			voluptas quam harum neque vel ratione. Iure distinctio aut
			itaque necessitatibus!`,
  },
  {
    title: "TANSTACK QUERY",
    icon: <SiReactquery />,

    descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
			voluptas quam harum neque vel ratione. Iure distinctio aut
			itaque necessitatibus!`,
  },

  {
    title: "DATABASES",
    icon: <BsFillDatabaseFill />,

    descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
			voluptas quam harum neque vel ratione. Iure distinctio aut
			itaque necessitatibus!`,
  },
  {
    title: "POSTGRESQL",
    icon: <SiMongodb />,

    descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
			voluptas quam harum neque vel ratione. Iure distinctio aut
			itaque necessitatibus! `,
  },
];

export const rings: Rings[] = [
  {
    icon: <FaTelegramPlane />,
    href: "https://t.me/norixlab",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/message/W7TW3RZT2NESN1",
  },
  {
    icon: <LuMail />,
    href: "mailto:support@norixlab.com",
  },
];
