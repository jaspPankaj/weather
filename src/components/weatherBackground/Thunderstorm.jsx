import React, { useMemo } from "react";

export const Thunderstorm = () => {
  const clouds = useMemo(
    () =>
      [...Array(6)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 80}%`,
        duration: `${20 + Math.random() * 10}s`,
        size: `${80 + Math.random() * 150}px`,
        delay: `${Math.random() * 5}s`,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gray-900">
      {/* Storm Clouds */}
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="absolute bg-gray-700 rounded-full blur-3xl opacity-70"
          style={{
            width: cloud.size,
            height: cloud.size,
            left: cloud.left,
            top: cloud.top,
            animation: `cloudDrift ${cloud.duration} linear ${cloud.delay} infinite`,
          }}
        />
      ))}

      {/* Lightning Flash Layer */}
      <div className="absolute inset-0 lightning-flash"></div>
    </div>
  );
};
