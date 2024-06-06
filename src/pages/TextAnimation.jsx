import { motion } from "framer-motion";

function TextAnimation() {
  return (
    <motion.h1
      initial={{ x: -1000 }}
      animate={{ x: [-1000, 500, 10] }}
      transition={{ delay: 0.2, duration: 2, ease: "easeInOut" }}
      className="text-7xl text-red-500"
    >
      Hi this is Adarsh
    </motion.h1>
  );
}

export default TextAnimation;
