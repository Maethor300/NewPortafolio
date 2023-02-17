import React from "react"
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 
const data = [
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Morbi elementum felis in nunc luctus, in rhoncus neque porta. Curabitur mi nisi, sodales vitae mattis quis, tempor vitae nisl. Sed ornare ornare neque. Duis convallis mauris ante. Pellentesque eget bibendum ligula. Cras in dolor arcu. Nam cursus velit mi, at porttitor metus ornare nec. Phasellus imperdiet urna aliquet, convallis lacus eget, cursus eros.'
  },
  {
    avatar:AVTR2,
    name:'Shatta Wale',
    review:'Morbi elementum felis in nunc luctus, in rhoncus neque porta. Curabitur mi nisi, sodales vitae mattis quis, tempor vitae nisl. Sed ornare ornare neque. Duis convallis mauris ante. Pellentesque eget bibendum ligula. Cras in dolor arcu. Nam cursus velit mi, at porttitor metus ornare nec. Phasellus imperdiet urna aliquet, convallis lacus eget, cursus eros.'
  },
  {
    avatar:AVTR3,
    name:'Kwame Despite',
    review:'Morbi elementum felis in nunc luctus, in rhoncus neque porta. Curabitur mi nisi, sodales vitae mattis quis, tempor vitae nisl. Sed ornare ornare neque. Duis convallis mauris ante. Pellentesque eget bibendum ligula. Cras in dolor arcu. Nam cursus velit mi, at porttitor metus ornare nec. Phasellus imperdiet urna aliquet, convallis lacus eget, cursus eros.'
  },
  {
    avatar:AVTR4,
    name:'Nana Ama McBrown',
    review:'Morbi elementum felis in nunc luctus, in rhoncus neque porta. Curabitur mi nisi, sodales vitae mattis quis, tempor vitae nisl. Sed ornare ornare neque. Duis convallis mauris ante. Pellentesque eget bibendum ligula. Cras in dolor arcu. Nam cursus velit mi, at porttitor metus ornare nec. Phasellus imperdiet urna aliquet, convallis lacus eget, cursus eros.'
  }
]
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
             // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1} 
                pagination={{ clickable: true }} 
            >
                 {
                    data.map(({avatar,name,review},index)=>{
                        return(
                            <SwiperSlide key={index} className="testimonial">
                               <div className="client__avatar">
                                <img src={avatar} alt="Avatar One" />
                               </div>
                               <h5 className="client__name">{name}</h5>
                               <small className="client__review">
                                {review}
                               </small>
                            </SwiperSlide>
                        )
                    })
                 }
            </Swiper>
        </section>
    )
}
export default Testimonials;