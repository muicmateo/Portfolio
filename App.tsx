import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Section = 'home' | 'about' | 'projects' | 'contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>('home');

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  useEffect(() => {
    const sectionRefs = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);


  return (
    <main className="font-sans min-h-screen bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gradient-to-br dark:from-[#0f0c29] dark:via-[#0c0a18] dark:to-[#24243e] dark:bg-[length:200%_200%] dark:animate-breathing-gradient">
      <div className="relative z-10 flex flex-col items-center p-4 sm:p-6 md:p-8">
        <Header 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
          activeSection={activeSection} 
        />
        <div className="w-full max-w-5xl mt-8 space-y-24 md:space-y-32">
          <Hero ref={homeRef} />
          <AboutMe ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default App;