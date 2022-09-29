import React from 'react'
import yinka from "../../Assets/images/yinka.svg"
import message from "../../Assets/Icons/message - mobile.svg"

import "./hero.scss"

function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__one'>
          <img src={yinka} alt="" />
          <div className='blur'></div>
      </div>

      <div className='hero__two'>
       <p className='parag'>YINKA AJIBOLA</p>
       <h3>UX RESEARCHER</h3>

       <div className='hero__two-msg'>
           <p>I’m a UX Researcher working on topics revolving
            around Data in Artificial Intelligence (AI). My 
            current research examines the issues of 
            digitization around Low-Resourced Languages.</p>

            <button className='btn'>View Projects</button>
            <button>About Me</button>
       </div>
      </div>

      <Mailto email="ajibolayinka45@gmail.com" subject="Hello" body="Hello world!">
                            <button className="float">
                                 <img src={message} alt="" />
                            </button>
        </Mailto>,

    
    </div>
  )
}

export default Hero
