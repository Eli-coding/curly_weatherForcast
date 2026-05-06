import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar.jsx'

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  const handleSearch = async (location) => {
  setLoadingState(true);
  
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  setWeatherData(data);
  console.log(data);
  setLoadingState(false);
};

  return (
     <div>
      <h1>Curl Weather App</h1>
       <SearchBar onSearch={handleSearch} />
    {loadingState && <p>Loading...</p>}
    </div>
  );
}

export default App
