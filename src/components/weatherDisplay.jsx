function WeatherDisplay({ weatherData }) {
  return (
    <div>
      <h2>Weather Information</h2>
      <p><strong style={{color: '#FFD700'}}>City:</strong> {weatherData.name}</p>
      <p><strong style={{color: '#FFD700'}}>Temperature:</strong> {weatherData.main.temp}°C</p>
      <p><strong style={{color: '#FFD700'}}>Humidity:</strong> {weatherData.main.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;