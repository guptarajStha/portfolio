import React from "react";
import image from "../images/IMG_2982.JPG";

const About = () => {
  const downloadPdf = () => {
    const pdfUrl = "Guptaraj_Shrestha_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Guptaraj_Shrestha_CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-screen  z-10 flex">
      <div className="w-1/2 h-full flex justify-end mr-4">
        <img
          src={image}
          alt=""
          className="w-[30vw] h-[30vw] p-4 rounded-[50px] bg-cover "
        />
      </div>
      <div className="w-1/2 mt-8 pl-4 flex flex-col gap:6 md:gap-10 ">
        <h1 className="font-bold text-2xl  md:text-6xl ">About Me</h1>
        <table className="w-full ">
          <tr>
            <td className="font-bold">Name:</td>
            <td>Guptaraj Shrestha</td>
          </tr>
          <tr>
            <td className="font-bold">DOB:</td>
            <td>26 January 2001</td>
          </tr>
          <tr>
            <td className="font-bold">Email:</td>
            <td>shresthaguptaraj@gmail.com</td>
          </tr>
          <tr>
            <td className="font-bold">Phone:</td>
            <td>+977 9805963271</td>
          </tr>
        </table>
        <button
          onClick={downloadPdf}
          className="bg-slate-300 w-32 rounded-md hover:bg-slate-200 p-2"
          download="Guptaraj_Shrestha_CV.pdf"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
