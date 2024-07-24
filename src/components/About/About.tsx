import { motion } from "framer-motion";
import { useRef } from "react";
import profile from "../../assets/profile-pic.jpg";

export const About = () => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="h-full w-full items-center justify-center border border-y-transparent border-x-zinc-800 flex flex-col"
    >
      <motion.div className="border w-full flex items-center justify-between gap-20 border-y-zinc-800 border-x-transparent">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              delay: 0.25,
            },
          }}
          viewport={{ once: true }}
          className="size-3/4 gap-20 flex flex-col justify-center"
        >
          <h3 className="border border-zinc-900 border-x-transparent border-t-transparent text-4xl">
            Hello, there 👋
          </h3>
          <p className="text-3xl">
            Based in São Paulo/BR, 6+ years of experience across Software
            Development disciplines(Frontend, Backend and UI). A passionate
            developer and I love what I do, and I strongly believe in;{" "}
            <strong>"The less it is the cooler is your interface"</strong>
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              delay: 0.25,
            },
          }}
          viewport={{ once: true }}
          className="flex justify-center size-full"
        >
          <img
            src={profile}
            alt="profile-pic"
            width={200}
            height={200}
            className="grayscale w-2/5 object-cover p-4 border border-zinc-800 border-y-0"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
