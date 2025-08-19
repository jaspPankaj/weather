import { useEffect, useRef } from "react";

export default function RainBackground({ 
  density = 1, 
  windSpeed = 2, 
  windDir = 90, 
  isDay = true 
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let drops = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      seedDrops();
    };

    const seedDrops = () => {
      drops = [];
      const area = window.innerWidth * window.innerHeight;
      const count = Math.floor((area / 2000) * density); 
      for (let i = 0; i < count; i++) {
        drops.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          len: 10 + Math.random() * 15,
          speed: 2 + Math.random() * 4,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🌞 Day: light blue bg + darker drops
      // 🌙 Night: dark bg + white drops
      
      const dropColor = isDay ? "#03bafc" : "#fff";

      
      

      ctx.strokeStyle = dropColor;
      ctx.lineWidth = 1;

      // wind vector
      const angle = (windDir * Math.PI) / 180;
      const dx = Math.cos(angle) * windSpeed;
      const dy = Math.sin(angle) * windSpeed;

      for (let drop of drops) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + dx, drop.y + dy + drop.len);
        ctx.stroke();

        drop.x += dx * 0.5;
        drop.y += dy + drop.speed;

        if (
          drop.y > window.innerHeight + 20 ||
          drop.x > window.innerWidth + 20 ||
          drop.x < -20
        ) {
          drop.x = Math.random() * window.innerWidth;
          drop.y = -20;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [density, windSpeed, windDir, isDay]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-1 bg-transparent"
    />
  );
}
