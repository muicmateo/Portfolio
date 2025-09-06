import React from 'react';
import { SunIcon, MoonIcon } from './Icons';

type Section = 'home' | 'about' | 'projects' | 'contact';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: Section;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode, activeSection }) => {
  const NavLink = ({ section, children }: { section: Section; children: React.ReactNode }) => {
    const isActive = activeSection === section;
    
    return (
      <a
        href={`#${section}`}
        style={{
          padding: '0.5rem 0.75rem',
          fontSize: window.innerWidth > 640 ? '1rem' : '0.875rem',
          fontWeight: 500,
          transition: 'color 0.3s',
          position: 'relative',
          color: isActive ? '#a78bfa' : '#9ca3af',
        }}
        onMouseOver={(e) => {
          if (!isActive) e.currentTarget.style.color = 'white';
        }}
        onMouseOut={(e) => {
          if (!isActive) e.currentTarget.style.color = '#9ca3af';
        }}
      >
        {children}
        {isActive && (
          <span style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#a78bfa',
            borderRadius: '9999px',
          }}></span>
        )}
      </a>
    );
  };

  return (
    <header style={{
      position: 'sticky',
      top: '1rem',
      zIndex: 50,
      width: '100%',
      maxWidth: '1024px',
      padding: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(12px)',
      borderRadius: '0.75rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <NavLink section="home">Home</NavLink>
          <NavLink section="about">About</NavLink>
          <NavLink section="projects">Projects</NavLink>
          <NavLink section="contact">Contact</NavLink>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '0.5rem',
              marginLeft: '0.5rem',
              borderRadius: '50%',
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              transition: 'background-color 0.3s',
            }}
            aria-label="Toggle theme"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(55, 65, 81, 0.7)' : 'rgba(229, 231, 235, 0.7)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {isDarkMode ? 
              <SunIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : 
              <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            }
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;