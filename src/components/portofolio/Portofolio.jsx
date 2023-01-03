import React from 'react';
import "./portofolio.css";
import data from "./data"; 
const Portofolio = () => {
   
  return (
   <section id="portofolio">
    <h5>My Recent Work</h5>
    <h2>Portofolio</h2>
    
    <div className="container portofolio__container">
        {
            data.map(({id, image, title ,github, demo, alt}) => {
                return (
                    <article key={id} className="portofolio__item">
                        <div className="portofolio__item-image">
                            <img src={image} alt={alt} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portofolio__item-cta">
                            <a href={github} className="btn" target="_blankf">Github</a>
                            <a href={demo} className="btn btn-primary">Live Demo</a>
                        </div>
                    </article>
                )
            })
        }

    </div>
   </section>
  )
}

export default Portofolio; 