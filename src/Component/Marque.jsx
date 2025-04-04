import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div className="w-full h-[200px] overflow-hidden py-2 flex bg-black">
      
        <motion.div
          className="whitespace-nowrap text-9xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-[Poppins]"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          Web Development, Responsive Design, Figma, Adobe Illustrator, UI/UX
          Design, Front-end Development, Back-end Development, Brand Identity,
          Motion Graphics, Prototyping. &nbsp; Web Development, Responsive
          Design, Figma, Adobe Illustrator, UI/UX Design, Front-end Development,
          Back-end Development, Brand Identity, Motion Graphics, Prototyping.
        </motion.div>
     
    </div>
  );
};

export default Marque;