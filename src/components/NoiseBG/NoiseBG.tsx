import { motion } from "framer-motion";

function NoiseBG() {
  return (
    <div className="cursor-pointerAll z-10 fixed opacity-15 top-0 left-[-4%] w-[120%]">
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: 0 }}
        animate={{
          x: 10,
          transition: {
            ease: "linear",
            duration: 0.4,
            repeat: Infinity,
          },
        }}
      >
        <motion.filter id="noiseFilter">
          <motion.feTurbulence
            type="fractalNoise"
            baseFrequency="30"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </motion.filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </motion.svg>
    </div>
  );
}

export default NoiseBG;
