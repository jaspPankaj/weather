export const Icons = ({ description, dayOrNight ,className}) => {
  // Mapping of weather description to icon components
  const iconMap = {
    // Thunderstorm
    "thunderstorm with light rain": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with rain": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with heavy rain": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "light thunderstorm": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    thunderstorm: (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy thunderstorm": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "ragged thunderstorm": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with light drizzle": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with drizzle": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "thunderstorm with heavy drizzle": (
      <img src={`/weather/weather-icons/thunderstorm-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Drizzle
    "light intensity drizzle": (
      <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    drizzle: <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />,
    "heavy intensity drizzle": (
      <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "light intensity drizzle rain": (
      <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "drizzle rain": (
      <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy intensity drizzle rain": (
      <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "shower rain and drizzle": (
      <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy shower rain and drizzle": (
      <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "shower drizzle": (
      <img src={`/weather/weather-icons/Drizzle-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Rain
    "light rain": <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />,
    "moderate rain": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy intensity rain": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "very heavy rain": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "extreme rain": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "freezing rain": (
      <img src={`/weather/weather-icons/freezing-Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "light intensity shower rain": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "shower rain": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy intensity shower rain": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "ragged shower rain": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Snow
    "light snow": (
      <img src={`/weather/weather-icons/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),
    snow: <img src={`/weather/weather-icons/Snow-${dayOrNight}.png`} alt="" className={className}  />,
    "heavy snow": <img src={`/weather/weather-icons/Snow-${dayOrNight}.png`} alt="" className={className}  />,
    sleet: <img src="/weather/weather-icons/sleet.png" alt="" className={className}  />,
    "light shower sleet": <img src="/weather/weather-icons/sleet.png" alt="" className={className}  />,
    "shower sleet": <img src="/weather/weather-icons/sleet.png" alt="" className={className}  />,
    "light rain and snow": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "rain and snow": (
      <img src={`/weather/weather-icons/Rain-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "light shower snow": (
      <img src={`/weather/weather-icons/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "shower snow": (
      <img src={`/weather/weather-icons/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "heavy shower snow": (
      <img src={`/weather/weather-icons/Snow-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Atmosphere
    mist: <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />,
    smoke: <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />,
    haze: <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />,
    "sand/dust whirls": (
      <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />
    ),
    fog: <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />,
    sand: <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />,
    dust: <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />,
    "volcanic ash": (
      <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />
    ),
    squalls: <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />,
    tornado: <img src={`/weather/weather-icons/mist-${dayOrNight}.png`} alt="" className={className}  />,

    // Clear
    "clear sky": (
      <img src={`/weather/weather-icons/clear-${dayOrNight}.png`} alt="" className={className}  />
    ),

    // Clouds
    "few clouds": (
      <img src={`/weather/weather-icons/Clouds-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "scattered clouds": (
      <img src={`/weather/weather-icons/scatteredclouds-${dayOrNight}.png`} alt="" className={className}  />
    ),
    "broken clouds": (
      <img src="/weather/weather-icons/brokenclouds.png" alt="" className={className}  />
    ),
    "overcast clouds": (
      <img src="/weather/weather-icons/brokenclouds.png" alt="" className={className}  />
    ),
  };

  return (
    <div className="flex justify-center">
      {iconMap[description] || (
        <img
          src={`/weather/weather-icons/default-${dayOrNight}.png`}
          alt="default"
          className={className}
        />
      )}
    </div>
  );
};
