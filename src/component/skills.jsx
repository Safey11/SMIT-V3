import React from 'react';
import { Link } from 'react-router-dom';

const workItems = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and user-friendly websites .',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q',
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Creating mobile applications with React Native',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Crafting intuitive user interfaces.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q',
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    description: 'Building robust e-commerce platforms.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q',
  },
];

const WhatWeWorkOn = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 py-20">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        What We Work On
      </h2>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -m-4">
          {workItems.map((item) => (
            <div key={item.id} className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="w-full h-48 object-cover" src={item.imageUrl} alt={item.title} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-600">{item.title}</h3>
                  <p className="text-gray-600 mt-3">{item.description}</p>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        {/* Button Below the Cards */}
        <div className="text-center mt-12">
         <Link to={'/about'}> <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
            Explore More
          </button> </Link> 
        </div>
      </div>
    </div>
  );
};

export default WhatWeWorkOn;
