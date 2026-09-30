export type Lang = "pt" | "en";

export const copy = {
  pt: {
    nav: ["Início", "Sobre", "Experiência", "Tecnologias", "Projetos"],
    langAria: "Mudar idioma para inglês",
    cvAria: "Baixar meu currículo em PDF",
    location: "Minas Gerais, Brasil",
    current: "Atualmente System Analyst @ CI&T",
    aiChip: "IA · Multiagentes",
    scroll: "Role para navegar",
    about: {
      eyebrow: "Sobre mim",
      title: "A ponte entre o negócio e a engenharia.",
      p1: "Sou engenheiro de software com mais de 6 anos de experiência em desenvolvimento fullstack e design de sistemas escaláveis. Entrego aplicações de alta performance, integro microsserviços e lidero tecnicamente times ágeis multidisciplinares.",
      p2: "Especialista em Java, Spring Boot, React, Next.js e AWS, com base sólida em Clean Architecture, micro-frontends e BDD. Gosto de mentorar pessoas, conduzir refinamentos técnicos e melhorar a confiabilidade, a performance e a produtividade de sistemas distribuídos.",
      eduLabel: "// Formação",
      edu: [
        {
          title:
            "Mestrado em Gestão Estratégica de TI — Engenharia de Software",
          meta: "Universidad Europea del Atlántico · 2025 – atual · Santander, Espanha",
        },
        {
          title: "Pós-graduação em Engenharia de Software",
          meta: "Faculdade Metropolitana de São Paulo · 2024 – 2025",
        },
        {
          title: "Bacharelado em Sistemas de Informação",
          meta: "Universidade do Vale do Sapucaí · 2017 – 2020",
        },
      ],
      langLabel: "// Idiomas",
      langs: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Avançado" },
        { name: "Espanhol", level: "Básico" },
      ],
    },
    exp: { eyebrow: "Experiência", title: "Trajetória profissional" },
    tech: {
      eyebrow: "Tecnologias",
      title: "Stack que domino",
      desc: "Do backend distribuído ao frontend de alta performance, com qualidade e entrega contínua em todo o ciclo.",
      core: "Especialidade",
      cats: [
        "Frontend",
        "Backend",
        "DevOps & Cloud",
        "Arquitetura & Qualidade",
        "Ferramentas & Gestão",
      ],
    },
    proj: {
      eyebrow: "Projetos",
      title: "Sites em produção",
      desc: "Uma seleção de sites e aplicações que mostram na prática as habilidades descritas acima.",
      visit: "Visitar site",
      talk: "Vamos conversar?",
    },
  },
  en: {
    nav: ["Home", "About", "Experience", "Tech stack", "Projects"],
    langAria: "Switch language to Portuguese",
    cvAria: "Download my résumé as PDF",
    location: "Minas Gerais, Brazil",
    current: "Currently System Analyst @ CI&T",
    aiChip: "AI · Multi-agent",
    scroll: "Scroll to navigate",
    about: {
      eyebrow: "About me",
      title: "The bridge between business and engineering.",
      p1: "I am a software engineer with over 6 years of experience in fullstack development and scalable system design. I deliver high-performance applications, drive microservice integrations and provide technical leadership across cross-functional Agile teams.",
      p2: "Specialist in Java, Spring Boot, React, Next.js and AWS, with strong knowledge of Clean Architecture, micro-frontends and BDD. I enjoy mentoring engineers, leading technical refinements and improving the reliability, performance and productivity of distributed systems.",
      eduLabel: "// Education",
      edu: [
        {
          title: "Master’s in Strategic Management of IT — Software Engineering",
          meta: "Universidad Europea del Atlántico · 2025 – present · Santander, Spain",
        },
        {
          title: "Postgraduate in Software Engineering",
          meta: "Faculdade Metropolitana de São Paulo · 2024 – 2025",
        },
        {
          title: "Bachelor’s in Information Systems",
          meta: "University of Sapucaí Valley · 2017 – 2020",
        },
      ],
      langLabel: "// Languages",
      langs: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "Spanish", level: "Basic" },
      ],
    },
    exp: { eyebrow: "Experience", title: "Career path" },
    tech: {
      eyebrow: "Tech stack",
      title: "Technologies I master",
      desc: "From distributed backends to high-performance frontends, with quality and continuous delivery across the whole cycle.",
      core: "Core expertise",
      cats: [
        "Frontend",
        "Backend",
        "DevOps & Cloud",
        "Architecture & Quality",
        "Tools & Management",
      ],
    },
    proj: {
      eyebrow: "Projects",
      title: "Sites in production",
      desc: "A selection of sites and applications that show the skills above in practice.",
      visit: "Visit site",
      talk: "Let’s talk?",
    },
  },
};

export type Copy = (typeof copy)[Lang];
