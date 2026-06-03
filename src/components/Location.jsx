import { useState } from 'react';

function Location({ onSearch, error }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() === '') return;
    onSearch(input);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a0533',
      backgroundImage: `
        repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,45,120,0.15) 20px, rgba(255,45,120,0.15) 22px),
        repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(0,245,212,0.1) 30px, rgba(0,245,212,0.1) 32px)
      `,
    }}>
      <div style={{
        maxWidth: '430px',
        margin: '0 auto',
        minHeight: '100vh',
        padding: '60px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '28px',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Geo shapes */}
        {/* <div style={{ position: 'absolute', width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '35px solid #FFE600', bottom: '120px', right: '30px', opacity: 0.5 }} />
        <div style={{ position: 'absolute', width: '55px', height: '55px', borderRadius: '50%', background: '#FF2D78', top: '30px', right: '25px', opacity: 0.35 }} />
        <div style={{ position: 'absolute', width: '50px', height: '12px', background: '#00F5D4', top: '80px', left: '20px', transform: 'rotate(15deg)', opacity: 0.45 }} /> */}

        <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '3px', color: '#BF5FFF', textTransform: 'uppercase' }}>
          Almost there ✦
        </p>

        <h2 style={{ fontFamily: 'Ranchers, cursive', fontSize: '60px', lineHeight: 0.95, color: '#F5F5F5' }}>
          W H E R E<br />Y O U  <span style={{ color: '#FFE600' }}> <br />A T ?</span>
        </h2>

        <p style={{ fontSize: '17px', color: '#ccc', lineHeight: '1.5' }}>
          We need your city to pull real-time humidity and temperature for your curl forecast.
        </p>

        <div style={{
          background: 'rgba(10,10,10,0.85)',
          border: '1.5px solid #333',
          borderRadius: '6px',
          padding: '22px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={input}
              placeholder="Enter your city or zip code..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
              style={{
                width: '100%',
                background: '#111',
                border: '2px solid #BF5FFF',
                borderRadius: '3px',
                padding: '16px 50px 16px 18px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                color: '#F5F5F5',
                outline: 'none',
                boxShadow: '4px 4px 0 #BF5FFF'
              }}
            />
            <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}>📍</span>
          </div>

          <button
            onClick={handleSubmit}
            style={{
              background: '#FFE600',
              border: 'none',
              color: '#000000',
              padding: '16px',
              width: '100%',
              fontFamily: 'Ranchers, cursive',
              fontSize: '22px',
              letterSpacing: '2px',
              cursor: 'pointer',
              borderRadius: '2px',
              boxShadow: '4px 4px 0 #FF6B35'
            }}
          >
            GET MY FORECAST
          </button>

          {error && (
            <p style={{ color: '#FF2D78', fontSize: '13px', textAlign: 'center' }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Location;