import { motion } from "framer-motion";
import { projects } from "../../constants/projects";

function Image({
  image,
  id,
}: Readonly<{
  id: number;
  image: string;
  title: string;
}>) {
  return (
    <div key={id} className="relative overflow-hidden w-full h-[400px]">
      <motion.video muted autoPlay loop>
        <source src={image} type="video/mp4" />
      </motion.video>
    </div>
  );
}

function Projects() {
  return (
    <div className="h-full border border-y-zinc-800 border-x-zinc-800 py-40">
      <div className="grid grid-cols-2 gap-20 px-10">
        {projects.map((p, index) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            className="flex flex-col gap-6"
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
  );
}

export default Projects;
