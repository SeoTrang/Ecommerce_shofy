import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import Logo from '../../assets/img/logo.svg';

import './HeaderCommon.css'
import MiniCart from '../../components/MiniCart/MiniCart';
import NavMobile from '../../components/NavMobile/NavMobile';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/actions/userAction';
import Cookies from 'js-cookie';

const HeaderCommon = () => {
    const { t, i18n } = useTranslation()
      const [showInputSearch,setShowInputSearch] = useState(false);

      const handleShowInputSearch = () => {
        console.log("hello");
        setShowInputSearch(true);
      }

      const handleHiddenInputSearch = (e) => {
       
        setShowInputSearch(false);
      }
    const handleInputClick = (e) => {
        e.stopPropagation(); // Ngăn chặn sự kiện lên đến lớp cha
        // Xử lý sự kiện khi bạn bấm vào thẻ input
        console.log('Input clicked');
    };

    const handleButtonClick = (e) => {
        e.stopPropagation(); // Ngăn chặn sự kiện lên đến lớp cha
        // Xử lý sự kiện khi bạn bấm vào nút button
        console.log('Button clicked');
        setShowInputSearch(false);
      };

    useEffect(()=>{
        console.log("showInputSearch : "+showInputSearch);
    },[showInputSearch]);


    // cart mini
    const [cartMiniOpen,setCartMiniOpen] = useState(false);

    const handleOpenMiniCart = () => {
        setCartMiniOpen(true);
    }
    const handleCloseMiniCart = () => {
        setCartMiniOpen(false);
    }


    // navMobileOpen
    const [navMobileOpen,setNavMobileOpen] = useState(false);

    const handleNavMobileOpen = () => {
        console.log("test");
        setNavMobileOpen(true);
    }

    const handleCloseNavMobile = () => {
        setNavMobileOpen(false);
    }


    // user
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch();
    // console.log(user);

    useEffect(()=>{
        let accessTokenTemp = Cookies.get("accessToken");
        if(accessTokenTemp && !user){
            dispatch(fetchUserData());
        }
    },[])

    useEffect(()=>{
        console.log(user);
    },[user]);

    return (
        <div className={ " header"}>
            <div className=" header-common shofy-h-66 mt-5">
                <div className="container p-relative">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-3  col-6">
                            <Link to={'/'} className="logo d-flex align-items-center shofy-h-66">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="col-xl-4 col-lg-5  col-6 d-none d-lg-block">
                            <div className="shofy-h-66 list-nav">
                                <div className='d-flex shofy-h-66 align-items-center'>
                                    <Link className='ms-3'>
                                        <span>{t('app.header.Home')}</span>
                                    </Link>
                                    <Link className='ms-3 nav-parent'>
                                        <span>Product</span>
                                        <div className="container nav-chil">
                                            <div className="row pe-5 ps-5">
                                            <div className="category col-3">
                                                <div className="title">
                                                    Category 1
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">item 1</div>
                                                    <div className="item">item 2</div>
                                                    <div className="item">item 3</div>
                                                    <div className="item">item 4</div>
                                                    <div className="item">item 5</div>
                                                    <div className="item">item 6</div>
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title">
                                                    Category 2
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">item 1</div>
                                                    <div className="item">item 2</div>
                                                    <div className="item">item 3</div>
                                                    <div className="item">item 4</div>
                                                    <div className="item">item 5</div>
                                                    <div className="item">item 6</div>
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title">
                                                    Category 3
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">item 1</div>
                                                    <div className="item">item 2</div>
                                                    <div className="item">item 3</div>
                                                    <div className="item">item 4</div>
                                                    <div className="item">item 5</div>
                                                    <div className="item">item 6</div>
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title">
                                                    Category 4
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">item 1</div>
                                                    <div className="item">item 2</div>
                                                    <div className="item">item 3</div>
                                                    <div className="item">item 4</div>
                                                    <div className="item">item 5</div>
                                                    <div className="item">item 6</div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                    <Link className='ms-3'>
                                        <span>Accessories</span>
                                    </Link>
                                    <Link className='ms-3'>
                                        <span>Blog</span>
                                    </Link>
                                    <Link className='ms-3'>
                                        <span>Contact</span>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-3 col-md-7 d-sm-none d-none d-md-block d-xl-block d-lg-block ">
                            <div className="box-search container p-0 row w-100 ">
                                    <form className='p-0' action="">
                                        <div className='d-flex align-items-center row '>
                                                <div className=" col-9 border-box container">
                                                    <input className=' border-0 outline-0 w-100 ms-3' type="text" placeholder='Search for products...' />
                                                </div>
                                                <div className='icon-search col-3 text-center '>
                                                    <button className='border-0 btn-search w-100 '>
                                                        <i class="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                </div>
                                        </div>
                                    </form>
                                </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-2 col-6">
                            <div className="user-action d-flex align-items-center justify-content-end shofy-h-66">
                                    <div onClick={handleShowInputSearch} className='btn-search-icon d-md-none d-lg-none d-xl-none'>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <div className="Wishlist ms-3 d-none d-xl-block">
                                        <Link className='p-2' to={'/wishlist'}>
                                            <svg _ngcontent-ng-c3631614527="" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </Link>
                                        <div className="badge ">
                                            <span>1</span>
                                        </div>
                                    </div>

                                    <div className="cart ms-3">
                                        <button 
                                            onClick={handleOpenMiniCart}
                                            className='btn-mini-cart'>
                                            <svg _ngcontent-ng-c3631614527="" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </button>
                                        <div className='badge'>
                                        <span>1</span>
                                        </div>
                                    </div>

                                    <div className="header-profile ms-3 align-items-center d-none d-lg-block ">
                                        <div className="shofy-user d-flex">
                                            <Link to={'/profile/Home'} 
                                            
                                            className="img me-3 d-flex align-items-center justify-content-center">
                                                {
                                                    user?
                                                    <img src={import.meta.env.VITE_API_URL+user.Avatar} alt="" />
                                                    :
                                                    <svg _ngcontent-ng-c3631614527="" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-ng-c3631614527="" cx="8.57894" cy="5.77803" r="4.77803" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M1.00002 17.2014C0.998732 16.8655 1.07385 16.5337 1.2197 16.2311C1.67736 15.3158 2.96798 14.8307 4.03892 14.611C4.81128 14.4462 5.59431 14.336 6.38217 14.2815C7.84084 14.1533 9.30793 14.1533 10.7666 14.2815C11.5544 14.3367 12.3374 14.4468 13.1099 14.611C14.1808 14.8307 15.4714 15.27 15.9291 16.2311C16.2224 16.8479 16.2224 17.564 15.9291 18.1808C15.4714 19.1419 14.1808 19.5812 13.1099 19.7918C12.3384 19.9634 11.5551 20.0766 10.7666 20.1304C9.57937 20.2311 8.38659 20.2494 7.19681 20.1854C6.92221 20.1854 6.65677 20.1854 6.38217 20.1304C5.59663 20.0773 4.81632 19.9641 4.04807 19.7918C2.96798 19.5812 1.68652 19.1419 1.2197 18.1808C1.0746 17.8747 0.999552 17.5401 1.00002 17.2014Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                }
                                            </Link>
                                            {/* <div className="user-name d-none d-xl-block">
                                                <div className="hello">
                                                    Hello, Sign In
                                                </div>
                                                <div className="name">
                                                    Your Account
                                                </div>
                                            </div> */}
                                        </div>
                                </div>

                                    <div 
                                    onClick={handleNavMobileOpen}
                                    className='menu d-xl-none d-lg-none'>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                            <rect x="10" width="20" height="2" fill="currentColor"></rect>
                                            <rect x="5" y="7" width="25" height="2" fill="currentColor"></rect>
                                            <rect x="10" y="14" width="20" height="2" fill="currentColor"></rect>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                        </div>

                    </div>

                    {
                        showInputSearch==true && 
                        <div onClick={handleHiddenInputSearch} className="input-search-2">
                            <div className="container">
                            <div class="input-group mb-3 box-search-2 row" >
                                <input 
                                type="text" 
                                class="form-control col-9" 
                                placeholder="Search For Products..."
                                onClick={handleInputClick} 
                                aria-label="Recipient's username" 
                                aria-describedby="button-addon2"/>
                                
                                <button 
                                class="btn btn-primary col-3" 
                                onClick={handleButtonClick}
                                type="button" id="button-addon2">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                    
                    }
                </div>
            </div>
            <app-cart-sidebar>
                <MiniCart open={cartMiniOpen} handleCloseMiniCart={handleCloseMiniCart}/>
            </app-cart-sidebar>

            <app-nav-mobile>
                <NavMobile open={navMobileOpen} handleCloseNavMobile={handleCloseNavMobile}/>
            </app-nav-mobile>

            
        </div>
    );
};

export default HeaderCommon;
