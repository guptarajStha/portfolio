import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { mContext } from '../helper/MainContext';


const Sidebar = () => {
    const {currentResumeCursor, setCurrentResumeCursor}= useContext(mContext)
  return (
    <div className="w-[30%] h-auto hidden  bg-slate-300 sm:flex flex-col justify-center items-center rounded-r-xl shadow-lg shadow-r-black text-3xl  gap-6">
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={`${
            currentResumeCursor === "education" ? "border-b-4 border-black" : ""
          } cursor-pointer hover:border-b-[2px]  `}
          onClick={()=>{setCurrentResumeCursor("education")}}
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={`${
            currentResumeCursor === "experience" ? "border-b-4 border-black" : ""
          } cursor-pointer hover:border-b-[2px]  `}
          onClick={()=>{setCurrentResumeCursor("experience")}}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={`${
            currentResumeCursor === "skills" ? "border-b-4 border-black" : ""
          } cursor-pointer hover:border-b-[2px]  `}
          onClick={()=>{setCurrentResumeCursor("skills")}}
        >
          Skills
        </Link>
      </div>
  );
}

export default Sidebar;
