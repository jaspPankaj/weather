import { FaLocationArrow } from "react-icons/fa";

function WindDirection({ deg }) {
  // Map deg to full direction
  const directions = [
    "North",
    "North-Northeast",
    "Northeast",
    "East-Northeast",
    "East",
    "East-Southeast",
    "Southeast",
    "South-Southeast",
    "South",
    "South-Southwest",
    "Southwest",
    "West-Southwest",
    "West",
    "West-Northwest",
    "Northwest",
    "North-Northwest",
  ];

  const index = Math.round(deg / 22.5) % 16;
  const directionName = directions[index];

  return (
    <div className="flex items-center gap-4">
      <div
        className="flex items-center justify-center bg-secondary rounded-full w-16 h-16"
        style={{
          transform: `rotate(${deg}deg)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <FaLocationArrow size={28} className="text-primary" />
      </div>

      {/* Direction text */}
      <p className="text-lg font-semibold text-primary">{directionName}</p>
    </div>
  );
}

export default WindDirection;
