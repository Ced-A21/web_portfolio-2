"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import { useTheme } from "../context/ThemeContext";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    if (!containerRef.current) return;

    let t = 0;
    let scaleX = 1;
    let scaleY = 1;

    const sketch = (p: p5) => {
      const updateScale = () => {
        scaleX = p.windowWidth / 400;
        scaleY = p.windowHeight / 400;
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        updateScale();
      };

      p.draw = () => {
        p.clear();
        if (isDarkRef.current) {
          p.stroke(255, 255, 255, 127);
        } else {
          p.stroke(80, 80, 80, 100);
        }
        p.strokeWeight(1);
        p.noFill();

        t += Math.PI / 20;

        for (let i = 0; i < 10000; i++) {
          const x = i % 200;
          const y = i / 43;

          const k = 5 * p.cos(x / 14) * p.cos(y / 30);
          const e = y / 8 - 13;
          const mag_ke = p.sqrt(k * k + e * e);
          const d = (mag_ke * mag_ke) / 59 + 4;

          const atan_val = p.atan2(k, e);
          const q =
            60 -
            3 * p.sin(atan_val * e) +
            k * (3 + (4 / d) * p.sin(d * d - t * 2));
          const c = d / 2 + e / 99 - t / 18;

          const px = (q * p.sin(c) + 200) * scaleX;
          const py = ((q + d * 9) * p.cos(c) + 200) * scaleY;

          p.point(px, py);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        updateScale();
      };
    };

    import("p5").then((p5Module) => {
      const p5 = p5Module.default;
      p5Instance.current = new p5(sketch, containerRef.current!);
    });

    return () => {
      p5Instance.current?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        animation: "fadeIn 7s ease-in forwards",
      }}
    />
  );
}
