import { MeshTransmissionMaterial, Preload, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Vector3 } from "three";

interface PrismProps extends GroupProps {
  setLoad: (e: boolean) => void;
}

function Prism(props: PrismProps) {
  const { nodes } = useGLTF("/gltf/prism.glb");
  const myMesh = useRef(null);
  const mouse = useRef([0, 0]);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={myMesh}
        position={[0, 1, 0]}
        renderOrder={10}
        scale={2.0}
        dispose={null}
        geometry={(nodes.Cone as THREE.Mesh).geometry}
        rotation={[Math.PI / 1, 0, 0]}
        lookAt={() => new Vector3(mouse.current[0], mouse.current[1], 0)}
        onAfterRender={() => {
          props.setLoad(false);
        }}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={3}
          samples={16}
          thickness={0.2}
          anisotropicBlur={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={1}
          envMapIntensity={0.5}
          color={"white"}
        />
        <Preload all />
      </mesh>
    </group>
  );
}

export default Prism;
