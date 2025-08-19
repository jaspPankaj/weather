import { useEffect, useRef } from "react";
import { WiCloud, WiDayCloudy, WiCloudy } from "react-icons/wi"; // multiple cloud icons

export default function CloudBackground({ density = 12, wind = 0.4 }) {
  const containerRef = useRef(null);

  // List of cloud icons
  const cloudIcons = [WiCloud, WiDayCloudy, WiCloudy];

  useEffect(() => {
    const clouds = containerRef.current.querySelectorAll(".cloud");

    const move = () => {
      clouds.forEach((cloud) => {
        let x = parseFloat(cloud.dataset.x) + wind;
        if (x > window.innerWidth + 150) x = -150; // wrap around
        cloud.dataset.x = x;
        cloud.style.transform = `translate(${x}px, ${cloud.dataset.y}px)`;
      });
      requestAnimationFrame(move);
    };

    move();
  }, [wind]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-1 bg-transparent" // ✅ sits above background
    >
      {Array.from({ length: density }).map((_, i) => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight - 200); // keep near top
        const size = 60 + Math.random() * 100; // random size
        const Icon = cloudIcons[Math.floor(Math.random() * cloudIcons.length)];

        return (
          <Icon
            key={i}
            className="cloud absolute text-white opacity-80" // ✅ semi-transparent clouds
            style={{ transform: `translate(${x}px, ${y}px)` }}
            size={size}
            data-x={x}
            data-y={y}
          />
        );
      })}
    </div>
  );
}
