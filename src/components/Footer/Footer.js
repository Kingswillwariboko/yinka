import React from 'react'
import mail from "../../Assets/Icons/mail.svg"
import phone from "../../Assets/Icons/phone.svg"
import linkedin from "../../Assets/Icons/linkedin.svg"
import gates from "../../Assets/Icons/gate.svg"

import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__details'>
            <div>
                <h3>Contact</h3>
            </div>
            <p className='p'>Feel free to reach out to me any time.</p>

            <div className='mail'>
               <img src={mail} alt=""/>
               <p>ajibolayinka45@gmail.com</p>
            </div>

            <div className='mail'>
               <img src={phone} alt=""/>
                <p>502-510-7186</p>
            </div>

        </div>
        <div className='footer__icons'>
            <p>Follow me</p>

            <img src={linkedin} alt=""/>
            <img src={gates} alt=""/>
        </div>
    </div>
  )
}

export default Footer