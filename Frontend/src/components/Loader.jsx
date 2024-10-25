import React from "react";

function Loader() {
  return (
    <div className="absolute ">
      {/* <div className="w-[75px] h-[75px] border-[8px] rounded-full border-slate-400 border-t-blue-400 animate-spin"></div> */}
      <div className="flex w-[60px] justify-evenly">
        <li className="loading-ball list-none w-[10px] h-[10px] bg-black rounded-full"></li>
        <li className="loading-ball list-none w-[10px] h-[10px] bg-black rounded-full"></li>
        <li className="loading-ball list-none w-[10px] h-[10px] bg-black rounded-full"></li>
      </div>
    </div>
  );
}

export default Loader;
