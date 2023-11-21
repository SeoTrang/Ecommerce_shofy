import React, { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';

import './Detail.css';
import SlideDetail from './components/slide/SlideDetail';
import CardMd from '../../components/Card/CardMd/CardMd';
import SlideProduct from '../../components/SlideProduct/SlideProduct';
import ProductAPI from '../../service/NodejsServerAPI/ProductAPI';
import formatCurrencyVND from '../../../util/formatCurrencyVND';
import ListImgAPI from '../../service/NodejsServerAPI/ListImgAPI';
import DetailBottom from './components/DetailBottom/DetailBottom';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';

const Detail = () => {

    const search = useLocation().search;
    const productId = new URLSearchParams(search).get('id');
    console.log(productId);

    const [btnShowText,setBtnShowText] = useState(false);

    const handleShowText = () => {
        const text = document.getElementsByClassName('short-des-text')[0];
        text.classList.add('text-show')
        setBtnShowText(true);
    }

    

    const handleHiddenText = () => {
        const text = document.getElementsByClassName('short-des-text')[0];
        setBtnShowText(false);
        text.classList.remove('text-show')
    }

    

    const notify = () => toast.success('Add to cart successfully!');
    // toast.success('Add to cart successfully!');

    // products
    const [productName, setProductName] = useState();
    const [products,setProducts] = useState();
    const [product,setProduct] = useState();
    const [colorActive,setColorActive] = useState();

    useEffect(()=>{
        async function fetchData(){
            const result = await ProductAPI.GetDetail(productId);
            if(result) {
                console.log(result);
                setProduct(result);
                setProductName(result.Name)
                setColorActive(result.colors[0].id);
            }
        }
        fetchData();
    },[productId])

    useEffect(()=>{
        async function fetchData(){
            const result = await ProductAPI.GetByName(productName);
            if(result) {
                console.log(result);
                setProducts(result);
            }
        }
        fetchData();
    },[productName])

    const handleChangColorActive = (value) => {
        setColorActive(value);
    }


    const [listImg,setListImg] = useState([]);
    useEffect(()=>{
        // console.log(colorActive);
        async function fetchDataListImg(){
            let result = await ListImgAPI.GetByColor(colorActive);
            // console.log(result);
            if(result) setListImg(result);
        }
        fetchDataListImg();
    },[colorActive])


    return (
        <div className='shofy-app'>
            <div className="container mt-3 detail-product">
                <section className="route">
                    <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                    /
                    <span>
                        {
                            product?.Name
                        }
                    </span>
                </section>
                <section className='detail-top mb-5'>
                    <div className="row mt-4">
                        <div className="col-12 col-xl-6 col-lg-6 img-left">
                            <SlideDetail listImg = {listImg}/>
                        </div>
                        <div className="col-12 col-xl-6 col-lg-6 des-right">
                        
                                <div className="des-content">
                                    <div className="category">
                                        {
                                            product &&
                                            product.category.Name
                                        }
                                    </div>
                                    <div className="name">
                                        {
                                            product?.Name
                                        }
                                    </div>

                                    <div className="d-flex align-items-center mt-2">
                                        
                                        <span className="status me-2">in-stock</span>
                                        <span className='star'>
                                        {
                                             Array.from({ length: 5 }).map((_, index) => (
                                                <span className='ms-1' key={index}><i class="fa-solid fa-star"></i></span>
                                            ))
                                        }
                                        </span>
                                        <span className='number-rate ms-3'>(3 Reviews)</span>
                                        
                                    </div>
                                    
                                    
                                    {/* <div className="short-des mt-2">
                                        <div className="content">
                                            <span className='short-des-text text-hidden'>
                                            Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance
                                            
                                            </span>
                                            {
                                                !btnShowText ? 
                                                <button 
                                                onClick={handleShowText} 
                                                className='see-more'>
                                                    See more
                                                </button>
                                                :
                                                <button 
                                                onClick={handleHiddenText} 
                                                className='see-less'>
                                                    See less
                                                </button>
                                            }
                                        </div>
                                        
                                    </div> */}

                                    <div className="price mt-3">
                                      
                                            <span className="old-price me-2">
                                                {
                                                    product &&
                                                    product.colors.map((value,index)=>{
                                                        let price = (product.colors[index].id == colorActive)? product.colors[index].Price : null;
                                                        return (
                                                            product.colors[index].id == colorActive?
                                                            formatCurrencyVND(price)
                                                            :
                                                            null
                                                        )
                                                    })
                                                }
                                                ₫
                                            </span>
                                        
                                        
                                            <span className="current-price">
                                                {
                                                    product &&
                                                    product.colors.map((value,index)=>{
                                                        let price = (product.colors[index].id == colorActive)? product.colors[index].DiscountPrice : null;
                                                        return (
                                                            product.colors[index].id == colorActive?
                                                            formatCurrencyVND(price)
                                                            :
                                                            null
                                                        )
                                                    })
                                                }
                                                ₫
                                            </span>
                                        
                                    </div>
                                    <div className="versions mt-3 mb-3 d-flex flex-wrap align-items-center">
                                        
                                                {/* <Link className='me-2 version'>64GB</Link>
                                                <Link className='me-2 version version-active'>128GB</Link> */}
                                        {
                                            products && 
                                            products.map((value,index)=>{
                                                return (
                                                    <Link
                                                    key={index} 
                                                    className={'me-2 version '+(value.id == productId ? 'version-active' : '')}
                                                    to={`?id=${value.id}`}>{value.Version}</Link>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="colors mt-2">
                                        <div className="title">
                                            Color:
                                        </div>
                                        <div className="list-colors mt-2">
                                            {
                                                product &&
                                                (
                                                    product.colors.map((value,index)=>{
                                                        return (
                                                            <div 
                                                            key={index} 
                                                            className={"color "+(colorActive == value.id ? "color-active" : null)} 
                                                            style={{backgroundColor:value?.Color}}
                                                            onClick={()=>{handleChangColorActive(value.id)}}
                                                            >


                                                            </div>
                                                        )
                                                    })
                                                )
                                            }
                                            {/* <div className="color color-active" style={{backgroundColor:"#c1bae4"}}>

                                            </div>
                                            <div className="color " style={{backgroundColor:"#d8d7dd"}}>
                                                
                                            </div>
                                            <div className="color " style={{backgroundColor:"#f3c0d1"}}>
                                                
                                            </div>
                                            <div className="color " style={{backgroundColor:"#64bfd1"}}>
                                                
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="title-quantity mt-3">
                                        <div className="title">
                                            Quantity
                                        </div>
                                    </div>
                                    <div className="action-top mt-3">
                                        
                                        <div className="quantity">
                                            <button><i class="fa-solid fa-minus me-4"></i></button>
                                            <span>1</span>
                                            <button><i class="fa-solid fa-plus ms-4"></i></button>
                                        </div>
                                        <div className="add-to-cart ms-3"
                                            onClick={notify}
                                            >
                                            <button >Add To Cart</button>
                                            
                                        </div>
                                    </div>
                                    <div className="action-bottom mt-3">
                                        <button>Buy Now</button>
                                    </div>
                                        
                                    <div className="more-info mt-3 mb-4">
                                        <div className="sku mt-2 d-flex">
                                            <span>
                                                SKU:
                                            </span>
                                            <span className='value ms-2'>
                                                NTB7SDVX44
                                            </span>
                                        </div>
                                        <div className="category-sm mt-2 d-flex">
                                            <span>
                                                Category:
                                            </span>
                                            <span className='value ms-2'>
                                                Headphones
                                            </span>
                                        </div>
                                        <div className="tag mt-2 d-flex">
                                            <span>
                                                Tag:
                                            </span>
                                            <span className='value ms-2'>
                                                Android
                                            </span>
                                        </div>

                                    </div>
                                    
                                    <hr />

                                    <div className="incentives mt-4">
                                        <div className="share d-flex align-items-center">
                                            <span>
                                                Share:
                                            </span>
                                            <span className='value ms-2'>
                                                <span><i class="fa-brands fa-facebook-f"></i></span>
                                                <span><i class="fa-brands fa-twitter"></i></span>
                                                <span><i class="fa-brands fa-linkedin-in"></i></span>
                                                <span><i class="fa-brands fa-vimeo-v"></i></span>
                                            </span>
                                        </div>

                                        <div className="mt-4">
                                            <div className="return slogan">
                                                <span className='icon'>
                                                    <i class="fa-regular fa-circle-check"></i>
                                                </span>
                                                <div className="text ms-2">
                                                    0 days easy returns
                                                </div>
                                            </div>
                                            <div className="delivery-slogan slogan">
                                                <div className="icon">
                                                    <i class="fa-regular fa-circle-check"></i>
                                                </div>
                                                <div className="text ms-2">
                                                    Fast safe delivery
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="delivery row">
                                                <div className="text-left col-5">
                                                    Guaranteed safe
                                                    & secure checkout
                                                </div>

                                                <div className="col-7">
                                                    <img src="https://shofy-angular.vercel.app/assets/img/product/icons/payment-option.png" alt="" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    
                                    

                                     
                                </div>
                            
                        </div>
                    </div>
                </section>



                <DetailBottom product = {product}/>

                <RelatedProducts/>
            </div>
        </div>
    );
};

export default Detail;