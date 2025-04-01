import React from "react";
import { FaTimes } from "react-icons/fa"; // Import FaTimes icon from react-icons
import logo from "../assets/logo.png";
import downArrow from "../assets/downArrow.png";

const ClientHome = ({ setOverlay }) => {
  return (
    <div className="fixed z-101 inset-0 w-full h-screen flex items-center justify-center shadow-lg overflow-hidden">
      <div className="w-1/2 h-screen bg-[#f1dbdbea] flex flex-col gap-2 justify-center items-center">
        <div className="w-[70%] relative h-[400px] flex">
          <img
            src={logo}
            alt="Logo"
            loading="lazy"
            className="w-[200px] h-[300px]"
          />
          <span className="mt-52 text-[50px] font-extrabold font-serif">
            yrixCraft
          </span>
          <span className="absolute bottom-10 text-2xl">
            Your one-stop solution for all your digital needs—web, UI/UX,
            graphics, and more!
          </span>
        </div>
        <div className="w-[70%] h-[200px] gap-2 flex">
          <div className="text-[20px]">
            <p>Contact Us</p>
            <span>Phone:</span>
            <p className="hover:scale-[1.1] hover:cursor-pointer">+91 63******</p>
            <span>Email:</span>
            <p className="hover:scale-[1.1] hover:cursor-pointer">zyrixcraft@gmail.com</p>
          </div>
          <div className="w-[2px] ml-5 h-[130px] bg-black rounded-3xl"></div>
          <div className="ml-5 flex flex-col gap-2 text-[20px] w-[120px] justify-start items-center">
            <p>Follow Us</p>
            <div className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer">
              <i className="fi fi-brands-instagram"></i>
              <span>Instagram</span>
            </div>
            <div className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer">
              <i className="fi fi-brands-twitter-alt"></i>
              <span>Twitter</span>
            </div>
            <div className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer">
              <i className="fi fi-brands-linkedin"></i>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen font-serif bg-[#f1dbdb] p-5">
        <div className="relative">
          {/* Cut/Close Icon */}
          <FaTimes
            onClick={() => setOverlay(false)} // Close overlay when clicked
            className="absolute right-10 bg-[#b39a9a3d] h-12 w-12 flex justify-center items-center rounded-full hover:scale-[1.1] hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
            size={30} // Set size for the icon
          />
          <h2 className="text-5xl">Let's get in touch</h2>
          <img
            src={downArrow}
            loading="lazy"
            alt="Down Arrow"
            className="w-[150px] ml-[-55px]"
          />
          <span className="absolute top-17 left-10 text-[18px]">
            Excited to bring your vision to life! Let’s create something amazing
            together
            <br />
            Call us for any inquiry.
          </span>
          <div className="w-full mt-5">
            <span className="text-2xl">Name & Company</span>
            <span className="text-2xl ml-10">Your Email</span>
            <div className="w-full mt-5">
              <input
                type="text"
                placeholder="Ansh from zyrixcraft"
                className="bg-[#b8a4a45d] p-5 border-none rounded-2xl"
              />
              <input
                type="text"
                placeholder="ansh@gmail.com"
                className="ml-5 bg-[#b8a4a45d] p-5 border-none rounded-2xl"
              />
            </div>
            <div className="flex flex-col mt-5">
              <span className="text-2xl">Tell us more about your project</span>
              <textarea
                placeholder="Something about your great idea"
                className="mt-5 w-[620px] h-[200px] overflow-x-auto border-none bg-[#b8a4a45d] rounded-2xl p-5 pt-2 text-left resize-none"
              />
              <button className="w-[250px] text-[18px] flex gap-2 justify-center items-center h-[60px] mt-3 rounded-full bg-black text-white font-bold transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-lg hover:cursor-pointer">
                Submit the request{" "}
                <i className="fi fi-rr-arrow-small-right mt-2 text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
