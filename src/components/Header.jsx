import React from 'react';
import '../assets/styles/components/Header.scss';

import profileicon from '../assets/static/profileicon.png';

const Header = () =>(
  <header className="header">
        <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Logo_platzi_header" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={profileicon} alt="user"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
)

export default Header;