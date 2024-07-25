import { useEffect, useState } from "react";
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
      {showSplash && <SplashScreen />}
      <div
        className={`${
          showSplash ? "hidden" : ""
        } noise-bg dark min-h-screen min-w-screen relative overflow-y-auto no-scrollbar antialiased bg-zinc-950 font-instrumentSans`}
      >
        <Header />
        <CanvasObject />
        <Projects />
        <Experiences />
        <About />
        <Footer />
      </div>
      <NoiseBG />
    </>
  );
}

export default App;
