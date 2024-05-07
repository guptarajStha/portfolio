import React, { useState, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { TiTick } from "react-icons/ti";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [msgSend, setMsgSend] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6wegd0m", "template_720craa", form.current, {
        publicKey: "2XcVmLx5lEeZAhG6e",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMsgSend(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center mb-10">
      <h1 className="font-bold text-4xl lg:ml-[-60px] mb-10 lg:text-6xl ">
        Contact Me
      </h1>
      <div className="lg:flex h-full justify-center items-center  w-[80vw]">
        <div className=" h-full flex flex-col  md:flex md:flex-row lg:flex-col md:justify-evenly items-start gap-3 ">
          <div className="flex justify-center items-center gap-2">
            <MdEmail className="w-[8vw] md:w-[5vw] h-auto border-slate-300 border-4 rounded-md p-1" />
            <h1>
              <a href="mailto:shresthaguptaraj@gmail.com">
                shresthaguptaraj@gmail.com
              </a>
            </h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <CgPhone className="w-[8vw] md:w-[5vw] h-auto border-slate-300 border-4 rounded-md p-1" />
            <h1>
              <a href="tel:+9779805963271">+977 9805963271</a>
            </h1>
          </div>
          <div className="flex gap-5 xl:hidden">
            <div className="flex  justify-center items-center gap-2">
              <a href="https://www.facebook.com/guptaraj.shrestha">
                <FaFacebook className="w-[8vw] md:w-[5vw] h-auto border-slate-300 border-4 rounded-md p-1" />
              </a>
            </div>
            <div className="flex  justify-center items-center gap-2">
              <a href="https://www.linkedin.com/in/shrestha-guptaraaz-a813481a6/">
                <BsLinkedin className="w-[8vw] md:w-[5vw] h-auto border-slate-300 border-4 rounded-md p-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="h-full mt-6 lg:mt-0  lg:w-1/2 justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="flex flex-col h-full   gap-5 justify-center items-center"
          >
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className=" border-2 border-black w-[80vw] lg:w-[30vw] p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className=" border-2 border-black w-[80vw] lg:w-[30vw] p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className=" border-2 border-black w-[80vw] lg:w-[30vw] p-2 rounded-lg"
            />
            <textarea
              name="message"
              id=""
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className=" border-2 border-black w-[80vw] lg:w-[30vw] p-2 h-[30vh] rounded-lg"
            ></textarea>
            {!msgSend ? (
              <button
                type="submit"
                value="Send"
                className="bg-slate-300 h-[40px] w-[150px] font-bold rounded-md"
              >
                Send Message
              </button>
            ) : (
              <div
                className="bg-slate-400 h-[40px] w-[150px] font-bold rounded-md flex justify-center items-center"
              >
                Sent <TiTick className="text-green-800  text-4xl"/>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
