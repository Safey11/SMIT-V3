import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const HomeServices = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Shooting Stars',
      subtitle: 'THE SUBTITLE',
      description: 'Explore the beauty of the stars with an incredible night view of the sky.',
      image: 'https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg',
    },
    {
      id: 2,
      title: 'Mountain Scenery',
      subtitle: 'NATURE BEAUTY',
      description: 'Experience the breathtaking views of mountains and valleys.',
      image: 'https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg',
    },
    {
      id: 3,
      title: 'Ocean Waves',
      subtitle: 'OCEAN JOURNEY',
      description: 'Sail across the deep blue oceans and discover marine life.',
      image: 'https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg',
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container px-5 mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-md transition duration-500 hover:scale-105 hover:drop-shadow-lg">
                Our Services
              </h2>

              <Link
                to="/services"
                className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-pink-500 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400"
              >
                <span className="relative z-10">View All Services</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-20 rounded-lg"></div>
              </Link>
            </div>

            <div className="flex flex-wrap -m-4">
              {services.map((service) => (
                <div className="lg:w-1/3 sm:w-1/2 w-full p-6" key={service.id}>
                  <div
                    className="relative bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl h-96 cursor-pointer"
                    onClick={() => openModal(service)} // Open modal on click
                  >
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center"
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 hover:bg-opacity-90 hover:opacity-100 p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                        {service.subtitle}
                      </h2>
                      <h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h1>
                      <p className="leading-relaxed mb-2 text-center text-sm">
                        {service.description}
                      </p>
                      <Link
                        to="/details"
                        className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for displaying service details */}
      {selectedService && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Service Details"
          className="max-w-md mx-auto bg-white p-5 rounded shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h2 className="text-xl font-bold mb-4">{selectedService.title}</h2>
          <img
            alt="service"
            className="w-full h-48 object-cover object-center mb-4 rounded"
            src={selectedService.image}
          />
          <h3 className="text-lg font-semibold mb-2">{selectedService.subtitle}</h3>
          <p className="mb-4">{selectedService.description}</p>
          <button
            onClick={closeModal}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-200"
          >
            Close
          </button>
        </Modal>
      )}
    </>
  );
};

export default HomeServices;
