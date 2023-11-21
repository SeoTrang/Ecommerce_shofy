import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import CardMd from '../Card/CardMd/CardMd';
const SlideProduct = ({products}) => {
    const [slidesPerView, setSlidesPerView] = useState(4); // Mặc định là 4

    useEffect(() => {
      // Sử dụng `window.innerWidth` để xác định kích thước màn hình
        const screenWidth = window.innerWidth;
        console.log("screenWidth=" + screenWidth);
        if (screenWidth >= 1024) {
            setSlidesPerView(4); // Desktop, hiển thị 4 sản phẩm
        } else if (screenWidth >= 768) {
            setSlidesPerView(2); // Tablet, hiển thị 2 sản phẩm
        } else {
            setSlidesPerView(1); // Mobile, hiển thị 1 sản phẩm
        }
    }, []);
    return (
        <div className='slide-product'>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        products?
                        products.map((value,index) => {
                            return (
                                <SwiperSlide>

                                    <CardMd item={value}/>
                                </SwiperSlide>
                            )
                        })
                        :
                        <>
                        <SwiperSlide>

                        <CardMd/>
                        </SwiperSlide>
                        <SwiperSlide>

                        <CardMd/>
                        </SwiperSlide>

                        <SwiperSlide>

                        <CardMd/>
                        </SwiperSlide>

                        <SwiperSlide>

                        <CardMd/>
                        </SwiperSlide>

                        <SwiperSlide>

                        <CardMd/>
                        </SwiperSlide>

                        <SwiperSlide>

                        <CardMd/>
                        </SwiperSlide>
                        </>
                    }
                    
                </Swiper>
        </div>
    );
};

export default SlideProduct;