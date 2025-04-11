import { useState } from "react"
import { ChevronDown, Layers, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

const Prototype = () => {
    const [selectedPrototype, setSelectedPrototype] = useState("uber")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [zoomLevel, setZoomLevel] = useState(1)
  
    // Prototype options
    const prototypes = {
      uber: {
        title: "Uber Cab",
        images: [
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
        ],
      },
      food: {
        title: "Food Delivery",
        images: [
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
        ],
      },
      ecommerce: {
        title: "E-Commerce",
        images: [
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
        ],
      },
    }
  
    const handleZoomIn = () => {
      setZoomLevel((prev) => Math.min(prev + 0.2, 2))
    }
  
    const handleZoomOut = () => {
      setZoomLevel((prev) => Math.max(prev - 0.2, 0.6))
    }
  
    return (
      <section id="prototype-section" className="min-h-screen flex flex-col items-center mb-20">
        <div className="w-5/6 flex flex-col items-center p-10">
          <div className="flex items-center gap-4 mb-8">
            <Layers className="w-8 h-8 text-blue-400" />
            <h2 className="text-5xl font-bold text-blue-400">Prototypes</h2>
          </div>
  
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl">
            Explore our interactive prototypes that demonstrate the flow and functionality of our designs before
            development.
          </p>
  
          {/* Dropdown for prototype selection */}
          <div className="relative mb-12 w-64">
            <button
              className="w-full flex items-center justify-between bg-[#2a2a2a] p-4 rounded-lg text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{prototypes[selectedPrototype].title}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
  
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-[#2a2a2a] rounded-lg mt-2 overflow-hidden z-10">
                {Object.keys(prototypes).map((key) => (
                  <button
                    key={key}
                    className="w-full text-left p-3 hover:bg-blue-600 transition-colors"
                    onClick={() => {
                      setSelectedPrototype(key)
                      setIsDropdownOpen(false)
                    }}
                  >
                    {prototypes[key].title}
                  </button>
                ))}
              </div>
            )}
          </div>
  
          {/* Prototype display with zoom controls */}
          <div className="relative w-full">
            <div className="flex justify-center mb-4">
              <div className="flex gap-4 bg-[#2a2a2a] p-2 rounded-lg">
                <button className="p-2 hover:bg-blue-600 rounded-full transition-colors" onClick={handleZoomOut}>
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-blue-600 rounded-full transition-colors" onClick={handleZoomIn}>
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>
            </div>
  
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6" style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center top" }}>
                {prototypes[selectedPrototype].images.map((img, index) => (
                  <div
                    key={`prototype-${index}`}
                    className="min-w-[400px] h-[600px] rounded-xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${prototypes[selectedPrototype].title} Prototype ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
  
            <div className="flex justify-center gap-4 mt-4">
              <button className="p-2 bg-[#2a2a2a] hover:bg-blue-600 rounded-full transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="p-2 bg-[#2a2a2a] hover:bg-blue-600 rounded-full transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Prototype
