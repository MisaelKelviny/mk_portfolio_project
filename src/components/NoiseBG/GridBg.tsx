function GridBg() {
  return (
    <div className="w-full h-full dark:bg-zinc-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#09090b)]"></div>
    </div>
  );
}

export default GridBg;
