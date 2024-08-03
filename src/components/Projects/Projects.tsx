import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../constants/projects";
import { useParallax } from "../../data/hooks/useParallax";
import Container from "../template/Container";

function VideoComponent({
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
    <motion.video
      whileHover={{ scale: 1.1 }}
      style={{ y }}
      muted
      autoPlay
      loop
      ref={ref}
      key={id}
      className="w-full min-h-[400px] mx-auto aspect-video object-cover"
    >
      <source src={image} type="video/mp4" />
    </motion.video>
  );
}

function Projects() {
  return (
    <Container>
      <div className="px-10 h-full border border-y-zinc-800 border-x-0 py-40 z-20 relative space-y-4">
        <h2 className="text-3xl uppercase font-semibold">Some Projects</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 md:grid-cols-1 overflow-hidden">
          {projects.map((p, index) => (
            <div key={p.title}>
              <a key={p.title} href={p.link} target="_blank">
                <div className="min-h-[400px] overflow-hidden">
                  <VideoComponent id={index} image={p.image} title={p.title} />
                </div>
              </a>
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
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Projects;
