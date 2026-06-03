import {useState} from 'react';

function Location({ onSearch, error }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
     if (input.trim() === '') return;
    onSearch(input);
  };

  return (
    <div>
      <label htmlFor="searchBar">Enter your location </label>
      <input
        type="text"
        id="searchBar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
         onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
          }}
      />
    
      <button onClick={handleSubmit}>Search</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Location;