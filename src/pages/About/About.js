import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import cisco from "../../Assets/images/cisco.svg"
import aws from "../../Assets/images/aws.svg"
import pm from "../../Assets/images/PM.svg"
import scrum from "../../Assets/images/scrum.svg"
import pmp from "../../Assets/images/pmp.svg"

import "./about.scss"
import { Link } from 'react-router-dom'

const About = () => {
  return (
      <>
      <Header />
    <div className='about'>
        
      <div className='about__one'>
          <h3>ABOUT ME</h3>

        <p>I am a Ph.D. student at the Information School (iSchool) at the University of Wisconsin- Madison. Prior to this, I obtained my master's in Political Science (M.A) and Information Communication Sciences (M.Sc). </p>

          <p>Currently, I am working on topics revolving around 'Data' in Artificial Intelligence (AI). My current research examines the issues of digitization around Low-Resourced Languages. This involves the issue surrounding data collection/acquisition for advanced computer processing. Specifically, I am looking at the dynamics of relevant 'Data' for Machine Translation of low-resourced languages ~ African languages. I hope to carry out field research in relation to data acquisition in developing nations.</p> 

           <p> I am always happy to talk about research, sports (especially soccer), or fieldwork. Whether looking for a research collaborator or a conversation, do not hesitate to email me and/or follow me on social media.
        </p>
      </div>

      

      <div className='about__two'>

          <div className='about__two-msg'>
              <p>SKILLS & CERTIFICATION</p>
              <h3>Certifications</h3>
          </div>

          <div className='about__two-img'>
                <img src={cisco} alt=""/>
                <img src={scrum} alt=""/>
                <img src={pm} alt=""/>
                <img src={aws} alt=""/> 
                <img src={pmp} alt=""/>
          </div>
            
      </div>

      <div className='about__three'>

      <div className='edu'>
              <h3>Academic Projects</h3>
              <Link to={{ pathname: "https://www.researchgate.net/publication/364087926_E-voting_vs_Traditional_Paper-based_voting_system" }} target="_blank" > <p>Paper in Modern voting systems: Paper Voting vs E-voting</p> </Link>

              <Link to={{ pathname: "https://www.linkedin.com/in/yinkaaji/" }} target="_blank"> <p>Social media influence on corruption in developing countries</p> </Link>

              <Link to={{ pathname: "https://www.researchgate.net/publication/333633336_Presidential_Approval_Rating_on_Midterm_Election" }} target="_blank"><p>Presidential Approval Rating on Mid-term election</p> </Link>

              <Link to={{ pathname: "https://www.researchgate.net/publication/337682685_DYNAMIC_TERRORIST_STRATEGY_A_CASE_STUDY_OF_ISIS_IN_SYRIA_AND_BOKO_HARAM_IN_NIGERIA" }} target="_blank"> <p>Dynamic Terrorist Strategy </p> </Link>

              <Link to={{ pathname: "https://www.researchgate.net/publication/333878647_THE_GREEN_PARTIES_IN_THE_UNITED_KINGDOM" }} target="_blank"> <p>The Green Parties in United Kingdom</p> </Link>

          </div>
       <hr/>
          <div className='edu'>
              <h3>Presentations</h3>
              <div>
                <h4>LOC World Conference </h4>
                <Link to={{ pathname: "https://locworld.com/sessions/the-african-languages-lab-exploring-the-african-languages-landscape-and-technologies/" }} target="_blank">   <p>Title: The African Languages Lab: Exploring the African Languages Landscape and Technologies</p> </Link>
              </div>

              <div>
                <h4>Artificial Intelligence (AI) + Society mini-talks</h4>
                <p>Title:  What moral stance does GPT-3 take when discussing contemporary issues?</p>
              </div>

          </div>
        <hr/>
          <div className='ux'>
              <h3>UX Skills</h3>
              <p>User Interview, Survey, User Persona, Competitive Analysis, Literature Review, Diary Studies.</p>
             <p>Tools</p>
            <p> Qualtrics, MS Suites, SPSS, R, Google Sheet</p>
          </div>

          <hr/>

          <div className='edu'>
              <h3>Education</h3>
              <p>Bachelor’s Degree: Mount Mercy University, Iowa -  2017</p>

            <p>Masters Degree:   Political Science, Indiana -  2021</p>

            <p>Masters of Science:  Information Communication Science, Indiana -  2021</p>

            <p>Ph.D - Information Science -  Madison Wisconsin (expected graduation 2025)</p>

          </div>
         
      </div>
    </div>

    <Footer />
    </>
  )
}

export default About
