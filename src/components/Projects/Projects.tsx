import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../constants/projects";
import { useParallax } from "../../data/hooks/useParallax";
import Container from "../template/Container";

function VideoComponent({
  image,
  video,
  id,
  title,
}: Readonly<{
  id: number;
  image?: string;
  title: string;
  video?: string;
}>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 20);

  return image === undefined ? (
    <motion.video
      whileHover={{ scale: 1.3 }}
      style={{ y, scale: 1.4 }}
      muted
      autoPlay
      loop
      ref={ref}
      key={id}
      className="w-full min-h-[400px] mx-auto aspect-video object-cover"
    >
      <source src={video} type="video/mp4" />
    </motion.video>
  ) : (
    <motion.img
      src={image}
      alt={title}
      whileHover={{ scale: 1.3 }}
      style={{ y, scale: 1.4 }}
      className="w-full min-h-[400px] mx-auto aspect-video object-cover"
    />
  );
}

function Projects() {
  return (
    <Container>
      <div className="px-10 h-full border border-y-zinc-800 border-x-0 py-40 z-20 relative space-y-4">
        <h2 className="text-3xl uppercase font-semibold">Some Projects</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 md:grid-cols-1 overflow-hidden">
          {projects.map((p, index) => (
            <div key={p.title} className="flex flex-col gap-5">
              <a key={p.title} href={p.link} target="_blank">
                <div className="min-h-[400px] overflow-hidden">
                  <VideoComponent
                    id={index}
                    image={p.image}
                    video={p.video}
                    title={p.title}
                  />
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
