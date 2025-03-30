import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClientHome from "./ClientHome"; 

const Footer = () => {
  const [showClientHome, setShowClientHome] = useState(false);

  const handleBecomeClient = () => {
    setShowClientHome(true);
  };

  const handleCloseClientHome = () => {
    setShowClientHome(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#C9D0D5] py-14 font-[Poppins] relative w-screen rounded-4xl">
      
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 lg:px-20">
          
          
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">We would love to hear from you.</h1>
            <p className="mb-6 text-gray-600">
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </p>
            <button
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
              onClick={handleBecomeClient}
            >
              Become a Client
            </button>
            <p className="mt-6 text-sm text-gray-500">Don’t like the forms? Drop us a line via email.</p>
            <p className="text-gray-700 font-medium">Zyrix@gmail.com</p>
          </div>

          
          <div className="flex flex-col md:flex-row md:space-x-16 w-full md:w-2/3">
            
            <div className="mb-8 md:mb-0">
              <h2 className="font-semibold text-lg text-gray-900 mb-3">Contact us</h2>
              <p className="text-gray-600">Email: <a href="mailto:Zyrix@gmail.com" className="text-blue-600">Zyrix@gmail.com</a></p>
              <p className="text-gray-600">Phone: <span className="text-gray-700 font-medium">+1 (628) 800-77-09</span></p>
              <p className="text-gray-600">San Francisco, CA, 2 Embarcadero Center, 8th floor, 94111</p>
            </div>

            
            <div className="mb-8 md:mb-0">
              <h2 className="font-semibold text-lg text-gray-900 mb-3">Follow us</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Dribbble</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">LinkedIn</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Clutch</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Instagram</a></li>
              </ul>
            </div>

            
            <div className="mb-8 md:mb-0">
              <h2 className="font-semibold text-lg text-gray-900 mb-3">Services</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Mobile Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Web Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Solid Design Solutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Reviews</a></li>
              </ul>
            </div>
          </div>
        </div>

        
        <button 
          onClick={scrollToTop} 
          className="absolute bottom-6 right-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Back to Top ↑
        </button>

   
      <AnimatePresence>
        {showClientHome && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-white shadow-lg flex items-center justify-center"
          >
            <ClientHome />
            <button 
              onClick={handleCloseClientHome} 
              className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-600"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Footer;
