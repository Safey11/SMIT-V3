import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div
        className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-48 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Beautiful UI blocks to empower modern businesses.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-4">CATEGORIES</h2>
              <nav className="list-none mb-10">
                {['First Link', 'Second Link'].map((link, linkIndex) => (
                  <li key={linkIndex} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-indigo-400 mr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <a className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 ease-in-out">
                      {link}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div
          className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
