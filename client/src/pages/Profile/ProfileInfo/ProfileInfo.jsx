import React from 'react';

import './ProfileInfo.css';

import ProfileSideBar from '../../../components/ProfileSideBar/ProfileSideBar';
import ProfileSideBarMobile from '../../../components/ProfileSideBar/ProfileSideBarMobile';

const ProfileInfo = () => {
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
                                <div className="profile-info mb-5">
                                    <div className="title">
                                        <h4>
                                            Personal Details
                                        </h4>
                                    </div>
                                    <div className="content-profile-info mt-3">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                                <div className="input">
                                                    <span><i class="fa-regular fa-user"></i></span>
                                                    <input type="text" placeholder='Enter your usename...'/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                                <div className="input">
                                                    <span><i class="fa-regular fa-envelope"></i></span>
                                                    <input type="text" placeholder='Enter your email...'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                                <div className="input">
                                                    <span><i class="fa-brands fa-facebook-f"></i></span>
                                                    <input type="text" placeholder='Enter your facebook...'/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                                <div className="input">
                                                    <span><i class="fa-brands fa-twitter"></i></span>
                                                    <input type="text" placeholder='Enter your twitter...'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                                <div className="input">
                                                    <span><i class="fa-solid fa-mobile-screen-button"></i></span>
                                                    <input type="text" placeholder='Enter your phone...'/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                                
                                                   
                                                    <select className='w-100' name="gender" id="">
                                                        <option value="0">Nữ</option>
                                                        <option value="1">Nam</option>
                                                    </select>
                                                
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                
                                                    <textarea className='w-100' placeholder='Enter your bio...' rows="5"></textarea>
                                                
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

export default ProfileInfo;