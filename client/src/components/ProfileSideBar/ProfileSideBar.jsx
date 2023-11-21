import React from 'react';

import {Link} from 'react-router-dom';

import './ProfileSideBar.css';

const ProfileSideBar = () => {
    // Lấy địa chỉ URL hiện tại
    const currentURL = window.location.href;

    // Chia địa chỉ URL thành các phần bằng dấu '/'
    const parts = currentURL.split('/');

    // Lấy phần tử cuối cùng của mảng `parts`
    const section = parts[parts.length - 1];

    console.log(section);
    return (
        <>
            <div className='profile-side-bar-lg'>
                <div className="list-navs">
                    <Link 
                    to={'/profile/Home'}
                    className={"nav row mb-3 "+(section == 'Home'?'profile-nav-active':null)}>
                        <div className="icon col-1 d-flex align-items-center justify-content-center">
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div className="text col-10">
                            Profile
                        </div>
                        
                    </Link>
                    <Link 
                    to={'/profile/Information'}
                    className={"nav row mb-3 "+(section == 'Information'?'profile-nav-active':null)}>
                        <div className="icon col-1 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-info"></i>
                        </div>
                        <div className="text col-10">
                            Information
                        </div>
                        
                    </Link>
                    <Link 
                    to={'/profile/Address'}
                    className={"nav row mb-3 "+(section == 'Address'?'profile-nav-active':null)}>
                        <div className="icon col-1 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="text col-10">
                            Address
                        </div>
                        
                    </Link>
                    <Link 
                    to={'/profile/MyOrders'}
                    className={"nav row mb-3 "+(section == 'MyOrders'?'profile-nav-active':null)}>
                        <div className="icon col-1 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-cubes"></i>
                        </div>
                        <div className="text col-10">
                            My Orders
                        </div>
                        
                    </Link>
                    <Link 
                    to={'/profile/MyVoucher'}
                    className={"nav row mb-3 "+(section == 'MyVoucher'?'profile-nav-active':null)}>
                        <div className="icon col-1 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-gifts"></i>
                        </div>
                        <div className="text col-10">
                            My Voucher
                        </div>
                        
                    </Link>
                    <Link 
                    to={'/profile/ChangePassword'}
                    className={"nav row mb-3 "+(section == 'ChangePassword'?'profile-nav-active':null)}>
                        <div className="icon col-1 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-unlock"></i>
                        </div>
                        <div className="text col-10">
                            Change Password
                        </div>
                        
                    </Link>
                </div>
            </div>

            
        </>
        
    );
};

export default ProfileSideBar;