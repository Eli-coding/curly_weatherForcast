import { getCurlForecast } from '../data/curlLogic';

function CurlForecast({ weatherData }) {
    const forecast = getCurlForecast(weatherData.main.humidity, weatherData.main.temp);
    
    return (
        <div>
          {/* Score row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
            <span style={{ fontFamily: 'Ranchers, cursive', fontSize: '48px', color: '#FFE600', lineHeight: 1 }}>
              {forecast.score}
            </span>
            <div>
              <div style={{ fontSize: '11px', color: '#F5F5F5', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Curl Score / 10
              </div>
              <div style={{ fontSize: '13px', color: '#00F5D4', fontWeight: '700', marginTop: '4px' }}>
                {forecast.label}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ background: '#222', borderRadius: '20px', height: '6px', marginBottom: '12px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${forecast.score * 10}%`,
              background: 'linear-gradient(90deg, #FF2D78, #FFE600)',
              borderRadius: '20px'
            }} />
          </div>

          {/* Tip */}
          <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.5', borderLeft: '2px solid #BF5FFF', paddingLeft: '12px', marginBottom: '16px' }}>
            {forecast.tip}
          </p>

          {/* Recommendation cards */}
          <p style={{ fontFamily: 'Ranchers, cursive', fontSize: '14px', color: '#F5F5F5', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
            What to do today
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, background: 'rgba(15,15,15,0.88)', border: '1px solid #252525', borderRadius: '16px', padding: '12px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px' }}>🧴</div>
              <div style={{ fontSize: '9px', color: '#FF2D78', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Product</div>
              <div style={{ fontSize: '11px', color: '#F5F5F5', fontWeight: '500', marginTop: '4px', lineHeight: '1.3' }}>{forecast.product}</div>
            </div>
            <div style={{ flex: 1, background: 'rgba(15,15,15,0.88)', border: '1px solid #252525', borderRadius: '16px', padding: '12px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px' }}>🛡️</div>
              <div style={{ fontSize: '9px', color: '#FF2D78', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Technique</div>
              <div style={{ fontSize: '11px', color: '#F5F5F5', fontWeight: '500', marginTop: '4px', lineHeight: '1.3' }}>{forecast.technique}</div>
            </div>
            <div style={{ flex: 1, background: 'rgba(15,15,15,0.88)', border: '1px solid #252525', borderRadius: '16px', padding: '12px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px' }}>🎒</div>
              <div style={{ fontSize: '9px', color: '#FF2D78', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Pack This</div>
              <div style={{ fontSize: '11px', color: '#F5F5F5', fontWeight: '500', marginTop: '4px', lineHeight: '1.3' }}>{forecast.pack}</div>
            </div>
          </div>
        </div>
    );
}

export default CurlForecast;