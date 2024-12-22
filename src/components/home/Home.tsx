import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/home/home.css';
import Logo from '../Logo';

import Carousel from './Carousel';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const images = [
    '/debugzen-frontend/images/carousel-1.png',
    '/debugzen-frontend/images/carousel-2.png',
    '/debugzen-frontend/images/carousel-3.png',
  ];

  return (
    <div className="home-container">
      <div className="content">
        <Logo />
        <p>
          CODE REVIEW <span className="bullet">•</span> AND{' '}
          <span className="bullet">•</span> SUGGESTIONS
        </p>
      </div>
      <Carousel images={images} />
      <div className="overlay"></div>
      <div className="content">
        <button onClick={() => navigate('/review')}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
