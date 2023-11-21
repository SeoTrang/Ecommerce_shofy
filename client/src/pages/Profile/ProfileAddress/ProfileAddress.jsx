import React, { useEffect } from 'react';

import './ProfileAddress.css';

import ProfileSideBar from '../../../components/ProfileSideBar/ProfileSideBar';
import ProfileSideBarMobile from '../../../components/ProfileSideBar/ProfileSideBarMobile';

const ProfileAddress = () => {

    useEffect(()=>{
        try {
            const nodeFooter = document.getElementsByClassName('footer')[0];
            console.log(nodeFooter);
            nodeFooter.classList.add('d-none');
            nodeFooter.classList.add('d-lg-block');
            nodeFooter.classList.add('d-xl-block');
            //  d-lg-block d-xl-block
        } catch (error) {
            console.log(error);
        }
    },[]);
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
                                <div className="profile-address mb-3">
                                    <div className="title">
                                        <span><svg _ngcontent-ng-c1544089344="" viewBox="0 0 64 64"><g _ngcontent-ng-c1544089344="" id="ad"><g _ngcontent-ng-c1544089344=""><path _ngcontent-ng-c1544089344="" d="m50 49c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"></path><path _ngcontent-ng-c1544089344="" d="m13 55c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1z"></path><path _ngcontent-ng-c1544089344="" d="m62 47.278v-8.653c0-.612-.184-1.203-.533-1.708l-7.452-10.763c-.933-1.349-2.47-2.154-4.111-2.154h-7.61l1.742-3.049c1.285-1.731 1.963-3.788 1.963-5.951 0-5.514-4.486-10-10-10-1.791 0-3.547.479-5.081 1.385-.476.281-.633.895-.352 1.37s.893.632 1.37.353c1.225-.725 2.63-1.107 4.063-1.107 4.411 0 8 3.589 8 8 0 1.748-.554 3.408-1.601 4.802-.025.033-.048.068-.069.104l-6.331 11.078-6.33-11.077c-.021-.036-.044-.071-.069-.104-1.047-1.394-1.601-3.055-1.601-4.803 0-1.897.676-3.736 1.902-5.179.358-.42.307-1.052-.114-1.409-.421-.358-1.052-.308-1.41.114-1.534 1.803-2.379 4.103-2.379 6.474 0 1.781.467 3.486 1.346 5h-23.343c-1.654 0-3 1.346-3 3v27c0 1.654 1.346 3 3 3h2.08c.488 3.386 3.401 6 6.92 6s6.432-2.614 6.92-6h9.223c.552 0 1-.447 1-1s-.448-1-1-1h-9.223c-.488-3.386-3.401-6-6.92-6s-6.432 2.614-6.92 6h-2.08c-.551 0-1-.448-1-1v-9h26c.552 0 1-.447 1-1s-.448-1-1-1h-26v-16.001c0-.552.449-1 1-1h24.563l6.569 11.496c.178.312.509.504.868.504s.69-.192.868-.504l1.132-1.981v7.485h-5c-.552 0-1 .447-1 1s.448 1 1 1h5v10h-5.5c-.552 0-1 .447-1 1s.448 1 1 1h10.58c.488 3.386 3.401 6 6.92 6s6.432-2.614 6.92-6h4.08c1.103 0 2-.897 2-2v-2c0-.737-.405-1.375-1-1.722zm-49-.278c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm46.784-9h-15.784v-8h10.245zm-18.632-12h8.753c.984 0 1.906.483 2.466 1.293l.49.707h-8.86c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h16v7h-5.111c-1.263-1.235-2.988-2-4.889-2s-3.627.765-4.889 2h-5.111v-18.985l1.152-2.015zm-1.152 23h3.685c-.297.622-.503 1.294-.605 2h-3.08zm10 8c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm11-6h-4.08c-.102-.706-.308-1.378-.605-2h4.685z"></path><path _ngcontent-ng-c1544089344="" d="m36 21c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path><path _ngcontent-ng-c1544089344="" d="m43 43h4c.552 0 1-.447 1-1s-.448-1-1-1h-4c-.552 0-1 .447-1 1s.448 1 1 1z"></path></g></g></svg></span>
                                        <h4 className='ms-2'> Shipping Address</h4>
                                    </div>

                                    <div className="content mt-3">
                                        <div class="vtrWey"></div>
                                        
                                        <div className="list-address mt-2">
                                            <div className="address">
                                                <div class="title d-flex mt-3 align-items-center">
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <h5 class="ms-2">Shipping address 1</h5>
                                                </div>

                                                <div className="address-content row">
                                                   <div className="address-text mb-2 col-12 col-lg-7 col-xl-7">
                                                        Xóm nước 2, Xã Quyết Thắng, Thành Phố Thái Nguyên, Thái Nguyên
                                                   </div>
                                                   <div className="action mb-2 col-12 col-lg-5 col-xl-5">
                                                        <button className='btn btn-sm btn-primary'>
                                                            Đặt làm mặc định
                                                        </button>
                                                        <button className='btn btn-sm btn-danger ms-3'>
                                                            Xóa địa chỉ
                                                        </button>
                                                   </div>
                                                </div>
                                            </div>

                                            <div className="address">
                                                <div class="title d-flex mt-3 align-items-center">
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <h5 class="ms-2">Shipping address 2</h5>
                                                </div>

                                                <div className="address-content row">
                                                   <div className="address-text mb-2 col-12 col-lg-7 col-xl-7">
                                                        Xóm nước 2, Xã Quyết Thắng, Thành Phố Thái Nguyên, Thái Nguyên
                                                   </div>
                                                   <div className="action mb-2 col-12 col-lg-5 col-xl-5">
                                                        <button className='btn btn-sm btn-primary'>
                                                            Đặt làm mặc định
                                                        </button>
                                                        <button className='btn btn-sm btn-danger ms-3'>
                                                            Xóa địa chỉ
                                                        </button>
                                                   </div>
                                                </div>
                                            </div>
                                            <div className="address">
                                                <div class="title d-flex mt-3 align-items-center">
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <h5 class="ms-2">Shipping address 2</h5>
                                                </div>

                                                <div className="address-content row">
                                                   <div className="address-text mb-2 col-12 col-lg-7 col-xl-7">
                                                        Xóm nước 2, Xã Quyết Thắng, Thành Phố Thái Nguyên, Thái Nguyên
                                                   </div>
                                                   <div className="action mb-2 col-12 col-lg-5 col-xl-5">
                                                        <button className='btn btn-sm btn-primary'>
                                                            Đặt làm mặc định
                                                        </button>
                                                        <button className='btn btn-sm btn-danger ms-3'>
                                                            Xóa địa chỉ
                                                        </button>
                                                   </div>
                                                </div>
                                            </div>

                                            <div className="address">
                                                <div class="title d-flex mt-3 align-items-center">
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <h5 class="ms-2">Shipping address 3</h5>
                                                </div>

                                                <div className="address-content row">
                                                   <div className="address-text mb-2 col-12 col-lg-7 col-xl-7">
                                                        Xóm nước 2, Xã Quyết Thắng, Thành Phố Thái Nguyên, Thái Nguyên
                                                   </div>
                                                   <div className="action mb-2 col-12 col-lg-5 col-xl-5">
                                                        <button className='btn btn-sm btn-primary'>
                                                            Đặt làm mặc định
                                                        </button>
                                                        <button className='btn btn-sm btn-danger ms-3'>
                                                            Xóa địa chỉ
                                                        </button>
                                                   </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mt-4">
                                            <div className="w-100 add-new-address">
                                                <button className="w-100 rounded-0 btn btn-md btn-primary">
                                                    Thêm địa chỉ mới
                                                </button>
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

export default ProfileAddress;