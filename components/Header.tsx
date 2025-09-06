import React from 'react';
import { SunIcon, MoonIcon } from './Icons';

type Section = 'home' | 'about' | 'projects' | 'contact';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: Section;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode, activeSection }) => {
  const NavLink = ({ section, children }: { section: Section; children: React.ReactNode }) => (
    <a
      href={`#${section}`}
      className={`px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-300 relative ${
        activeSection === section 
          ? 'text-purple-400' 
          : 'text-gray-500 dark:text-gray-400 hover:text-white'
      }`}
    >
      {children}
      {activeSection === section && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 rounded-full"></span>
      )}
    </a>
  );

  return (
    <header className="sticky top-4 z-50 w-full max-w-4xl p-4 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-xl border border-white/10 dark:border-white/5 shadow-lg">
      <nav className="flex justify-center items-center">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <NavLink section="home">Home</NavLink>
          <NavLink section="about">About</NavLink>
          <NavLink section="projects">Projects</NavLink>
          <NavLink section="contact">Contact</NavLink>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 ml-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <SunIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;