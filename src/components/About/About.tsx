import { motion } from "framer-motion";
import { useRef } from "react";
import profile from "../../assets/profile-pic.jpg";
import Container from "../template/Container";

export const About = () => {
  const ref = useRef(null);

  return (
    <Container>
      <div
        ref={ref}
        className="h-full w-full items-center justify-center border border-y-transparent border-x-0 flex flex-col z-20 relative"
      >
        <motion.div className="border w-full flex items-center justify-between gap-20 border-y-zinc-800 border-x-transparent md:px-10 pt-20 md:pt-0">
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
            <h3 className="border border-zinc-800 border-x-transparent border-t-transparent text-4xl">
              Hello, there 👋
            </h3>
            <p className="text-3xl">
              Based in Minas Gerais/BR, 6+ years of experience across Software
              Development disciplines (Frontend, Backend and QA).
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
            className="lg:block hidden justify-end size-full"
          >
            <img
              src={profile}
              alt="profile-pic"
              width={200}
              height={200}
              className="grayscale w-2/5 object-cover p-4 border border-zinc-800 border-y-0 mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};
