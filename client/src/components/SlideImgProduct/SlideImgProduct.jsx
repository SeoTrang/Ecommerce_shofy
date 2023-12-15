import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { EffectFade,FreeMode, Navigation, Thumbs } from 'swiper/modules';

import './SlideProduct.css';

export default function SlideImgProduct({listImg}) {
  if(listImg){
    // console.log(listImg);
  }
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sortedListImg = [...listImg].sort((a, b) => a.url.localeCompare(b.url));

  const [arrayImg, setArrayImg] = useState([]);

  useEffect(() => {
    setArrayImg(sortedListImg);
  }, [listImg]);

  useEffect(() => {
    // console.log(arrayImg);
  }, [arrayImg]);
  return (
      <div className="container">
        <div className='slide-product mb-3 row'>
          <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          // effect={'fade'}
          watchSlidesProgress={true}
          modules={[EffectFade, FreeMode, Navigation, Thumbs]}
          className="mySwiperImgThumb col-2 d-flex flex-column"
          
        >
          {
            arrayImg?
            arrayImg.map((value,index)=>{
              return (
                <SwiperSlide key={index}>
                  <img src={import.meta.env.VITE_API_URL+value.url} />
                </SwiperSlide>
              )
            })
            :
            <>
              <SwiperSlide>
                <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/zh9x3Q0/headphone-2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/JBZk7sS/headphone-3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/SrPq3r0/headphone-4.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/zh9x3Q0/headphone-2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/JBZk7sS/headphone-3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/SrPq3r0/headphone-4.png" />
              </SwiperSlide>
            </>
          }
          
          
          
        </Swiper>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          effect={'fade'}
          // navigation={true}
          thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
          modules={[EffectFade, Navigation, Thumbs]}
          className="mySwiperImgMain col-10"
        >
           {
            arrayImg?
            arrayImg.map((value,index)=>{
              return (
                <SwiperSlide key={index}>
                  <img src={import.meta.env.VITE_API_URL+value.url} />
                </SwiperSlide>
              )
            })
            :
            <>
              <SwiperSlide>
                <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/zh9x3Q0/headphone-2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/JBZk7sS/headphone-3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/SrPq3r0/headphone-4.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/zh9x3Q0/headphone-2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/JBZk7sS/headphone-3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/SrPq3r0/headphone-4.png" />
              </SwiperSlide>
            </>
          }
          
        </Swiper>
      
    </div>
      </div>
  );
}
