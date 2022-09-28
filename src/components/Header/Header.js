import React from 'react'
import menu from "../../Assets/Icons/menu.svg"


import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo'>
            <p>YINKA AJIBOLA</p>
        </div>

        <div className='header__nav'>
            <img src={menu} alt="" />
        </div>
    </div>
  )
}

export default Header