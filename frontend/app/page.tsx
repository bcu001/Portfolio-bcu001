import CustomBox from "@/components/ui/customBox";
import { DATA } from "@/lib/data/resume";
import { BlurFade } from "@/components/ui/blur-fade";
import EducationCard from "@/components/cards/EducationCard";
import { AnimationConfig } from "@/config/animationConfig";
import ProjectCard from "@/components/cards/ProjectCard";
import Link from "next/link";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Image from "next/image";
import CustomBlur from "@/components/CustomBlur";
import SectionBadge from "@/components/SectionBadge";

export default function Home() {
  return (
    <main className="flex min-h-dvh px-4 pt-8 flex-col space-y-10 md:w-180 mx-auto">
      <SmoothCursor />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <CustomBlur className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m Bhuwan
              </CustomBlur>
              <CustomBlur className="max-w-150 font-bold text-xl">
                Full Stack Developer
              </CustomBlur>
            </div>
            <div>
              <CustomBlur direction="left">
                <div
                  className={`relative w-50 h-50 rounded-full overflow-hidden`}
                >
                  <Image
                    src={DATA.img}
                    alt={DATA.name}
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </CustomBlur>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <CustomBlur>
          <h2 className="text-xl font-bold">About</h2>
        </CustomBlur>
        <CustomBlur delay={AnimationConfig.delay * 1.4}>
          <div className=" max-w-full text-sm  text-muted-foreground">
            {DATA.summary}
          </div>
        </CustomBlur>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <CustomBlur>
            <h2 className="text-xl font-bold">Skills</h2>
          </CustomBlur>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, idx) => {
              return (
                <BlurFade
                  key={skill}
                  delay={AnimationConfig.delay * (1.4 + idx)}
                  direction="right"
                  offset={6}
                >
                  <CustomBox text={skill} />
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <CustomBlur direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <SectionBadge text="My Projects" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
              </div>
            </div>
          </CustomBlur>
          <div className="mx-auto grid max-w-200 grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, idx) => {
              return (
                <CustomBlur
                  key={project.title}
                  delay={AnimationConfig.delay * (1.4 + idx)}
                  direction="up"
                >
                  <ProjectCard {...project} />
                </CustomBlur>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <CustomBlur direction="up">
            <h2 className="text-xl font-bold">Education</h2>
          </CustomBlur>
          {DATA.education.map((edu, idx) => {
            return (
              <CustomBlur key={idx} direction="up">
                <EducationCard {...edu} />
              </CustomBlur>
            );
          })}
        </div>
      </section>

      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <CustomBlur direction="up">
            <div className="space-y-3">
              <SectionBadge text="Contact" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-150 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  className="text-blue-500"
                  href={DATA.contact.social.X.url}
                  target="_blank"
                >
                  with a direct question on X{" "}
                </Link>
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </CustomBlur>
        </div>
      </section>
    </main>
  );
}
