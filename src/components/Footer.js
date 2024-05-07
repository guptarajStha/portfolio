import React from 'react';

const Footer = () => {
    const yr = new Date()
  return (
    <div className='w-screen bg-black text-white flex justify-center items-center p-5'>
      Copyright ©{yr.getFullYear()} All rights reserved
    </div>
  );
}

export default Footer;
