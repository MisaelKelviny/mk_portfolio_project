import { useCallback, useEffect, useRef, useState } from "react";
import type { TouchEvent, WheelEvent } from "react";

const LOCK_MS = 1050;
const WHEEL_BURST_MS = 160;
const WHEEL_BURST_LOCK_MS = 2500;
const SWIPE_LOCK_MS = 900;
const SWIPE_MIN_PX = 50;

type Direction = 1 | -1;
/** Where a touch gesture started inside the section's own scroll area. */
type StartEdge = "free" | "top" | "bottom" | "middle";

/** Inner scroll area of the section under `target`, if it overflows. */
function scrollableAncestor(target: EventTarget | null) {
  const el = (target as HTMLElement | null)?.closest?.(".sec-inner");
  return el && el.scrollHeight > el.clientHeight + 1 ? el : null;
}

/** Whether `el` can't scroll any further towards `direction` (1 = down). */
function atEdge(el: Element, direction: Direction) {
  return direction > 0
    ? el.scrollTop + el.clientHeight >= el.scrollHeight - 1
    : el.scrollTop <= 0;
}

function startEdge(target: EventTarget | null): StartEdge {
  const inner = scrollableAncestor(target);
  if (!inner) return "free";
  if (atEdge(inner, -1)) return "top";
  if (atEdge(inner, 1)) return "bottom";
  return "middle";
}

/**
 * Full-page slider driven by wheel, swipe and keyboard. Sections taller than
 * the viewport scroll internally first and only hand over to the next section
 * once their edge is reached.
 */
export function useSectionNavigation(count: number) {
  const [index, setIndex] = useState(0);
  const current = useRef(0);
  const lastMove = useRef(0);
  const lastWheel = useRef(0);
  const touch = useRef<{ x: number; y: number; edge: StartEdge } | null>(null);

  const go = useCallback(
    (n: number) => {
      const next = Math.max(0, Math.min(count - 1, n));
      if (next === current.current) return;
      current.current = next;
      lastMove.current = Date.now();
      setIndex(next);
    },
    [count]
  );

  const onWheel = (e: WheelEvent) => {
    const now = Date.now();
    const gap = now - lastWheel.current;
    lastWheel.current = now;

    const d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(d) < 6) return;

    const direction: Direction = d > 0 ? 1 : -1;
    const inner = scrollableAncestor(e.target);
    if (inner && !atEdge(inner, direction)) return;

    if (now - lastMove.current < LOCK_MS) return;
    if (gap < WHEEL_BURST_MS && now - lastMove.current < WHEEL_BURST_LOCK_MS) {
      return;
    }
    go(current.current + direction);
  };

  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    if (t) touch.current = { x: t.clientX, y: t.clientY, edge: startEdge(e.target) };
  };

  const onTouchEnd = (e: TouchEvent) => {
    const t = e.changedTouches[0];
    const start = touch.current;
    touch.current = null;
    if (!t || !start) return;

    const dx = start.x - t.clientX;
    const dy = start.y - t.clientY;
    const d = Math.abs(dy) >= Math.abs(dx) ? dy : dx;
    if (Math.abs(d) < SWIPE_MIN_PX) return;
    if (Date.now() - lastMove.current < SWIPE_LOCK_MS) return;

    const direction: Direction = d > 0 ? 1 : -1;
    const allowed =
      start.edge === "free" ||
      (start.edge === "top" && direction < 0) ||
      (start.edge === "bottom" && direction > 0);
    if (allowed) go(current.current + direction);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") go(current.current + 1);
      else if (e.key === "ArrowUp" || e.key === "PageUp") go(current.current - 1);
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(count - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, count]);

  return { index, go, onWheel, onTouchStart, onTouchEnd };
}
