import React, { useMemo } from "react";

export const Mist = () => {
  const mistLayers = useMemo(
    () =>
      [...Array(6)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${30 + Math.random() * 20}s`,
        size: `${200 + Math.random() * 300}px`,
        delay: `${Math.random() * 10}s`,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gray-200">
      {mistLayers.map((mist, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-40 blur-3xl rounded-full"
          style={{
            width: mist.size,
            height: mist.size,
            left: mist.left,
            top: mist.top,
            animation: `mistDrift ${mist.duration} linear ${mist.delay} infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};
