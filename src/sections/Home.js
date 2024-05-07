import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="w-screen h-[90vh]">
      <div className="w-full h-full flex flex-col justify-evenly items-center  top-20 z-1 text-black ">
        <div className="ml-[-16px] h-[10vh] bg-slate-300 w-[10vh] rotate-45"></div>
        <div className="h-[40%] flex flex-col justify-center items-center gap-4">
          <h4 className="z-10 font-bold text-2xl text-purple-700">
            NAMASTE! I AM
          </h4>
          <h1 className="z-10 font-extrabold text-4xl ">
            <Typewriter
              options={{
                strings: ["Guptaraj Shrestha"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="h-[10vh] bg-white w-[10vh] rotate-45 z-10"></div>
      </div>
      <div className="w-1/2 bg-slate-300 h-full absolute z-2 top-[6px]"></div>
    </div>
  );
};

export default Home;
