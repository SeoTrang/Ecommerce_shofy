import React, { useEffect, useState } from 'react';

import CardMd from '../../../../components/Card/CardMd/CardMd';
import ProductAPI from '../../../../service/NodejsServerAPI/ProductAPI';

const TrendingProduct = () => {
    const [trendingProduct,setTrendingProduct] = useState([]);

    // api get product home
    useEffect(()=>{
        let result;
        async function fetchData() {
            result = await ProductAPI.GetAll();
            if(result) setTrendingProduct(result);
            // console.log(result);
        }
        fetchData();
    }, []);
    return (
        <section className='trending-product container mt-5'>
            <div className="title-top">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 title">
                        <h1>
                            {/* Trending Products */}
                            Thịnh hành
                        </h1>
                    </div>
                    <div className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block line">
                        <hr />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 action">
                        <div className="list-acitons d-flex align-items-center ps-md-5">
                            <div className="action me-5 action-active">
                                New
                            </div>
                            <div className="featured me-5">
                                Featured
                            </div>
                            <div className="top-sellers me-5">
                                Top Sellers
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="box-product mt-2">
                <div className="row ">
                    {
                    trendingProduct &&
                    trendingProduct.map((value,index) => (
                        <div className='col-6 col-xl-3 col-lg-3 col-md-4 pb-2'>
                            <CardMd item={value} key={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingProduct;