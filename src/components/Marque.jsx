// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Marque = () => {
  return (
    <div className="w-full h-[200px] overflow-hidden py-2 flex">
      <motion.div
       className="whitespace-nowrap text-9xl font-semibold text-[#4441f1be] font-[Poppins]"
        animate={{ x: ['0', '-100%'] }}
        transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
      >
        Web Development , App Development , Computer Graphics , Artificial Intelligence , Machine Learning , Cyber Security , Data Science , Cloud Computing , Blockchain Technology
      </motion.div>
    </div>
  );
};

export default Marque;
