import { motion } from "framer-motion";
import { brands } from "../../constants/brands";

const Landing = () => {
  const duplicates = [...brands, ...brands];

  return (
    <div className="w-full text-center">
      <div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, delay: 4 }}
          className="relative z-20 text-left border border-x-transparent border-y-zinc-800"
        >
          <span className="text-7xl text-landing">CREATIVE DEVELOPER</span>
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, delay: 4 }}
          className="flex justify-between items-center relative border border-x-transparent border-b-zinc-800 border-t-0"
        >
          <div
            className="relative h-full overflow-hidden py-12 mx-auto hidden xl:block"
            style={{ width: "30%" }}
          >
            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:filter after:blur-3"></div>

            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-100%"],
                transition: {
                  ease: "linear",
                  duration: 15,
                  repeat: Infinity,
                  delay: 4,
                },
              }}
            >
              {duplicates.map((slide, index) => (
                <div
                  key={`slide_${slide.id}_${index}`}
                  className="flex-shrink-0"
                  style={{ width: `${100 / brands.length}%` }}
                >
                  <div className="flex items-center justify-center h-full grayscale">
                    <img
                      src={slide.icon}
                      alt={slide.alt}
                      className="invert"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="relative z-20 flex justify-end w-full">
            <span className="text-7xl text-right text-landing">
              SOFTWARE ENGINEER
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
