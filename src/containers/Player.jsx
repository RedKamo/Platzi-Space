import React, { useEffect, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from '../containers/NotFound'
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
const Player = ({history, match, playing, getVideoSource}) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const hasPlaying = Object.keys(playing).length > 0 ;

    useEffect(()=>{
      getVideoSource(id)
      setLoading(false)
  },[]) 

  const handleBack= ()=> history.goBack();
 /*  useLayoutEffect(()=>{
    props.getVideoSource(id),
    setLoading(false)
  }, []); */

  if (loading){
    return <h1>Loading Video...</h1>

  } 

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleBack}>
          back
        </button>
      </div>
    </div>
  ) : <NotFound />;
}

const mapStateToProps = (state) => {
  return{
    playing: state.playing,
  }
}

const mapDispatchToProps  = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);