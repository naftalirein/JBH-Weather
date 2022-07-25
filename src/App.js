import { useState } from "react";
import "./App.css";
import { getWeatherByCity } from "./service";

function App() {
  const [weather, setWeather] = useState('');
  getWeatherByCity("tel aviv")
    .then((data) => {
      console.log(data.main.temp);
      setWeather(data.main.temp)
    })
    .catch((err) => {});
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <label>Tel Aviv: {weather}</label>
      </header>
    </div>
  );
}

export default App;
