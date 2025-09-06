import React from 'react';

type IconProps = {
  className?: string;
};

export const SunIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export const SendIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const DiscordIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.36981C18.7915 3.64953 17.1825 3.13839 15.525 2.83481C15.2994 3.28349 15.0415 3.82146 14.836 4.36981C12.9223 3.88652 11.0086 3.88652 9.1473 4.36981C8.94185 3.82146 8.68392 3.28349 8.45833 2.83481C6.80083 3.13839 5.19184 3.64953 3.66635 4.36981C0.655729 9.58863 0 14.8074 1.07143 19.913C2.93273 20.9221 4.85012 21.5839 6.7675 22C7.19209 21.4986 7.58437 20.9549 7.94435 20.3789C7.23341 20.0753 6.54386 19.7068 5.88662 19.2735C6.0398 19.159 6.18184 19.0445 6.33503 18.93C9.4423 20.4133 12.9814 20.4133 16.0886 18.93C16.2418 19.0445 16.3839 19.159 16.5371 19.2735C15.88 19.7068 15.1804 20.0753 14.4795 20.3789C14.8395 20.9549 15.2318 21.4986 15.6564 22C17.5738 21.5839 19.4912 20.9221 21.3525 19.913C22.5429 14.2373 21.832 8.95877 20.317 4.36981ZM8.45833 15.6493C7.49733 15.6493 6.71584 14.8354 6.71584 13.84C6.71584 12.8446 7.49733 12.0307 8.45833 12.0307C9.41934 12.0307 10.2008 12.8446 10.2008 13.84C10.2008 14.8354 9.41934 15.6493 8.45833 15.6493ZM13.9114 15.6493C12.9504 15.6493 12.1689 14.8354 12.1689 13.84C12.1689 12.8446 12.9504 12.0307 13.9114 12.0307C14.8724 12.0307 15.6539 12.8446 15.6539 13.84C15.6539 14.8354 14.8724 15.6493 13.9114 15.6493Z"/>
    </svg>
);