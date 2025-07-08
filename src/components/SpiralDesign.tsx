
import { useEffect, useRef } from 'react';

export const SpiralDesign = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    let animationId: number;
    let time = 0;

    const drawSpiral = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Main spiral
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(201, 242, 153, 0.6)';
      ctx.lineWidth = 2;
      
      let radius = 5;
      let angle = time * 0.02;
      
      ctx.moveTo(centerX, centerY);
      
      for (let i = 0; i < 200; i++) {
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        ctx.lineTo(x, y);
        
        angle += 0.1;
        radius += 0.8;
      }
      
      ctx.stroke();
      
      // Secondary spiral (counter-rotating)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(201, 242, 153, 0.3)';
      ctx.lineWidth = 1;
      
      radius = 3;
      angle = -time * 0.03;
      
      ctx.moveTo(centerX, centerY);
      
      for (let i = 0; i < 150; i++) {
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        ctx.lineTo(x, y);
        
        angle += 0.15;
        radius += 0.6;
      }
      
      ctx.stroke();
      
      // Animated dots along the spiral
      for (let i = 0; i < 8; i++) {
        const dotAngle = (time * 0.05) + (i * Math.PI / 4);
        const dotRadius = 30 + (i * 15);
        const x = centerX + Math.cos(dotAngle) * dotRadius;
        const y = centerY + Math.sin(dotAngle) * dotRadius;
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(201, 242, 153, ${0.8 - (i * 0.1)})`;
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      time += 1;
      animationId = requestAnimationFrame(drawSpiral);
    };

    drawSpiral();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`${className}`}
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};
