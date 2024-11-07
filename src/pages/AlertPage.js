import React from 'react';
import '../css files/styles.css';
import StylizedButton from '../components/StylizedButton';
import ImageUploadButton from '../components/ImageButton';
import axios from 'axios';

const AlertPage = () => {

  return (
    <>
    <div className='Alert-title'>
      <h1><i className="fa-solid fa-circle-exclamation"></i> &nbsp; ALERT! Raise a Red Flag &nbsp; <i className="fa-solid fa-circle-exclamation"></i></h1>
    </div>
    <div className= "Upload-button">
      <ImageUploadButton iconHtml= '<i class="fa-solid fa-upload"></i>' text="UPLOAD" gradient="linear-gradient(135deg, #38dc07, #0a8f27)"/>
    </div>
    <div className= "Location-button">
      <StylizedButton iconHtml= '<i class="fa-solid fa-location-dot"></i>' text="" gradient="linear-gradient(135deg, #38dc07, #0a8f27)"/>
      <h6 className='Description'><legend>Enter Location/Landmark</legend><input/></h6>
    </div>
    <div className= "Phone-button">
      <StylizedButton iconHtml= '<i class="fa-solid fa-phone"></i>' text="PHONE" gradient="linear-gradient(135deg, #38dc07, #0a8f27)"/>
      <h6 className='Description'><legend>Enter Phone Number</legend><input/></h6>
    </div>
    <div className= "Send-button">
      <StylizedButton text="ALERT" gradient="linear-gradient(135deg, #007BFF, #003399)" iconHtml= '<i class="fa-sharp fa-solid fa-paper-plane"></i>' iconPosition='after'/>
    </div>
    </>
  );
};

export default AlertPage;
