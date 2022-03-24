import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation, loop } from 'swiper'
import { useSwiper } from 'swiper/react';
import SliderItem from "../sliderItem/SliderItem";
import slides from '../../data.json'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/zoom"
import "./ourWorks.css";
SwiperCore.use([Autoplay])

// import required modules


export default function OurWorks() {

  return (
    <>
      <div id="ow" className="OurWorks container">
            <h2 className="OurWorks__tittle">Bizim işlərimiz</h2>
            <Swiper
         
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            autoplay = {{delay: 2000, 
               disableOnInteraction: false,
               pauseOnMouseEnter: true
            }}
            
            loopFillGroupWithBlank={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
           
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
               // when window width is >= 640px
              
               0: {
                
                 slidesPerView: 1,
               },
               // when window width is >= 768px
               768: {
            
                 slidesPerView: 2,
               },
             }}
            >
             
              {
                  slides.map(slide=> {
                     return <SwiperSlide key={slide.id}><SliderItem 	 state={slide} key={slide.id}/></SwiperSlide>
                  })
               }
             
            </Swiper>
            
      </div>
    </>
  );
}
