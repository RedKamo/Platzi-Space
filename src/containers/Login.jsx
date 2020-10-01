import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';

import googleIcon from '../assets/static/pinkg.png';
import twitterIcon from '../assets/static/pinkt.png';

const Login = (props)=>{
  const [form, setValues]= useState({
    email: '',
  })

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }

  return(
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicio Sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
              <input
                name="email" 
                aria-label="Correo" 
                className="input" 
                type="text" 
                placeholder="Correo"
                onChange={handleInput} 
                />
              <input
                name="password" 
                aria-label="Contraseña" 
                className="input" type="password" 
                placeholder="Contraseña" 
                onChange={handleInput}
                />
              <button className="button" type="submit">Iniciar sesión</button>
              <div className="login__container--remember-me">
                  <label>
                      <input type="checkbox" name="" id="cbox" value="checkbox" />Recuerdame
                  </label>
                  <a href="/">Olvide mi contraseña</a>
              </div>
          </form>
          <section className="login__container--social-media">
              <div><img src={googleIcon}  alt="Google" />Inicia sesión con Google </div>
              <div><img src={twitterIcon} alt="Google" />Inicia sesión con Twitter </div>
          </section>
            <p className="login__container--register">
              No tienes ninguna cuenta
              <Link to="/register">
                Registrate
              </Link>
            </p>
        </section>
      </section>
    </>
)}

const mapDispatchProps = {
  loginRequest,
}

//export default Login;
export default connect(null,mapDispatchProps)(Login);