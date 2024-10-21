import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../css files/StylizedButton.css';

const StylizedButton = ({ text, destination, gradient, iconHtml, iconPosition = 'before' }) => {
  const navigate = useNavigate();  // Get the navigate function

  const handleClick = () => {
    // Navigate to the destination passed as a prop
    navigate(destination);
  };

  return (
    <button className="stylized-button" onClick={handleClick} style={{ background: gradient }}>
      {iconPosition === 'before' && (
        <span dangerouslySetInnerHTML={{ __html: iconHtml }} style={{ marginRight: '8px' }} />
      )}
      {text}
      {iconPosition === 'after' && (
        <span dangerouslySetInnerHTML={{ __html: iconHtml }} style={{ marginLeft: '8px' }} />
      )}
    </button>
  );
};

export default StylizedButton;

