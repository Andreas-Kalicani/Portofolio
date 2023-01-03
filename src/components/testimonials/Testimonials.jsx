import React from 'react'; 
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onClick={() => Swiper.slideNext()}
      >
      
        <SwiperSlide className="container testimonials__container" >

        <article className="testimonial">
          <div className="client__avatar">
          <img src={AVTR1} alt="avatar1" />
          </div>
        <h5 className='client__name'>Christina Gier</h5>
        <small className="client__review">
        I had the pleasure of working with Andreas Gjertsen and I can honestly say that he is an absolute asset to any team. His technical knowledge is second to none and he is highly motivated to deliver the best results. Andreas is a great communicator who is able to explain complex concepts in a straightforward way. I would recommend Andreas without hesitation, he is a real pro!
        </small>
        </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="testimonial">
          <div className="client__avatar">
          <img src={AVTR2} alt="avatar1" />
          </div>
        <h5 className='client__name'>Ernest Achiever</h5>
        <small className="client__review">
        As a project manager, I have had the pleasure of working with Andreas on several projects. His attention to detail and ability to bring a project to life through stunning visuals has consistently impressed me. Not only is he skilled in his craft, but he is also a valuable team player and a pleasure to work with. I highly recommend for any project requiring top-notch frontend development.
        </small>
        </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="testimonial">
          <div className="client__avatar">
          <img src={AVTR3} alt="avatar1" />
          </div>
        <h5 className='client__name'>Ernest Achiever</h5>
        <small className="client__review">
        I have had the pleasure of working with Andreas as a frontend developer on several projects and have consistently been impressed by his strong technical skills and attention to detail. He is a reliable and efficient worker, always going above and beyond to ensure that the final product meets the highest standards. I highly recommend Andreas as a frontend developer.
        </small>
        </article>
        </SwiperSlide>
    
      </Swiper>
    </section>
  )
}

export default Testimonials; 