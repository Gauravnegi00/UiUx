import { motion } from "framer-motion"
import { Monitor } from "lucide-react"
const WebsiteUiUx = () => {
    // Website UI gallery images
    const websiteImages = [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ]
  
    return (
      <section id="website-ui-section" className="min-h-screen flex flex-col items-center mb-20">
        <div className="w-5/6 flex flex-col items-center p-10">
          <div className="flex items-center gap-4 mb-8">
            <Monitor className="w-8 h-8 text-blue-400" />
            <h2 className="text-5xl font-bold text-blue-400">Website UI/UX</h2>
          </div>
  
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl">
            Our website designs focus on creating intuitive, engaging, and visually appealing interfaces that enhance user
            experience and drive conversions.
          </p>
  
          <motion.div
            className="flex gap-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {websiteImages.map((img, index) => (
              <motion.div
                key={`web-${index}`}
                className="min-w-[600px] h-[400px] rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Website Design ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

export default WebsiteUiUx;
