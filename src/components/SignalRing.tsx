"use client";

import { useEffect, useRef } from "react";

const SIZE = 560;
const BASE_RADIUS = 200;
const PARTICLE_COUNT = 80;

interface Particle {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  opacity: number;
  orbitOffset: number;
}

export default function SignalRing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.scale(dpr, dpr);

    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: BASE_RADIUS + (Math.random() - 0.5) * 40,
      speed: 0.0004 + Math.random() * 0.0008,
      size: 1 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.7,
      orbitOffset: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let animId = 0;

    function render(time: number) {
      const pulse = 0.5 + 0.5 * Math.sin(time * 0.5);

      ctx!.clearRect(0, 0, SIZE, SIZE);

      // Outer glow ring
      const gradient = ctx!.createRadialGradient(
        cx,
        cy,
        BASE_RADIUS - 30,
        cx,
        cy,
        BASE_RADIUS + 60
      );
      gradient.addColorStop(0, "rgba(59, 130, 246, 0)");
      gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.03 + pulse * 0.04})`);
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx!.beginPath();
      ctx!.arc(cx, cy, BASE_RADIUS + 40, 0, Math.PI * 2);
      ctx!.fillStyle = gradient;
      ctx!.fill();

      // Main ring arcs (3 arcs with gaps, rotating)
      for (let i = 0; i < 3; i++) {
        const arcStart = time * (0.15 + i * 0.05) + (i * Math.PI * 2) / 3;
        const arcLength = Math.PI * 0.55 + Math.sin(time * 0.3 + i) * 0.2;

        ctx!.beginPath();
        ctx!.arc(cx, cy, BASE_RADIUS + i * 8 - 8, arcStart, arcStart + arcLength);
        ctx!.strokeStyle = `rgba(79, 139, 255, ${0.25 + pulse * 0.15 - i * 0.06})`;
        ctx!.lineWidth = 1.5 - i * 0.3;
        ctx!.lineCap = "round";
        ctx!.stroke();
      }

      // Pulse sweep (a brighter segment traveling along the ring)
      const sweepAngle = time * 0.4;
      const sweepLength = Math.PI * 0.3;
      const sweepGrad = ctx!.createConicGradient(sweepAngle, cx, cy);
      sweepGrad.addColorStop(0, "rgba(79, 139, 255, 0)");
      sweepGrad.addColorStop(0.03, `rgba(79, 139, 255, ${0.3 + pulse * 0.2})`);
      sweepGrad.addColorStop(0.08, "rgba(79, 139, 255, 0)");
      sweepGrad.addColorStop(1, "rgba(79, 139, 255, 0)");
      ctx!.beginPath();
      ctx!.arc(
        cx,
        cy,
        BASE_RADIUS,
        sweepAngle - sweepLength / 2,
        sweepAngle + sweepLength / 2
      );
      ctx!.strokeStyle = sweepGrad;
      ctx!.lineWidth = 3;
      ctx!.stroke();

      // Inner thin ring
      ctx!.beginPath();
      ctx!.arc(cx, cy, BASE_RADIUS - 25, 0, Math.PI * 2);
      ctx!.strokeStyle = `rgba(99, 102, 241, ${0.08 + pulse * 0.04})`;
      ctx!.lineWidth = 0.5;
      ctx!.stroke();

      // Particles orbiting
      for (const p of particles) {
        p.angle += p.speed;
        const wobble = Math.sin(time * 0.8 + p.orbitOffset) * 6;
        const px = cx + Math.cos(p.angle) * (p.radius + wobble);
        const py = cy + Math.sin(p.angle) * (p.radius + wobble);
        const particleOpacity =
          p.opacity * (0.6 + 0.4 * Math.sin(time + p.orbitOffset));

        ctx!.beginPath();
        ctx!.arc(px, py, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(79, 139, 255, ${particleOpacity})`;
        ctx!.fill();
      }

      // Center subtle glow
      const centerGlow = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 80);
      centerGlow.addColorStop(0, `rgba(59, 130, 246, ${0.06 + pulse * 0.03})`);
      centerGlow.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx!.beginPath();
      ctx!.arc(cx, cy, 80, 0, Math.PI * 2);
      ctx!.fillStyle = centerGlow;
      ctx!.fill();
    }

    function loop() {
      render(frame * 0.016);
      frame++;
      animId = requestAnimationFrame(loop);
    }

    // Reduced motion: render a single static frame, no animation loop.
    if (prefersReduced) {
      render(0);
      return;
    }

    let running = false;
    const start = () => {
      if (!running) {
        running = true;
        animId = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(animId);
    };

    // Only animate while the hero canvas is on screen to save CPU/battery.
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      stop();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-70 lg:opacity-100"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-[560px] h-[560px] max-w-full max-h-full"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
