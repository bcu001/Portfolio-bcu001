import React from "react";
import { BlurFade } from "./ui/blur-fade";
import { AnimationConfig } from "@/config/animationConfig";

type CustomBlurProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "down";
  className?: string;
};

const CustomBlur = ({
  children,
  delay = AnimationConfig.delay,
  direction = "right",
  className = "",
}: CustomBlurProps) => {
  return (
    <div className={className}>
      <BlurFade delay={delay} offset={150} direction={direction} inView={true}>
        {children}
      </BlurFade>
    </div>
  );
};

export default CustomBlur;
