import React from 'react';
import '../css files/styles.css';
import StylizedButton from '../components/StylizedButton'; // Ensure correct path

const HomePage = () => {
  
  return (
    <>
      <div className="title-container1">
        <h1 className="Title1">Building a Community <br /> that takes time to <br /> Solve and Discuss</h1>
        <h1 className="Title2">Sustainability</h1>
      </div>

      <div className="title-container2">
        <h3 className="sub1">Notify the community about concerns with regards to Sustainability</h3>
        <h3 className="sub2">Share and discuss ideas and innovation in the world of sustainability and engineering</h3>
      </div>
    <div className="button-container">
    <StylizedButton text="A L E R T" destination="/alert" gradient="linear-gradient(135deg, #38dc07, #0a8f27)" />
    <StylizedButton text="D I S C U S S" destination="/discuss" gradient="linear-gradient(135deg, #007BFF, #003399)" />
    </div>
  </>
  );
};

export default HomePage;

