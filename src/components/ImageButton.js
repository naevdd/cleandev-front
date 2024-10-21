import React, { useRef, useState } from 'react';
import '../css files/ImageButton.css'

const ImageUploadButton = ({ text, destination, gradient, iconHtml, iconPosition = 'before' }) => {
  // Create a reference to the hidden file input element
  const fileInputRef = useRef(null);
  
  // State to store the file name
  const [fileName, setFileName] = useState('');

  // Function to trigger the click event on the hidden file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update state with the file name
      console.log('Selected file:', file);
    }
  };

  return (
    <div className='Image-upload-container'>
      <button className= "Imageupload-button" onClick={handleButtonClick} style={{ background: gradient }} > {iconPosition === 'before' && (
        <span dangerouslySetInnerHTML={{ __html: iconHtml }} style={{ marginRight: '8px' }} />
      )}
      {text}
      {iconPosition === 'after' && (
        <span dangerouslySetInnerHTML={{ __html: iconHtml }} style={{ marginLeft: '8px' }} />
      )}</button>
      {/* Hidden file input element */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {/* Display the selected image name */}
       <p className='file-name-display'>{fileName ? fileName : 'Upload Image'}</p>
    </div>
  );
};

export default ImageUploadButton;
