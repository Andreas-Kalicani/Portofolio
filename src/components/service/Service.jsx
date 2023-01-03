import React from 'react';
import "./service.css";
import { BiCheck } from "react-icons/bi"; 


const Service = () => {
  return (
    <section id="service">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                   <h3>UI/UX Design</h3> 
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Conduct user research and analysis</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Create user flows and wireframes</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Design visual mockups and prototypes</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Conduct usability testing</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Develop user experience strategy</p>
                    </li>
                </ul>
            </article>
            {/*END OF UX/UI */}
            <article className="service">
                <div className="service__head">
                   <h3>Web Development</h3> 
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Write and maintain code for websites</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Create and customize web-based applications</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Integrate databases and servers</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Test and debug web applications</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Optimize website performance and speed</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Collaborate with designers and team members</p>
                    </li>
                </ul>
            </article>
            {/*WEB DEVELOPEMENT */}
            <article className="service">
                <div className="service__head">
                   <h3>Content Creation</h3> 
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Write and edit website content</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Create audio and video content</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Design visual content</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Collaborate with clients</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Optimize content for search engines</p>
                    </li>
                </ul>
            </article>
            {/*END OF CONTENT CREATION */}
        </div>
    </section>
  )
}

export default Service; 