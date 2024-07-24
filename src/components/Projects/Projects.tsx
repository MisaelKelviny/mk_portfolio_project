import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../constants/projects";
import { useParallax } from "../../data/hooks/useParallax";

function Image({
  image,
  title,
  id,
}: Readonly<{
  id: number;
  image: string;
  title: string;
}>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

  return (
    <div key={id} className="w-full h-4/5 overflow-hidden">
      <div ref={ref} className="overflow-hidden h-[90%]">
        <motion.video
          style={{ y }}
          src={image}
          muted={true}
          autoPlay={true}
          className="object-cover"
          loop={true}
        />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="h-full border border-y-zinc-800 border-x-zinc-800 py-40">
      <div className="grid grid-cols-2 gap-20 px-10">
        {projects.map((p, index) => (
          <div key={p.id}>
            <a
              href={p.link}
              target="_blank"
              className="flex flex-col w-full h-4/5 overflow-hidden"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
