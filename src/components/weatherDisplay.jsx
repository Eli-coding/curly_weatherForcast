function WeatherDisplay({ weatherData }) {
  return (
    <div>
      <p>{weatherData.name}</p>
      <p>{weatherData.main.temp}°C</p>
      <p>{weatherData.main.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;