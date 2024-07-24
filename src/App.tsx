import { useEffect, useState } from "react";
import { About } from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Logo from "./components/Logo.tsx/Logo";
import Navbar from "./components/Navbar/Navbar";
import NoiseBG from "./components/NoiseBG/NoiseBG";
import Projects from "./components/Projects/Projects";
import ShowObject from "./components/ShowObject/Canvas";
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
        } noise-bg dark min-h-screen min-w-screen relative overflow-y-auto no-scrollbar antialiased bg-zinc-950`}
      >
        <section className="px-20 h-screen w-screen text-gray-200 font-instrumentSans">
          <div className="h-full w-full gap-20 items-center place-content-center border border-y-transparent border-x-zinc-900 flex flex-col">
            <Logo />
            <Navbar />
            <Landing />
          </div>
        </section>
        <section className="px-20 h-screen w-screen text-gray-200 font-instrumentSans">
          <div className="h-full w-full border border-y-transparent border-x-zinc-900 ">
            <ShowObject />
          </div>
        </section>
        <section className="px-20 antialiased h-fit w-screen text-gray-200 font-instrumentSans z-20 relative">
          <Projects />
        </section>
        <section className="px-20 antialiased h-fit w-screen text-gray-200 font-instrumentSans z-20 relative">
          <Experiences />
        </section>
        <section className="px-20 h-fit w-screen text-gray-200 font-instrumentSans">
          <About />
        </section>
        <section className="px-20 h-fit w-screen text-gray-200 font-instrumentSans">
          <Footer />
        </section>
      </div>
      <NoiseBG />
    </>
  );
}

export default App;
