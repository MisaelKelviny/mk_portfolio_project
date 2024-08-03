import fintax from "../assets/fintax.png";
import crypto from "../assets/videos/crypto.mp4";
import si from "../assets/videos/si.mp4";
import vapor from "../assets/videos/vaporwave.mp4";

export const projects = [
  {
    id: "si-project",
    title: "Sistemas de Informação",
    video: si,
    technologies: ["HTML5", "CSS3", "Bootstrap", "Javascript"],
    link: "https://deliton.github.io/SIwebsite/",
  },
  {
    id: "vaporwave",
    title: "Vaporwave CSS",
    video: vapor,
    technologies: ["HTML5", "CSS3"],
    link: "https://misaelkelviny.github.io/CSS-vaporwave-artwork/",
  },
  {
    id: "crypto-currency",
    title: "Crypto Currency",
    video: crypto,
    technologies: ["Next.js", "React", "Typescript", "Vercel"],
    link: "https://nextjs-crypto-currency.vercel.app",
  },
  {
    id: "fintax-safe",
    title: "Fintax Safe",
    image: fintax,
    technologies: ["Next.js", "React", "Typescript", "SASS"],
    link: "https://misaelkelviny.github.io/fintaxSafe/",
  },
];
