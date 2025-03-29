import React, { useState } from 'react';
import '../styles/Footer.scss';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email);
      setIsSubmitted(true);
      setIsValid(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      setIsValid(false);
    }
  };

  return (
    <footer className="footer rounded-lg overflow-hidden w-screen">
      <video
        className="footer_video absolute inset-0 w-full h-full object-cover"
        muted
        loop
        autoPlay
        src="/src/assets/Backgroung.mp4"
        type="video/mp4"
      />
      <div className="relative z-10 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-500/30 backdrop-blur-sm rounded-t-lg">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="newsletter mb-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Join our creative community for exclusive updates, early access, and insider content!</h3>
              <p className="text-black/80 mb-4">Be the first to know about new projects, design tips, and special offers.</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsValid(true);
                    }}
                    placeholder="Email Address"
                    className={`flex-1 px-4 py-2 rounded-lg bg-black/10 border ${isValid ? 'border-black/20' : 'border-red-500'} text-black placeholder-black/50 focus:outline-none focus:border-black/50 transition-all duration-300`}
                    required
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-black/10 hover:bg-black/20 transition-all duration-300 transform hover:scale-105"
                    aria-label="Subscribe to newsletter"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-black">
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </button>
                </div>
                {!isValid && (
                  <p className="text-red-500 text-sm">Please enter a valid email address</p>
                )}
                {isSubmitted && (
                  <p className="text-green-500 text-sm animate-fade-in">Thank you for subscribing!</p>
                )}
              </form>
            </div>
            <div className="mt-6 lg:max-w-sm text-black/80">
              <p className="text-sm">
                Crafting beautiful and functional web experiences with passion and precision.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="text-base font-bold tracking-wide text-black">Quick Links</h4>
            <nav className="c-nav-tool_list space-y-2">
              <a href="/" className="block text-black hover:text-black/80 transition-colors duration-300">Home</a>
              <a href="/projects" className="block text-black hover:text-black/80 transition-colors duration-300">Projects</a>
              <a href="/services" className="block text-black hover:text-black/80 transition-colors duration-300">Services</a>
              <a href="/about" className="block text-black hover:text-black/80 transition-colors duration-300">About</a>
              <a href="/contact" className="block text-black hover:text-black/80 transition-colors duration-300">Contact</a>
            </nav>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="text-base font-bold tracking-wide text-black">Connect</h4>
            <nav className="c-nav-tool_list space-y-2">
              <a href="https://instagram.com/zyrixcraft" className="block text-black hover:text-black/80 transition-colors duration-300">Instagram</a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-black/20 lg:flex-row">
          <p className="text-sm text-black/80">
            © {new Date().getFullYear()} ZyrixCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;