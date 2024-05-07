import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { mContext } from "../helper/MainContext";

const Navbar = () => {
  const {currentSection,setCurrentSection} = useContext(mContext)
  const [openHamBurger, setOpenHamBurger] = useState(false);
  return (
    <div className="w-screen flex text-white bg-black justify-between lg:justify-evenly h-20  items-center font-bold font-sans text-xl fixed top-0 z-20">
      <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onClick={()=>{setCurrentSection("home")}} className="flex gap-2 text-3xl ml-4 md:ml-10 lg:ml-0 cursor-pointer">
        Guptaraj
      </Link>
      <div
        className="flex justify-center items-center gap-2 lg:hidden cursor-pointer mr-4 md:mr-10 lg:mr-0  w-[100px]"
        onClick={()=>{setOpenHamBurger(!openHamBurger)}}
        onMouseEnter={() => {
          setOpenHamBurger(true);
        }}
        onMouseLeave={() => {
          setOpenHamBurger(false);
        }}
      >
        {" "}
        {!openHamBurger ? (
          <>
            <GiHamburgerMenu />
            Menu
          </>
        ) : (
          <AiOutlineClose className="text-4xl border-b-2 border-black " />
        )}{" "}
      </div>
      <div
        className={`absolute w-full  bg-black flex flex-col items-center justify-center top-20 p-6 
                      ${
                        openHamBurger
                          ? "transition-all ease-in-out duration-500"
                          : "top-[-500px] transition-all ease-in-out duration-500"
                      } lg:static lg:flex-row lg:w-auto gap-6 `}
        onMouseEnter={() => {
          setOpenHamBurger(true);
        }}
        onMouseLeave={() => {
          setOpenHamBurger(false);
        }}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onClick={()=>{setCurrentSection("home")}}
          className={` ${currentSection==='home'?'border-b-[2px]':''} cursor-pointer hover:border-b-[2px]  `}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={` ${currentSection==='about-me'?'border-b-[2px]':''} cursor-pointer hover:border-b-[2px]  `}
          onClick={()=>{setCurrentSection("about-me")}}
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={` ${currentSection==='resume'?'border-b-[2px]':''} cursor-pointer hover:border-b-[2px]  `}
          onClick={()=>{setCurrentSection("resume")}}
        >
          Resume
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={` ${currentSection==='projects'?'border-b-[2px]':''} cursor-pointer hover:border-b-[2px]  `}
          onClick={()=>{setCurrentSection("projects")}}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact-me"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={` ${currentSection==='contact-me'?'border-b-[2px]':''} cursor-pointer hover:border-b-[2px]  `}
          onClick={()=>{setCurrentSection("contact-me")}}
        >
          Contact Me
        </Link>
      </div>
      <div className="hidden xl:flex  gap-8 text-3xl ml-10">
        <a href="https://www.facebook.com/guptaraj.shrestha">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/shrestha-guptaraaz-a813481a6/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/guptarajStha">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
