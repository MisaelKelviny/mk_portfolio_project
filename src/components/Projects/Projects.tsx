import { motion } from "framer-motion";
import { projects } from "../../constants/projects";

function Projects() {
  return (
    <div className="h-full border border-y-transparent border-x-zinc-900">
      <div className="flex flex-col gap-20 justify-center">
        <h3 className="border border-zinc-900 border-x-transparent text-4xl">
          Some Projects
        </h3>
      </div>
      <div className="flex h-full items-center gap-20 px-20 py-20">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.1 }}
            animate={{ x: 0 }}
            className="flex flex-col h-3/5 w-1/5 justify-center bg-zinc-900 rounded-lg p-6 cursor-pointer"
            onClick={() => window.open(p.link, "_blank")}
          >
            <div className="">
              <img src={p.image} alt={p.title} className="w-full object-fill" />
            </div>
            <div className="flex h-full justify-between flex-col gap-5">
              <span className="text-zinc-600 font-semibold text-2xl">
                {p.title}
              </span>
              <div className="flex gap-2 text-zinc-400">
                {p.technologies.map((i) => (
                  <div key={i}>{i}</div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
