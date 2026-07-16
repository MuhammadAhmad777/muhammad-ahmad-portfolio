"use client";

import {
  useState,
  useEffect,
  useLayoutEffect,
  useSyncExternalStore,
  type RefObject,
} from "react";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/**
 * Scroll-triggered reveal hook that is hydration-safe.
 * Returns `true` during SSR and the initial hydration pass so server/client
 * markup matches, then applies intersection-based reveal after hydration.
 */
export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  threshold = 0.15
): boolean {
  const isHydrated = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );
  const [visible, setVisible] = useState(false);

  // Synchronously reveal in-view elements before paint to avoid a flash.
  useLayoutEffect(() => {
    if (!isHydrated) return;

    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const { top, bottom } = el.getBoundingClientRect();
    const inView = top < window.innerHeight * 0.92 && bottom > 0;
    if (inView) {
      setVisible(true);
    }
  }, [isHydrated, ref]);

  useEffect(() => {
    if (!isHydrated || visible) return;

    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isHydrated, visible, ref, threshold]);

  return !isHydrated || visible;
}

/** Animated counter that runs when `active` becomes true. */
export function useCountUp(
  target: number,
  active: boolean,
  duration = 1600
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
