import React, { useContext } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { mContext } from '../helper/MainContext';

const Education = () => {
    const {setCurrentResumeCursor}= useContext(mContext)
  return (
    <section
          id="education"
          onMouseEnter={() => {
            setCurrentResumeCursor("education");
          }}
        >
          <h1 className="font-bold text-3xl mb-4">Education</h1>
          <div className="flex">
            <div className="w-[60px] h-[60px] rounded-full sm:bg-slate-300 flex justify-center items-center">
              <FaGraduationCap size={40} />
            </div>
            <div className="pl-4">
              <div className="font-bold text-xl text-slate-800">2019-2024</div>
              <div className="text-2xl">
                Bachelor of Engineering in Computer Engineering
              </div>
              <div className="text-xl">Purwanchal Campus, Dharan</div>
              <div className="text-xl">Tribhuvan University</div>
            </div>
          </div>
          <hr className="m-4" />
          <div className="flex">
            <div className="w-[60px] h-[60px] rounded-full sm:bg-slate-300 flex justify-center items-center">
              <FaGraduationCap size={40} />
            </div>
            <div className="pl-4">
              <div className="font-bold text-xl text-slate-800">2017-2019</div>
              <div className="text-2xl">+2 in Science</div>
              <div className="text-xl">
                Greenland International College, Biratnagar
              </div>
              <div className="text-xl">Grade-3.45</div>
            </div>
          </div>
          <hr className="m-4" />
        </section>
  );
}

export default Education;
