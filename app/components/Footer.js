import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-gray-950 to-black py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
        {/* Footer Text */}
        <p className="mb-4 sm:mb-0 text-center sm:text-left">
          Made with <span className="text-red-500">❤️</span> by{' '}
          <span className="text-white font-semibold">Jatin Sharma</span>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/Jatin-Sharma-Nitaj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.3.1-2.7 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.1 2.4.1 2.7.7.9 1.2 2 1.2 3.2 0 4.5-2.8 5.5-5.5 5.8.4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.6 18.4.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jatin-sharma69"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM.48 8h4v13.5h-4V8zM8.48 8h3.84v1.89h.06c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.08V21.5h-4V14.5c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.69V21.5h-4V8z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://twitter.com/Nitaj333"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M6.94 3h4.51l2.7 4.39L17.97 3h3.93l-5.86 7.2L22 21h-4.5l-3.27-5.38L10.48 21H6.5l6.3-7.76L6 3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;