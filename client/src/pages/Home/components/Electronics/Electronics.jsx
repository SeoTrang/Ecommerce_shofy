import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardMd from '../../../../components/Card/CardMd/CardMd';
import ProductAPI from '../../../../service/NodejsServerAPI/ProductAPI';

const Electronics = () => {
    const [products,setProducts] = useState([]);

    // api get product home
    useEffect(()=>{
        let result;
        async function fetchData() {
            result = await ProductAPI.GetAll();
            if(result) setProducts(result);
            // console.log(result);
        }
        fetchData();
    }, []);
    return (
        <section className='electronics mt-5 mb-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-4 col-lg-5 mb-3">
                                <div className="box-menu-top row d-flex align-content-end">
                                    <div className="menu-left col-6">
                                        <div className="title">
                                            <h3>Electronics <br/> Gadgets</h3>
                                        </div>
                                        <div className='line mb-4'></div>
                                        <ul className="list-menu">
                                            <li>Micrscope</li>
                                            <li>Remote Control</li>
                                            <li>Monitor</li>
                                            <li>Thermometer</li>
                                            <li>Backpack</li>
                                            <li>Headphones</li>
                                        </ul>
                                        <div className='btn-bottom'>
                                            <Link>
                                                <span className='me-2'>More Products </span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>

                                    </div>

                                    <div className="img-right col-6 d-flex align-content-end justify-content-end">
                                        <img src="https://shofy-angular.vercel.app/assets/img/product/gadget/gadget-girl.png" alt="" />
                                    </div>
                                </div>
                                <div className="banner-bottom row mt-3">
                                    <div className="col-7">
                                        <span>Only $99.00</span>
                                        <br />
                                        <h4 className='mt-3'>
                                            Selected novelty
                                        <br/>
                                            Products
                                        </h4>
                                    </div>
                                    <div className="col-5">

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-8 col-lg-7">
                                <div className='row list-products box-product'>
                                    
                                    {
                                        products?
                                        products.map((value,index)=>{
                                            return (
                                                <div key={index} className='col-6 col-xl-4 col-lg-6 col-md-6 pb-2'>
                                                    <CardMd item={value} />
                                                </div>
                                            )
                                        })
                                        :
                                        [1, 2, 3, 4, 5].map((index) => (
                                            <div className='col-6 col-xl-4 col-lg-6 col-md-6 pb-2'>
                                                <CardMd key={index} />
                                            </div>
                                        ))
                                    }
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default Electronics;