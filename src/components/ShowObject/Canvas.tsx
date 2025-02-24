import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  HueSaturation,
  ToneMapping,
} from "@react-three/postprocessing";
import { motion } from "framer-motion";
import { ToneMappingMode } from "postprocessing";
import { useRef } from "react";
import { works } from "../../constants/works";
import GridBg from "../NoiseBG/GridBg";
import Container from "../template/Container";
import Scene from "./Scene";

function CanvasObject({
  setLoad,
}: Readonly<{ setLoad: (e: boolean) => void }>) {
  const ref = useRef(null);

  return (
    <Container>
      <div
        ref={ref}
        className="h-screen w-full border border-y-transparent border-x-0 flex flex-col gap-10 relative"
      >
        <GridBg />
        <Canvas
          linear
          flat
          gl={{ antialias: false, alpha: true, stencil: false, depth: false }}
          camera={{ position: [0, 2.5, 10], fov: 35 }}
          onCreated={(state) => {
            state.gl.toneMappingExposure = 1.5;
            state.gl.setClearColor(0x000000, 0);
          }}
          className="hidden lg:block"
        >
          <ambientLight intensity={500} color={"white"} />
          <directionalLight
            position={[0, 20, 60]}
            color={"purple"}
            intensity={200}
          />
          <directionalLight
            position={[0, 10, -70]}
            color={"purple"}
            intensity={200}
          />
          <directionalLight
            position={[-80, -40, -70]}
            color={"purple"}
            intensity={200}
          />
          <directionalLight
            position={[40, -60, -40]}
            color={"purple"}
            intensity={200}
          />
          <Scene setLoad={setLoad} />
          <EffectComposer enableNormalPass={true}>
            <Bloom mipmapBlur luminanceThreshold={1} intensity={2} />
            <HueSaturation hue={0} saturation={-0.25} />
            <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
          </EffectComposer>
        </Canvas>
        {works.map((w) => (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                ease: "linear",
                duration: 0.6,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            viewport={{ once: true, root: ref }}
            key={w.title}
            className={`${w.position} z-20 lg:w-1/4 w-full h-fit lg:absolute p-2 border border-zinc-800`}
          >
            <div
              className={`bg-zinc-900 shadow-lg p-5 rounded flex flex-col space-y-5`}
            >
              <p className="font-semibold text-3xl border border-b-zinc-800 border-x-0 border-t-0">
                {w.title}
              </p>
              <span>{w.description}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default CanvasObject;
