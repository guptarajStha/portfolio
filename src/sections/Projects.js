import React from "react";
import major from "../images/major.png";
import minor from "../images/minor.png";
import { BsGithub } from "react-icons/bs";
const Projects = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center mb-4">
      <div className="font-bold text-5xl m-8">Projects</div>
      <div className="w-[90vw] flex  justify-between">
        <div className="w-[40vw]  bg-slate-300  bg-cover p-4 rounded-xl">
          <div className="flex flex-col h-full justify-between">
            <img className="rounded-xl" src={major} alt="" />
            <h1 className="font-bold">Description:</h1>
            <div className="px-4">
              This project is major project for Bachelor's Degree which is based
              web based application. Detect Nepali Sign language's Alphabet and
              form the word.
              <br />
              Consists of following Test: <br />
              1️⃣ Image Upload & Sign Prediction <br />
              2️⃣ Live Letter Recognition <br />
              3️⃣ Live Letter Recognition & Finger Spelling
            </div>
            <div className="w-full flex justify-evenly mt-2">
              <a href="https://github.com/guptarajStha/nsl_finger_spelling"  className="w-[25%] items-center flex justify-center text-[10px] lg:text-[15px] bg-white h-[40px] rounded-md hover:bg-slate-200 font-bold">
                Github
              </a>
              <a href="https://drive.google.com/file/d/1E_JsaeBNztXwpiZGfE7574UYsnxSpiFq/view" className="w-[25%] bg-white h-[40px] rounded-md items-center flex justify-center hover:bg-slate-200 font-bold text-[10px] lg:text-[15px]">
                Demo Video
              </a>
            </div>
          </div>
        </div>
        <div className="w-[40vw]  bg-slate-300  bg-cover p-4 rounded-xl flex flex-col">
          <div className="flex flex-col bg h-full justify-between">
            <div>
              <img className="rounded-xl" src={minor} alt="" />
              <h1 className="font-bold">Description:</h1>
              <div className="px-4">
                This project is minor project for Bachelor's Degree which is
                based web based application. Make Prediction whether the user is
                Dyslexic or Non-Dyslexic based on answer given by user.
                <br />
                Consists of following Test: <br />
                1️⃣ Spell Each Letter <br />
                2️⃣ Choose Pronunciation <br />
                3️⃣ Listening and Typing
              </div>
            </div>
            <div className="w-full flex justify-evenly mt-2">
              <a href="https://github.com/guptarajStha/minor_Project" className="w-[25%] items-center flex justify-center text-[10px] lg:text-[15px] bg-white h-[40px] rounded-md hover:bg-slate-200 font-bold">
                Github
              </a>
              <a href="https://drive.google.com/file/d/1a8SpW3dc3geFye0eABzUORswz6gxGMPj/view" className="w-[25%] items-center flex justify-center text-[10px] lg:text-[15px] bg-white h-[40px] rounded-md hover:bg-slate-200 font-bold">
                Demo Video
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-16 flex justify-center font-bold items-center gap-2 text-3xl">
        For more project visit
        <a href="https://github.com/guptarajStha">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default Projects;
