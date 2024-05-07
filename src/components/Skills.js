import React, { useContext, } from "react";
import { mContext } from "../helper/MainContext";
import { FaHtml5, FaPython } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { DiDjango } from "react-icons/di";

const Skills = () => {
  const { setCurrentResumeCursor } = useContext(mContext);

  return (
    <section
      id="skills"
      onMouseEnter={() => {
        setCurrentResumeCursor("skills");
      }}
    >
      <h1 className="font-bold text-3xl mb-4">Skills</h1>
      <div className="items-center justify-center  grid grid-rows-2 grid-cols-3 gap-3">
        <div className="border-4 rounded-lg font-bold w-[14vw] h-[14vw] flex justify-center items-center flex-col">
          <FaHtml5 className=" size-[4vw]" />
          <h1 className="text-[2vw] ">HTML</h1>
        </div>
        <div className="border-4 rounded-lg font-bold w-[14vw] h-[14vw] flex justify-center items-center flex-col">
          <RiReactjsLine className=" size-[4vw]" />
          <h1 className="text-[2vw] ">ReactJs</h1>
        </div>
        <div className="border-4 rounded-lg font-bold w-[14vw] h-[14vw] flex justify-center items-center flex-col">
          <RiTailwindCssFill className=" size-[4vw]" />
          <h1 className="text-[2vw] ">TailwindCSS</h1>
        </div>
        <div className="border-4 rounded-lg font-bold w-[14vw] h-[14vw] flex justify-center items-center flex-col">
          <FaPython className=" size-[4vw]" />
          <h1 className="text-[2vw] ">Python</h1>
        </div>
        <div className="border-4 rounded-lg font-bold w-[14vw] h-[14vw] flex justify-center items-center flex-col">
          <TbBrandCpp className=" size-[4vw]" />
          <h1 className="text-[2vw] ">C++</h1>
        </div>
        <div className="border-4 rounded-lg font-bold w-[14vw] h-[14vw] flex justify-center items-center flex-col">
          <DiDjango className=" size-[4vw]" />
          <h1 className="text-[2vw] ">Django</h1>
        </div>
      </div>
    </section>
  );
};

export default Skills;
