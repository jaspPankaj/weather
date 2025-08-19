import React, { useMemo } from "react";

export const Rain = () => {
  const raindrops = useMemo(
    () =>
      [...Array(80)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * -100}%`,
        duration: `${1 + Math.random() * 0.5}s`, // faster than snow
        delay: `${Math.random() * 2}s`,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-cardBackground">
      {raindrops.map((drop, i) => (
        <div
          key={i}
          className="absolute bg-blue-300 rounded-full opacity-70"
          style={{
            width: "20px",
            height: "25px",
            left: drop.left,
            top: drop.top,
            animation: `rainFall ${drop.duration} linear ${drop.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
};
