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
    "Shadcn UI",
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
      href: "https://www.ignou.ac.in/",
      degree: "Bachelor of Computer Applications (BCA)",
      // start: "2022",
      // end: "2025",
      schoolImg:
        "https://www.presentations.gov.in/wp-content/uploads/2020/06/IGNOU-Preview.png",
    },
  ],
  projects: [
    {
      title: "TuneHub",
      href: "https://tune-hub-one.vercel.app/",
      active: true,
      description:
        "TuneHub is an online music streaming and management platform that allows users to search, play, and organize their favorite music. It provides features like user authentication, playlist management, an admin panel for content control, and more",
      technologies: [
        "ReactJs",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          title: "webstie",
          link: "https://tune-hub-one.vercel.app/",
          icon: ICON.website
        },
        {
          title: "github",
          link: "https://github.com/bcu001/TuneHub",
          icon: ICON.github
        },
      ],
      image: "https://pixabay.com/images/download/fietzfotos-landscape-10071298_1920.jpg",
      // video: String,
    },
    {
      title: "Webapp PrimeTrade Task",
      href: "https://webapp-primetrade-task.vercel.app/",
      active: true,
      description:
        "A full-stack web application built as an assessment task, consisting of a React frontend and a Node.js/Express backend. The app demonstrates authentication, API integration, CRUD operation, and basic webapp architecture",
      technologies: [
        "ReactJs",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "TailwindCSS",
        "JWT",
        "Zod"
      ],
      links: [
        {
          title: "webstie",
          link: "https://webapp-primetrade-task.vercel.app/",
          icon: ICON.website
        },
        {
          title: "github",
          link: "https://github.com/bcu001/webapp-primetrade-task",
          icon: ICON.github
        },
      ],
      image: "https://pixabay.com/images/download/fietzfotos-landscape-10071298_1920.jpg",
      // video: String,
    },
    {
      title: "Task Master",
      href: "https://task-master-peach-one.vercel.app/",
      active: true,
      description:
        "A full-stack web application built as an assessment task, consisting of a React frontend and a Node.js/Express backend. The app demonstrates authentication, API integration, CRUD operation, and basic webapp architecture",
      technologies: [
        "ReactJs",
        "TailwindCSS",
      ],
      links: [
        {
          title: "webstie",
          link: "https://task-master-peach-one.vercel.app/",
          icon: ICON.website
        },
        {
          title: "github",
          link: "https://github.com/bcu001/TaskMaster",
          icon: ICON.github
        },
      ],
      image: "https://pixabay.com/images/download/fietzfotos-landscape-10071298_1920.jpg",
      // video: String,
    },
    {
      title: "MusicVibe",
      href: "https://music-vibe-with-react.vercel.app/",
      active: true,
      description:
        "MusicVibe is a web app that allows users to search for and listen to music using the iTunes API. Built with React and Tailwind CSS, it provides a seamless experience for discovering music across genres and artists. The app is deployed using Vercel.",
      technologies: [
        "ReactJs",
        "TailwindCSS",
        "iTunes API",
        "Vercel"
      ],
      links: [
        {
          title: "webstie",
          link: "https://music-vibe-with-react.vercel.app/",
          icon: ICON.website
        },
        {
          title: "github",
          link: "https://github.com/bcu001/MusicVibe_with_React",
          icon: ICON.github
        },
      ],
      image: "https://pixabay.com/images/download/fietzfotos-landscape-10071298_1920.jpg",
      // video: String,
    },
  ],
};
