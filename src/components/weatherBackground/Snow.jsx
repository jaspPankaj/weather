// Background.jsx
import React, { useMemo } from "react";

export const Snow = () => {
  const snowflakes = useMemo(
    () =>
      [...Array(40)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * -100}%`,
        duration: `${3 + Math.random() * 2}s`,  
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map((flake, i) => (
        <div
          key={i}
          className="absolute bg-blue-100 rounded-full opacity-80"
          style={{
            width: "15px",
            height: "15px",
            left: flake.left,
            top: flake.top,
            animation: `snowFall ${flake.duration} linear infinite`,
          }}
        />
      ))}
    </div>
  );
};
