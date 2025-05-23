import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import logo from '../assets/Logo.png';
import downArrow from "../assets/downArrow.png";
import { FiX } from "react-icons/fi";

const ClientHome = ({ onClose }) => {
  const [state, handleSubmit] = useForm("xblgzgjv");
  // Show success or error toast based on form submission result
  React.useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! 🎉");
    } else if (state.errors) {
      toast.error("Something went wrong! Please try again. ❌");
    }
  }, [state.succeeded, state.errors]);

  return (
    <div className="fixed z-101 inset-0 w-full h-screen flex items-center justify-center shadow-lg overflow-hidden">
      {/* Left Section */}
      <div id="left" className="w-1/2 h-screen bg-[#4f2424c6] flex flex-col gap-2 justify-center items-center">
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

        {/* Contact & Social Links */}
        <div className="w-[70%] h-[200px] gap-2 flex">
          <div className="text-[20px]">
            <p>Contact Us</p>
            <span>Phone:</span>
            <p className="hover:scale-[1.1] hover:cursor-pointer">
              +91 9711625392
            </p>
            <span>Email:</span>
            <p
              className="hover:scale-[1.1] hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:zyrixcraft@gmail.com")
              }
            >
              zyrixcraft@gmail.com
            </p>
          </div>

          <div className="w-[2px] ml-5 h-[170px] bg-black rounded-3xl"></div>

          <div className="ml-5 flex flex-col gap-2 text-[20px] w-[120px] justify-start items-center">
            <p>Follow Us</p>

            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/zyrixcraft?igsh=dWE0d2Vwbmx4NjBm",
                  "_blank"
                )
              }
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <i className="fi fi-brands-instagram"></i>
              <span>Instagram</span>
            </div>

            <div
              onClick={() => window.open("https://x.com/zyrixcraft", "_blank")}
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <i className="fi fi-brands-twitter-alt"></i>
              <span>Twitter</span>
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/zyrixcraft-in-11b338359/",
                  "_blank"
                )
              }
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <i className="fi fi-brands-linkedin"></i>
              <span>LinkedIn</span>
            </div>

            <div
              onClick={() =>
                window.open("https://wa.me/919711625392", "_blank")
              }
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <i className="fi fi-brands-whatsapp"></i>
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div id="right" className="w-1/2 h-screen font-serif bg-[#5f4b4ba1] p-5">
  <div className="relative" id="right-container">
    {/* Close Button */}
    <FiX
      id="close-btn"
      onClick={() => onClose()}
      size={24}
      color="white"
      className="size-10 text-white absolute right-10 flex justify-center items-center rounded-full hover:scale-[1.1] hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
    />

    <h2 className="text-5xl" id="contact-heading">Let's get in touch</h2>
    <img
      id="down-arrow"
      src={downArrow}
      loading="lazy"
      alt="Down Arrow"
      className="w-[150px] ml-[-55px]"
    />

    <span
      id="contact-subtext"
      className="absolute top-17 left-10 text-[18px]"
    >
      Excited to bring your vision to life! Let’s create something amazing
      together.
      <br />
      Call us for any inquiry.
    </span>

    {/* Form */}
    <form onSubmit={handleSubmit} id="contact-form">
      <div className="w-full mt-5" id="form-wrapper">
        <span className="text-2xl" id="name-label">
          <label htmlFor="name">Name & Company</label>
        </span>
        <span className="text-2xl ml-10" id="email-label">
          <label htmlFor="email">Your Email</label>
        </span>

        <div className="w-full mt-5 flex gap-5" id="input-wrapper">
          <div id="name-input-box">
            <input
              type="text"
              name="name"
              id="name-input"
              placeholder="Ansh from zyrixcraft"
              className="bg-[#b8a4a45d] p-5 border-none rounded-2xl"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="mt-1 text-sm text-red-600"
            />
          </div>

          <div id="email-input-box">
            <input
              type="email"
              name="email"
              id="email-input"
              placeholder="ansh@gmail.com"
              className="bg-[#b8a4a45d] p-5 border-none rounded-2xl"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="mt-1 text-sm text-red-600"
            />
          </div>
        </div>

        <div className="flex flex-col mt-5" id="message-wrapper">
          <span className="text-2xl" id="message-label">
            <label id="message" htmlFor="message">Tell us more about your project</label>
          </span>
          <textarea
            name="message"
            id="message-textarea"
            placeholder="Something about your great idea"
            className="mt-5 w-full h-[200px] border-none bg-[#b8a4a45d] rounded-2xl p-5 pt-2 text-left resize-none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />

          <button
            id="submit-btn"
            type="submit"
            disabled={state.submitting}
            className="w-[250px] text-[18px] flex gap-2 justify-center items-center h-[60px] mt-3 rounded-full bg-black text-white font-bold transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-lg hover:cursor-pointer"
          >
            {state.submitting ? "Sending..." : "Send Message"}
            <i className="fi fi-rr-arrow-small-right mt-2 text-2xl"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</div>


      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ClientHome;
