import React, { useEffect, useState } from 'react';
import SlideProduct from '../../../../components/SlideProduct/SlideProduct';
import ProductAPI from '../../../../service/NodejsServerAPI/ProductAPI';

const RelatedProducts = () => {
    const [products,setProducts] = useState([]);

    // api get product home
    useEffect(()=>{
        let result;
        async function fetchData() {
            result = await ProductAPI.GetAll();
            if(result) setProducts(result);
            console.log(result);
        }
        fetchData();
    }, []);
    return (
        <section className='detail-related-products mt-5 mb-5'>
                    <div className="container">
                        <div className="title">
                            <h2>
                                {/* Related Products */}
                                Liên quan
                            </h2>
                        </div>
                        <div className="list-products">
                            <SlideProduct products={products} />
                        </div>
                    </div>
                </section>
    );
};

export default RelatedProducts;