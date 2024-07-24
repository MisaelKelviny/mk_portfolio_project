import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function SplashScreen() {
  return (
    <div className="min-h-screen w-screen bg-zinc-950 text-white flex flex-1 items-center justify-center">
      <motion.div>
        <motion.svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          initial="hidden"
          animate="visible"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
              <stop
                offset="100%"
                style={{ stopColor: "lightblue", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <motion.polygon
            points="100,190 0, 10 190, 10"
            style={{
              fill: "transparent",
              stroke: "url(#grad1)",
              strokeWidth: 5,
            }}
            variants={draw}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default SplashScreen;
