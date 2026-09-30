import type { Lang } from "./copy";

type L<T> = Record<Lang, T>;

export interface Job {
  company: string;
  role: L<string>;
  short: L<string>;
  period: L<string>;
  place: L<string>;
  points: L<string[]>;
  tags: string[];
}

const present: L<string> = { pt: "atual", en: "present" };

export const jobs: Job[] = [
  {
    company: "CI&T",
    role: { pt: "System Analyst", en: "System Analyst" },
    short: { pt: `2026 — ${present.pt}`, en: `2026 — ${present.en}` },
    period: { pt: `04/2026 — ${present.pt}`, en: `04/2026 — ${present.en}` },
    place: { pt: "Brasil", en: "Brazil" },
    points: {
      pt: [
        "Componentes reutilizáveis para agentes de IA e fluxos multiagentes, aplicados a diferentes casos de negócio.",
        "Guardrails com Claude Code baseados em padrões de frontend e testes, reduzindo respostas inválidas em 40%.",
        "Resolução de 7 incidentes em produção e 3 defeitos críticos com análise de causa raiz em sistemas legados.",
        "Novos módulos em arquitetura micro-frontend (single-spa, React, Vite), com produtividade 5x via integrações MCP com Figma e Azure DevOps.",
      ],
      en: [
        "Built reusable components for AI agents and multi-agent workflows across different business use cases.",
        "Implemented guardrails with Claude Code based on frontend and testing standards, cutting invalid responses by 40%.",
        "Resolved 7 production incidents and 3 critical defects through root cause analysis on legacy systems.",
        "Developed new micro-frontend modules (single-spa, React, Vite), boosting delivery 5x with MCP integrations for Figma and Azure DevOps.",
      ],
    },
    tags: ["React", "Vite", "single-spa", "Claude Code", "MCP", "Azure DevOps"],
  },
  {
    company: "Alpharede",
    role: {
      pt: "Fullstack Freelancer & Tech Lead",
      en: "Freelance Fullstack Developer & Tech Lead",
    },
    short: { pt: "2025 — 2026", en: "2025 — 2026" },
    period: { pt: "07/2025 — 04/2026", en: "07/2025 — 04/2026" },
    place: { pt: "Pernambuco, Brasil", en: "Pernambuco, Brazil" },
    points: {
      pt: [
        "Plataforma “Link in Bio” de alta performance com Next.js, Prisma, tRPC, TailwindCSS e MySQL.",
        "Liderança do time de desenvolvimento com Scrum/Kanban, garantindo entregas no prazo.",
        "Pipelines de CI/CD com GitHub Actions, reduzindo o tempo de deploy em 40%.",
        "Infraestrutura em VPS com Docker, Webmin e Nginx; 99,9% de uptime no encurtador de URLs em PHP 7.",
      ],
      en: [
        "Built a high-performance “Link in Bio” platform with Next.js, Prisma, tRPC, TailwindCSS and MySQL.",
        "Led the development team with Scrum/Kanban boards, ensuring on-time delivery.",
        "Built CI/CD pipelines with GitHub Actions, reducing deployment time by 40%.",
        "Set up VPS infrastructure with Docker, Webmin and Nginx; kept 99.9% uptime on a PHP 7 URL shortener.",
      ],
    },
    tags: [
      "Next.js",
      "Prisma",
      "tRPC",
      "TailwindCSS",
      "MySQL",
      "Docker",
      "Nginx",
      "Figma",
    ],
  },
  {
    company: "Globant",
    role: { pt: "Senior Web Developer", en: "Senior Web Developer" },
    short: { pt: "2025", en: "2025" },
    period: { pt: "01/2025 — 12/2025", en: "01/2025 — 12/2025" },
    place: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" },
    points: {
      pt: [
        "Manutenção e evolução de projetos React + Vite, eliminando mais de 100 bugs do backlog.",
        "APIs REST em Spring Boot para pagamentos e empréstimos, com mais de 80% de cobertura em JUnit 5.",
        "Spring Batch integrado ao AWS Batch para processamento paralelo em sistemas de análise de dados.",
        "Mentoria de 2 engenheiros e mais de 30 refinamentos técnicos conduzidos, com arquitetura em C4 e UML.",
      ],
      en: [
        "Led maintenance of React + Vite projects, clearing over 100 backlog bugs.",
        "Designed Spring Boot REST APIs for payment and loan services with 80%+ JUnit 5 coverage.",
        "Implemented Spring Batch jobs integrated with AWS Batch for data analytics systems.",
        "Mentored 2 engineers and facilitated 30+ technical refinements, designing architecture with C4 and UML.",
      ],
    },
    tags: [
      "React",
      "Vite",
      "Spring Boot",
      "Spring Batch",
      "AWS Batch",
      "JUnit 5",
      "C4 Model",
    ],
  },
  {
    company: "Iteris",
    role: {
      pt: "Software Engineer Consultant",
      en: "Software Engineer Consultant",
    },
    short: { pt: "2022 — 2024", en: "2022 — 2024" },
    period: { pt: "02/2022 — 12/2024", en: "02/2022 — 12/2024" },
    place: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" },
    points: {
      pt: [
        "Consultor para a Elopar (grupo bancário nacional) com Next.js, React e TypeScript.",
        "Lighthouse de menos de 70 para mais de 90 e 60% menos duplicação em páginas com 70 mil+ usuários/mês.",
        "SSR com Next.js na AWS, reduzindo o tempo de renderização em 20%.",
        "Migração para micro-frontends: -30% em custos de CDN e +40% de eficiência no desenvolvimento.",
      ],
      en: [
        "Consultant for Elopar (national banking group) with Next.js, React and TypeScript.",
        "Raised Lighthouse from below 70 to over 90 and cut code duplication by 60% on pages with 70k+ monthly users.",
        "Implemented SSR with Next.js on AWS, reducing rendering times by 20%.",
        "Drove the micro-frontend migration: 30% lower CDN costs and 40% higher development efficiency.",
      ],
    },
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "AWS",
      "Micro-frontends",
      "BDD",
      "Datadog",
    ],
  },
  {
    company: "INATEL",
    role: { pt: "System Specialist II", en: "System Specialist II" },
    short: { pt: "2020 — 2022", en: "2020 — 2022" },
    period: { pt: "09/2020 — 02/2022", en: "09/2020 — 02/2022" },
    place: {
      pt: "Santa Rita do Sapucaí, Brasil",
      en: "Santa Rita do Sapucaí, Brazil",
    },
    points: {
      pt: [
        "Time multicultural na Ericsson por meio de um centro de competência brasileiro.",
        "Bibliotecas internas e APIs REST com Java Spring Boot e Angular.",
        "Mais de 5 gargalos críticos em microsserviços resolvidos com JMeter, reduzindo incidentes em 20%.",
        "Migração de Docker para Kubernetes, com CI/CD 25% mais rápido.",
      ],
      en: [
        "Part of a multicultural team at Ericsson through a Brazilian competence center.",
        "Developed internal libraries and REST APIs with Java Spring Boot and Angular.",
        "Resolved 5+ critical microservice bottlenecks with JMeter, cutting incidents by 20%.",
        "Contributed to the Docker-to-Kubernetes migration, making CI/CD 25% faster.",
      ],
    },
    tags: [
      "Java",
      "Spring Boot",
      "Angular",
      "Kubernetes",
      "Camunda",
      "Cassandra",
      "PostgreSQL",
    ],
  },
  {
    company: "INATEL",
    role: { pt: "QA Developer Intern", en: "QA Developer Intern" },
    short: { pt: "2019 — 2020", en: "2019 — 2020" },
    period: { pt: "09/2019 — 09/2020", en: "09/2019 — 09/2020" },
    place: {
      pt: "Santa Rita do Sapucaí, Brasil",
      en: "Santa Rita do Sapucaí, Brazil",
    },
    points: {
      pt: [
        "Testes unitários, exploratórios e automatizados com Robot Framework, Sikuli e JUnit.",
        "Correções e automação de testes em apps Android com Java.",
        "Testes unitários em C# para aplicações UWP e otimização de pipelines com Jenkins.",
        "Validação de modelos com TensorFlow em aplicações Android com machine learning.",
      ],
      en: [
        "Unit, exploratory and automated testing with Robot Framework, Sikuli and JUnit.",
        "Fixes and test automation for Android apps in Java.",
        "C# unit testing for UWP applications and Jenkins pipeline optimization.",
        "Model validation with TensorFlow in machine-learning Android apps.",
      ],
    },
    tags: ["Robot Framework", "JUnit", "Android", "C#", "Jenkins", "TensorFlow"],
  },
];
