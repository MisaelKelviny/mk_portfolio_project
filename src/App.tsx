import { useEffect, useState } from "react";
import { copy } from "./content/copy";
import type { Lang } from "./content/copy";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Tech } from "./sections/Tech";
import { GlobeIcon } from "./ui/Icons";
import { Section, SECTION_COUNT } from "./ui/Section";
import { useSectionNavigation } from "./ui/useSectionNavigation";

const HTML_LANG: Record<Lang, string> = { pt: "pt-BR", en: "en" };

function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const { index, go, onWheel, onTouchStart, onTouchEnd } =
    useSectionNavigation(SECTION_COUNT);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const sectionProps = (i: number) => ({
    index: i,
    current: index,
    label: t.nav[i],
  });

  return (
    <div
      className="relative h-screen min-h-[620px] w-full overflow-hidden bg-bg font-sans text-ink"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50 box-border flex h-[88px] items-center justify-end px-7">
        <button
          type="button"
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          aria-label={t.langAria}
          title={t.langAria}
          className="pointer-events-auto flex h-11 items-center gap-2.5 border border-line-2 bg-[rgba(8,6,14,0.72)] px-3.5 font-mono text-xs tracking-[0.12em] text-ink backdrop-blur-[14px] transition-[border-color] duration-300 hover:border-[#4A3B6A]"
        >
          <span className="text-accent">
            <GlobeIcon />
          </span>
          <span className="flex items-center gap-1.5">
            <span className={lang === "pt" ? "text-accent" : "text-dim"}>PT</span>
            <span className="text-line-4">/</span>
            <span className={lang === "en" ? "text-accent" : "text-dim"}>EN</span>
          </span>
        </button>
      </header>

      <nav
        className="absolute right-7 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-1.5 max-[960px]:hidden"
        aria-label="Sections"
      >
        {t.nav.map((label, k) => (
          <button
            key={label}
            type="button"
            onClick={() => go(k)}
            aria-label={label}
            aria-current={k === index}
            title={label}
            className="flex h-9 w-11 items-center justify-center border-0 bg-transparent p-0"
          >
            <span
              className={`block w-0.5 transition-[height,background] duration-500 ${
                k === index ? "h-7 bg-accent" : "h-2.5 bg-line-3"
              }`}
            />
          </button>
        ))}
      </nav>

      <div className="absolute bottom-7 left-12 z-40 flex items-center gap-3.5 font-mono text-xs uppercase tracking-[0.14em] text-muted max-[960px]:left-5">
        <span className="text-accent">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(SECTION_COUNT).padStart(2, "0")}
        </span>
        <span className="h-px w-10 bg-line-3" />
        <span>{t.nav[index]}</span>
      </div>

      <Section {...sectionProps(0)}>
        <Hero t={t} />
      </Section>
      <Section {...sectionProps(1)}>
        <About t={t} />
      </Section>
      <Section {...sectionProps(2)}>
        <Experience t={t} lang={lang} />
      </Section>
      <Section {...sectionProps(3)}>
        <Tech t={t} />
      </Section>
      <Section {...sectionProps(4)}>
        <Projects t={t} lang={lang} active={index === 4} />
      </Section>
    </div>
  );
}

export default App;
