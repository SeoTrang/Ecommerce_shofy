import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

import './SlideFade.css';
import 'animate.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function SlideFade() {
  return (
    <div className='slide-fade slide-main'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
          <div className='slide-fade-item'>
                <h1 className='animate__animated animate__slideInUp'>slide 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='slide-fade-item'>
            <h1 className='animate__animated animate__slideInUp'>slide 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='slide-fade-item'>
            <h1 className='animate__animated animate__slideInUp'>slide 3</h1>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
