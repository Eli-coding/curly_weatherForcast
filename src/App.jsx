import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar.jsx'
import WeatherDisplay from './components/weatherDisplay.jsx';
import CurlForecast from './components/CurlForecast';
function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  const [invalidCity, setInvalidCity] = useState('');

  const handleSearch = async (location) => {
  setLoadingState(true);
  
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.cod === "404") {
    setInvalidCity("Invalid city entered. Try again — include your country too (e.g. San Juan, PR)");
    setWeatherData(null);
    setLoadingState(false);
    return;
  }

  setInvalidCity('');
  setWeatherData(data);
  setLoadingState(false);
};


   
  return (
     <div>
      <h1>Curly Weather App</h1>
       <SearchBar onSearch={handleSearch} />
       {loadingState && <p>Loading...</p>}
       {invalidCity && <p style={{color: 'red'}}>{invalidCity}</p>}
       {weatherData && <WeatherDisplay weatherData={weatherData} />}
       {weatherData && <CurlForecast weatherData={weatherData} />}
    
    </div>
  );
};

export default App;
