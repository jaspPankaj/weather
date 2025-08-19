import { useEffect, useRef } from "react";

export default function SnowBackground({ 
  density = 1, 
  windSpeed = 1, 
  windDir = 90, 
  isDay = true 
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let flakes = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      seedFlakes();
    };

    const seedFlakes = () => {
      flakes = [];
      const area = window.innerWidth * window.innerHeight;
      const count = Math.floor((area / 6000) * density); // fewer than raindrops
      for (let i = 0; i < count; i++) {
        flakes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: 1 + Math.random() * 3, // flake radius
          speed: 0.5 + Math.random() * 1.5, // fall speed
          sway: Math.random() * 100, // random phase for horizontal sway
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background colors
      const bgColor = isDay ? "#eaf6ff" : "#00111a";
      const flakeColor = isDay ? "#ffffff" : "#e0f7fa";

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = flakeColor;

      // wind vector
      const angle = (windDir * Math.PI) / 180;
      const dx = Math.cos(angle) * windSpeed;

      for (let flake of flakes) {
        // sway effect using sine wave
        const swayX = Math.sin(flake.y / 30 + flake.sway) * 1.5;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fill();

        flake.x += dx * 0.2 + swayX * 0.05;
        flake.y += flake.speed;

        if (
          flake.y > window.innerHeight + 5 ||
          flake.x > window.innerWidth + 5 ||
          flake.x < -5
        ) {
          flake.x = Math.random() * window.innerWidth;
          flake.y = -10;
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
      className="fixed inset-0 z-[-1]"
    />
  );
}
