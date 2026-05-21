import { useState } from 'react';

function SearchBar({ onSearch }) {
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
      />
    
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;