import React, { forwardRef } from 'react';
import { LinkedinIcon, MailIcon, GithubIcon, DiscordIcon } from './Icons';

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="contact" ref={ref}>
      <div className="p-6 sm:p-8 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>

          <div className="flex justify-center flex-wrap gap-6">
            <a 
              href="https://www.linkedin.com/in/mateo-muic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <LinkedinIcon className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:muic.mateo@gmail.com"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MailIcon className="w-6 h-6" />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/muicmateo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <GithubIcon className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://discord.com/users/pivex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-[#5865F2] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <DiscordIcon className="w-6 h-6" />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;