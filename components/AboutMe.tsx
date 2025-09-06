import React, { forwardRef } from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-purple-500/10 text-purple-300 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 hover:bg-purple-500/20">
    {children}
  </div>
);

const AboutMe = forwardRef<HTMLElement>((props, ref) => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL & NoSQL',
    'Docker', 'Git & GitHub', 'CSS', 'HTML', 'AWS Basics', 'MongoDB',
    'C#', '.NET Core', 'Express.js', 'RESTful APIs'  
  ];

  return (
    <section id="about" ref={ref}>
      <div className="p-6 sm:p-8 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="w-full text-center">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
              I’m Mateo Muic, an 18-year-old IT student at IMS Baden specializing in application development. I enjoy creating all kinds of different projects through coding and exploring new technologies. In my free time, I love playing video games and going plane spotting, where I combine my curiosity for technology with my passion for aviation.
            </p>
          </div>  
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Skillset</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;