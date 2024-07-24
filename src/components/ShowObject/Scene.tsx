/* eslint-disable @typescript-eslint/no-explicit-any */
import Light from "./Light";
import Prism from "./Prism";

function Scene() {
  return (
    <>
      <Light />
      <Prism position={[0, -1, 0]} />
    </>
  );
}

export default Scene;
