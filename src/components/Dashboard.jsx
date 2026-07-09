import WeatherDisplay from './weatherDisplay';
import CurlForecast from './CurlForecast';

function Dashboard({ weatherData, hairData, loadingState }) {

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a0533',
      backgroundImage: `
        repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,45,120,0.06) 20px, rgba(255,45,120,0.06) 22px),
        repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(0,245,212,0.04) 30px, rgba(0,245,212,0.04) 32px)
      `,
    }}>
      <div style={{
        maxWidth: '430px',
        margin: '0 auto',
        padding: '36px 18px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minHeight: '100vh'
      }}>

        {/* TOP — city + date */}
        {weatherData && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '11px', color: '#aaa', letterSpacing: '1px', textTransform: 'uppercase' }}>
                📍 Current Location
              </p>
              <p style={{ fontFamily: 'Ranchers, cursive', fontSize: '34px', color: '#F5F5F5', marginTop: '2px', letterSpacing: '1px' }}>
                {weatherData.name}
              </p>
              <p style={{ fontSize: '11px', color: '#777', marginTop: '2px' }}>
                {dateStr} · {timeStr}
              </p>
            </div>
          </div>
        )}

        {/* LOADING */}
        {loadingState && (
          <p style={{ color: '#00F5D4', fontFamily: 'Ranchers, cursive', fontSize: '18px', textAlign: 'center' }}>
            Reading your curls...
          </p>
        )}

        {/* WEATHER CARD */}
        {weatherData && (
          <div style={{
            background: 'rgba(15,15,15,0.88)',
            border: '1.5px solid #2a2a2a',
            borderRadius: '20px',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '6px' }}>
              <span style={{ fontSize: '56px', lineHeight: 1 }}>🌦️</span>
              <div>
                <div style={{ fontFamily: 'Ranchers, cursive', fontSize: '64px', lineHeight: 1, color: '#F5F5F5', letterSpacing: '-2px' }}>
                  {Math.round(weatherData.main.temp)}<span style={{ fontSize: '28px', color: '#666', verticalAlign: 'top', marginTop: '8px', display: 'inline-block' }}>°C</span>
                </div>
                <div style={{ fontSize: '12px', color: '#F5F5F5', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '2px' }}>
                  {weatherData.weather[0].description}
                </div>
              </div>
            </div>

            {/* Stat pills */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
              <div style={{ flex: 1, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '14px', padding: '10px 8px', textAlign: 'center' }}>
                <span style={{ fontSize: '16px' }}>💧</span>
                <span style={{ fontFamily: 'Ranchers, cursive', fontSize: '18px', color: '#00F5D4', display: 'block', marginTop: '2px' }}>{weatherData.main.humidity}%</span>
                <span style={{ fontSize: '9px', color: '#F5F5F5', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginTop: '2px' }}>Humidity</span>
              </div>
              <div style={{ flex: 1, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '14px', padding: '10px 8px', textAlign: 'center' }}>
                <span style={{ fontSize: '16px' }}>🌡️</span>
                <span style={{ fontFamily: 'Ranchers, cursive', fontSize: '18px', color: '#00F5D4', display: 'block', marginTop: '2px' }}>{Math.round(weatherData.main.feels_like)}°</span>
                <span style={{ fontSize: '9px', color: '#F5F5F5', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginTop: '2px' }}>Feels Like</span>
              </div>
              <div style={{ flex: 1, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '14px', padding: '10px 8px', textAlign: 'center' }}>
                <span style={{ fontSize: '16px' }}>💨</span>
                <span style={{ fontFamily: 'Ranchers, cursive', fontSize: '18px', color: '#00F5D4', display: 'block', marginTop: '2px' }}>{Math.round(weatherData.wind.speed)}m/s</span>
                <span style={{ fontSize: '9px', color: '#F5F5F5', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginTop: '2px' }}>Wind</span>
              </div>
            </div>
          </div>
        )}

        {/* CURL FORECAST CARD */}
        {weatherData && (
          <div style={{
            background: 'rgba(15,15,15,0.88)',
            border: '2px solid #FF2D78',
            borderRadius: '20px',
            padding: '18px 20px',
            boxShadow: '0 0 20px rgba(255,45,120,0.12)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{
                background: '#FF2D78',
                color: '#000',
                fontFamily: 'Ranchers, cursive',
                fontSize: '10px',
                letterSpacing: '2px',
                padding: '4px 10px',
                borderRadius: '20px'
              }}>CURL REPORT</span>
            </div>
            <p style={{ fontFamily: 'Ranchers, cursive', fontSize: '16px', color: '#F5F5F5', letterSpacing: '1px', marginBottom: '12px' }}>
              Today's Curl Forecast
            </p>
            <CurlForecast weatherData={weatherData} />
          </div>
        )}

        {/* BOTTOM BUTTONS */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              flex: 1,
              background: '#FF2D78',
              border: 'none',
              color: '#000',
              fontFamily: 'Ranchers, cursive',
              fontSize: '14px',
              letterSpacing: '1px',
              padding: '16px 10px',
              borderRadius: '14px',
              cursor: 'pointer',
              boxShadow: '0 0 14px rgba(255,45,120,0.3)'
            }}
          >
            CHANGE LOCATION
          </button>
          <button
            onClick={() => window.location.reload()}
            style={{
              flex: 1,
              background: 'transparent',
              border: '1.5px solid #444',
              color: '#888',
              fontFamily: 'Ranchers, cursive',
              fontSize: '14px',
              letterSpacing: '1px',
              padding: '16px 10px',
              borderRadius: '14px',
              cursor: 'pointer'
            }}
          >
            RETAKE QUIZ
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;