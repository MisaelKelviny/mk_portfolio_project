import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

function Light({ ...props }) {
  const lightRef = useRef(null);
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      event.preventDefault();
      mouse.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      ];
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.lerp(
        new Vector3(mouse.current[0] * 7, mouse.current[1] * 7, 0),
        0.1
      );
    }
  });

  return (
    <pointLight color={"white"} ref={lightRef} intensity={200} distance={6} />
  );
}

export default Light;
