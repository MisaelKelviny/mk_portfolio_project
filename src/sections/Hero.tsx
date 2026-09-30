import type { ReactNode } from "react";
import type { Copy } from "../content/copy";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  PinIcon,
} from "../ui/Icons";
import { Eyebrow } from "../ui/Section";

const linkClass =
  "link-btn flex h-[52px] items-center gap-2.5 border border-line-3 px-5 font-mono text-[13px] tracking-[0.08em]";

function SocialLink({
  href,
  icon,
  children,
}: Readonly<{ href: string; icon: ReactNode; children: ReactNode }>) {
  return (
    <a className={linkClass} href={href} target="_blank" rel="noopener noreferrer">
      <span className="text-accent">{icon}</span>
      <span>{children}</span>
    </a>
  );
}

const chip =
  "absolute border border-line-2 bg-chip px-3 py-2 font-mono text-xs text-soft";

function Visual({ aiChip }: Readonly<{ aiChip: string }>) {
  return (
    <div
      aria-hidden="true"
      className="rv d2 relative flex h-[520px] items-center justify-center max-[960px]:hidden"
    >
      <div className="absolute h-[480px] w-[480px] animate-orbit rounded-full border border-dashed border-[#332650]">
        <span className="absolute -top-[5px] left-1/2 -ml-[5px] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" />
        <span className="absolute bottom-[60px] left-[34px] h-1.5 w-1.5 rounded-full bg-[#E07BFF]" />
      </div>
      <div className="absolute h-[340px] w-[340px] animate-orbit-rev rounded-full border border-[#241B38]">
        <span className="absolute right-[-4px] top-1/2 -mt-1 h-2 w-2 rotate-45 border border-accent" />
      </div>
      <div className="absolute h-[200px] w-[200px] rounded-full border border-line-3 bg-[radial-gradient(circle,#1A1030,#08060E_70%)]" />
      <svg
        width="150"
        height="230"
        viewBox="0 0 150 230"
        fill="none"
        className="relative overflow-visible"
      >
        <defs>
          <linearGradient id="mk-mirror" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points="6,8 144,8 75,112"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="miter"
          style={{ filter: "drop-shadow(0 0 14px var(--accent))" }}
        />
        <polygon
          points="34,26 116,26 75,88"
          fill="var(--accent)"
          fillOpacity="0.14"
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <line
          x1="-24"
          y1="115"
          x2="174"
          y2="115"
          stroke="#4A3B6A"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <polygon
          points="6,222 144,222 75,118"
          stroke="url(#mk-mirror)"
          strokeWidth="2"
        />
        <polygon
          points="34,204 116,204 75,142"
          fill="url(#mk-mirror)"
          fillOpacity="0.25"
        />
      </svg>
      <span className={`${chip} left-2.5 top-10`}>Java · Spring Boot</span>
      <span className={`${chip} -right-2 top-[120px]`}>React · Next.js</span>
      <span className={`${chip} bottom-[70px] right-5`}>AWS · Kubernetes</span>
      <span
        className={`${chip} bottom-6 left-10 !border-accent !text-accent`}
      >
        {aiChip}
      </span>
    </div>
  );
}

export function Hero({ t }: Readonly<{ t: Copy }>) {
  return (
    <>
      <div className="pointer-events-none absolute -right-[10%] top-[10%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(155,92,255,0.16),transparent_60%)]" />
      <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-center gap-12 max-[960px]:grid-cols-[minmax(0,1fr)]">
        <div className="flex flex-col gap-8">
          <div className="rv">
            <Eyebrow>Software Engineer · Fullstack Developer</Eyebrow>
          </div>
          <h1 className="rv d2 font-display text-[76px] font-extrabold leading-[0.98] tracking-[-0.03em] [text-wrap:balance] max-[960px]:text-[40px]">
            Misael Kelviny{" "}
            <span className="font-normal text-dim">da Silva</span>
          </h1>
          <nav className="rv d3 flex flex-wrap gap-3" aria-label="Links">
            <a
              className="link-btn flex h-[52px] items-center gap-2.5 bg-accent px-[22px] font-mono text-[13px] font-medium tracking-[0.08em] text-on-accent [clip-path:polygon(0_0,90%_0,100%_30%,100%_100%,10%_100%,0_70%)] hover:!text-on-accent"
              href={t.cvUrl}
              download="Misael_Kelviny_da_Silva_CV.pdf"
              aria-label={t.cvAria}
            >
              <DownloadIcon />
              <span>My.CV</span>
            </a>
            <SocialLink
              href="https://www.linkedin.com/in/misael-kelviny/"
              icon={<LinkedinIcon />}
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/MisaelKelviny"
              icon={<GithubIcon />}
            >
              GitHub
            </SocialLink>
            <SocialLink
              href="https://www.behance.net/MisaelKelviny"
              icon={
                <span className="font-display text-[13px] font-extrabold">
                  Bē
                </span>
              }
            >
              Behance
            </SocialLink>
          </nav>
          <div className="rv d3 flex flex-wrap gap-7 font-mono text-[13px] text-muted">
            <span className="flex items-center gap-2">
              <PinIcon />
              {t.location}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-[7px] w-[7px] animate-blink rounded-full bg-accent" />
              {t.current}
            </span>
          </div>
        </div>
        <Visual aiChip={t.aiChip} />
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        <span>{t.scroll}</span>
        <span className="relative h-10 w-px overflow-hidden bg-[#241B38]">
          <span className="absolute inset-0 animate-scan bg-accent" />
        </span>
      </div>
    </>
  );
}
