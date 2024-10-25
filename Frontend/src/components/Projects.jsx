import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from "uuid";

const Project = () => {
  const [projectList, setProjectList] = useState([
    {
      title: "Music_with_React",
      description:
        "This is Project is about a music webapp where a user can search for music using search bar and play music by selecting any music from result. Build using react and itunes api",
      preview: {
        previewLink: "https://music-vibe-with-react.vercel.app/",
        previewImg: "/img/musicvibe.png",
      },
      "source-code": "https://github.com/bcu001/MusicVibe_with_React",
    },

    {
      title: "TaskMaster",
      description: "A To-do-List which made using react, tailwind and vite",
      preview: {
        previewLink: "https://task-master-peach-one.vercel.app/",
        previewImg: "/img/taskmaster.png",
      },
      "source-code": "https://github.com/bcu001/TaskMaster",
    },

    {
      title: "Twitter-Clone",
      description: "Clone of tailwind using tailwind css",
      preview: {
        previewLink: "https://bcu001.github.io/Twitter-Clone/",
        previewImg: "/img/twitterPreview.png",
      },
      "source-code": "https://github.com/bcu001/Twitter-Clone",
    },
  ]);
  return (
    <>
      <section id="projects" className="bg-white border border-black w-full">
        <h3 className="text-2xl font-bold text-center">Project</h3>
        <div
          id="projectList"
          className="py-4 px-8 flex flex-wrap gap-20 justify-center"
        >
          {projectList.map((p) => {
            return (
              <ProjectCard
                key={uuidv4()}
                title={p.title}
                description={p.description}
                previewLink={p.preview.previewLink}
                previewImg={p.preview.previewImg}
                sourceCodeLink={p["source-code"]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Project;
