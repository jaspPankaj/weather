import { useEffect, useRef } from "react";

export default function CloudBackground({
  density = 1, 
  windSpeed = 0.3, 
  windDir = 0, // 0 = left->right
  isDay = true
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let clouds = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      seedClouds();
    };

    const seedClouds = () => {
      clouds = [];
      const count = Math.floor(10 * density); // number of clouds
      for (let i = 0; i < count; i++) {
        clouds.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight / 2), // top half only
          size: 80 + Math.random() * 150,
          speed: windSpeed * (0.5 + Math.random()), // varied speed
          opacity: 0.3 + Math.random() * 0.4,
          puffCount: 3 + Math.floor(Math.random() * 4) // number of puffs per cloud
        });
      }
    };

    const drawCloud = (cloud) => {
      ctx.globalAlpha = cloud.opacity;

      for (let i = 0; i < cloud.puffCount; i++) {
        const offsetX = (i - cloud.puffCount / 2) * (cloud.size / 2);
        const offsetY = Math.sin(i) * 10;

        const gradient = ctx.createRadialGradient(
          cloud.x + offsetX, cloud.y + offsetY, cloud.size * 0.2,
          cloud.x + offsetX, cloud.y + offsetY, cloud.size
        );
        gradient.addColorStop(0, isDay ? "rgba(255,255,255,0.9)" : "rgba(200,200,200,0.8)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cloud.x + offsetX, cloud.y + offsetY, cloud.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const draw = () => {
      const bgColor = isDay ? "#87CEEB" : "#001a33"; // sky color
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const angle = (windDir * Math.PI) / 180;
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);

      for (let cloud of clouds) {
        drawCloud(cloud);
        cloud.x += dx * cloud.speed;
        cloud.y += dy * cloud.speed * 0.2;

        if (cloud.x > window.innerWidth + 200) cloud.x = -200;
        if (cloud.x < -200) cloud.x = window.innerWidth + 200;
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
