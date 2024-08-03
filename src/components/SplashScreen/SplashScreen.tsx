import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedText } from "../template/AnimatedText";

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
  const [first, setFirst] = useState(true);

  setInterval(() => {
    setFirst(!first);
  }, 2000);

  return (
    <div className="min-h-screen w-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="relative">
        <div className="relative top-0 text-center">
          {first ? (
            <>
              <AnimatedText
                el="h2"
                text={["Frontend"]}
                className="text-4xl text-zinc-800"
                repeatDelay={2000}
              />
              <AnimatedText
                el="h2"
                text={["Mobile"]}
                className="text-4xl text-zinc-800 -left-9 -bottom-32 absolute rotate-[59deg] scale-100"
                repeatDelay={2000}
              />
              <AnimatedText
                el="h2"
                text={["Backend"]}
                className="text-4xl text-zinc-800 -right-10 -bottom-32 absolute -rotate-[242deg] -scale-100"
                repeatDelay={2000}
              />
            </>
          ) : (
            <>
              <AnimatedText
                el="h2"
                text={["Cloud"]}
                className="text-4xl text-zinc-800"
                repeatDelay={2100}
              />
              <AnimatedText
                el="h2"
                text={["Quality"]}
                className="text-4xl text-zinc-800 -left-9 -bottom-32 absolute rotate-[59deg] scale-100"
                repeatDelay={2100}
              />
              <AnimatedText
                el="h2"
                text={["Assurance"]}
                className="text-4xl text-zinc-800 -right-12 -bottom-32 absolute -rotate-[245deg] -scale-100"
                repeatDelay={2100}
              />
            </>
          )}
        </div>
        <div>
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "blue", stopOpacity: 1 }}
                />
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
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
