import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import PropTypes from 'prop-types';
import {logoutRequest} from '../actions';
import '../assets/styles/components/Header.scss';

import profileicon from '../assets/static/profileicon.png';

const Header = (props) =>{
  const { user } =props 
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = ()=> {
    props.logoutRequest({})
  }

  return(
  <header className="header">
    <Link to="/" >
      <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Logo_platzi_header" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {hasUser ? 
          <img src={gravatar(user.email)} alt={user.email} /> :
          <img src={profileicon} alt="user"/>
        }
        <p>Perfil</p>
      </div>
      <ul>
        {hasUser ?(
          <>
          <li><a href="/">{user.name}</a></li> 
          <li><a href="#logout" onClick={handleLogout}>Cerrar sesion</a></li>
          </>
        ) : ( <li><Link to="/login">Iniciar sesion</Link></li> )
        }
      </ul>
    </div>
  </header>
)
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest,
}

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
}

//export default Header;
export default connect (mapStateToProps, mapDispatchToProps)(Header);