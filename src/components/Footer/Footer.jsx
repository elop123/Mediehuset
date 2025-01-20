import React from 'react'
import { SignUp } from '../Signup/SignUp'
import style from './Footer.module.scss'


export const Footer = () => {
  return (
    <footer className={style.footer}>
        <SignUp/>
    </footer>
  )
}
