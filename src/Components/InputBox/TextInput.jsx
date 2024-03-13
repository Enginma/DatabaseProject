import React, { useState } from 'react';
import './TextInput.css'; 

const TextInputBar = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputText.trim()) return; 
    onSendMessage(inputText);
    setInputText(''); 
  };

  return (
    <form className="text-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="text-input"
        placeholder="What game will it be..."
        value={inputText}
        onChange={handleChange}
      />
      <button type="submit" className="send-button">Submit</button>
    </form>
  );
};

export default TextInputBar;
