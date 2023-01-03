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
                        <small>+3 Worldwide</small>
                    </article>

                    <article className="about__card">
                        <VscFolderLibrary className="about__icon" />
                        <h5>Projects</h5>
                        <small>10+ Projects</small>
                    </article>
                </div>
                <p>I'm a Frontend Developer with over 2 years of experience in HTML, CSS, JavaScript, React and more. My expertise lies in creating user-friendly, interactive web and mobile applications that are visually appealing and highly functional. I'm highly motivated, organized, and able to deliver projects on time and to the highest quality. With my experience and skills, I can help you take your project to the next level.

                </p>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>

       
    </section>
  )
}

export default About; 