"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  delta: number;
  speedX: number;
  speedY: number;
  layer: number;
  shapeShift: boolean;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

const DISABLED_PATHS = ["/resume"];

export function MouseStardust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const pathname = usePathname();
  const disabled = DISABLED_PATHS.some((p) => pathname?.startsWith(p));

  useEffect(() => {
    if (reduced || disabled) return;

    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = [];
    const shockwaves: Shockwave[] = [];
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let rafId = 0;

    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        delta: Math.random() * 0.012,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        layer: Math.random() * 3 + 1,
        shapeShift: Math.random() > 0.92,
      });
    }

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onClick = (e: MouseEvent) => {
      shockwaves.push({ x: e.clientX, y: e.clientY, radius: 10, alpha: 0.6 });
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Clip drawing to sections marked with data-stardust
      const stardustSections = document.querySelectorAll("[data-stardust]");
      ctx.save();
      ctx.beginPath();
      for (const el of stardustSections) {
        const r = el.getBoundingClientRect();
        ctx.rect(r.left, r.top, r.width, r.height);
      }
      ctx.clip();

      // Stars with mouse parallax
      for (const star of stars) {
        star.alpha += star.delta;
        if (star.alpha >= 1 || star.alpha <= 0) star.delta *= -1;

        const dx = (mouseX - canvas.width / 2) * 0.0008 * star.layer;
        const dy = (mouseY - canvas.height / 2) * 0.0008 * star.layer;

        star.x += star.speedX + dx;
        star.y += star.speedY + dy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255,255,255,0.9)";

        if (star.shapeShift) {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y - star.radius);
          ctx.lineTo(star.x + star.radius * 0.6, star.y + star.radius * 0.6);
          ctx.lineTo(star.x - star.radius * 0.6, star.y + star.radius * 0.6);
          ctx.closePath();
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }

        ctx.shadowBlur = 0;
      }

      // Shockwaves on click
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const wave = shockwaves[i];
        wave.radius += 4;
        wave.alpha -= 0.018;

        if (wave.alpha <= 0) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = wave.alpha;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,1)";
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "white";
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
    };
  }, [reduced, disabled]);

  if (reduced || disabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
      aria-hidden="true"
    />
  );
}
