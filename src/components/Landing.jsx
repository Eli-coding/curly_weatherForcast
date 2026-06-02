function Landing({ startCurlQuizz}){

    return(
        <div className="landing">
            <h1>Raiz Rizada</h1>
            <h2>Forecasting better Curl Days</h2>
            <button onClick={startCurlQuizz}>Start</button>
        </div>
    )
}

export default Landing;