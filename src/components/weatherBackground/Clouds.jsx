import React, { useMemo } from "react";

export const Clouds = () => {
  const clouds = useMemo(
    () =>
      [...Array(8)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 80}%`, // keep within view
        duration: `${120 + Math.random() * 10}s`, // slow drift
        size: `${180 + Math.random() * 120}px`, // varied cloud sizes
        delay: `${Math.random() * 5}s`,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="absolute bg-blue-300/40 rounded-full opacity-70 blur-lg"
          style={{
            width: cloud.size,
            height: cloud.size,
            left: cloud.left,
            top: cloud.top,
            animation: `cloudDrift ${cloud.duration} linear ${cloud.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
};
