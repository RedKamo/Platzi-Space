import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import saturnoV1 from '../assets/static/saturnoV1.jpg';
import playicon from '../assets/static/playicon.png';
import pauseicon from '../assets/static/pauseicon.png';

const CarouselItem =()=> (
  <div className="carousel-item">
    <img className="carousel-item__img" src={saturnoV1} alt="card1"/>
  <div className="carousel-item__details">
  <div>
    <img className="carousel-item__icons" src={playicon} alt="" />
    <img className="carousel-item__icons" src={pauseicon} alt="" />
  </div>
    <p className="carousel-item__details--title">Saturno V</p>
    <p className="carousel-item__details--subtitle">1967 - 1973 (118t OTB)</p>
  </div>
</div>
)

export default CarouselItem;