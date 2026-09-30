import { useState } from "react";
import type { Copy, Lang } from "../content/copy";
import { jobs } from "../content/experiences";
import { SectionHeading } from "../ui/Section";

export function Experience({ t, lang }: Readonly<{ t: Copy; lang: Lang }>) {
  const [selected, setSelected] = useState(0);
  const job = jobs[selected];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading number="03" eyebrow={t.exp.eyebrow} title={t.exp.title} />
      <div className="rv d2 grid grid-cols-[360px_minmax(0,1fr)] items-stretch gap-8 max-[960px]:grid-cols-[minmax(0,1fr)]">
        <div className="flex flex-col gap-2" role="tablist">
          {jobs.map((j, k) => {
            const on = k === selected;
            return (
              <button
                key={`${j.company}-${j.period.en}`}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setSelected(k)}
                className={`flex min-h-14 items-center justify-between gap-3 border px-4 py-2.5 text-left text-ink transition-[border-color,background] duration-300 hover:border-line-4 ${
                  on
                    ? "border-accent bg-[rgba(155,92,255,0.10)]"
                    : "border-line bg-[rgba(15,11,24,0.85)]"
                }`}
              >
                <span className="flex flex-col gap-0.5">
                  <span
                    className={`text-[15px] font-semibold ${on ? "text-accent" : ""}`}
                  >
                    {j.company}
                  </span>
                  <span className="text-[13px] text-muted">{j.role[lang]}</span>
                </span>
                <span className="whitespace-nowrap font-mono text-[11px] text-muted">
                  {j.short[lang]}
                </span>
              </button>
            );
          })}
        </div>
        <div
          role="tabpanel"
          className="relative flex flex-col gap-[22px] border border-line bg-[rgba(15,11,24,0.9)] px-9 py-8 max-[960px]:px-5"
        >
          <span className="absolute -left-px -top-px h-[18px] w-[18px] border-l-2 border-t-2 border-accent" />
          <span className="absolute -bottom-px -right-px h-[18px] w-[18px] border-b-2 border-r-2 border-accent" />
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="font-display text-2xl font-semibold tracking-[-0.01em]">
                {job.role[lang]}
              </span>
              <span className="text-base text-accent">{job.company}</span>
            </div>
            <div className="flex flex-col items-end gap-1 font-mono text-[13px] text-muted max-[960px]:items-start">
              <span>{job.period[lang]}</span>
              <span>{job.place[lang]}</span>
            </div>
          </div>
          <ul className="flex list-none flex-col gap-3.5 p-0">
            {job.points[lang].map((p) => (
              <li
                key={p}
                className="flex gap-3.5 text-[15px] leading-[1.6] text-soft"
              >
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 border border-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="border border-tag px-2.5 py-1.5 font-mono text-xs text-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
