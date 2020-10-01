import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss'

const Register = ()=>{

  const [form, setValues]= useState({
    email: '',
    name: '',
    password: ''
  })

  const handleInput = event =>{
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit =  event => {
    event.preventDefault();
    console.log(form);
  }

  return(
  <section className="registry">
    <section className="registry__container">
      <h2>Registrate</h2>
        <form className="registry__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
           className="input" 
           type="text" 
           placeholder="Nombre"
           onChange={handleInput}
           /> 
          <input 
          name="email"
          className="input" 
          type="email" 
          placeholder="Correo" 
          onChange={handleInput}
          />
          <input
          name="password"
          className="input" 
          type="password" 
          placeholder="Contraseña"
          onChange={handleInput}  
          />
          <button className="button">Registrarme</button>
          <div className="registry__container--log">
            <Link to="/login">
              <a href="/">Iniciar sesión</a>
            </Link>
          </div>
        </form>
    </section>
  </section>
)
}

export default Register;