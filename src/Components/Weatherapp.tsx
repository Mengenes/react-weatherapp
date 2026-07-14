import { useEffect, useState } from "react";
import "../index.css";

import "../assets/search.png";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

interface WeatherType {
  name: string;
  cod: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

function Weatherapp() {
  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);
  const [location, setLocation] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
  }

  async function search(city: string) {
    try {

 const timer = setTimeout(() => {
      console.log("Searching:", query);
      
    }, 100); 
      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === "404" || data.cod === 404) {
        alert("Location not found. Please enter a valid city");
        return;
      }
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Something went wrong fetching data:", error);
    }
    setLocation("");
  }

useEffect(() => {
  if (!location.trim()) return;

  const timer = setTimeout(() => {
    search(location);
  }, 100);

  return () => clearTimeout(timer);
}, [location]);

  return (
    <div className="flex min-h-screen justify-center items-center dark:bg-gray-900 bg-gray-100 p-4">
      <div className="flex flex-col bg-gradient-to-t from-sky-500 to-indigo-500 max-w-md w-full rounded-2xl shadow-lg p-5">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter Location..."
            className="flex-grow dark:bg-gray-800 text-center rounded-full h-12 shadow-lg bg-white border-0 dark:text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={location}
            onChange={handleChange}
          
            
          />
          <button
            onClick={() => search(location)}
            className="w-12 h-12 rounded-full shadow-md bg-white border border-white dark:bg-gray-800 dark:border-gray-800 flex justify-center 
            items-center hover:bg-indigo-200 dark:hover:bg-indigo-700 transition"
            aria-label="Search"
          >
            <img src={search_icon} alt="search icon" className="w-6 h-6" />
          </button>
        </div>

        {weatherData && (
          <>
            <div className="flex flex-col items-center p-4 w-full">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
                className="w-24 h-24 sm:w-32 sm:h-32"
              />
              <p className="text-white text-6xl sm:text-7xl font-semibold mt-2">
                {Math.round(weatherData.main.temp)}°c
              </p>
              <h2 className="text-white text-3xl sm:text-4xl font-medium mt-1">
                {weatherData.name}
              </h2>
            </div>

            <div className="flex w-full     items-center justify-around p-6 mt-6">
              <div className="flex flex-col items-center">
                <img
                  src={humidity_icon}
                  alt="humidity-icon"
                  className="w-8 h-8 mb-1"
                />
                <p className="text-white text-2xl font-semibold">
                  {weatherData.main.humidity}%
                </p>
                <p className="text-white text-sm">Humidity</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={wind_icon}
                  alt="wind-icon"
                  className="w-8 h-8 mb-1"
                />
                <p className="text-white text-2xl font-semibold">
                  {weatherData.wind.speed} Km/h
                </p>
                <p className="text-white text-sm">Wind Speed</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weatherapp;
