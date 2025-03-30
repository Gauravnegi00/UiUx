import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
    className="fixed w-3 h-3 bg-[#4541f1] rounded-full pointer-events-none z-150"
      animate={{ x: position.x - 8, y: position.y - 8 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    />
  );
}

export default CursorDot;
