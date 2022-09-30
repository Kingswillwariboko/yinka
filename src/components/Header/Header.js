import React from 'react'
import { Link } from 'react-router-dom'
import menu from "../../Assets/Icons/menu.svg"



import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo'>
            <p> <Link to="/">YINKA AJIBOLA</Link></p>
        </div>

        <div className='header__nav'>
            <img src={menu} alt="" />

            <ul>
                <li> <Link to="/about">About me</Link></li>
                <li>Ux projects</li>
                <li>Resume</li>
                <li>Contact me</li>
            </ul>
        </div>
    </div>
  )
}

export default Header