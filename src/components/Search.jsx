import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({isHome})=>{
  const inputStyle = classNames('input',{
    isHome
  })
  return(
  <section className="buscador">
    <h2 className="buscador__title">¿Que deseas ver hoy?</h2>
    <input className={inputStyle} type="text" placeholder="Buscar..."/>
  </section>
)}
export default Search