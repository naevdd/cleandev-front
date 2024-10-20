import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../css files/StylizedButton.css';

const StylizedButton = ({ text, destination, gradient }) => {
  const navigate = useNavigate();  // Get the navigate function

  const handleClick = () => {
    // Navigate to the destination passed as a prop
    navigate(destination);
  };

  return (
    <button className="stylized-button" onClick={handleClick} style={{ background: gradient }}>
      {text}
    </button>
  );
};

export default StylizedButton;

