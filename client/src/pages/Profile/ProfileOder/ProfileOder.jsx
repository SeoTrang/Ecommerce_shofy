import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import './ProfileOder.css';

import ProfileSideBar from '../../../components/ProfileSideBar/ProfileSideBar';
import ProfileSideBarMobile from '../../../components/ProfileSideBar/ProfileSideBarMobile';

const ProfileOder = () => {

    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                                                    All
                                                </span>
                                                <span className="badge all">
                                                    20
                                                </span>
                                            </button>

                                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Pedding
                                                </span>
                                                <span className="badge pedding">
                                                    20
                                                </span>
                                            </button>

                                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Delivering
                                                </span>
                                                <span className="badge delivering">
                                                    20
                                                </span>
                                            </button>

                                            <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Completed
                                                </span>
                                                <span className="badge completed">
                                                    20
                                                </span>
                                            </button>
                                            <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-hello" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">
                                                <span className="nav-name me-md-2 me-lg-2 me-xl-2">
                                                    Cancelled
                                                </span>
                                                <span className="badge cancelled">
                                                    20
                                                </span>
                                            </button>

                                        </div>
                                    </nav>
                                    <div class="tab-content mt-3" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                            <div className="content-order">
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='pedding'>
                                                            Pedding
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='cancelled'>
                                                            Cancelled
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='completed'>
                                                            Completed
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='delivering'>
                                                            Delivering
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                            <div className="content-order">
                                                    <div className="row row-order mb-3">
                                                        <div className="col-2 code-id">
                                                            #6010
                                                        </div>
                                                        <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                            $15.000.000
                                                        </div>
                                                        <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                            25/10/2023
                                                        </div>
                                                        <div className="col-3">
                                                            <span className='pedding'>
                                                                Pedding
                                                            </span>
                                                        </div>
                                                        <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                            <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="row row-order mb-3">
                                                        <div className="col-2 code-id">
                                                            #6010
                                                        </div>
                                                        <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                            $15.000.000
                                                        </div>
                                                        <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                            25/10/2023
                                                        </div>
                                                        <div className="col-3">
                                                            <span className='pedding'>
                                                                Pedding
                                                            </span>
                                                        </div>
                                                        <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                            <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="row row-order mb-3">
                                                        <div className="col-2 code-id">
                                                            #6010
                                                        </div>
                                                        <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                            $15.000.000
                                                        </div>
                                                        <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                            25/10/2023
                                                        </div>
                                                        <div className="col-3">
                                                            <span className='pedding'>
                                                                Pedding
                                                            </span>
                                                        </div>
                                                        <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                            <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                                            <div className="content-order">
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='delivering'>
                                                            Delivering
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='delivering'>
                                                            Delivering
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                        <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                                            <div className="content-order">
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='completed'>
                                                            Completed
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='completed'>
                                                            Completed
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='completed'>
                                                            Completed
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-hello" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                                            <div className="content-order">
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='cancelled'>
                                                            Cancelled
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='cancelled'>
                                                            Cancelled
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row row-order mb-3">
                                                    <div className="col-2 code-id">
                                                        #6010
                                                    </div>
                                                    <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                                                        $15.000.000
                                                    </div>
                                                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                        25/10/2023
                                                    </div>
                                                    <div className="col-3">
                                                        <span className='cancelled'>
                                                            Cancelled
                                                        </span>
                                                    </div>
                                                    <div className="col-1 d-none d-md-block d-lg-block d-xl-block">
                                                        <span className='action-row'><i class="fa-solid fa-arrow-right"></i></span>
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