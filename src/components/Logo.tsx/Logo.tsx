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
      className="z-20 font-semibold text-left text-logo w-full"
    >
      MISAEL KELVINY
    </motion.div>
  );
}

export default Logo;
