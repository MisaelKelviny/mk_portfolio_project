import { motion } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../constants/experiences";
import { tools } from "../../constants/tools";

function Experiences() {
  const scrollRef = useRef(null);

  return (
    <div className="border border-y-transparent border-x-zinc-800 flex flex-col space-y-36 px-10 py-40">
      <motion.div
        initial={{ x: -300 }}
        whileInView={{
          x: 0,
          transition: {
            duration: 0.3,
            ease: "easeIn",
          },
        }}
        viewport={{ once: true }}
        className="flex flex-col gap-5"
      >
        <h3 className="border border-zinc-800 border-x-transparent border-t-transparent text-3xl uppercase font-semibold">
          Work Experience
        </h3>
        {experiences.map((e) => (
          <motion.div
            key={"experience_" + e.id}
            className="flex w-full justify-between border border-b-zinc-800 border-x-0 border-t-0 p-5"
          >
            <motion.div
              initial={{ x: 0 }}
              whileHover={{
                x: 10,
                transition: {
                  duration: 0.3,
                  ease: "easeIn",
                },
              }}
              viewport={{ once: true }}
              className="text-2xl font-semibold"
            >
              {e.title}
            </motion.div>
            <div className="flex justify-start gap-6">
              <div className="font-semibold">{e.company}</div>
              <div>{e.years}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div ref={scrollRef} className="grid grid-cols-2 gap-20">
        {Object.entries(tools).map((value) => (
          <div key={value[0]} className={"space-y-8"}>
            <p className="text-3xl font-semibold uppercase">{value[0]}</p>
            <ul
              className={`text-sm uppercase space-y-5  ${
                value[1].length > 4 ? "columns-2" : ""
              }`}
            >
              {value[1].map((t) => (
                <motion.li
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ root: scrollRef, once: true }}
                  key={t}
                  className="border border-b-zinc-800 border-x-0 border-t-0"
                >
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Experiences;
