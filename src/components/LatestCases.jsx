import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import mobileDev from '../assets/mobileDev.webp'
import Ecomm from '../assets/Ecomm.jpg'
const cases = [
  {
    id: 1,
    title: 'UI UX Design And Mobile Development for Fintech App',
    description: 'In Syfter App, we made it easy for people to invest into crypto and stock market assets with its user friendly interface and interactive swiping',
    image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Mobile App Design and Development for NFT Marketplace',
    description: 'We created slick design for nft app that brings nft market right into users smartphone allowing them to trade tokens and share with their community',
    image: mobileDev,
  },
  {
    id: 3,
    title: 'Modern Design And Development of Ecommerce App',
    description: 'Retlify - is an ecommerce app that broadens limits of users and sellers by offering them interactive and innovative shopping experience',
    image: Ecomm,
  },
  {
    id: 4,
    title: 'Social Media Platform Development',
    description: 'A modern social platform that connects people through shared interests and interactive content sharing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'AI-Powered Health Tracking App',
    description: 'Revolutionary health monitoring application that uses artificial intelligence to provide personalized wellness insights',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  }
];

const BackgroundBall = ({ className }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-3xl ${className}`}
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 45, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const LatestCases = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  const filteredCases = cases.filter(
    (case_) =>
      case_.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      case_.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollAmount = 400;

  const scroll = (direction) => {
    if (containerRef.current) {
      const newScrollPosition = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-[#0A0A0A] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Background balls - Repositioned to the left with higher opacity */}
      <BackgroundBall className="w-[800px] h-[800px] -left-1/4 top-0 opacity-50" />
      <BackgroundBall className="w-[600px] h-[600px] -left-1/3 top-1/4 opacity-40" />
      <BackgroundBall className="w-[400px] h-[400px] left-0 top-2/3 opacity-30" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6 sm:gap-0">
          <div>
            <h2 className="text-gray-400 mb-2">Our Portfolio</h2>
            <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Latest Cases</h1>
          </div>
          
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 bg-transparent border-b border-gray-800 py-2 pr-10 pl-2 focus:outline-none focus:border-gray-600 transition-colors"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
          </div>
        </div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="overflow-x-auto "
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'              
            }}
          >
            <div className="flex gap-6 min-w-max pb-6 overflow-hidden">
              {filteredCases.map((case_) => (
                <motion.div
                  key={case_.id}
                  className="w-[calc(100vw-2rem)] sm:w-[400px] flex-shrink-0 scroll-snap-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="rounded-2xl overflow-hidden bg-black/30 backdrop-blur-md h-full border border-gray-800/20">
                    <div className="relative aspect-[16/9]">
                      <img
                        src={case_.image}
                        alt={case_.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 bg-black/40 backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-3">{case_.title}</h3>
                      <p className="text-gray-400 text-sm">{case_.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full border border-gray-800 hover:border-gray-600 transition-colors bg-black/40 backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full border border-gray-800 hover:border-gray-600 transition-colors bg-black/40 backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <button className="bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors border border-gray-800/20">
              View All Cases
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCases;