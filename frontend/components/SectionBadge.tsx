import React from "react";

type SectionBadgeProps = {
  text: string;
};

const SectionBadge = ({ text }: SectionBadgeProps) => {
  return (
    <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
      {text}
    </div>
  );
};

export default SectionBadge;
