export const WeatherBackground = ({ weatherType, dayOrNight,className }) => {
  const Backgrounds = {
    // Thunderstorm
    "thunderstorm with light rain": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with rain": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with heavy rain": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "light thunderstorm": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    thunderstorm: (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy thunderstorm": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "ragged thunderstorm": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with light drizzle": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with drizzle": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with heavy drizzle": (
      <img src={`/weather/weather-background/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Drizzle
    "light intensity drizzle": (
      <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    drizzle: <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />,
    "heavy intensity drizzle": (
      <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "light intensity drizzle rain": (
      <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "drizzle rain": (
      <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy intensity drizzle rain": (
      <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "shower rain and drizzle": (
      <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy shower rain and drizzle": (
      <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "shower drizzle": (
      <img src={`/weather/weather-background/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Rain
    "light rain": <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />,
    "moderate rain": (
      <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy intensity rain": (
      <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "very heavy rain": (
      <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "extreme rain": (
      <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "freezing rain": (
      <img src={`/weather/weather-background/freezing-Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "light intensity shower rain": (
      <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "shower rain": (
      <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy intensity shower rain": (
      <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "ragged shower rain": (
      <img src={`/weather/weather-background/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Snow
    "light snow": (
      <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),
    snow: <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />,
    "heavy snow": <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />,
    sleet: <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />,
    "light shower sleet": <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />,
    "shower sleet": <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />,
    "light rain and snow": (
      <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "rain and snow": (
      <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "light shower snow": (
      <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "shower snow": (
      <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy shower snow": (
      <img src={`/weather/weather-background/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Atmosphere
    mist: <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />,
    smoke: <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />,
    haze: <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />,
    "sand/dust whirls": (
      <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />
    ),
    fog: <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />,
    sand: <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />,
    dust: <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />,
    "volcanic ash": (
      <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />
    ),
    squalls: <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />,
    tornado: <img src={`/weather/weather-background/mist-${dayOrNight}.png`} alt="" className={className}  />,

    // Clear
    "clear sky": (
      <img src={`/weather/weather-background/clear-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Clouds
    "few clouds": (
      <img src={`/weather/weather-background/Clouds-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "scattered clouds": (
      <img src={`/weather/weather-background/scatteredclouds-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "broken clouds": (
      <img src={`/weather/weather-background/brokenclouds-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "overcast clouds": (
      <img src={`/weather/weather-background/brokenclouds-${dayOrNight}.png`} alt="" className={className}  />
    ),
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {Backgrounds[weatherType] || (
        <img
          src="/weather/weather-background/default.png"
          alt="default"
          className="w-full h-full object-cover blur-sm"
        />
      )}
    </div>
  );
};
