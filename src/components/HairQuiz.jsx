function HairQuiz({ onComplete }) {
  return (
    <div>
      <h1>Hair Quiz</h1>
      <button onClick={() => onComplete({ curlType: '3B', porosity: 'high' })}>
        Skip for now
      </button>
    </div>
  );
}

export default HairQuiz;