import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/Logo.png'
import style from './NavBar.module.scss'

export const NavBar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
 

  return (
   <nav className={style.navigation}>
    <img className={style.logoImg} src={logo} alt="logo" />
    <p  className={style.date} style={{ fontStyle: 'italic', fontWeight:'bold' }}>4 -7 juli 2022</p>
    <ul className={style.navLinks}>
        <li><NavLink to="/">FORSIDE</NavLink></li>
        <li className={style.dropdown}
          onMouseOver={() => setShowSubMenu(true)} 
          onMouseOut={() => setShowSubMenu(false)}>
          <NavLink to="/events">EVENTS</NavLink>
          {showSubMenu && (
        <ul className={style.subMenu}>
              <li><NavLink to="/events/lineup">LINE-UP</NavLink></li>
              <li><NavLink to="/events/program">PROGRAM</NavLink></li>
        </ul>
         )}
        </li>
        <li><NavLink to="/camps">CAMPS</NavLink></li>
        <li><NavLink to="/tickets">BILETTER</NavLink></li>
        <li><NavLink to="/info">PRAKTISK INFO</NavLink></li>
        <li><NavLink to="/login">LOGIN</NavLink></li>
        <li> <FontAwesomeIcon className={style.searchIcon}icon={faSearch} /></li>
    </ul> 
   </nav>
  )
}
