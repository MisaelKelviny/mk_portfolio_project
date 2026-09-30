import type { Copy } from "../content/copy";
import { Eyebrow } from "../ui/Section";

const panel =
  "flex flex-col border border-line bg-[rgba(15,11,24,0.85)] px-[26px] py-6";
const label =
  "font-mono text-xs uppercase tracking-[0.16em] text-muted";

export function About({ t }: Readonly<{ t: Copy }>) {
  const { about } = t;

  return (
    <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start gap-[72px] max-[960px]:grid-cols-[minmax(0,1fr)] max-[960px]:gap-10">
      <div className="flex flex-col gap-7">
        <div className="rv">
          <Eyebrow number="02">{about.eyebrow}</Eyebrow>
        </div>
        <h2 className="rv font-display text-5xl font-semibold leading-[1.08] tracking-[-0.02em] [text-wrap:balance] max-[960px]:text-[32px]">
          {about.title}
        </h2>
        <p className="rv d2 text-[17px] leading-[1.7] text-body [text-wrap:pretty]">
          {about.p1}
        </p>
        <p className="rv d2 text-[17px] leading-[1.7] text-body [text-wrap:pretty]">
          {about.p2}
        </p>
      </div>
      <div className="rv d3 flex flex-col gap-5">
        <div className={`${panel} gap-[18px]`}>
          <span className={label}>{about.eduLabel}</span>
          {about.edu.map((e) => (
            <div key={e.title} className="flex flex-col gap-1">
              <span className="text-[15px] font-semibold">{e.title}</span>
              <span className="text-sm text-muted">{e.meta}</span>
            </div>
          ))}
        </div>
        <div className={`${panel} gap-4`}>
          <span className={label}>{about.langLabel}</span>
          <div className="grid grid-cols-3 gap-4">
            {about.langs.map((l) => (
              <div key={l.name} className="flex flex-col gap-1">
                <span className="font-semibold">{l.name}</span>
                <span className="text-[13px] text-accent">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
