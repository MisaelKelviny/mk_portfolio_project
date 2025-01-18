import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { About } from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NoiseBG from "./components/NoiseBG/NoiseBG";
import Projects from "./components/Projects/Projects";
import CanvasObject from "./components/ShowObject/Canvas";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoad) {
      setTimeout(() => {
        setSplash(false);
      }, 4000);
    }
  }, [isLoad]);

  return (
    <>
      <AnimatedCursor
        innerSize={25}
        outerSize={20}
        color="31, 41, 55"
        innerStyle={{
          backgroundColor: "transparent",
          border: "1px solid #3f3f46",
        }}
        outerStyle={{
          backgroundColor: "transparent",
        }}
        outerAlpha={0.2}
        innerScale={3}
        outerScale={3}
        showSystemCursor={true}
      />
      {splash && <SplashScreen />}
      <div
        className={`${
          splash ? "fixed" : "relative"
        } noise-bg dark min-h-screen min-w-screen antialiased overflow-y-scroll no-scrollbar bg-zinc-950 font-instrumentSans`}
      >
        <Header />
        <CanvasObject setLoad={setIsLoad} />
        <About />
        <Projects />
        <Experiences />
        <Footer />
      </div>
      <NoiseBG />
    </>
  );
}

export default App;
