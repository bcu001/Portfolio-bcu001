// Your resume data
import { CodeIcon, HomeIcon } from "lucide-react";
import { ICON } from "@/lib/img/img";

export const DATA = {
  name: "Bhuwan Chandra Upadhyay",
  url: "https://github.com/bcu001",
  img: null,
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description: "Full Stack Developer",
  summary: `Full Stack Developer with hands-on experience building React frontends and Node.js/Express APIs. Skilled in REST API integration, JWT authentication, MongoDB schema design, state management, and responsive UI development with Tailwind CSS.`,
  skills: [
    "ReactJs",
    "NextJs",
    "Typescript",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "Zod",
    "Postman",
    "Git",
    "Github",
    "Magic UI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "water.com",
    tel: "+918076667001",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bcu001",
        icon: ICON.github,
        navbar: true,
        // dark_icon: GithubDarkSvg,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bcu001/",
        icon: ICON.linkedin,
        navbar: true,
        // dark_icon: LinkedinDarkSvg,
      },
      X: {
        name: "X",
        url: "https://twitter.com/bcu001",
        icon: ICON.X,
        navbar: true,
        // dark_icon: TwitterDarkSvg,
      },
    },
  },

  education: [
    {
      school: "Indira Gandhi National Open University",
      href: "https://uwaterloo.ca",
      degree: "Bachelor of Computer Applications (BCA)",
      start: "2022",
      end: "2025",
    },
  ],
};
