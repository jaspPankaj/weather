import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { WiSunrise, WiSunset } from "react-icons/wi";

export default function SunriseSunset({ sunrise, sunset, timezone , currentTime }) {
  // sunrise & sunset: UNIX seconds in UTC (from OpenWeather)
  // timezone: offset in seconds from UTC (e.g., 19800 for IST)

  const [nowUTC, setNowUTC] = useState(Math.floor(Date.now() / 1000));

  // Tick every minute
  useEffect(() => {
    const id = setInterval(() => {
      setNowUTC(Math.floor(Date.now() / 1000)); // Date.now() is UTC-based epoch
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  // --- Sun position math (all in UTC) ---
  const span = Math.max(1, sunset - sunrise); // avoid /0
  const pct = ((nowUTC - sunrise) / span) * 100;
  const clamped = Math.max(0, Math.min(pct, 100));

  // Half-arc coords
  const r = 100;
  const angle = Math.PI * (clamped / 100);   // 0 = left end, π = right end
  const x = 100 - r * Math.cos(angle);
  const y = 100 - r * Math.sin(angle);

  // --- Display formatting ---
  // Add city offset ONCE, then format in UTC so your machine tz doesn't add again
  const fmt = (unix) =>
    new Date((unix + timezone) * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    });

  return (
    <div className="relative w-[200px] h-[110px] mx-auto">
      {/* Arc */}
      <svg viewBox="0 0 200 110" className="absolute top-0 left-0">
        <path
          d="M0,100 A100,100 0 0,1 200,100"
          stroke="orange"
          fill="transparent"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>

      {/* Labels */}
      <span className="absolute left-3 bottom-0 text-xs text-primary flex justify-center items-center gap-1">
        <WiSunrise  className="w-6 h-6 text-blue-400"/>{fmt(sunrise)}
      </span>
      <span className="absolute right-3 bottom-0 text-xs text-primary flex justify-center items-center gap-1">
        <WiSunset className="w-6 h-6 text-yellow-400" />{fmt(sunset)}
      </span>

      <span className="absolute right-18 bottom-10 text-xs text-primary flex justify-center items-center gap-1">
        <FaClock />{currentTime}
      </span>

      {/* Sun marker */}
      <WiDaySunny
        className="absolute text-yellow-400 transition-all duration-700 ease-linear"
        size={24}
        style={{ left: `${x - 12}px`, top: `${y - 12}px` }}
        title={currentTime}
      />
      
    </div>
  );
}
