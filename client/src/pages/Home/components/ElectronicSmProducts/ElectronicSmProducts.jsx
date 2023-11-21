import React from 'react';
import CardSm from '../../../../components/Card/CardSm/CardSm';

const ElectronicSmProducts = () => {
    return (
        <section className='electronic-sm-products mt-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-4 col-lg-4 col-md-6 list-item-product">
                                <div className="title">
                                    <h4>
                                        Discount Products
                                    </h4>
                                </div>
                                <div className="row mt-4">
                                    {
                                        [1,2,3].map((value,index)=>{
                                            return (
                                                <div className="col-12">
                                                    <CardSm/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-xl-4 col-lg-4 col-md-6 list-item-product">
                                <div className="title">
                                    <h4>
                                        Featured Products
                                    </h4>
                                </div>
                                <div className="row mt-4">
                                        {
                                            [1,2,3].map((value,index)=>{
                                                return (
                                                    <div className="col-12">
                                                        <CardSm/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            </div>
                            <div className="col-12 col-xl-4 col-lg-4 col-md-6 list-item-product">
                                <div className="title">
                                    <h4>
                                        Selling Products
                                    </h4>
                                </div>
                                <div className="row mt-4">
                                        {
                                            [1,2,3].map((value,index)=>{
                                                return (
                                                    <div className="col-12">
                                                        <CardSm/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default ElectronicSmProducts;