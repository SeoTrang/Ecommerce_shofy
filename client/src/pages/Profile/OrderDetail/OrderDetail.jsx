import React, { useEffect, useState } from 'react';

import './OrderDetail.css';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import OrderAPI from '../../../service/NodejsServerAPI/OrderAPI';
import formatDate from '../../../../util/formatDate';
import formatCurrencyVND from '../../../../util/formatCurrencyVND';
const OrderDetail = () => {

    const [order,setOrder] = useState();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');


    useEffect(()=>{
        // console.log(id);
        let orderCallAPI = OrderAPI.getOrderDetail(id);
        orderCallAPI
        .then(data => setOrder(data))
        .catch(err => console.log(err))
    },[id])

    useEffect(()=>{
        console.log(order);
    },[order])

    return (
        <div className='order-detail mb-5 shofy-app'>
            <div className='container'>
                <div className="title-top row align-items-center">
                    <div className="title-left  col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-bag-shopping"></i>
                            <h5 className='mb-0 ms-2'>Chi tiết đơn hàng</h5>
                        </div>
                        
                    </div>
                    <div className='title-right  col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                        <div className={`d-flex align-items-center  ${window.innerWidth < 378 ? '' : 'justify-content-end'}`}>
                            <Link to={'/profile/MyOrders'} className='btn btn-md button-back'>
                                <span className='me-2'>Quay lại</span>
                                <i class="fa-solid fa-arrow-left"></i>
                            </Link>
                            
                        </div>
                    </div>

                    
                </div>

                {/* <div className="time-line">
                        <div className="row">
                            
                        </div>
                    </div> */}

                <div className='content-order-detail mt-4'>
                    <div className="short-info row">
                        <div className="col-12 col-md-4">
                            <div className='order-id d-flex mb-3'>
                                <div className="title">
                                    Mã đơn hàng:
                                </div>
                                <div className='value ms-1'>
                                    {order?.code}
                                </div>
                            </div>
                            

                        </div>

                        <div className="col-12 col-md-4">
                            <div className="date d-flex  mb-3">
                                <div className="title">
                                    Thời gian đặt:
                                </div>
                                <div className="value ms-1">
                                    {
                                        order &&
                                        formatDate(order?.createdAt)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className=" d-flex  mb-3">
                                <div className="title">
                                    Trạng thái:
                                </div>
                                {
                                    order ? order.state === 1 
                                    &&
                                    <div className="value ms-1 pedding">
                                        <span className='status'>
                                            Chờ
                                        </span>
                                    </div>
                                    :
                                    null
                                }
                                {
                                    order ? order.state === 2 
                                    &&
                                    <div className="value ms-1 delivering">
                                        <span className='status'>
                                            Đang_giao
                                        </span>
                                    </div>
                                    :
                                    null
                                }
                                {
                                    order ? order.state === 3 
                                    &&
                                    <div className="value ms-1 completed">
                                        <span className='status'>
                                            Đã_giao
                                        </span>
                                    </div>
                                    :
                                    null
                                }
                                {
                                    order ? order.state === 0
                                    &&
                                    <div className="value ms-1 cancelled">
                                        <span className='status'>
                                            Đã_hủy
                                        </span>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>

                    <div className='box-products'>
                        <div class="table-responsive-sm">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Ảnh</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order &&
                                        order.orderdetails.map((item,index)=>{
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index}</th>
                                                    <td>
                                                        <div className="tr-img">
                                                            <img src={import.meta.env.VITE_API_URL+item.avatar} alt="" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="tr-name">
                                                            {item.name}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="tr-quantity">
                                                            x {item.quantity}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="tr-price">
                                                            {
                                                                formatCurrencyVND(item.price*item.quantity)
                                                            }₫
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                    
                                
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="box-info-customer">
                        <div className="row">
                        <div className="box-price col-12 col-md-6">
                                <div className="item row">
                                        <div className="col-6 text-title">
                                            Tạm tính :
                                        </div>
                                        <div className="text-value col-6">
                                            {
                                                order &&
                                                formatCurrencyVND(order?.subtotal_price)
                                            }₫
                                        </div>
                                </div>

                                <div className="item row">
                                        <div className="col-6 text-title">
                                            Phí vận chuyển :
                                        </div>
                                        <div className="text-value col-6">
                                            ---
                                        </div>
                                </div>
                                <div className="item row">
                                        <div className="col-6 text-title">
                                            Giả giá :
                                        </div>
                                        <div className="text-value col-6">
                                            ---
                                        </div>
                                </div>
                                <hr />
                                <div className="item row">
                                        <h5 className="col-6 text-title">
                                            Tổng :
                                        </h5>
                                        <h5 className="text-value col-6">
                                            {
                                                order &&
                                                formatCurrencyVND(order?.total_price)
                                            }₫
                                        </h5>
                                </div>
                            </div>
                            <div className="box-address col-12 col-md-6">
                                <div className="address">
                                    <div className="item row">
                                        <div className="text col-4 -title">
                                            Người nhận :
                                        </div>
                                        <div className="text-value col-8">
                                            {order?.customer_name}
                                        </div>
                                    </div>
                                    <div className="item row">
                                        <div className="text col-4 -title">
                                            Số điện thoại :
                                        </div>
                                        <div className="text-value col-8">
                                            {order?.phone_number}
                                        </div>
                                    </div>
                                    <div className="item row">
                                        <div className="text col-4 -title">
                                            Địa chỉ :
                                        </div>
                                        <div className="text-value col-8">
                                            {order?.address}
                                        </div>
                                    </div>
                                    <div className="item row">
                                        <div className="text col-4 -title">
                                            Ghi chú :
                                        </div>
                                        <div className="text-value col-8">
                                            {order?.note}
                                        </div>
                                    </div>
                                </div>
                                <div className="action mt-3">
                                    <div className="d-flex">
                                        <div className={'btn btn-md w-100 btn-cancel ' + (order&&order.state === 1 ? '': 'disabled') }>
                                            Hủy
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;