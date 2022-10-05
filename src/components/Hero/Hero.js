import React from 'react'
import yinka from "../../Assets/images/yinka.svg"
import message from "../../Assets/Icons/message - mobile.svg"

import "./hero.scss"
import { Link } from 'react-router-dom';

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
       <h3>PhD student</h3>

       <div className='hero__two-msg'>
           <p>I am a PhD student in Information Studies at the University of Wisconsin- Madison. I am working on topics revolving around Data in Artificial Intelligence. My current work examines the issues of digitization
                around Low-Resourced Languages. In addition,
                 I also explore UX methodologies in my research.
                 Research Interests:  Information Communication Technology & Development (ICTD), Artificial Intelligence for Development (AI4D), Smart Cities, E- Government.</p>

            <button className='btn'>Resume</button>
            <button><Link to="/about">About Me</Link></button>
       </div>
      </div>

      <Mailto email="ajibolayinka45@gmail.com" subject="Hello" body="Hello world!">
                            <button className="float">
                                 <img src={message} alt="" />
                            </button>
        </Mailto>

    
    </div>
  )
}

export default Hero
