import { getCurlForecast } from '../data/curlLogic';

function CurlForecast({ weatherData }) {
    const forecast = getCurlForecast(weatherData.main.humidity, weatherData.main.temp);
    return (
        <div>
            <h2>Curl Forecast</h2>
            <p>{forecast}</p>
        </div>
    );
}

export default CurlForecast;