import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  angle: number;
  oscillateSpeed: number;
  baseSize: number;
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const animationFrameId = useRef<number>();
  const { theme } = useTheme();

  // Cyberpunk / Neon Palette (Dark Mode)
  const colors = [
    'hsl(263, 80%, 65%)', // Purple
    'hsl(189, 94%, 43%)', // Cyan
    'hsl(320, 100%, 60%)', // Pink
    'hsl(210, 100%, 70%)', // Blue
  ];


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000); // 1.5x density

      for (let i = 0; i < particleCount; i++) {
        const baseSize = Math.random() * 2 + 1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: baseSize,
          baseSize: baseSize,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
          oscillateSpeed: Math.random() * 0.05 + 0.02
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear with trail effect
      ctx.fillStyle = theme === 'dark' ? 'rgba(10, 10, 15, 0.15)' : 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        // Natural movement
        p.x += p.vx;
        p.y += p.vy;

        // Mouse interaction (Repulsion/Attraction)
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const forceRadius = 250;

          if (dist < forceRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (forceRadius - dist) / forceRadius;
            const push = force * 2; // Strength

            p.x -= Math.cos(angle) * push;
            p.y -= Math.sin(angle) * push;
          }
        }

        // Pulse size
        p.angle += p.oscillateSpeed;
        p.size = p.baseSize + Math.sin(p.angle) * 0.5;

        // Bounce wrap
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Draw connections
        particlesRef.current.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const connectDist = 120;

          if (dist < connectDist) {
            ctx.beginPath();
            const opacity = 1 - (dist / connectDist);
            ctx.globalAlpha = opacity * 0.5;
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = p.color; // Gradient line relying on source particle
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    }

    initParticles();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'fixed top-0 left-0 w-full h-full pointer-events-none z-0',
        'opacity-40 dark:opacity-30 transition-opacity duration-500' // Increased opacity for "Cooler" impact
      )}
    />
  );
}

