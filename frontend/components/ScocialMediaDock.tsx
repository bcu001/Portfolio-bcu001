"use client";

import React from "react";

import { Dock, DockIcon } from "./ui/dock";
import { ICON } from "@/lib/img/img";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/lib/data/resume";

export function SocialMediaDock() {
  return (
    <div className="relative">
      <Dock iconMagnification={60} iconDistance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href={DATA.contact.social.GitHub.url} target="_blank">
            <Image src={ICON.github} alt="" className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
            <Image src={ICON.linkedin} alt="" className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href={DATA.contact.social.portfolio.url} target="_blank">
            <Image src={ICON.portfolio} alt="" className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href={`mailto:${DATA.contact.email}`}>
            <Image src={ICON.gmail} alt="" className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link
            href={
              "https://drive.google.com/file/d/1_APdcwMYLz1NQPEW4BkKJvvxSxMer8kv/view?usp=drive_link"
            }
            target="_blank"
          >
            <Image src={ICON.resume} alt="" className="size-full" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
