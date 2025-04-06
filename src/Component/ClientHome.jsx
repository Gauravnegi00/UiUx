import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/Logo.png";
import downArrow from "../assets/downArrow.png";
import { FiX } from "react-icons/fi";
import '../App.css'
const ClientHome = ({ onClose }) => {
  const [state, handleSubmit] = useForm("xblgzgjv");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! 🎉");
    } else if (state.errors) {
      toast.error("Something went wrong! Please try again. ❌");
    }
  }, [state.succeeded, state.errors]);

  return (
    <div id="clientHomeContainer">
      {/* Left Section */}
      <div id="clientHomeLeft">
        <div id="clientLogoContainer">
          <img src={logo} alt="Logo" loading="lazy" id="clientLogo" />
          <span id="clientTitle">yrixCraft</span>
          <span id="clientDesc">
            Your one-stop solution for all your digital needs—web, UI/UX,
            graphics, and more!
          </span>
        </div>

        {/* Contact & Social Links */}
        <div id="clientContactSocial">
          <div id="clientContact">
            <p>Contact Us</p>
            <span>Phone:</span>
            <p className="hover-link">+91 9711625392</p>
            <span>Email:</span>
            <p
              className="hover-link"
              onClick={() =>
                (window.location.href = "mailto:zyrixcraft@gmail.com")
              }
            >
              zyrixcraft@gmail.com
            </p>
          </div>

          <div id="clientDivider"></div>

          <div id="clientSocialLinks">
            <p>Follow Us</p>

            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/zyrixcraft?igsh=dWE0d2Vwbmx4NjBm",
                  "_blank"
                )
              }
              className="hover-link flex gap-2"
            >
              <i className="fi fi-brands-instagram"></i>
              <span>Instagram</span>
            </div>

            <div
              onClick={() => window.open("https://x.com/zyrixcraft", "_blank")}
              className="hover-link flex gap-2"
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
              className="hover-link flex gap-2"
            >
              <i className="fi fi-brands-linkedin"></i>
              <span>LinkedIn</span>
            </div>

            <div
              onClick={() =>
                window.open("https://wa.me/919711625392", "_blank")
              }
              className="hover-link flex gap-2"
            >
              <i className="fi fi-brands-whatsapp"></i>
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div id="clientHomeRight">
        <div className="relative">
          <FiX
            onClick={() => onClose()}
            size={24}
            color="white"
            id="closeButton"
          />

          <h2 id="formTitle">Let's get in touch</h2>
          <img src={downArrow} alt="Down Arrow" loading="lazy" id="arrowIcon" />
          <span id="formSubtitle">
            Excited to bring your vision to life! Let’s create something amazing
            together.
            <br />
            Call us for any inquiry.
          </span>

          <form onSubmit={handleSubmit}>
            <div id="formContainer">
              <span className="text-2xl">
                <label htmlFor="name">Name & Company</label>
              </span>
              <span className="text-2xl ml-10">
                <label htmlFor="email">Your Email</label>
              </span>

              <div id="inputRow">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="nameInput"
                    placeholder="Ansh from zyrixcraft"
                    className="form-input"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="error-message"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    id="emailInput"
                    placeholder="ansh@gmail.com"
                    className="form-input"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="error-message"
                  />
                </div>
              </div>

              <div id="textAreaSection">
                <span className="text-2xl">
                  <label htmlFor="message">Tell us more about your project</label>
                </span>
                <textarea
                  name="message"
                  id="messageInput"
                  placeholder="Something about your great idea"
                  className="textarea"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="error-message"
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  id="submitBtn"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <i className="fi fi-rr-arrow-small-right mt-2 text-2xl"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ClientHome;
