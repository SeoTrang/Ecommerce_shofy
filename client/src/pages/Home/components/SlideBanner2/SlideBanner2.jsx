import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import './styles.css';

// import required modules
import {EffectFade, Mousewheel, Pagination } from 'swiper/modules';
import './SlideBanner2.css'
import { Link } from 'react-router-dom';

export default function SlideBanner2() {
  return (
    <div className='slide-banner2'>
        {/* <div>hello</div> */}
      <Swiper
        // direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        // mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="content-slide">
                <div className="contianer">
                    <div className="row">
                        <div className="col-12 col-xl-6 col-lg-6 content-left">
                            <span className='text-top'>
                                Tablet Collection 2023
                            </span>
                            <h1 className='mt-3'>
                                Galaxy Tab S6 Lite Android Tablet 
                            </h1>
                            <div className="price mt-3">
                                <div className="old-price">
                                    $320.00
                                </div>
                                <div className="current-price mt-1">
                                    $288.00
                                </div>

                            </div>

                            <div className="btn-buy mt-5">
                                <Link className="btn btn-md btn-dark text-white" >
                                    Shop now
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 col-lg-6 content-right">
                            <div className="img">
                                <img src="https://shofy-angular.vercel.app/assets/img/banner/banner-slider-1.png" alt="" />
                                <div className="img-absolute">
                                    <img src="https://shofy-angular.vercel.app/assets/img/banner/banner-slider-offer.png" alt="" />
                                </div>
                            </div>
                            
                            <span className='circle'>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="content-slide">
                <div className="contianer">
                    <div className="row">
                        <div className="col-12 col-xl-6 col-lg-6 content-left">
                            <span className='text-top'>
                                Tablet Collection 2023
                            </span>
                            <h1 className='mt-3'>
                                Galaxy Tab S6 Lite Android Tablet 
                            </h1>
                            <div className="price mt-3">
                                <div className="old-price">
                                    $320.00
                                </div>
                                <div className="current-price mt-1">
                                    $288.00
                                </div>

                            </div>

                            <div className="btn-buy mt-5">
                                <Link className="btn btn-md btn-dark" >
                                    Shop now
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 col-lg-6 content-right">
                            <div className="img">
                                <img src="https://shofy-angular.vercel.app/assets/img/banner/banner-slider-2.png" alt="" />
                                <div className="img-absolute">
                                    <img src="https://shofy-angular.vercel.app/assets/img/banner/banner-slider-offer.png" alt="" />
                                </div>
                            </div>
                            
                            <span className='circle'>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="content-slide">
                <div className="contianer">
                    <div className="row">
                        <div className="col-12 col-xl-6 col-lg-6 content-left">
                            <span className='text-top'>
                                Tablet Collection 2023
                            </span>
                            <h1 className='mt-3'>
                                Galaxy Tab S6 Lite Android Tablet 
                            </h1>
                            <div className="price mt-3">
                                <div className="old-price">
                                    $320.00
                                </div>
                                <div className="current-price mt-1">
                                    $288.00
                                </div>

                            </div>

                            <div className="btn-buy mt-5">
                                <Link className="btn btn-md btn-dark" >
                                    Shop now
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 col-lg-6 content-right">
                            <div className="img">
                                <img src="https://i.ibb.co/jvGv6qf/mobile-1.png" alt="" />
                                <div className="img-absolute">
                                    <img src="https://shofy-angular.vercel.app/assets/img/banner/banner-slider-offer.png" alt="" />
                                </div>
                            </div>
                            
                            <span className='circle'>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
            <img src="https://i.ibb.co/HK6jnjP/watch-10.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/RNrDzH7/watch-11.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/HCzgB0m/watch-12.png" alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}



// export default SlideBanner2;