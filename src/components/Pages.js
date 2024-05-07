import React,{useContext} from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Resume from '../sections/Resume';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import { mContext } from '../helper/MainContext';
import Sidebar from './Sidebar';

const Sections = () => {
  const {setCurrentSection} = useContext(mContext)
  return (
    <div className='mt-20'>
      <section id='home' onMouseEnter={()=>{setCurrentSection('home')}}>
        <Home />
      </section>
      <section id='about-me' onMouseEnter={()=>{setCurrentSection('about-me')}}>
        <About />
      </section>
      <section id='resume' onMouseEnter={()=>{setCurrentSection('resume')}} className='mb-4 w-screen h-auto flex justify-between'>
        <Sidebar />
        <Resume />
      </section>
      <section id='projects' onMouseEnter={()=>{setCurrentSection('projects')}}>
        <Projects />
      </section>
      <section id='contact-me' onMouseEnter={()=>{setCurrentSection('contact-me')}}>
        <Contact />
      </section>
      
    </div>
  );
}

export default Sections;
