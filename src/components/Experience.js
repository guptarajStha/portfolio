import React, { useContext } from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { mContext } from '../helper/MainContext';

const Experience = () => {
    const {setCurrentResumeCursor} = useContext(mContext)
  return (
    <section
    id="experience"
    onMouseEnter={() => {
      setCurrentResumeCursor("experience");
    }}
  >
    <h1 className="font-bold text-3xl mb-4">Experience</h1>
    <div className="flex gap-x-4">
    <div className="w-[60px] h-[60px] rounded-full bg-slate-300 flex justify-center items-center">
        <RiComputerLine size={40} />
      </div>
      <div className="pl-4 ">
        <div className="font-bold text-xl text-slate-800">Hackathon</div>
        <div className="text-2xl">
          DELTA 4.0 National Level Software Hackathon
        </div>
        <div className="text-xl">Purwanchal Campus, Dharan</div>
    
        <h1 className="w-[60%]">
          Created Environmental Health Score Prediction based different
          environment indexes like air index, water index, carbon
          emission, etc.
        </h1>
      </div>
    </div>
    <hr className="m-4" />
  </section>
  );
}

export default Experience;
