/* eslint-disable @typescript-eslint/no-explicit-any */
import Light from "./Light";
import Prism from "./Prism";

function Scene() {
  return (
    <>
      <Light position={[20, 20, 20]} />
      <Prism position={[0, -1, 0]} />
    </>
  );
}

export default Scene;
