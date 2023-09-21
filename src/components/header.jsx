import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import {ParallaxVideo} from './video';
import { Link } from 'react-router-dom';
const TextAnimation = () => {
  const text = "We provide seamless design-to-build service to create endearing spaces";
  const [isVisible, setIsVisible] = useState(Array(text.length).fill(false));

  useEffect(() => {
    const delay = 50;

    text.split('').forEach((_, index) => {
      setTimeout(() => {
        setIsVisible((prev) => {
          const updatedVisibility = [...prev];
          updatedVisibility[index] = true;
          return updatedVisibility;
        });
      }, index * delay / 2);
    });
  }, []);

  return (
   <section>
     <div className="flex flex-col overflow-hidden">
      <div  style={{ position: 'relative' }} className='h-[70vh] md:h-[80vh] lg:h-[100vh]'>
        <Parallax  translateY={["-50%", "70%"]} className="z-20 relative pt-5 sm:pt-5 md:pt-12 absolute leading-10 text-center text-5xl md:text-7xl lg:text-[108px] text-white font-bold mx-auto lg:w-full">
            <div className="intro mx-auto w-11/12 z-40 text-center">
          <AnimatePresence>
            {isVisible.map((visible, index) => (
              index > 19 && index < 35 ?
                <motion.span
                  key={index}
                  className='underline'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: visible ? 1 : 0 }}
                  transition={{duration:1}}
                >
                  {text[index]}
                </motion.span>
                :
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: visible ? 1 : 0 }}
                  transition={{duration:1}}
                >
                  {text[index]}
                </motion.span>
            ))}
          <div className="w-full flex justify-center pt-5 md:pt-8 lg:pt-12">
            <Link
              to={'/works'}
              className="ital border nav-btn text-lg text-white rounded-full p-5 w-52  hover:bg-white hover:text-black transition duration-300 flex items-center justify-around"
            >
              Continue
            </Link>
          </div>
          </AnimatePresence>
            </div>
        </Parallax>
      </div>
      <ParallaxVideo />
    </div>
      <div className="text-white pl-16 p-8 w-full flex items-center flex-col-reverse md:space-y-5 lg:flex-row justify-between">
        <div className=" justify-around  lg:w-[42%]">
          <h2 className="font-bold pb-8">ABOUT US</h2>
          <i className='text-4xl ital'>Two Square Feet,</i>
          <h1 className='text-4xl font-semibold '>
          ensures that every aspect of your project is carefully designed and executed.
          </h1>
          <p className="mb-4 text-[#ffffffa6] pt-8 w-11/12">
         Two Square Feet is a full-service construction firm with a team of architects, engineers, interior designers, and turnkey specialists to bring your vision to life. We operate at the intersection of leading-edge technology and state-of-the-art designs to give you a seamless experience. With a focus on collaboration, attention to detail, and unwavering commitment to quality, we are dedicated to creating beautiful, functional, and endearing spaces.
          </p>
        </div>
        <div className="md:w-3/5 md:mx-auto lg:w-1/2 flex items-center">
          <img className='md:my-5 w-full h-auto' src={'https://www.twosqft.com/wp-content/uploads/2022/04/asset-4.png'} alt="About Us" />
        </div>
      </div>
   </section>
  );
};

export default TextAnimation;
