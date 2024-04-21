import React, { useState } from 'react';
import './TextInput.css';

const TextInputBar = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = (searchQuery) => {
    fetch(`http://localhost:3001/data/search?q=${encodeURIComponent(searchQuery)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setSearchResults(json);  
        setShowPopup(true);      
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
        setSearchResults([]);    
      });
  }

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputText.trim()) return;
    fetchData(inputText);
    setInputText('');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <form className="text-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-input"
          placeholder="What game will it be..."
          value={inputText}
          onChange={handleChange}
        />
        <button type="submit" className="send-button">Search</button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Search Results</h2>
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>{result.title}, ${result.price}</li>  
                ))}
              </ul>
            ) : (
              <p>No results found.</p>
            )}
            <button onClick={handleClosePopup} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInputBar;
