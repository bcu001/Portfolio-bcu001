import Image from "next/image";
import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type ProjectLink = {
  title: string;
  link: string;
  icon: string;
};

type projectProps = {
  title: string;
  href: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
};

const ProjectCard = (props: projectProps) => {
  return (
    <div className="border rounded-md">
      <div className="w-full h-50 bg-green-400">
        {/* <Image alt={props.title} src={props.image} fill/> */}
        {/* take img from cdn cloudinary asset  */}
      </div>
      <div className="p-2 space-y-2">
        <div className="font-bold text-xl">{props.title}</div>
        <div className="text-sm h-30 overflow-hidden">{props.description}</div>
        
        <div className="flex flex-wrap gap-1">
          {props.technologies.map((tech) => (
            <div
              className="border bg-black text-white p-1 rounded-sm text-sm"
              key={tech}
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 text-sm">
          {props.links.map((l) => (
            <div className="bg-white border p-1 rounded-xl " key={l.title}>
              <Link
                className="flex gap-2 items-center"
                href={l.link}
                target="_blank"
              >
                <div className="relative w-5 h-5">
                  <Image src={l.icon} alt={l.title} fill />
                  {/* {console.log(l.icon.src)} */}
                </div>
                <div className="capitalize">{l.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
