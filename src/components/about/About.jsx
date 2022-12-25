import React from 'react'
import "./about.css"; 
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";  
import  { FiUsers } from "react-icons/fi"; 
import { VscFolderLibrary } from "react-icons/vsc"; 


export const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="contaier about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Me" />
                </div>

            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>2+ Years</small>
                    </article>

                    <article className="about__card">
                        <FiUsers className="about__icon" />
                        <h5>Clients</h5>
                        <small>300+ Worldwide</small>
                    </article>

                    <article className="about__card">
                        <VscFolderLibrary className="about__icon" />
                        <h5>Experience</h5>
                        <small>2+ Years</small>
                    </article>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde maxime, pariatur, tempore explicabo saepe cumque quas 
                    libero perspiciatis delectus quam iste dolorem atque eligendi suscipit nesciunt dolor error ad?

                </p>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>

       
    </section>
  )
}

export default About; 