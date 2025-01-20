import React from 'react'
import { FaAt } from 'react-icons/fa';
import {FaLock} from 'react-icons/fa'
import style from './LoginForm.module.scss'

export const LoginForm = ({email, password, setEmail, setPassword,  handleSubmit}) => {
  return (
    <form className={style.loginForm} onSubmit={handleSubmit}>
        <div className={style.loginContainer}>
    <div className={style.inputLine}>
      <FaAt className={style.icon} />
      <input className={style.inputField}
             type="email" 
             placeholder="Indtast din email"
             name="Email"
             id="emailField"
             onChange={(e) => setEmail(e.target.value)}
             value ={email} 
              />
    </div>
    <div className={style.inputLine}>
        <FaLock className={style.icon}/>
      <input className={style.inputField}
             type="password" 
             placeholder="Indtast adgangskode" 
             name="Password"
             id="passwordField"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             
             />
    </div>
    </div>
    <button type="submit" className={style.loginBtn} >
      LOGIN
    </button>
    
  </form>
  )
}
