import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import './Home.css';
import SlideFade from './components/SlideFade/SlideFade';
import { Link } from 'react-router-dom';
import CardMd from '../../components/Card/CardMd/CardMd';
import SlideProduct from '../../components/SlideProduct/SlideProduct';
import SlideBanner2 from './components/SlideBanner2/SlideBanner2';
import CardSm from '../../components/Card/CardSm/CardSm';

// api
import ProductAPI from '../../service/NodejsServerAPI/ProductAPI'
import TrendingProduct from './components/TrendingProduct/TrendingProduct';
import DealOfTheDay from './components/DealOfTheDay/DealOfTheDay';
import Electronics from './components/Electronics/Electronics';
import NewArrivals from './components/NewArrivals/NewArrivals';
import ElectronicSmProducts from './components/ElectronicSmProducts/ElectronicSmProducts';




const Home = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const array = [1,2,3,4,5,6,7];
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [slidesPerView, setSlidesPerView] = useState(3); // Mặc định là 4

    useEffect(() => {
      // Sử dụng `window.innerWidth` để xác định kích thước màn hình
        const screenWidth = window.innerWidth;
        console.log("screenWidth=" + screenWidth);
        if (screenWidth >= 1024) {
            setSlidesPerView(3); // Desktop, hiển thị 4 sản phẩm
        } else if (screenWidth >= 768) {
            setSlidesPerView(2); // Tablet, hiển thị 2 sản phẩm
        } else {
            setSlidesPerView(1); // Mobile, hiển thị 1 sản phẩm
        }
    }, []);

    const LinkOnclick = () => {
        console.log("clicked Link");
    }


    // api get product home
    useEffect(()=>{
        let result;
        async function fetchData() {
            result = await ProductAPI.GetAll();
            // console.log(result);
        }
        fetchData();
    }, []);

    return (
        <div className='home'>
            <SlideFade/>

            <div className="home-pages content-app mt-5">
                <section className="list-cate container">
                    <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4"> 
                    {/* row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 */}
                        <div className="col mb-5">
                            <Link className='cate-product text-center'>
                                <div className="img">
                                    <img src="https://i.ibb.co/sVxYFDY/product-cat-1.png" alt="" />
                                </div>
                                <div className="title mt-3">
                                    Headphones
                                    {/* {t('content.functional')} */}
                                </div>
                                <div onClick={()=>changeLanguage('en')} className="des">
                                    3 Product
                                </div>
                            </Link>
                            

                        </div>
                        <div className="col mb-5">
                            <Link className='cate-product text-center'>
                                <div className="img">
                                    <img src="https://i.ibb.co/xHFpQTV/product-cat-2.png" alt="" />
                                </div>
              
                                <div className="title mt-3">
                                    Mobile Tablets
                                </div>
                                <div className="des">
                                    3 Product
                                </div>
                            </Link>
                        </div>
                        <div className="col mb-5">
                            <Link className='cate-product text-center'>
                                <div className="img">
                                    <img src="https://i.ibb.co/S0GjZdp/product-cat-3.png" alt="" />
                                </div>
              
                                <div className="title mt-3">
                                    CPU Heat Pipes
                                </div>
                                <div className="des">
                                    2 Product
                                </div>
                            </Link>
                        </div>
                        <div className="col mb-5">
                            <Link className='cate-product text-center'>
                                <div className="img">
                                    <img src="https://i.ibb.co/g3YK8H2/product-cat-4.png" alt="" />
                                </div>
              
                                <div className="title mt-3">
                                    Smart Watch
                                </div>
                                <div className="des">
                                    3 Product
                                </div>
                            </Link>
                        </div>
                        <div className="col mb-5">
                            <Link className='cate-product text-center'>
                                <div className="img">
                                    <img src="https://i.ibb.co/D9qfYWX/product-cat-5.png" alt="" />
                                </div>
              
                                <div className="title mt-3">
                                    Bluetooth
                                </div>
                                <div className="des">
                                    2 Product
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>  

                <section className='slogan container'>
                {/* <div className="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2"> */}
                    <div className="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2">
                        <div className="col-12 col-xl-3 col-lg-3 col-md-6 mb-3">
                            <div className='d-flex align-items-center slogan-item slogan-item-1'>
                                <div className="icon-left me-3">
                                    <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.7222 1H31.5555V19.0556H10.7222V1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.7222 7.94446H5.16667L1.00001 12.1111V19.0556H10.7222V7.94446Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.3055 26C23.3879 26 21.8333 24.4454 21.8333 22.5278C21.8333 20.6101 23.3879 19.0555 25.3055 19.0555C27.2232 19.0555 28.7778 20.6101 28.7778 22.5278C28.7778 24.4454 27.2232 26 25.3055 26Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.25001 26C5.33235 26 3.77778 24.4454 3.77778 22.5278C3.77778 20.6101 5.33235 19.0555 7.25001 19.0555C9.16766 19.0555 10.7222 20.6101 10.7222 22.5278C10.7222 24.4454 9.16766 26 7.25001 26Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className="text-right">
                                    <div className="title">
                                        Free Delivery
                                    </div>
                                    <div className="des">
                                        Orders from all item
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className="col-12 col-xl-3 col-lg-3 col-md-6 mb-3">
                            <div className='d-flex align-items-center slogan-item'>
                                <div className="icon-left me-3">
                                    <svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3636 1V34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.8636 7H6.61365C5.22126 7 3.8859 7.55312 2.90134 8.53769C1.91677 9.52226 1.36365 10.8576 1.36365 12.25C1.36365 13.6424 1.91677 14.9777 2.90134 15.9623C3.8859 16.9469 5.22126 17.5 6.61365 17.5H14.1136C15.506 17.5 16.8414 18.0531 17.826 19.0377C18.8105 20.0223 19.3636 21.3576 19.3636 22.75C19.3636 24.1424 18.8105 25.4777 17.826 26.4623C16.8414 27.4469 15.506 28 14.1136 28H1.36365" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                                </div>
                                <div className="text-right">
                                    <div className="title">
                                        Return & Refund
                                    </div>
                                    <div className="des">
                                        Money back guarantee
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className="col-12 col-xl-3 col-lg-3 col-md-6 mb-3">
                            <div className='d-flex align-items-center slogan-item'>
                                <div className="icon-left me-3">
                                    <svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3636 1V34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.8636 7H6.61365C5.22126 7 3.8859 7.55312 2.90134 8.53769C1.91677 9.52226 1.36365 10.8576 1.36365 12.25C1.36365 13.6424 1.91677 14.9777 2.90134 15.9623C3.8859 16.9469 5.22126 17.5 6.61365 17.5H14.1136C15.506 17.5 16.8414 18.0531 17.826 19.0377C18.8105 20.0223 19.3636 21.3576 19.3636 22.75C19.3636 24.1424 18.8105 25.4777 17.826 26.4623C16.8414 27.4469 15.506 28 14.1136 28H1.36365" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                                </div>
                                <div className="text-right">
                                    <div className="title">
                                        Member Discount
                                    </div>
                                    <div className="des">
                                        Onevery order over $140.00
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className="col-12 col-xl-3 col-lg-3 col-md-6 mb-3">
                            <div className='d-flex align-items-center slogan-item slogan-item-4'>
                                <div className="icon-left me-3">
                                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 24.3333V15C1.5 11.287 2.975 7.72602 5.60051 5.10051C8.22602 2.475 11.787 1 15.5 1C19.213 1 22.774 2.475 25.3995 5.10051C28.025 7.72602 29.5 11.287 29.5 15V24.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M29.5 25.8889C29.5 26.714 29.1722 27.5053 28.5888 28.0888C28.0053 28.6722 27.214 29 26.3889 29H24.8333C24.0082 29 23.2169 28.6722 22.6335 28.0888C22.05 27.5053 21.7222 26.714 21.7222 25.8889V21.2222C21.7222 20.3971 22.05 19.6058 22.6335 19.0223C23.2169 18.4389 24.0082 18.1111 24.8333 18.1111H29.5V25.8889ZM1.5 25.8889C1.5 26.714 1.82778 27.5053 2.41122 28.0888C2.99467 28.6722 3.78599 29 4.61111 29H6.16667C6.99179 29 7.78311 28.6722 8.36656 28.0888C8.95 27.5053 9.27778 26.714 9.27778 25.8889V21.2222C9.27778 20.3971 8.95 19.6058 8.36656 19.0223C7.78311 18.4389 6.99179 18.1111 6.16667 18.1111H1.5V25.8889Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </div>
                                <div className="text-right">
                                    <div className="title">
                                        Support 24/7
                                    </div>
                                    <div className="des">
                                        Contact us 24 hours a day
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </section>

                <TrendingProduct/>

                <section className='shofy-banner-1'>
                    <div className="container">
                        <div className="row row-col-xl-2 row-col-lg-2 ">
                            <div className="col-12 col-xl-7 col-lg-6 col-parrent mb-4">
                                <div className="col-left col-item">
                                    <div className="banner-content ">
                                        <span>
                                            Sale 20% off all store
                                        </span>
                                        <h1 className='mt-3'>
                                            Smartphone <br /> BLU G91 Pro 2022
                                        </h1>
                                        <br/>
                                        <Link className='mt-5'>
                                            <span className='me-2'>Shop Now</span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-5 col-lg-6 col-parrent mb-4">
                                
                                <div className="col-right col-item">
                                        
                                        <h4 className=''>
                                        HyperX Cloud II <br /> Wireless
                                        </h4>
                                        <h6 className='mt-3'>
                                            Sale 35% off
                                        </h6>
                                        <br />
                                        <Link className='mt-5'>
                                            <span className='me-2'>Shop Now</span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <DealOfTheDay/>

                <Electronics/>

                <section className='shofy-banner-2'>
                    <div className="container" style={{backgroundColor:"#0989FF"}}>
                        <SlideBanner2/>
                    </div>
                </section>

                <NewArrivals/>

                <ElectronicSmProducts/>

                <section className='news-articles'>
                    <div className="container">
                    <div className="title-top">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-12 col-xl-4 col-lg-4 col-md-6  title">
                                    <h1>
                                        Latest news & articles
                                    </h1>
                                </div>
                                <div className=" col-xl-5 col-lg-5 d-none d-xl-block d-lg-block line">
                                    <hr />
                                </div>
                                <div className="col-12 col-xl-3 col-lg-3 col-md-6  action d-flex align-items-center justify-content-end align-items-sm-start">
                                    <div className="aciton ps-md-5">
                                        <button className='btn btn-primary btn-md'>
                                            <span className='me-2'>
                                                View All Blogs
                                            </span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="slider-news mt-4">
                       
                            <Swiper
                                slidesPerView={slidesPerView}
                                spaceBetween={30}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>

                                    <div className='news container'>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="img">
                                                    <img src="https://shofy-angular.vercel.app/assets/img/blog/blog-1.jpg" alt="" />
                                                </div>
                                                <h5 className="title mt-4">
                                                    The Modern Art Clay Ceramics.
                                                </h5>
                                                <div className="tag">
                                                    <i class="fa-solid fa-tag"></i>
                                                    <span className='ms-1'>
                                                        Tablet
                                                    </span>
                                                    ,
                                                    <span className='ms-1'>News</span>
                                                </div>
                                                <div className="short-des mt-3">
                                                    The world is an amazing place providing an incredible assortment of interesting locations across.
                                                </div>

                                                <div className="action-button">
                                                    <Link className='btn btn-sm mt-4'>
                                                        <span className='me-2'>Read More</span>
                                                        <i class="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className='news container'>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="img">
                                                    <img src="https://shofy-angular.vercel.app/assets/img/blog/blog-2.jpg" alt="" />
                                                </div>
                                                <h5 className="title mt-4">
                                                    How clothes are linked to climate
                                                </h5>
                                                <div className="tag">
                                                    <i class="fa-solid fa-tag"></i>
                                                    <span className='ms-1'>
                                                        Tablet
                                                    </span>
                                                    ,
                                                    <span className='ms-1'>News</span>
                                                </div>
                                                <div className="short-des mt-3">
                                                    The world is an amazing place providing an incredible assortment of interesting locations across.
                                                </div>

                                                <div className="action-button">
                                                    <Link className='btn btn-sm mt-4'>
                                                        <span className='me-2'>Read More</span>
                                                        <i class="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className='news container'>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="img">
                                                    <img src="https://shofy-angular.vercel.app/assets/img/blog/blog-3.jpg" alt="" />
                                                </div>
                                                <h5 className="title mt-4">
                                                    The Sound Of Fashion: Malcolm
                                                </h5>
                                                <div className="tag">
                                                    <i class="fa-solid fa-tag"></i>
                                                    <span className='ms-1'>
                                                        Tablet
                                                    </span>
                                                    ,
                                                    <span className='ms-1'>News</span>
                                                </div>
                                                <div className="short-des mt-3">
                                                    The world is an amazing place providing an incredible assortment of interesting locations across.
                                                </div>

                                                <div className="action-button">
                                                    <Link className='btn btn-sm mt-4'>
                                                        <span className='me-2'>Read More</span>
                                                        <i class="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className='news container'>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="img">
                                                    <img src="https://shofy-angular.vercel.app/assets/img/blog/blog-1.jpg" alt="" />
                                                </div>
                                                <h5 className="title mt-4">
                                                    The Modern Art Clay Ceramics.
                                                </h5>
                                                <div className="tag">
                                                    <i class="fa-solid fa-tag"></i>
                                                    <span className='ms-1'>
                                                        Tablet
                                                    </span>
                                                    ,
                                                    <span className='ms-1'>News</span>
                                                </div>
                                                <div className="short-des mt-3">
                                                    The world is an amazing place providing an incredible assortment of interesting locations across.
                                                </div>

                                                <div className="action-button">
                                                    <Link className='btn btn-sm mt-4'>
                                                        <span className='me-2'>Read More</span>
                                                        <i class="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>

                                    <div className='news container'>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="img">
                                                    <img src="https://shofy-angular.vercel.app/assets/img/blog/blog-2.jpg" alt="" />
                                                </div>
                                                <h5 className="title mt-4">
                                                    How clothes are linked to climate
                                                </h5>
                                                <div className="tag">
                                                    <i class="fa-solid fa-tag"></i>
                                                    <span className='ms-1'>
                                                        Tablet
                                                    </span>
                                                    ,
                                                    <span className='ms-1'>News</span>
                                                </div>
                                                <div className="short-des mt-3">
                                                    The world is an amazing place providing an incredible assortment of interesting locations across.
                                                </div>

                                                <div className="action-button">
                                                    <Link className='btn btn-sm mt-4'>
                                                        <span className='me-2'>Read More</span>
                                                        <i class="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className='news container'>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="img">
                                                    <img src="https://shofy-angular.vercel.app/assets/img/blog/blog-3.jpg" alt="" />
                                                </div>
                                                <h5 className="title mt-4">
                                                    The Sound Of Fashion: Malcolm
                                                </h5>
                                                <div className="tag">
                                                    <i class="fa-solid fa-tag"></i>
                                                    <span className='ms-1'>
                                                        Tablet
                                                    </span>
                                                    ,
                                                    <span className='ms-1'>News</span>
                                                </div>
                                                <div className="short-des mt-3">
                                                    The world is an amazing place providing an incredible assortment of interesting locations across.
                                                </div>

                                                <div className="action-button">
                                                    <Link className='btn btn-sm mt-4'>
                                                        <span className='me-2'>Read More</span>
                                                        <i class="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            </Swiper>
                    
                        </div>
                    </div>
                </section>

                <section className='subscribe mt-5'>
                    <div className="shape d-flex align-content-start justify-content-between">
                        <div className="img-left">
                            <img src="https://shofy-angular.vercel.app/assets/img/subscribe/subscribe-shape-1.png" alt="" />
                        </div>
                        <div className="img-right me-5">
                            <img className='me-5' src="https://shofy-angular.vercel.app/assets/img/subscribe/subscribe-shape-4.png" alt="" />
                        </div>
                    </div>
                    <div className="container pt-70 pb-65">
                        <div className="row">
                            <div className="col-12 col-xl-7 col-lg-7">
                                <div className="title-left">
                                    <div className="text-top">
                                        <span>SALE 20% OFF ALL STORE</span>
                                    </div>
                                    <div className="text-bottom">
                                        <h1>
                                            Subscribe our Newsletter
                                        </h1>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-xl-5 col-lg-5">
                                <div className="input-right d-flex justify-content-center">
                                    <div class="input-group row">
                                        <input type="email" class="form-control col-9" placeholder="Enter Your Email" aria-label="" aria-describedby="button-addon2"/>
                                        <button class="btn btn-outline-secondary btn-dark col-3" type="button" id="button-addon2">Subscribe</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </div>

            
        </div>
    );
};

export default Home;