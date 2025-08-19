import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { WiThermometer } from "react-icons/wi";
import SunriseSunset from "./SunriseSunset";
import { Icons } from "./weatherBackground/Icons";
import WindDirection from "./WindDirection";
import RainBackground from "../RainBackground";
import CloudBackground from "../CloudBackground";
import { WiStrongWind } from "react-icons/wi";
import { FaWind, FaTint, FaEye ,FaClock } from "react-icons/fa";
import { WeatherBackground } from "./WeatherBackground";
import SnowBackground from "./SnowBackground";

export const WeatherInfo = () => {
  //make a variable to use input currentWeather
  const inputRef = useRef();

  //Declare variable To Store Weather Data
  const [weatherData, setWeatherData] = useState(null);

  const [isDayOrNight, setIsDayOrNight] = useState(false);

  //declare a variable to store today date
  const [todayDate, setTodayDate] = useState("");

  //declare a variable for 5 days forecast currentWeather
  const [forecastData, setForecastData] = useState([]);

  //make a function that search currentWeather by city name
  const search = async (city) => {
    apiCallFunction(city, null, null);
  };

  //make a function to fetch currentWeather by using user location
  const searchByLocation = async (lat, lon) => {
    apiCallFunction(null, lat, lon);
  };

  const apiCallFunction = async (city, lat, lon) => {
    try {
      const api_key = import.meta.env.VITE_API_ID;

      let forecastUrl;

      if (city != null) {
        forecastUrl = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`
        );
      } else {
        forecastUrl = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
        );
      }

      const fiveDayWeather = await forecastUrl.json();

      //call update weather function and give it json currentWeather
      updateWeather(fiveDayWeather);
    } catch (error) {
      console.error("Fetching Error :", error);
    }
  };

  // Current local time of the city using OpenWeather's `city.timezone` (seconds)
function getCurrentCityTime(timezoneOffsetSec) {
  const nowUtcMs = Date.now(); // UTC epoch ms
  const cityLocalMs = nowUtcMs + Number(timezoneOffsetSec) * 1000;
  const d = new Date(cityLocalMs); // this represents the city's local time, but in UTC basis

  return {
    dateOnly: new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",        // IMPORTANT: prevents double timezone shift
    }).format(d),
    timeOnly: new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",        // IMPORTANT
    }).format(d),
  };
}



  const updateWeather = (fiveDayWeather) => {
    const currentWeather = fiveDayWeather.list[0];
    console.log(fiveDayWeather);
    
    const formattedDate = getCurrentCityTime(fiveDayWeather.city.timezone)
    //set Formated Date
    setTodayDate(formattedDate); 

    const pod = currentWeather.sys.pod; // 'd' or 'n'
    const isDay = pod === "d";
    setIsDayOrNight(isDay);

    // Toggle theme automatically
    if (isDay) {
      document.documentElement.classList.remove("dark"); // Day mode
    } else {
      document.documentElement.classList.add("dark"); // Night mode
    }

    //set weather Data
    setWeatherData({
      temprature: currentWeather.main.temp,
      humidity: currentWeather.main.humidity,
      windSpeed: currentWeather.wind.speed,
      weatherMain: currentWeather.weather[0].main,
      weatherDetail: currentWeather.weather[0].description,
      icon: currentWeather.weather[0].icon,
      rainChances: Math.floor(currentWeather.pop * 100),
      visibility: currentWeather.visibility / 1000,
      dOrN: currentWeather.sys.pod,
      deg: currentWeather.wind.deg,

      timezone: fiveDayWeather.city.timezone,
      location: fiveDayWeather.city.name,
      sunrise: fiveDayWeather.city.sunrise,
      sunset: fiveDayWeather.city.sunset,
      currentTime: currentWeather.dt,
    });

    //create a list for daily currentWeather
    const dailydata = {};

    //loop through the forecast currentWeather and save by date
    fiveDayWeather.list.forEach((item) => {
      //fetch date (✅ fixed wrong split syntax)
      const date = item.dt_txt.split(" ")[0];

      //check if daily currentWeather is empty or not, if yes create temprature array, icon array and description array
      if (!dailydata[date]) {
        dailydata[date] = { temps: [], icons: [], descriptions: [] }; // ✅ fixed property names (icons, descriptions)
      }

      dailydata[date].temps.push(item.main.temp);
      dailydata[date].icons.push(item.weather[0].icon);
      dailydata[date].descriptions.push(item.weather[0].description);
    });

    //create a daily array
    const dailyArr = Object.keys(dailydata) // ✅ fixed "Objects.key" to "Object.keys"
      .slice(1, 7) // skip today, take next 5 days
      .map((date) => {
        // ✅ fixed param name from "currentWeather" to "date"
        const temps = dailydata[date].temps;
        const icons = dailydata[date].icons;
        const descriptions = dailydata[date].descriptions;

        return {
          day: new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          min: Math.round(Math.min(...temps)),
          max: Math.round(Math.max(...temps)),
          icon: icons[Math.floor(icons.length / 2)],
          description: descriptions[Math.floor(descriptions.length / 2)],
        };
      });

    setForecastData(dailyArr);
  };

  //by using useEffact find user loaction and load initially
  useEffect(() => {
    //find user location

    //check for geolocation
    if ("geolocation" in navigator) {
      //find current postion
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //fetch latitude and longitude
          const { latitude, longitude } = position.coords;

          //call function to fetch currentWeather
          searchByLocation(latitude, longitude);
        },
        (error) => {
          console.warn("Geolocation Error :", error.message);
          //if error provide default city
          search("Noida");
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center p-8 md:p-0">
      {/* Background */}

      <WeatherBackground 
        weatherType={weatherData?.weatherDetail} 
        dayOrNight={weatherData?.dOrN}
        className="w-full h-full object-cover blur-sm opacity-80"
         />

        {weatherData?.rainChances > 0 && (
        <RainBackground
          density={weatherData?.rainChances / 100}
          wind={weatherData?.windSpeed * 3}
          windDir={weatherData?.deg}
          isDay={isDayOrNight}
        />
      )}

       {weatherData?.weatherMain === "Clouds" &&(<CloudBackground 
          density={10}
          wind={weatherData?.windSpeed }
          windDir={weatherData?.deg}
          isDay={isDayOrNight}/>)}

          
      {weatherData?.weatherMain === "Snow" && (
        <SnowBackground 
          density={5}
          wind={weatherData?.windSpeed * 5}
          windDir={weatherData?.deg}
          isDay={isDayOrNight}
          className="blur-lg" />)}
      

      {/* Foreground Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center z-10 backdrop-blur-xl shadow-lg rounded-2xl border border-white/20 dark:border-white/10">
        <div className="flex flex-col md:rounded-l-xl  p-4 border-b-1 md:border-b-0 md:border-r-1 border-primary">
          <div className="flex justify-center border border-primary rounded-full">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter City Name..."
              className="w-full px-4 py-2 focus:outline-none text-primary"
            />
            <button
              onClick={() => search(inputRef.current.value)}
              className="px-4 py-2 flex items-center justify-center"
            >
              <FaSearch className="w-8 h-4 hover:scale-120 text-primary" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Icons
              description={weatherData?.weatherDetail}
              dayOrNight={weatherData?.dOrN}
              className="w-48 h-48 drop-shadow-lg p-4"
            />

            <div className="font-bold text-primary flex items-center">
              <WiThermometer className="w-12 h-12 text-primary" />
              <p className="text-3xl">{weatherData?.temprature}</p>
              <span className="text-2xl text-primary">°C</span>
            </div>
          </div>
          <div className="font-semibold text-primary flex justify-center  border-b-1 p-2  border-primary-secondary">
            <p className="text-md">{todayDate.dateOnly}</p>
          </div>
          <div className="flex flex-col justify-start">

            <div className="flex gap-2 items-center">
              <Icons
                description={weatherData?.weatherDetail}
                dayOrNight={weatherData?.dOrN}
                className="w-16 h-16 drop-shadow-lg p-4"
              />
              <p className="text-primary font-semibold capitalize">
                {weatherData?.weatherMain}, {weatherData?.weatherDetail}
              </p>
            </div>

            {weatherData?.rainChances > 0 && (
              <div className="flex gap-2 items-center">
                <img
                  src={`/weather/weather-icons/rainChances.png`}
                  alt="Rain"
                  className="w-16 h-16 drop-shadow-lg p-4"
                />
                <p className="text-primary font-semibold capitalize">
                  Rain - {weatherData?.rainChances}%
                </p>
              </div>
            )}

          </div>

          <div className="flex items-center justify-center mx-auto">
            <div className="relative w-48 h-24">
              <img
                src="./city.png"
                alt="City Name"
                className="rounded-xl w-full h-full"
              />
              <p className="absolute inset-0 flex items-center justify-center bg-cardBackground/70 brightness-125 text-primary text-xl font-semibold rounded-xl">
                {weatherData?.location}
              </p>
            </div>
          </div>
        </div>

        <div className="md:rounded-r-xl p-8 space-y-3 items-center justify-center w-sm">
          <h1 className="text-primary/80 text-2xl">Today's Highlight</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="col-span-3 bg-white/10 dark:bg-black/20 
  backdrop-blur-md 
  border border-white/20 dark:border-white/10 
  shadow-md rounded-xl p-4 space-y-2 ">
              <h1 className="text-md text-primary">Weather Details</h1>

              <div className="flex gap-2 justify-evenly">
                <div className="space-y-2">
                  <p className="text-xs text-primary">Wind Speed</p>
                  <div className="flex gap-2">
                    <FaWind
                      title="Wind Speed"
                      className="text-blue-500 text-2xl"
                    />
                    <div className="flex items-center justify-center">
                      <h1 className="text-primary text-lg font-semibold">
                        {weatherData?.windSpeed}
                        <span className="text-xl text-primaryr"> m/s</span>
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-primary">Humidity</p>
                  <div className="flex gap-2">
                    <FaTint
                      title="Humidity"
                      className="text-blue-500 text-2xl"
                    />
                    <div className="flex items-center justify-center">
                      <h1 className="text-primary text-lg font-bold">
                        {weatherData?.humidity}
                        <span className="text-md text-primaryr">%</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-primary">Visibility</p>
                  <div className="flex gap-2 justify-center">
                    <FaEye
                      title="Visibility"
                      className="text-blue-500 text-2xl"
                    />
                    <div className="flex items-center justify-center">
                      <h1 className="text-primary text-lg font-bold">
                        {weatherData?.visibility}
                        <span className="text-sm text-primaryr"> km</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-start p-2">
                <p className="text-xs text-primary">Wind Direction</p>
                <div className="flex justify-center">
                  <WindDirection deg={weatherData?.deg} />
                </div>
                

              </div>
            </div>

            <div className="col-span-3 bg-white/10 dark:bg-black/20 
  backdrop-blur-md 
  border border-white/20 dark:border-white/10 
  shadow-md rounded-xl p-4 space-y-2">
              <h1 className="text-md  text-primary">Sunrise & Sunset</h1>
              <div className="flex items-center justify-center p-2">
                <SunriseSunset
                  sunrise={weatherData?.sunrise}
                  sunset={weatherData?.sunset}
                  timezone={weatherData?.timezone}
                  currentTime={todayDate.timeOnly}
                />
              </div>
            </div>
          </div>

          <h3 className="text-primary/80 text-2xl">5-Day Forecast</h3>

          <div className="flex justify-center items-center">
            {forecastData.length > 0 && (
              <>
                <div className="flex justify-center gap-2">
                  {forecastData.map((day, idx) => (
                    <div
                      key={idx}
                      className=" border border-primary shadow-lg p-2 rounded-lg shadow-secondary text-center hover:shadow-md hover:shadow-primary"
                    >
                      <p className="font-semibold text-primary">{day.day}</p>
                      <img
                        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt={day.description}
                        title={day.description}
                      />
                      <p className="text-sm text-primary">
                        {day.min}°-{day.max}°
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
