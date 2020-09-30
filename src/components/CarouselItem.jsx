import React from 'react';
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss';
import playicon from '../assets/static/playicon.png';
import pauseicon from '../assets/static/pauseicon.png';

const CarouselItem =({cover, title, year, contentRating, duration})=> (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}/>
  <div className="carousel-item__details">
  <div>
    <img className="carousel-item__icons" src={playicon} alt="" />
    <img className="carousel-item__icons" src={pauseicon} alt="" />
  </div>
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
  </div>
</div>
)

CarouselItem.prototype = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}


export default CarouselItem;