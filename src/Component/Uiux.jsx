import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ClientHome from "./ClientHome";
import phone1 from "../assets/phn1.webp";
import phone2 from "../assets/phn2.webp";

const UiUx = () => {
  const [showClientHome, setShowClientHome] = useState(false);

  useEffect(() => {
    if (showClientHome) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up when unmounted
    };
  }, [showClientHome]);

  const handleBecomeClient = () => {
    setShowClientHome(true);
  };

  const handleCloseClientHome = () => {
    setShowClientHome(false);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden relative">
      {showClientHome ? (
        <ClientHome onClose={handleCloseClientHome} />
      ) : (
        <>
          <div className="w-full flex flex-col items-center pt-10">
            <h1 className="text-7xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              UI/UX Portfolio
            </h1>
            <p className="text-lg text-gray-300 mt-15 text-center w-2/4">
              A showcase of innovative, user-friendly, and visually stunning
              digital designs optimized for cross-platform compatibility.
            </p>
          </div>

          <div className="absolute top-10 right-10 flex gap-5 space-y-4">
            <button
              onClick={handleBecomeClient}
              className="bg-[#d8d2d294] h-[55px] rounded-full py-3 px-6 text-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
            >
              Become a Client
            </button>
            <button className="bg-[#d8d2d294] h-[55px] rounded-full py-3 px-6 text-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out">
              Back to Main
            </button>
          </div>

          {/* Section 1 */}
          <section className="h-screen flex flex-col items-center">
            <div className="w-5/6 flex items-center justify-between p-10">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="text-left w-1/2"
              >
                <h2 className="text-5xl font-bold text-blue-400">
                  Cross-Platform Compatibility
                </h2>
                <p className="text-lg text-gray-300 mt-6">
                  Our designs seamlessly adapt to mobile, tablet, and desktop,
                  ensuring an immersive user experience across all devices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="flex gap-10"
              >
                <motion.img
                  src={phone2}
                  alt="Mobile Design 1"
                  className="h-[550px] w-[350px] mt-25 object-cover rounded-3xl shadow-2xl transition-all duration-300"
                  animate={{ y: [0, -100, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src={phone1}
                  alt="phone"
                  className="h-[510px] w-[400px] mt-25 object-cover rounded-3xl shadow-2xl transition-all duration-300"
                  animate={{ y: [0, -80, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default UiUx;
