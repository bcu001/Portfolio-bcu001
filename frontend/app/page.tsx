import CustomBox from "@/components/ui/customBox";
import { DATA } from "@/lib/data/resume";
import { BlurFade } from "@/components/ui/blur-fade";
import EducationCard from "@/components/cards/EducationCard";
import { AnimationConfig } from "@/config/animationConfig";
import ProjectCard from "@/components/cards/ProjectCard";
import Link from "next/link";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <main className="flex min-h-dvh px-4 pt-8 flex-col space-y-10 md:w-180 mx-auto">
      <SmoothCursor />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFade
                delay={AnimationConfig.delay}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Hi, I&apos;m Bhuwan
              </BlurFade>
              <BlurFade
                className="max-w-150 font-bold text-xl"
                delay={AnimationConfig.delay}
              >
                Full Stack Developer
              </BlurFade>
            </div>
            {/* <div>
              <Image />
            </div> */}
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={AnimationConfig.delay}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={AnimationConfig.delay * 1.4}>
          <div className=" max-w-full text-pretty font-sans text-sm text-muted-foreground ">
            {DATA.summary}
          </div>
        </BlurFade>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={AnimationConfig.delay}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill) => {
              return (
                <BlurFade key={skill} delay={AnimationConfig.delay}>
                  <CustomBox text={skill} />
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={AnimationConfig.delay}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-200 grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, idx) => {
              return (
                <BlurFade
                  key={project.title}
                  delay={AnimationConfig.delay * 1.2 + idx * 0.05}
                >
                  <ProjectCard {...project} />
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={AnimationConfig.delay}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((edu, idx) => {
            return (
              <BlurFade key={idx} delay={AnimationConfig.delay}>
                <EducationCard {...edu} />
              </BlurFade>
            );
          })}
        </div>
      </section>

      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={AnimationConfig.delay}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Contact
              </div>
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
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
