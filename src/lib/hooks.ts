"use client";

import {
  useState,
  useEffect,
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
 * Bidirectional scroll visibility via IntersectionObserver.
 * Becomes true when the element enters the viewport and false when it leaves,
 * so entrance animations can replay on every scroll up/down.
 */
export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  threshold = 0.12,
  instant = false
): boolean {
  const isHydrated = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );
  const [visible, setVisible] = useState(instant);

  useEffect(() => {
    if (!isHydrated || instant) {
      if (instant) setVisible(true);
      return;
    }

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
        setVisible(entry.isIntersecting);
      },
      {
        threshold,
        // Leave a band so leave/enter feels intentional, not flickery.
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isHydrated, ref, threshold, instant]);

  // SSR / first paint: show content to avoid blank flash; then observe.
  return !isHydrated || visible;
}

/** Alias — same bidirectional behavior as useScrollReveal. */
export function useInViewToggle(
  ref: RefObject<HTMLElement | null>,
  threshold = 0.3
): boolean {
  return useScrollReveal(ref, threshold);
}

/** Animated counter that runs when `active` becomes true; resets when false. */
export function useCountUp(
  target: number,
  active: boolean,
  duration = 1600
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

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
