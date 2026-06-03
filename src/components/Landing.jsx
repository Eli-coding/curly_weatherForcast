function Landing({ startCurlQuizz}){

return(

  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 30px',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <h1 style={{
      fontFamily: 'Bungee, sans-serif',
      fontSize: '72px',
      lineHeight: 1,
      textAlign: 'center',
      textShadow: '4px 4px 0px rgba(0,0,0,0.8)'
    }}>
      <span style={{ color: '#FF2D78', display: 'block' }}>Raíz</span>
      <span style={{ color: '#00F5D4', display: 'block' }}>Rizada</span>
    </h1>

    <p style={{
      fontFamily: 'Ranchers, cursive',
      fontSize: '18px',
      color: '#FFE600',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginTop: '20px',
      textAlign: 'center',
      textShadow: '2px 2px 0px rgba(0,0,0,0.9)'
    }}>
      Forecasting Better Curl Days
    </p>

    <button
      onClick={startCurlQuizz}
      style={{
        marginTop: '60px',
        background: '#FF2D78',
        color: '#ffffff',
        fontFamily: 'Ranchers, cursive',
        fontSize: '32px',
        letterSpacing: '2px',
        border: 'none',
        cursor: 'pointer',
        padding: '28px 44px',
        clipPath: 'polygon(50% 0%, 61% 8%, 74% 4%, 79% 16%, 93% 14%, 93% 28%, 100% 35%, 95% 48%, 100% 58%, 91% 65%, 93% 78%, 80% 80%, 78% 93%, 64% 90%, 56% 100%, 44% 90%, 30% 93%, 26% 80%, 13% 80%, 13% 65%, 0% 58%, 7% 48%, 0% 35%, 9% 28%, 7% 14%, 21% 16%, 25% 4%, 38% 8%)',
        minWidth: '260px',
        minHeight: '150px'
      }}
    >
      START
    </button>
  </div>
); }

export default Landing;