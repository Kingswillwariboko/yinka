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

       
    </div>
  )
}

export default Header