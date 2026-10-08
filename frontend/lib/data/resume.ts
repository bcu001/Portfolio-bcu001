// Your resume data
import { CodeIcon, HomeIcon } from "lucide-react";
import { ICON } from "@/lib/img/img";

export const DATA = {
  name: "Bhuwan Chandra Upadhyay",
  url: "https://github.com/bcu001",
  img: "https://github.com/bcu001.png",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description: "Full Stack Developer | Backend-Focused",
  summary: `Full Stack Developer focused on building production-style web applications with React, TypeScript, Node.js, and Express. Experienced in REST API design, JWT authentication, MongoDB, TanStack Query, state management, validation, cloud storage, and deployment.`,
  skills: [
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "REST APIs",
    "MongoDB",
    "Mongoose",
    "TanStack Query",
    "Zod",
    "TailwindCSS",
    "Shadcn UI",
    "Git",
    "Github",
    "Docker",
    "Postman",
    "Vercel"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "bhuwan.upadhyay.work@gmail.com", 
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
      portfolio: {
        name: "Portfolio",
        url: "https://www.bhuwanupadhyay.in/",
        icon: ICON.portfolio,
        navbar: true,
      }
    },
  },

  education: [
    {
      school: "Indira Gandhi National Open University",
      href: "https://www.ignou.ac.in/",
      degree: "Master of Computer Applications (MCA) — Present",
      schoolImg:
        ICON.ignou
    },
    {
      school: "Indira Gandhi National Open University",
      href: "https://www.ignou.ac.in/",
      degree: "Bachelor of Computer Applications (BCA), 2025",
      schoolImg:
        ICON.ignou
    }
  ],
  projects: [
    {
      title: "TuneHub",
      href: "https://tune-hub-v3.vercel.app/",
      active: true,
      description:
        "A full-stack music streaming platform for discovering songs, managing playlists, liking tracks, and playing music through a persistent global audio player. Includes JWT authentication with access/refresh token rotation, admin song management, Cloudinary media storage, password reset, rate limiting, and a versioned REST API.",
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "TanStack Query",
        "Zustand",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
        "JWT",
        "Zod",
        "TailwindCSS",
        "Shadcn UI",
        "Capacitor",
        "Vercel"
      ],
      links: [
        {
          title: "Link",
          link: "https://tune-hub-v3.vercel.app/",
          icon: ICON.link
        },
        {
          title: "github",
          link: "https://github.com/bcu001/TuneHub",
          icon: ICON.github
        }
      ],
      image: "https://res.cloudinary.com/dp7nw5npc/image/upload/v1791445944/vj7d328s8vjmk3oac3vf.png"
    },
    {
      title: "InstaNeeds",
      href: "https://instaneeds-frontend.vercel.app/",
      active: true,
      description:
        "A full-stack quick-commerce grocery delivery application where users can browse products and categories, manage a protected cart, create orders, and access their order history. The backend provides REST APIs with access/refresh-token authentication and admin-protected product and category management.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "TanStack Query",
        "React Hook Form",
        "Axios",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Zod",
        "TailwindCSS",
        "DaisyUI"
      ],
      links: [
        {
          title: "Link",
          link: "https://instaneeds-frontend.vercel.app/",
          icon: ICON.link
        },
        {
          title: "github",
          link: "https://github.com/bcu001/InstaNeeds",
          icon: ICON.github
        }
      ],
      image: "https://res.cloudinary.com/dp7nw5npc/image/upload/v1791445981/vo509f968c7yrtidzw9q.png"
      // Add a project screenshot here when available.
      // image: "..."
    },
    {
      title: "Webapp PrimeTrade Task",
      href: "https://webapp-primetrade-task.vercel.app/",
      active: true,
      description:
        "A full-stack assessment application demonstrating authenticated CRUD workflows, REST API integration, request validation, and a React frontend connected to a Node.js/Express backend.",
      technologies: [
        "ReactJs",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "JWT",
        "Zod",
        "TailwindCSS"
      ],
      links: [
        {
          title: "Link",
          link: "https://webapp-primetrade-task.vercel.app/",
          icon: ICON.link
        },
        {
          title: "github",
          link: "https://github.com/bcu001/webapp-primetrade-task",
          icon: ICON.github
        }
      ],
      image: "https://res.cloudinary.com/dp7nw5npc/image/upload/v1791446300/xaejtmw9em8mwpsabgv0.png"
    }
  ],
};
