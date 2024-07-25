import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{
        duration: 1,
        loop: Infinity,
        ease: "easeInOut",
        delay: 4,
      }}
      className="z-20 font-semibold text-left md:text-logo text-7xl w-full leading-tight "
    >
      MISAEL KELVINY
    </motion.div>
  );
}

export default Logo;
