import cssSpeedRun from "../assets/css-speed-run.png";
import fintax from "../assets/fintax.png";
import crypto from "../assets/videos/crypto.mp4";
import financeio from "../assets/videos/financeio.mp4";
import si from "../assets/videos/si.mp4";
import starzyplay from "../assets/videos/starzyplay.mp4";
import vapor from "../assets/videos/vaporwave.mp4";
import type { Lang } from "./copy";

export interface Project {
  id: string;
  title: string;
  category: string;
  desc: Record<Lang, string>;
  technologies: string[];
  link: string;
  image?: string;
  video?: string;
}

export const projects: Project[] = [
  {
    id: "si-project",
    title: "Sistemas de Informação",
    category: "FRONTEND",
    desc: {
      pt: "Site do curso de Sistemas de Informação, com layout responsivo em Bootstrap.",
      en: "Information Systems course website, with a responsive Bootstrap layout.",
    },
    video: si,
    technologies: ["HTML5", "CSS3", "Bootstrap", "Javascript"],
    link: "https://deliton.github.io/SIwebsite/",
  },
  {
    id: "vaporwave",
    title: "Vaporwave CSS",
    category: "FRONTEND",
    desc: {
      pt: "Arte no estilo vaporwave criada apenas com HTML e CSS.",
      en: "Vaporwave-style artwork built with just HTML and CSS.",
    },
    video: vapor,
    technologies: ["HTML5", "CSS3"],
    link: "https://misaelkelviny.github.io/CSS-vaporwave-artwork/",
  },
  {
    id: "crypto-currency",
    title: "Crypto Currency",
    category: "FRONTEND",
    desc: {
      pt: "Painel de criptomoedas com Next.js e TypeScript, publicado na Vercel.",
      en: "Cryptocurrency dashboard built with Next.js and TypeScript, deployed on Vercel.",
    },
    video: crypto,
    technologies: ["Next.js", "React", "Typescript", "Vercel"],
    link: "https://nextjs-crypto-currency.vercel.app",
  },
  {
    id: "fintax-safe",
    title: "Fintax Safe",
    category: "FRONTEND",
    desc: {
      pt: "Interface web para gestão financeira e fiscal, com Next.js e SASS.",
      en: "Web interface for financial and tax management, built with Next.js and SASS.",
    },
    image: fintax,
    technologies: ["Next.js", "React", "Typescript", "SASS"],
    link: "https://misaelkelviny.github.io/fintaxSafe/",
  },
  {
    id: "finaceio",
    title: "Finance.io",
    category: "FULLSTACK",
    desc: {
      pt: "Aplicação fullstack de controle financeiro com API tipada em tRPC e banco PostgreSQL.",
      en: "Fullstack personal finance app with a typed tRPC API and a PostgreSQL database.",
    },
    video: financeio,
    technologies: [
      "Next.js",
      "React",
      "tRPC",
      "Tailwind",
      "Shadcn",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    link: "https://financeio.vercel.app",
  },
  {
    id: "CSS-Speed-Run",
    title: "CSS Speed Run",
    category: "FRONTEND",
    desc: {
      pt: "Desafio de estilização em CSS feito com React e Styled Components.",
      en: "CSS styling challenge built with React and Styled Components.",
    },
    image: cssSpeedRun,
    technologies: ["Styled Components", "React", "Vite", "Vercel"],
    link: "https://css-speed-run.vercel.app",
  },
  {
    id: "starzy-play",
    title: "StarzyPlay",
    category: "FULLSTACK",
    desc: {
      pt: "Plataforma web em produção, instalável como PWA, com Next.js, tRPC e Prisma.",
      en: "Production web platform, installable as a PWA, built with Next.js, tRPC and Prisma.",
    },
    video: starzyplay,
    technologies: [
      "Next.js",
      "React",
      "Shadcn",
      "Tailwind",
      "PrismaORM",
      "MySQL",
      "TRPC",
      "VPS",
      "PWA",
    ],
    link: "https://starzyplay.com",
  },
];
