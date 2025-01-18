import Light from "./Light";
import Prism from "./Prism";

function Scene({ setLoad }: Readonly<{ setLoad: (e: boolean) => void }>) {
  return (
    <>
      <Light />
      <Prism position={[0, -1, 0]} setLoad={setLoad} />
    </>
  );
}

export default Scene;
