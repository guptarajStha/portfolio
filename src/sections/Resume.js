import React from "react";

import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
const Resume = () => {
  return (
    // <div className="w-screen h-[80vh] flex justify-between">

    <div className="w-[68%] overflow-auto">
      <Education />
      <Experience />
      <Skills />
    </div>
    // </div>
  );
};

export default Resume;
