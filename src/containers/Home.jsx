import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState'

const Home = ({myList,trends,originals})=>{
  //const initialState = useInitialState(API)
  return(
    <>
      <Search/>
      {myList.length > 0 &&(
        <Categories title="My List">
        <Carousel>
          {myList.map(item =>
            <CarouselItem 
            key={item.id}
            {...item} 
            isList
            />
            )}
        </Carousel>
      </Categories>
      )}

      <Categories title="Trending">
        <Carousel>
          {trends.map(item => 
            <CarouselItem key={item.id}{...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title=" Platzi Originals">
        <Carousel>
          {originals.map(item => 
            <CarouselItem key={item.id}{...item} />
          )}
        </Carousel>
      </Categories>
    </>
  )
}

const mapStateToProps = state=>{
  return{
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
}

export default connect(mapStateToProps, null)(Home);
//export default Home;