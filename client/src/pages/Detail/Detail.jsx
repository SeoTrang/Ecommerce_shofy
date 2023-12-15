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
import OptionAPI from '../../service/NodejsServerAPI/OptionAPI';
import { useDispatch } from 'react-redux';
import { addToCart, fetchCartData } from '../../redux/actions/cartAction';

const Detail = () => {

    const search = useLocation().search;
    const productId = new URLSearchParams(search).get('id');
    // const [productId,setProductId] = useState();
    console.log(productId);

    const [product,setProduct] = useState();
    const [quantity,setQuantity] = useState(1);
    
    const minusQuantity = () =>{
        if(quantity <= 1){
            toast.error('Giá trị không được nhỏ hơn 1')
            return;
        }
        setQuantity(quantity-1)
    }

    const plusQuantity = () =>{
        setQuantity(quantity+1)
    }

    const [option,setOption] = useState();
    const [variantion,setVariantion] = useState();
    useEffect(()=>{
        // console.log(item);
        if(!productId) return;
        async function fetchData() {
            let result = await ProductAPI.GetById(productId);
            if(result) {
                console.log(result);
                setOption(result.options)
                return setProduct(result);
            }

        }

        fetchData();
        
    },[productId])
   

    

    const [listImg,setListImg] = useState([]);
    let [optionActive,setOptionActive] = useState({})




    // useEffect(()=>{
    //     console.log(optionActive);
    // },[optionActive])

    const [arrayParams,setArrayParams] = useState();
    const [objectParams,setObjectParams] = useState();


    useEffect(()=>{
        console.log(option);
    },[option])

    

    const handleChangArrayParams = (type,value) => {
        console.log(type);
        console.log(value);
        // Sử dụng map để tạo một mảng mới với giá trị được cập nhật
        let tempParams = objectParams.map(item => {
            if (item.type === type) {
                return { ...item, value: value };
            }
            return item; // Trả về item nguyên vẹn nếu không phải là phần tử cần cập nhật
        });

        console.log(tempParams);
        setObjectParams(tempParams);

        if(!option) return;
        let optiontTemp = {};
        optiontTemp = {...optionActive}
        optiontTemp[type] = value;
        
        setOptionActive(optiontTemp);
    }

    useEffect(()=>{
        console.log(option);
        let paramActive = [];
        let optiontTemp = {};
        if(!option) return;
        option.forEach((item, index) => {
            console.log(item);
            paramActive.push({
                type: item.name,
                value: item.OptionValues[0].value
            })

            optiontTemp[item.name] = item.OptionValues[0].value;

          
        });
        console.log(paramActive);
        // console.log(optionActive);
        // console.log(optionActive['Màu']);
        setOptionActive(optiontTemp);
        setObjectParams(paramActive);
    },[option])

    useEffect(()=>{
        console.log(optionActive);
    },[optionActive])

    useEffect(()=> {
        // console.log(objectParams);
        let paramString = '';
        if(objectParams){
            objectParams.forEach((item,index) => {
                paramString += item.value;
                if (index < option.length - 1) {
                    paramString += ','; // Thêm dấu phẩy nếu không phải là phần tử cuối cùng
                }
            });
    
            setArrayParams(paramString);
        }
        
    },[objectParams])

    useEffect(()=>{
        async function fetchData(){
            let result = await ProductAPI.GetDetail(product.id,arrayParams);
            if(result) setVariantion(result);

        }

        fetchData();
    },[arrayParams])

    useEffect(()=> {
        console.log(variantion);
        if(variantion){
            async function fetchData() {
                let result = await ListImgAPI.GetByVariation(variantion[0].variation_id);
                if(result) setListImg(result);
                console.log(result);
            }
            fetchData();
        }
    },[variantion])

    useEffect(()=>{
        console.log(variantion);
        console.log(listImg);
    },[variantion,listImg])


    const dispatch = useDispatch();

    const handleAddToCart = async() => {
        let data = {
            quantity: quantity,
            variation_id: variantion[0].variation_id
        }
        let result = await dispatch(addToCart(data));
        dispatch(fetchCartData());
        console.log(result);
        if(result) return toast.success('Đã thêm vào giỏ hàng');
    }
    

    return (
        <div className='shofy-app'>
            <div className="container mt-3 detail-product">
                <section className="route">
                    <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                    /
                    <span>
                        {
                            product?.name
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
                                    
                                    
                                   

                                    <div className="price mt-3">
                                      
                                            <span className="old-price me-2">
                                            {
                                                variantion?
                                                formatCurrencyVND(variantion[0].price)+'₫'
                                                :
                                                '120₫'
                                            }
                                        
                                            </span>
                                        
                                        
                                            <span className="current-price">
                                            {
                                                variantion?
                                                formatCurrencyVND(variantion[0].sale_price)+'₫'
                                                :
                                                '120₫'
                                            }
                                            </span>
                                        
                                    </div>
                                    {
                                        option &&
                                        option.map((value,index)=> {
                                            return (
                                                value.name == 'Màu'
                                                ?
                                                <div className="colors mt-2">
                                                    <div className="title">
                                                        Màu:
                                                        
                                                    </div>
                                                    <div className="list-colors mt-2">
                                                        
                                                        {
                                                            value?
                                                            (
                                                                value.OptionValues.map((color,index)=>{
                                                                    
                                                                    return (
                                                                        <div 
                                                                        key={index} 
                                                                        className={"color "+(color.value == optionActive[value.name] ? "color-active" : null)} 
                                                                        // className={"color "} 
                                                                        style={{backgroundColor:color?.color_code}}
                                                                        onClick={()=>{handleChangArrayParams(value.name,color.value)}}
                                                                        >


                                                                        </div>
                                                                        // <div>
                                                                        //     {
                                                                        //         color.value == optionActive[value.name] ? 'hello' : 'no'
                                                                        //         console.log(optionActive)
                                                                        //         optionActive ? optionActive['Màu'] : null
                                                                        //     }
                                                                        // </div>
                                                                    )
                                                                })
                                                            )
                                                            :
                                                            (
                                                                <>
                                                                    <div className="color " style={{backgroundColor:"#c1bae4"}}>

                                                                    </div>
                                                                    <div className="color " style={{backgroundColor:"#d8d7dd"}}>
                                                                        
                                                                    </div>
                                                                    <div className="color " style={{backgroundColor:"#f3c0d1"}}>
                                                                        
                                                                    </div>
                                                                    <div className="color " style={{backgroundColor:"#64bfd1"}}>
                                                                        
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                        
                                                    </div>
                                                </div>
                                                :
                                                <div className='versions mt-3 mb-3 '>
                                                    <div className="title">
                                                        {value.name}:
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center">   
                                                    
                                                    {
                                                        value && 
                                                        value.OptionValues.map((optionValue,index)=>{
                                                            return (
                                                                <div
                                                                key={index} 
                                                                // className={'me-2 version '+(value.id == product.id ? 'version-active' : '')}
                                                                className={'me-2 version '+(optionValue.value == optionActive[value.name] ? 'version-active' : '')}
                                                                // to={`?id=${value.id}`}
                                                                
                                                                onClick={()=>{handleChangArrayParams(value.name,optionValue.value)}}
                                                                >
                                                                    {optionValue.value}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                </div>
                                                
                                                
                                            )
                                        })
                                    }
                                    <div className="title-quantity mt-3">
                                        <div className="title">
                                            Số lượng
                                        </div>
                                    </div>
                                    <div className="action-top mt-3">
                                        
                                        <div className="quantity">
                                            <button
                                            onClick={minusQuantity}>
                                                <i class="fa-solid fa-minus me-4"></i>
                                            </button>
                                            <span>{quantity}</span>
                                            <button
                                            onClick={plusQuantity}>
                                                <i class="fa-solid fa-plus ms-4"></i>
                                            </button>
                                        </div>
                                        <div className="add-to-cart ms-3"
                                            onClick={handleAddToCart}
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



                <DetailBottom product = {product} variation_id={variantion && variantion[0].id}/>

                <RelatedProducts/>
            </div>
        </div>
    );
};

export default Detail;





