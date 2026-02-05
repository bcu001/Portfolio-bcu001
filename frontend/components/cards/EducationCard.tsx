import React from "react";
import Image from "next/image";

type eduProps = {
  school: string;
  href: string;
  degree: string;
  schoolImg: string;
};

const EducationCard = (props: eduProps) => {
  return (
    <div className="flex gap-8 items-center">
      <div className="relative w-10 h-10 rounded-full overflow-hidden border">
        <Image
           className="object-cover"
          fill
          alt={props.school}
          src={props.schoolImg}
        />
      </div>
      <div>
        <div className="font-bold text-md md:text-lg">{props.school}</div>
        <div className="text-sm">{props.degree}</div>
      </div>
    </div>
  );
};

export default EducationCard;
