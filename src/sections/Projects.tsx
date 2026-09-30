import { useEffect, useRef } from "react";
import type { Copy, Lang } from "../content/copy";
import { projects } from "../content/projects";
import type { Project } from "../content/projects";
import { ArrowUpRightIcon } from "../ui/Icons";
import { SectionHeading } from "../ui/Section";

/** Video thumbnails only play while the projects section is on screen. */
function Thumb({
  project,
  active,
}: Readonly<{ project: Project; active: boolean }>) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (active) video.play().catch(() => undefined);
    else video.pause();
  }, [active]);

  const media = "h-full w-full object-cover";

  return (
    <div className="flex h-40 flex-col border-b border-line bg-shot">
      <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-line px-3">
        <span className="h-[7px] w-[7px] rounded-full bg-line-3" />
        <span className="h-[7px] w-[7px] rounded-full bg-line-3" />
        <span className="h-[7px] w-[7px] rounded-full bg-line-3" />
      </div>
      <div className="min-h-0 grow overflow-hidden">
        {project.video ? (
          <video
            ref={ref}
            className={media}
            src={`${project.video}#t=0.1`}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={project.title}
          />
        ) : (
          <img
            className={media}
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export function Projects({
  t,
  lang,
  active,
}: Readonly<{ t: Copy; lang: Lang; active: boolean }>) {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        number="05"
        eyebrow={t.proj.eyebrow}
        title={t.proj.title}
        desc={t.proj.desc}
      />
      <div className="rv d2 grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2 max-[960px]:grid-cols-[minmax(0,1fr)]">
        {projects.map((p, k) => (
          <a
            key={p.id}
            className="card flex flex-col border border-line bg-[rgba(15,11,24,0.9)]"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thumb project={p} active={active} />
            <div className="flex grow flex-col gap-3 p-5">
              <span className="font-mono text-[11px] tracking-[0.16em] text-accent">
                {`P.${String(k + 1).padStart(2, "0")} · ${p.category}`}
              </span>
              <span className="font-display text-[17px] font-semibold">
                {p.title}
              </span>
              <span className="text-sm leading-[1.55] text-muted">
                {p.desc[lang]}
              </span>
              <span className="font-mono text-xs text-soft">
                {p.technologies.join(" · ")}
              </span>
              <span className="mt-auto flex items-center gap-2 pt-1 font-mono text-xs uppercase tracking-[0.12em] text-ink">
                {t.proj.visit} <ArrowUpRightIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="rv d3 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-5 font-mono text-[13px] text-muted">
        <span className="text-ink">{t.proj.talk}</span>
        <a className="!text-accent" href="mailto:misaelkelviny@gmail.com">
          misaelkelviny@gmail.com
        </a>
        <a href="tel:+5535992096898">+55 35 99209-6898</a>
      </div>
    </div>
  );
}
