import React from 'react';
import './Home.css';
import portfolioPhotoImage from '../images/portfolioPhoto.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <img src={portfolioPhotoImage} alt="portfolioPhoto" class="portfolioPhotoImage"/>
      </div>
      <h2 className="home-title">Hi, I'm Caty. </h2>
        <p className="home-description">
          Web Developer Specializing in E-commerce & Dynamic Web Solutions.
        </p>
    </div>
  );
};

export default Home;
