import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glow: number;
}

/** Animated node-and-link background rendered onto a fixed full-screen canvas. */
export function NeuralBackground(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let frameId = 0;
    let resizeTimer: number | undefined;

    const init = (): void => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const nodeCount = Math.floor((width * height) / 12000);

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        glow: Math.random() * 0.6 + 0.3,
      }));
    };

    const draw = (): void => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${0.25 + node.glow})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#3b82f6";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (!a || !b) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.35})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    const handleResize = (): void => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(init, 200);
    };

    init();
    if (prefersReduced) {
      draw();
      cancelAnimationFrame(frameId);
    } else {
      draw();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(resizeTimer);
    };
  }, []);

  return <canvas id="neural-bg" ref={canvasRef} aria-hidden="true" />;
}
