import React from 'react';
import '../css files/styles.css';
import '../components/StylizedButton'; // Ensure correct path
import {Link} from 'react-router-dom';

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
    <Link to='/alert'><button action="/alert" className='button-one stylized-button'>A L E R T</button></Link>
    <Link to='/discuss'><button action="/discuss" className="button-two stylized-button">D I S C U S S</button></Link>
    </div>
  </>
  );
};

export default HomePage;

