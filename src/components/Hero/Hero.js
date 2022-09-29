import React from 'react'
import yinka from "../../Assets/images/yinka.svg"


import "./hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__one'>
          <img src={yinka} alt="" />
      </div>

      <div className='hero__two'>
       <div className='blur'></div>
       <p className='parag'>YINKA AJIBOLA</p>
       <h3>UX RESEARCHER</h3>

       <div className='hero__two-msg'>
           <p>I’m a UX Researcher working on topics revolving
            around Data in Artificial Intelligence (AI). My 
            current research examines the issues of 
            digitization around Low-Resourced Languages.</p>

            <button>View Projects</button>
            <button>About Me</button>
       </div>
      </div>
    </div>
  )
}

export default Hero
