import type { Copy } from "../content/copy";
import { coreStack, techCategories } from "../content/tech";
import { SectionHeading } from "../ui/Section";

const card =
  "card flex flex-col gap-[18px] bg-[rgba(15,11,24,0.9)] p-6";

export function Tech({ t }: Readonly<{ t: Copy }>) {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        number="04"
        eyebrow={t.tech.eyebrow}
        title={t.tech.title}
        desc={t.tech.desc}
      />
      <div className="rv d2 grid grid-cols-3 gap-4 max-[960px]:grid-cols-[minmax(0,1fr)]">
        <div className={`${card} border border-accent`}>
          <div className="flex items-center justify-between">
            <span className="font-display text-base font-semibold">
              {t.tech.core}
            </span>
            <span className="font-mono text-[11px] tracking-[0.16em] text-accent">
              CORE
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((c) => (
              <span
                key={c}
                className="bg-accent px-3 py-[7px] font-mono text-[13px] font-medium text-on-accent"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        {techCategories.map((cat, k) => (
          <div key={cat.code} className={`${card} border border-line`}>
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-semibold">
                {t.tech.cats[k]}
              </span>
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                {cat.code}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="border border-tag px-2.5 py-1.5 font-mono text-xs text-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
