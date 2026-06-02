import { useState } from 'react'
import './App.css'
import HairQuiz from './components/HairQuiz';
import Location from './components/Location';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  const [invalidCity, setInvalidCity] = useState('');
  const [screen, setScreen] = useState('landing');
  const [hairData, setHairData] = useState(null);

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
  setScreen('dashboard');
  setLoadingState(false);
};

 return (
  <div>
    {screen === 'landing' && (
      <Landing startCurlQuizz={() => setScreen('quiz')} />
    )}

    {screen === 'quiz' && (
      <HairQuiz onComplete={(hairProfile) => {
        setHairData(hairProfile);
        setScreen('location');
      }} />
    )}

    {screen === 'location' && (
      <Location onSearch={handleSearch} error={invalidCity} />

    )}

    {screen === 'dashboard' && (
      <Dashboard
        weatherData={weatherData}
        hairData={hairData}
        loadingState={loadingState}
      />
    )}
  </div>
);
}
   
 

export default App;
