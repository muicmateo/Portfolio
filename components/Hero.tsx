import React, { useState, useEffect, forwardRef } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const roles = ["Developer", "Problem Solver", "IT Student"];

const Hero = forwardRef<HTMLElement>((props, ref) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === roles.length) {
      return;
    }
    
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <section id="home" ref={ref} className="min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="dark:text-white">Hi, I'm </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
          Mateo Muić
        </span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12 md:h-16">
        <span>I'm a </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          {`${roles[index].substring(0, subIndex)}`}
        </span>
        <span className={`border-r-4 ${blink ? 'border-purple-500' : 'border-transparent'}`}>&nbsp;</span>
      </h2>
      <p className="max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8">
        A passionate IT student with a knack for building dynamic and user-friendly web applications. I thrive on challenges and am constantly learning new technologies to bring ideas to life.
      </p>
      <div className="flex justify-center items-center gap-6">
        <a href="#contact" className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          Contact Me
        </a>
      </div>
    </section>
  );
});

export default Hero;