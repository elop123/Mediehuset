import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import footerImg from '../../assets/images/Hancock logo.png'
import style from './SignUp.module.scss'

export const SignUp = () => {
  return (
    <section className={style.signUp} >
        <div className={style.textContainer}>
        <h3 className={style.title}>TILMELD NYHEDSBREV</h3>
        <p className={style.text}>Få de seneste nyheder sendt til din indbakke</p>
        </div>
        <div className={style.inputContainer}>
        <div className={style.iconWrapper}>
        <FontAwesomeIcon icon={faEnvelope} style={{ margin:'auto', backgroundColor:'grey' , padding:'0.295rem'}} />
      </div>
      <input
        className={style.input}
        type="email"
        placeholder="Indtast emailaddresse"
      />
       <button  className={style.btn} type="submit">
        TILMELD
      </button> 
    </div> 
    <img  className={style.footerImg} src={footerImg} alt="footerImg" />
    </section>
  )
}
