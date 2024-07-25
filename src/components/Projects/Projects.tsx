import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../constants/projects";
import { useParallax } from "../../data/hooks/useParallax";
import Container from "../template/Container";

function Image({
  image,
  id,
}: Readonly<{
  id: number;
  image: string;
  title: string;
}>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 20);

  return (
    <div
      ref={ref}
      key={id}
      className="relative overflow-hidden w-full lg:max-h-96 h-fit"
    >
      <motion.video
        whileHover={{ scale: 1.3 }}
        style={{ y }}
        muted
        autoPlay
        loop
        className="lg:max-h-svh lg:min-w-96 lg:min-h-96 scale-150"
      >
        <source src={image} type="video/mp4" />
      </motion.video>
    </div>
  );
}

function Projects() {
  return (
    <Container>
      <div className="h-full border border-y-zinc-800 border-x-0 py-40 z-20 relative">
        <div className="grid md:grid-cols-2 gap-20 lg:px-10">
          {projects.map((p, index) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              className="flex flex-col gap-6 border border-zinc-800 md:p-5 py-5 shadow-lg h-full justify-between"
            >
              <Image id={index} image={p.image} title={p.title} />
              <div className="flex flex-col gap-2">
                <p className="uppercase font-semibold text-2xl">{p.title}</p>
                <div className="flex gap-2 text-left">
                  {p.technologies.map((p) => (
                    <span key={p} className="text-zinc-500">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Projects;
