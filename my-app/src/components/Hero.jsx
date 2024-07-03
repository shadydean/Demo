import React, { useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import file from '../assets/file.png';

function Hero() {
  const topPage = useRef(null);

  return (
    <section className='h-[47rem] flex justify-between bg-gray-800' id='hero' ref={topPage}>
      {/* left */}
      <section className='flex-1 flex flex-col justify-center gap-8'>
        <h1 className='text-[3.6rem] text-blue-400 font-semibold'>Your Data, Our Priority</h1>
        <p className='font-light text-slate-200 text-[1.38rem]'>
          Keep your sensitive information safe with SecureGuard – our state-of-the-art encryption ensures your data remains private and protected.
        </p>
        <ul className='flex  flex-col gap-8 font-thin text-[1.2rem] text-slate-100'>
          <li className='flex items-center gap-x-2'>
            <span><FaCheck className=' text-green-400' /></span>Easily organize and access your files with robust encryption.
          </li>
          <li className='flex items-center gap-x-2'>
            <span><FaCheck className=' text-green-400' /></span>Trust in industry-leading encryption technology to keep your data safe.
          </li>
          <li className='flex items-center gap-x-2'>
            <span><FaCheck className=' text-green-400' /></span>Navigate and manage your files with ease using our intuitive platform.
          </li>
        </ul>
      </section>
      {/* right  */}
      <section className='flex-1 flex justify-center items-center drop-shadow-2xl z-0'>
        <img src={file} className='drop-shadow-2xl' alt="File Icon" />
      </section>
    </section>
  );
}

export default Hero;
