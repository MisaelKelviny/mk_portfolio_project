import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export const AnimatedText = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const characters = text.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.a
      href={link}
      ref={ref}
      variants={container}
      target="_blank"
      initial="hidden"
      animate="visible"
      style={{ display: "flex", overflow: "hidden" }}
      className="hover:text-purple-400 cursor-pointer z-20"
    >
      {characters.map((char, index) => (
        <motion.span
          key={char + `_${index}`}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
      <ArrowUpRight />
    </motion.a>
  );
};

const Navbar = () => {
  return (
    <motion.div className="w-full flex sm:gap-20 gap-2 justify-end">
      <AnimatedText
        text={"LINKEDIN"}
        link="https://www.linkedin.com/in/misael-kelviny/"
      />
      <AnimatedText text={"GITHUB"} link="https://github.com/MisaelKelviny" />
      <AnimatedText
        text={"My.CV"}
        link="/public/Misael-Kelviny-da-Silva-Resume.pdf"
      />
    </motion.div>
  );
};

export default Navbar;
