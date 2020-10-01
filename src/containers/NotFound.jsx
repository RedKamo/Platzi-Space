import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = ()=> (
  <section className="error__container">
    <div className="error__container--details">
      <h1 className="error__container--404 animated wobble ">404</h1>
      <p className="error__container--details-txt">Seguiremos buscando el error.</p>
    </div>
  </section>
  
)

export default NotFound;