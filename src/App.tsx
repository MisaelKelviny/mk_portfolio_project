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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  }, []);

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
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div
          className={`${
            showSplash ? "hidden" : ""
          } noise-bg dark min-h-screen min-w-screen relative overflow-y-auto no-scrollbar antialiased bg-zinc-950 font-instrumentSans`}
        >
          <Header />
          <CanvasObject />
          <About />
          <Projects />
          <Experiences />
          <Footer />
        </div>
      )}
      <NoiseBG />
    </>
  );
}

export default App;
