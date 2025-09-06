import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-5xl mt-24 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-white/10 pt-8">
      <p>{currentYear} Mateo Muic</p>
    </footer>
  );
};

export default Footer;
