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

import shape1 from './shape/slider-shape-1.png'
import shape2 from './shape/slider-shape-2.png'
import shape3 from './shape/slider-shape-3.png'
import shape4 from './shape/slider-shape-4.png'

export default function SlideFade() {
    const [slideActive,setSlideActive] = useState(0);
    const handleChangeSlideActive = (index)=>{
        setSlideActive(index);
    }
    return (
        <div className='slide-fade slide-main'>
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            // navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
            onSlideChange={(swiper) => {console.log('slide change : ', swiper?.activeIndex); return handleChangeSlideActive(swiper.activeIndex)}}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
            
                <div className='slide-fade-item p-relative z-index-1 d-flex align-items-center '>
                        {/* <h1 className={slideActive == 0 && 'animate__animated animate__slideInUp'}>slide 1</h1> */}
                    
                    <div className="shofy-slide-fade w-100">
                        <div className="shape">
                            <img src={shape1} className={slideActive == 0 ? ('shape1 animate__animated animate__slideInDown animate__delay-1s') : "d-none"} alt="" />
                            <img src={shape2} className={slideActive == 0 ? ('shape2 animate__animated animate__slideInUp') : "d-none"} alt="" />
                            <img src={shape3} className={slideActive == 0 ? ('shape3 animate__animated animate__slideInUp') : "d-none"} alt="" />
                            <img src={shape4} className={slideActive == 0 ? ('shape4 animate__animated animate__slideInDown') : "d-none"} alt="" />
                        </div>
                        <div className="container text-left content-slide">
                            <div className="row align-items-center shofy-mh align-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-6 shofy-mh-366">
                                    <div className={slideActive == 0 ? (' my-animation-fade-up my-animation-dl-05') : "d-none"}>
                                        <span>Starting at </span>
                                        <b>$274</b>
                                    </div>
                                    <h1 className={slideActive == 0 ? (' my-animation-fade-up my-animation-dl-07') : "d-none"}>
                                        The best tablet Collection 2023
                                    </h1>
                                    <div className={slideActive == 0 ? (' my-animation-fade-up my-animation-dl-09 text-bottom mt-2') : "d-none"}>
                                        <p>
                                            Exclusive offer  
                                            <span className='discount me-1 ms-1'>
                                                -35% 
                                                {/* <svg _ngcontent-ng-c3340875127="" width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3340875127="" d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path></svg> */}
                                                </span>
                                            off this week
                                        </p>
                                    </div>

                                    <button className={slideActive == 0 ? (' my-animation-fade-up my-animation-dl-010 btn btn-lg bg-white mt-4') : "d-none"}>
                                        Shop now <i class="fa-solid fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6 ">
                                    <div className="text-end">
                                        <img className={slideActive == 0 ? (' my-animation-fade-up my-animation-dl-09') : "d-none"} src="https://shofy-angular.vercel.app/assets/img/slider/slider-img-1.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide>
            
            <div className='slide-fade-item p-relative z-index-1 d-flex align-items-center'>
                        {/* <h1 className={slideActive == 0 && 'animate__animated animate__slideInUp'}>slide 1</h1> */}
                    
                    <div className="shofy-slide-fade w-100">
                        <div className="shape">
                            <img src={shape1} className={slideActive == 1 ? ('shape1 animate__animated animate__slideInDown animate__delay-1s') : "d-none"} alt="" />
                            <img src={shape2} className={slideActive == 1 ? ('shape2 animate__animated animate__slideInUp') : "d-none"} alt="" />
                            <img src={shape3} className={slideActive == 1 ? ('shape3 animate__animated animate__slideInUp') : "d-none"} alt="" />
                            <img src={shape4} className={slideActive == 1 ? ('shape4 animate__animated animate__slideInDown') : "d-none"} alt="" />
                        </div>
                        <div className="container text-left content-slide">
                            <div className="row shofy-mh align-items-center align-content-center">
                                <div className="col-12 col-xl-5 col-lg-6 col-md-6 shofy-mh-366">
                                    <div className={slideActive == 1 ? (' my-animation-fade-up my-animation-dl-05') : "d-none"}>
                                        <span>Starting at </span>
                                        <b>$999</b>
                                    </div>
                                    <h1 className={slideActive == 1 ? (' my-animation-fade-up my-animation-dl-07') : "d-none"}>
                                        The best note book collection 2023
                                    </h1>
                                    <div className={slideActive == 1 ? (' my-animation-fade-up my-animation-dl-09 text-bottom mt-2') : "d-none"}>
                                        <p>
                                            Exclusive offer  
                                            <span className='discount me-1 ms-1'>
                                                -10% 
                                                {/* <svg _ngcontent-ng-c3340875127="" width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3340875127="" d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path></svg> */}
                                                </span>
                                            off this week
                                        </p>
                                    </div>

                                    <button className={slideActive == 1 ? (' my-animation-fade-up my-animation-dl-010 btn btn-lg bg-white mt-4') : "d-none"}>
                                        Shop now <i class="fa-solid fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                                <div className="col-12 col-xl-7 col-lg-6 col-md-6">
                                    <div className="text-end">
                                        <img className={slideActive == 1 ? (' my-animation-fade-up my-animation-dl-09') : "d-none"} src="https://shofy-angular.vercel.app/assets/img/slider/slider-img-2.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            
          
            </SwiperSlide>
            <SwiperSlide>
            
            <div className='slide-fade-item shofy-slide-fade-light  p-relative z-index-1 d-flex align-items-center'>
                        {/* <h1 className={slideActive == 0 && 'animate__animated animate__slideInUp'}>slide 1</h1> */}
                    
                    <div className="shofy-slide-fade w-100">
                        <div className="shape">
                            <img src={shape1} className={slideActive == 2 ? ('shape1 animate__animated animate__slideInDown animate__delay-1s') : "d-none"} alt="" />
                            <img src={shape2} className={slideActive == 2 ? ('shape2 animate__animated animate__slideInUp') : "d-none"} alt="" />
                            <img src={shape3} className={slideActive == 2 ? ('shape3 animate__animated animate__slideInUp') : "d-none"} alt="" />
                            <img src={shape4} className={slideActive == 2 ? ('shape4 animate__animated animate__slideInDown') : "d-none"} alt="" />
                        </div>
                        <div className="container text-left content-slide">
                            <div className="row shofy-mh align-items-center align-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-6 shofy-mh-366">
                                    <div className={slideActive == 2 ? (' my-animation-fade-up my-animation-dl-05') : "d-none"}>
                                        <span>Starting at </span>
                                        <b>$274</b>
                                    </div>
                                    <h1 className={slideActive == 2 ? (' my-animation-fade-up my-animation-dl-07') : "d-none"}>
                                        The best tablet Collection 2023
                                    </h1>
                                    <div className={slideActive == 2 ? (' my-animation-fade-up my-animation-dl-09 text-bottom mt-2') : "d-none"}>
                                        <p>
                                            Exclusive offer  
                                            <span className='discount me-1 ms-1'>
                                                -35% 
                                                {/* <svg _ngcontent-ng-c3340875127="" width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3340875127="" d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path></svg> */}
                                                </span>
                                            off this week
                                        </p>
                                    </div>

                                    <button className={slideActive == 2 ? (' my-animation-fade-up my-animation-dl-010 btn btn-lg bg-white mt-4') : "d-none"}>
                                        Shop now <i class="fa-solid fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6 ">
                                    <div className="text-end">
                                        <img className={slideActive == 2 ? (' my-animation-fade-up my-animation-dl-09') : "d-none"} src="https://shofy-angular.vercel.app/assets/img/slider/slider-img-3.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            
            
            </SwiperSlide>
        
        </Swiper>
        </div>
    );
}
