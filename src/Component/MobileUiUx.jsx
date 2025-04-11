import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone } from "lucide-react"

import phn1 from "../assets/01.webp"
import phn2 from "../assets/02.webp"
import phn3 from "../assets/03.webp"
import phn4 from "../assets/04.webp"
import phn6 from "../assets/06.webp"
import phn7 from "../assets/07.webp"
import phn8 from "../assets/08.webp"
import phn9 from "../assets/09.webp"
import phn10 from "../assets/10.webp"
import phn11 from "../assets/11.webp"
import phn12 from "../assets/12.webp"

const images = [phn1, phn2, phn3, phn4, phn6, phn7, phn8, phn9, phn10, phn11, phn12]

const MobileUiUx = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Get 3 previous images
  const getPrevImages = () => {
    const prevImages = []
    for (let i = 3; i > 0; i--) {
      prevImages.push(images[(index - i + images.length) % images.length])
    }
    return prevImages
  }

  // Get 3 next images
  const getNextImages = () => {
    const nextImages = []
    for (let i = 1; i <= 3; i++) {
      nextImages.push(images[(index + i) % images.length])
    }
    return nextImages
  }

  const mergedImages = [...getPrevImages(), images[index], ...getNextImages()]

  return (
    <section id="mobile-ui-section" className="min-h-screen w-full bg-black flex flex-col items-center overflow-x-hidden">
      <div className="w-full flex flex-col items-center p-10 ">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-8">
          <Smartphone className="w-8 h-8 text-blue-400" />
          <h2 className="text-5xl font-bold text-blue-400">Mobile UI</h2>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl">
          Our mobile designs prioritize usability and accessibility, creating smooth and intuitive experiences that
          users love to engage with on smaller screens.
        </p>

        {/* Swiper Gallery */}
        <div className="w-full flex justify-center items-center gap-2 overflow-hidden px-4 relative min-h-[520px]">
          {mergedImages.map((img, i) => {
            const position = i - 3 // center at index 3
            const scale = position === 0 ? 1 : position === -1 || position === 1 ? 0.8 : 0.6
            const opacity = position === 0 ? 1 : 0.6
            const zIndex = 10 - Math.abs(position)
            const translateX = position * 160 

            // Animate only the center image with swipe effect
            if (position === 0) {
              return (
                <AnimatePresence key={`main-${index}`}>
                  <motion.img
                    key={`main-${index}`}
                    src={img}
                    initial={{ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.7 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.8 }}
                    className="absolute object-cover rounded-xl shadow-xl"
                    style={{ width: 255, height: 500, zIndex }}
                  />
                </AnimatePresence>
              )
            }

            // Static side images
            return (
              <motion.img
                key={`slide-${i}-${img}`}
                src={img}
                className="absolute object-cover rounded-xl shadow-xl"
                style={{
                  width: position === -1 || position === 1 ? 240 : 200,
                  height: position === -1 || position === 1 ? 440 : 400,
                  zIndex,
                }}
                initial={false}
                animate={{ opacity, scale, x: translateX }}
                transition={{ duration: 0.5 }}
              />
            )
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-6 mb-10 mt-6 z-20 h-20 w-40 justify-center items-center ">
          <button onClick={handlePrev} className=" h-13 w-13 text-3xl   bg-blue-500 hover:bg-blue-600 text-white rounded-full flex justify-center items-center ">
            &lt;
          </button>
          <button onClick={handleNext} className=" h-13 w-14 text-3xl  bg-blue-500 hover:bg-blue-600 text-white rounded-full">
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}

export default MobileUiUx
