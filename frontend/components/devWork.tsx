import React from "react";
import { TextAnimate } from "./ui/text-animate";

const DevWork = () => {
  return (
    <div className="absolute top-0 right-0 bg-black opacity-90 h-screen backdrop-blur-2xl w-full text-3xl text-white flex  items-center justify-center">
      <TextAnimate animation="fadeIn" by="word" once >
        Currently in Development
      </TextAnimate>
    </div>
  );
};

export default DevWork;
