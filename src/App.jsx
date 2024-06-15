/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react"
import Forecast from "./components/Forecast"
import TempAndDetails from "./components/TempAndDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import TopButtons from "./components/TopButtons"
import Inputs from "./components/inputs"
import getFormattedWeatherData from "./services/WeatherServices"


const App = () => {

  const [query, setQuery] = useState({ q: "colombo" })
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then(data => {
      setWeather(data);
    });

  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackGround = () => {
    if (!weather) return "from-cyan-600 to-blue-700"; 
    const temp = weather.temp;
    
    if (temp >= 0 && temp <= 18) return "from-cyan-600 to-gray-700";
    if (temp >= 19 && temp <= 25) return "from-cyan-600 to-blue-700";
    if (temp > 25) return "from-yellow-600 to-orange-700";
    
    return "from-cyan-600 to-blue-700";  
}

  return (
    <div
      className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-tr shadow-xl shadow-gray-400 ${formatBackGround()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title="3 hour forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  )
}

export default App
