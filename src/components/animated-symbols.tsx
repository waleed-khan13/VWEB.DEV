
"use client";

import { useState, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isBubble?: boolean;
  alpha: number;
}

const PARTICLE_COUNT = 70;
const BUBBLE_COUNT = 15;
const MAX_LINK_DISTANCE = 200;

export function AnimatedSymbols() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);
  const particles = useRef<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const container = containerRef.current;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      particles.current = [];
      // Initialize small particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
      
      // Initialize larger "bubble" particles
      for (let i = 0; i < BUBBLE_COUNT; i++) {
        particles.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          radius: Math.random() * 15 + 10,
          isBubble: true,
          alpha: Math.random() * 0.05 + 0.02,
        });
      }
    };
    
    setCanvasSize();

    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(container);

    let animationFrameId: number;
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
        const rect = container.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();

        particles.current.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -p.radius) p.x = rect.width + p.radius;
            if (p.x > rect.width + p.radius) p.x = -p.radius;
            if (p.y < -p.radius) p.y = rect.height + p.radius;
            if (p.y > rect.height + p.radius) p.y = -p.radius;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${primaryColor}, ${p.alpha})`;
            if (p.isBubble) {
                 ctx.fillStyle = `hsla(${primaryColor}, ${p.alpha})`;
            } else {
                 ctx.fillStyle = `hsla(${primaryColor}, ${p.alpha * 1.5})`;
            }
            ctx.fill();

            // Draw lines to nearby particles
            for (let j = i + 1; j < particles.current.length; j++) {
                const other = particles.current[j];
                if (p.isBubble || other.isBubble) continue;

                const dist = Math.hypot(p.x - other.x, p.y - other.y);
                if (dist < MAX_LINK_DISTANCE) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `hsla(${primaryColor}, ${1 - dist / MAX_LINK_DISTANCE * 0.5})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
             // Draw lines to mouse
            const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (!p.isBubble && distToMouse < MAX_LINK_DISTANCE * 1.5) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `hsla(${primaryColor}, ${1 - distToMouse / (MAX_LINK_DISTANCE * 1.5)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        });

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isClient]);
  

  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none bg-background/50"
    >
        <canvas ref={canvasRef} />
    </div>
  );
}
