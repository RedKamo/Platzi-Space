import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = ()=>(
  <section className="buscador">
    <h2 className="buscador__title">¿Que deseas ver hoy?</h2>
    <input className="input__search" type="text" placeholder="Buscar..."/>
  </section>
)
export default Search