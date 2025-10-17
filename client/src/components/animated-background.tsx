import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: 'circuit' | 'chess' | 'network';
  icon?: string;
  pulsePhase?: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const initNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      const chessIcons = ['♔', '♕', '♖', '♗', '♘', '♙'];
      const circuitIcons = ['⚡', '⊕', '⊗', '◈', '◉', '⬡'];
      
      for (let i = 0; i < nodeCount; i++) {
        const type = Math.random() < 0.25 ? 'chess' : Math.random() < 0.6 ? 'circuit' : 'network';
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: type === 'chess' ? 8 : type === 'circuit' ? 4 : 3,
          type,
          icon: type === 'chess' ? chessIcons[Math.floor(Math.random() * chessIcons.length)] : 
                type === 'circuit' ? circuitIcons[Math.floor(Math.random() * circuitIcons.length)] : undefined,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
      nodesRef.current = nodes;
    };
    initNodes();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Mouse interaction - attract nodes
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          node.x += dx * force * 0.02;
          node.y += dy * force * 0.02;
        }

        // Draw connections to nearby nodes
        nodes.slice(i + 1).forEach(otherNode => {
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            
            // Circuit-style connections
            if (node.type === 'circuit' && otherNode.type === 'circuit') {
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
              ctx.lineWidth = 2;
            } else if (node.type === 'chess' && otherNode.type === 'chess') {
              ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
              ctx.lineWidth = 1.5;
            } else {
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
              ctx.lineWidth = 1;
            }

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Mouse connection - bright connection line
        const mouseDist = Math.sqrt((mouse.x - node.x) ** 2 + (mouse.y - node.y) ** 2);
        if (mouseDist < 150) {
          const opacity = (1 - mouseDist / 150) * 0.8;
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Glow effect at mouse
          const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 30);
          gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          ctx.fillStyle = gradient;
          ctx.fillRect(mouse.x - 30, mouse.y - 30, 60, 60);
        }

        // Pulse effect
        node.pulsePhase = (node.pulsePhase || 0) + 0.05;
        const pulseScale = 1 + Math.sin(node.pulsePhase) * 0.2;

        // Draw node
        if (node.type === 'chess' || node.type === 'circuit') {
          // Draw icon with pulse
          ctx.save();
          ctx.translate(node.x, node.y);
          ctx.scale(pulseScale, pulseScale);
          ctx.font = `${node.radius * 2}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          if (node.type === 'chess') {
            const alpha = 0.6 + Math.sin(node.pulsePhase) * 0.2;
            ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
          } else {
            const alpha = 0.6 + Math.sin(node.pulsePhase) * 0.2;
            ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`;
          }
          
          ctx.fillText(node.icon || '', 0, 0);
          ctx.restore();

          // Add glow for icons
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
          if (node.type === 'chess') {
            gradient.addColorStop(0, 'rgba(168, 85, 247, 0.2)');
            gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
          } else {
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
            gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
          }
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw network node with pulse
          const radiusWithPulse = node.radius * pulseScale;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radiusWithPulse, 0, Math.PI * 2);
          const alpha = 0.5 + Math.sin(node.pulsePhase) * 0.1;
          ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.fill();

          // Glow effect
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw circuit board grid lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 100) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 100) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
