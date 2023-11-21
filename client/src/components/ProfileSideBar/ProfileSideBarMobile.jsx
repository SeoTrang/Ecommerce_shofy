import React from 'react';

import './ProfileSideBarMobile.css';
import { Link } from 'react-router-dom';

const ProfileSideBarMobile = () => {
    // Lấy địa chỉ URL hiện tại
    const currentURL = window.location.href;

    // Chia địa chỉ URL thành các phần bằng dấu '/'
    const parts = currentURL.split('/');

    // Lấy phần tử cuối cùng của mảng `parts`
    const section = parts[parts.length - 1];

    console.log(section);
    return (
        <div className="profile-nav-mobile">
            
            <div className=" list-navs row">
                    <Link 
                    to={'/profile/Home'}
                    className={"nav align-items-center justify-content-center mb-3 col-2 "+(section == 'Home'?'profile-nav-active':null)}>
                            <i class="fa-regular fa-user"></i>
                        
                    </Link>
                    <Link 
                    to={'/profile/Information'}
                    className={"nav align-items-center justify-content-center mb-3 col-2 "+(section == 'Information'?'profile-nav-active':null)}>
                            <i class="fa-solid fa-info"></i>
                        
                    </Link>
                    <Link 
                    to={'/profile/Address'}
                    className={"nav align-items-center justify-content-center mb-3 col-2 "+(section == 'Address'?'profile-nav-active':null)}>
                            <i class="fa-solid fa-location-dot"></i>
                        
                    </Link>
                    <Link 
                    to={'/profile/MyOrders'}
                    className={"nav align-items-center justify-content-center mb-3 col-2 "+(section == 'MyOrders'?'profile-nav-active':null)}>
                            <i class="fa-solid fa-cubes"></i>
                        
                    </Link>
                    <Link 
                    to={'/profile/MyVoucher'}
                    className={"nav align-items-center justify-content-center mb-3 col-2 "+(section == 'MyVoucher'?'profile-nav-active':null)}>
                            <i class="fa-solid fa-gifts"></i>
                        
                    </Link>
                    <Link 
                    to={'/profile/ChangePassword'}
                    className={"nav align-items-center justify-content-center mb-3 col-2 "+(section == 'ChangePassword'?'profile-nav-active':null)}>
                            <i class="fa-solid fa-unlock"></i>
                        
                    </Link>
                </div>
          
        </div>
    );
};

export default ProfileSideBarMobile;