import type { CSSProperties, ReactNode } from "react";

export const SECTION_COUNT = 5;

/** Direction each section slides in from while it waits behind the active one. */
const ENTRY_AXIS = [null, "y", "x", "y", "x"] as const;

function position(index: number, current: number): CSSProperties {
  if (index === current) {
    return { transform: "translate3d(0,0,0) scale(1)", opacity: 1 };
  }
  if (index > current) {
    return {
      transform:
        ENTRY_AXIS[index] === "y"
          ? "translate3d(0,-100%,0)"
          : "translate3d(-100%,0,0)",
      opacity: 1,
    };
  }
  return { transform: "translate3d(0,0,0) scale(0.92)", opacity: 0.15 };
}

interface SectionProps {
  index: number;
  current: number;
  label: string;
  bodyClassName?: string;
  children: ReactNode;
}

export function Section({
  index,
  current,
  label,
  bodyClassName = "",
  children,
}: Readonly<SectionProps>) {
  const active = index === current;

  return (
    <section
      className={`sec absolute inset-0 will-change-transform transition-[transform,opacity] duration-1000 ease-[cubic-bezier(.77,0,.18,1)] ${
        active ? "is-active" : "pointer-events-none"
      }`}
      aria-label={label}
      aria-hidden={!active}
      // `inert` keeps hidden sections out of the tab order (not typed in React 18).
      {...{ inert: active ? undefined : "" }}
      style={{ zIndex: index + 1, ...position(index, current) }}
    >
      <div className="grid-bg absolute inset-0" />
      {index > 0 && (
        <span
          aria-hidden="true"
          className="ghost-num absolute -bottom-10 right-20 font-display text-[300px] font-extrabold leading-none max-[960px]:hidden"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="sec-inner relative box-border flex h-full flex-col overflow-y-auto py-24 pl-12 pr-28 max-[960px]:px-5 max-[960px]:pb-10">
        <div className={`my-auto w-full ${bodyClassName}`}>{children}</div>
      </div>
    </section>
  );
}

export function Eyebrow({
  number,
  children,
}: Readonly<{ number?: string; children: ReactNode }>) {
  return (
    <div className="flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
      {number && <span>{number}</span>}
      <span className="h-px w-7 bg-accent" />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  desc,
}: Readonly<{
  number: string;
  eyebrow: string;
  title: string;
  desc?: string;
}>) {
  return (
    <div className="rv flex flex-wrap items-end justify-between gap-6">
      <div className="flex flex-col gap-3.5">
        <Eyebrow number={number}>{eyebrow}</Eyebrow>
        <h2 className="font-display text-[44px] font-semibold leading-[1.08] tracking-[-0.02em] max-[960px]:text-[32px]">
          {title}
        </h2>
      </div>
      {desc && (
        <p className="max-w-[440px] text-base leading-relaxed text-muted">
          {desc}
        </p>
      )}
    </div>
  );
}
