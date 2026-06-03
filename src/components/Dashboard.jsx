import WeatherDisplay from './weatherDisplay';
import CurlForecast from './CurlForecast';

function Dashboard({ weatherData, hairData }) {


    return (
        <div>
            <h1>Dashboard</h1>
         <WeatherDisplay weatherData={weatherData} />
         <CurlForecast weatherData={weatherData} />
          
        </div>
    );

}

export default Dashboard;