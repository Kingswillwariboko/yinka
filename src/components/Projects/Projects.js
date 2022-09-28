import React from 'react'
import { data } from '../../Data'
import assets from "../../Assets/images/asset.svg"

import "./projects.scss"

const Projects = () => {
    const renderedData = <main className='projects__main'>
        {data.map((dat)=>{
            const {id, image, title, Description} = dat
            return(
                <div key={id} className='projects__main-one'>
                    <img src={assets} alt=""/>
                    <div className='title'>
                        <h3> {title} </h3>
                        <p> {Description} </p>
                    </div>
                    <div className='button'>
                        <button>View Case Study</button>
                    </div>       
                </div>
            )
        })}
    </main>

  return (
    <div className='projects'>
        <div className='projects__header'>
            <h3><span>UX PROJECTS</span> <br/> Case Studies</h3>
        </div>

        <div>
            {renderedData}
        </div>
    </div>
  )
}

export default Projects