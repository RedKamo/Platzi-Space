import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';
import playicon from '../assets/static/playicon.png';
import addicon from '../assets/static/add.png';
import cancelicon from '../assets/static/cancel.png';


const CarouselItem =(props) =>{
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration, isList
    })
  }
  
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite (itemId)
  }

  return(
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}/>
    <div className="carousel-item__details">
    <div>
      <Link to={`/player/${id}`}>
        <img 
        className="carousel-item__icons" 
        src={playicon} 
        alt="" 
      />
      </Link>

      {
        isList ?
        <img
        className="carousel-item__icons"
        src={cancelicon}
        onClick={()=> handleDeleteFavorite(id)} 
      /> :
        
        <img 
        className="carousel-item__icons" 
        src={addicon} 
        alt="" 
        onClick={handleSetFavorite} 
    />

        
      }

    </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
    </div>
    </div>
)};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}


export default connect(null, mapDispatchToProps)(CarouselItem);