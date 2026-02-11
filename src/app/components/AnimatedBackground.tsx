"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

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
        p.background("#262626");
        p.stroke(255, 255, 255, 127); // White with 50% opacity
        p.strokeWeight(1);
        p.noFill();

        t += Math.PI / 20;

        for (let i = 0; i < 10000; i++) {
          let x = i % 200;
          let y = i / 43;

          let k = 5 * p.cos(x / 14) * p.cos(y / 30);
          let e = y / 8 - 13;
          let mag_ke = p.sqrt(k * k + e * e);
          let d = (mag_ke * mag_ke) / 59 + 4;

          let atan_val = p.atan2(k, e);
          let q =
            60 -
            3 * p.sin(atan_val * e) +
            k * (3 + (4 / d) * p.sin(d * d - t * 2));
          let c = d / 2 + e / 99 - t / 18;

          // Scale to fill the entire canvas
          let px = (q * p.sin(c) + 200) * scaleX;
          let py = ((q + d * 9) * p.cos(c) + 200) * scaleY;

          p.point(px, py);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        updateScale();
      };
    };

    p5Instance.current = new p5(sketch, containerRef.current);

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
      }}
    />
  );
}
