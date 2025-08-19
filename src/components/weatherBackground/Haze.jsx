

export const Haze = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-b from-sky-400 to-sky-200">
      {/* Sun */}
      <div
        className="absolute rounded-full bg-yellow-300 sun"
        style={{
          width: "120px",
          height: "120px",
          top: "40px",
          right: "60px",
        }}
      >
        {/* Rays container */}
        <div className="sun-rays">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="ray"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-70px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
