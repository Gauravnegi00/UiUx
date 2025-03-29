import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Zyrix from "../assets/zyrix.jpeg";
// import logo from "../assets/logo.png";

const ClientHome = () => {
  return (
    <div className="fixed inset-0 bg-white w-full h-screen flex items-center justify-center shadow-lg overflow-hidden">
      <div className="bg-white w-full max-w-4xl flex flex-col md:flex-row shadow-lg">
        <div className="hidden md:block w-1/2 bg-gray-200">
          <img
            src={Zyrix}
            alt="Background image with text 'THE GREAT APP DESIGN'"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-end">
            <button className="text-gray-500 text-2xl">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-6">Hey! Tell us all the things</h1>
          <form>
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex-1 mb-4 md:mb-0">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name &amp; Company
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John from Apple"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@apple.com"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="project"
                className="block text-sm font-medium text-gray-700"
              >
                Tell us more about your project
              </label>
              <textarea
                id="project"
                name="project"
                placeholder="Something about your great idea"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            {/* Social Media  */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-pink-500 text-3xl hover:text-pink-600" />
                </a>

                
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-800" />
                </a>

               
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-700 text-3xl hover:text-gray-900" />
                </a>

               
                <a href="">
                  <FaEnvelope className="text-red-600 text-3xl hover:text-red-700" />
                </a>
              </div>

              
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Submit the request <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
