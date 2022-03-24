import React from 'react';
import './sliderItem.css'
import { Swiper, SwiperSlide } from "swiper/react";

const SliderItem = (props) => {

   return (
      
         <img src={props.state.img} alt="" />
      
   );
};

export default SliderItem;
