import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import './ProfileOder.css';

import ProfileSideBar from '../../../components/ProfileSideBar/ProfileSideBar';
import ProfileSideBarMobile from '../../../components/ProfileSideBar/ProfileSideBarMobile';
import OrderAPI from '../../../service/NodejsServerAPI/OrderAPI';
import formatCurrencyVND from '../../../../util/formatCurrencyVND';
import formatDate from '../../../../util/formatDate';
import { Link } from 'react-router-dom';

const ProfileOder = () => {

    const [value, setValue] = useState('1');
    const [order, setOrder] = useState();


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        let result = OrderAPI.getAllByUser();
        result
        .then(data => setOrder(data))
        .catch(error => console.log(error))

    },[]);

    useEffect(()=>{
        console.log(order);
    },[order]);
    return (
        <div id='profile' className="container-profile">
            <div className='shofy-app'>
                <div className="mt-3 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="side-bar col-4 d-none d-lg-block d-xl-block">
                                <ProfileSideBar/>
                            </div>
                            <div className='side-bar-mobile d-lg-none d-xl-none'>
                                <ProfileSideBarMobile/>
                            </div>
                            <div className="col-12 col-lg-8 col-xl-8 content-profile">
                                <div className="profile-order">
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Tất cả
                                                </span>
                                                <span className="badge all">
                                                    {
                                                        order &&
                                                        order.length
                                                    }
                                                </span>
                                            </button>

                                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Chờ
                                                </span>
                                                <span className="badge pedding">
                                                    {
                                                        order &&
                                                        order
                                                        .filter(value => value.state ==1)
                                                        .length

                                                    }
                                                </span>
                                            </button>

                                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Đang_giao
                                                </span>
                                                <span className="badge delivering">
                                                    {
                                                        order &&
                                                        order
                                                        .filter(value => value.state == 2)
                                                        .length

                                                    }
                                                </span>
                                            </button>

                                            <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Đã_giao
                                                </span>
                                                <span className="badge completed">
                                                    {
                                                        order &&
                                                        order
                                                        .filter(value => value.state == 3)
                                                        .length

                                                    }
                                                </span>
                                            </button>
                                            <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-hello" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Đã_hủy
                                                </span>
                                                <span className="badge cancelled">
                                                    {
                                                        order &&
                                                        order
                                                        .filter(value => value.state == 0)
                                                        .length

                                                    }
                                                </span>
                                            </button>

                                        </div>
                                    </nav>
                                    <div class="tab-content mt-3" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                            <div className="content-order">
                                                {
                                                    order ?
                                                    order.map((value,index)=>{
                                                        return (
                                                            <Link to={`/order-detail?id=${value.id}`} key={index} className="row row-order mb-3">
                                                                <div className="col-2 code-id">
                                                                    {value.code}
                                                                </div>
                                                                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatCurrencyVND(value.total_price)+'đ'
                                                                    }
                                                                </div>
                                                                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatDate(value.createdAt)
                                                                    }
                                                                </div>
                                                                <div className="col-3">
                                                                    {
                                                                        value.state == 1 &&
                                                                        <span className='pedding'>
                                                                            Chờ
                                                                        </span>
                                                                    }
                                                                    {
                                                                        value.state == 2 &&
                                                                        <span className='delivering'>
                                                                            Đang_giao
                                                                        </span>
                                                                    }
                                                                    {
                                                                        value.state == 3 &&
                                                                        <span className='completed'>
                                                                            Đã_giao
                                                                        </span>
                                                                    }
                                                                    {
                                                                        value.state == 0 &&
                                                                        <span className='cancelled'>
                                                                            Đã_hủy
                                                                        </span>
                                                                    }

                                                                </div>
                                                                <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                                    <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                    :
                                                    <span>Bạn chưa có đơn hàng nào</span>
                                                }
                                                
                                                
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                            <div className="content-order">
                                            {
                                                    order &&
                                                    order
                                                    .filter(value => value.state == 1)
                                                    .map((value,index)=>{
                                                        return (
                                                            <Link to={`/order-detail?id=${value.id}`} key={index} className="row row-order mb-3">
                                                                <div className="col-2 code-id">
                                                                    {value.code}
                                                                </div>
                                                                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatCurrencyVND(value.total_price)+'đ'
                                                                    }
                                                                </div>
                                                                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatDate(value.createdAt)
                                                                    }
                                                                </div>
                                                                <div className="col-3">
                                                                        <span className='pedding'>
                                                                            Chờ
                                                                        </span>
                                                                    

                                                                </div>
                                                                <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                                    <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                                            <div className="content-order">
                                            {
                                                    order &&
                                                    order
                                                    .filter(value => value.state == 2)
                                                    .map((value,index)=>{
                                                        return (
                                                            
                                                            <Link to={`/order-detail?id=${value.id}`} key={index} className="row row-order mb-3">
                                                                <div className="col-2 code-id">
                                                                    {value.code}
                                                                </div>
                                                                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatCurrencyVND(value.total_price)+'đ'
                                                                    }
                                                                </div>
                                                                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatDate(value.createdAt)
                                                                    }
                                                                </div>
                                                                <div className="col-3">
                                                                    
                                                                    
                                                                        <span className='delivering'>
                                                                            Đang_giao
                                                                        </span>
                                                                    

                                                                </div>
                                                                <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                                    <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                                </div>
                                                            </Link>

                                                            
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>  
                                        <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                                            <div className="content-order">
                                            {
                                                    order &&
                                                    order
                                                    .filter(value => value.state == 3)
                                                    .map((value,index)=>{
                                                        return (
                                                            <Link to={`/order-detail?id=${value.id}`} key={index} className="row row-order mb-3">
                                                                <div className="col-2 code-id">
                                                                    {value.code}
                                                                </div>
                                                                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatCurrencyVND(value.total_price)+'đ'
                                                                    }
                                                                </div>
                                                                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatDate(value.createdAt)
                                                                    }
                                                                </div>
                                                                <div className="col-3">
                                                                    
                                                                    
                                                                        
                                                                        <span className='completed'>
                                                                            Đã_giao
                                                                        </span>
                                                                    
                                                                   

                                                                </div>
                                                                <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                                    <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-hello" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                                            <div className="content-order">
                                            {
                                                    order &&
                                                    order
                                                    .filter(value => value.state == 0)
                                                    .map((value,index)=>{
                                                        return (
                                                            <Link to={`/order-detail?id=${value.id}`} key={index} className="row row-order mb-3">
                                                                <div className="col-2 code-id">
                                                                    {value.code}
                                                                </div>
                                                                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatCurrencyVND(value.total_price)+'đ'
                                                                    }
                                                                </div>
                                                                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                                    {
                                                                        formatDate(value.createdAt)
                                                                    }
                                                                </div>
                                                                <div className="col-3">

                                                                    
                                                                        <span className='cancelled'>
                                                                            Đã_hủy
                                                                        </span>
                                                                    

                                                                </div>
                                                                <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                                    <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
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

export default ProfileOder;

/*
  <table class="table table-order">
                                                <thead>
                                                    <tr>
                                                        
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th className='d-none d-none d-lg-table-cell d-xl-table-cell' scope="col"></th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        
                                                        <td>
                                                            <div className="order-id">
                                                                #2245
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="price">
                                                                $1052.25
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="date">
                                                                24 Oct 2023
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="status">
                                                                <span className='delivering'>
                                                                    Delivering
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className='d-none d-none d-lg-table-cell d-xl-table-cell'>
                                                            <div className="action">
                                                                <i class="fa-solid fa-arrow-right"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        
                                                        <td>
                                                            <div className="order-id">
                                                                #2245
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="price">
                                                                $1052.25
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="date">
                                                                24 Oct 2023
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="status">
                                                                <span className='cancelled'>
                                                                    Cancelled
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className='d-none d-none d-lg-table-cell d-xl-table-cell'>
                                                            <div className="action">
                                                                <i class="fa-solid fa-arrow-right"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        
                                                        <td>
                                                            <div className="order-id">
                                                                #2245
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="price">
                                                                $1052.25
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="date">
                                                                24 Oct 2023
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="status">
                                                                <span className='completed'>
                                                                    Completed
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className='d-none d-none d-lg-table-cell d-xl-table-cell'>
                                                            <div className="action">
                                                                <i class="fa-solid fa-arrow-right"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        
                                                        <td>
                                                            <div className="order-id">
                                                                #2245
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="price">
                                                                $1052.25
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="date">
                                                                24 Oct 2023
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="status ">
                                                                <span className='pedding'>
                                                                    Pedding
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className='d-none d-none d-lg-table-cell d-xl-table-cell'>
                                                            <div className="action">
                                                                <i class="fa-solid fa-arrow-right"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                </tbody>
                                            </table>
*/