import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';
import Logo from '../../assets/img/logo.svg';
import Logo2 from '../../assets/img/logo_bonik.svg';

import usFlag from './flag-us.svg';
import vnFlag from './flag-vietnam.svg';

import './Header.css'
import MiniCart from '../../components/MiniCart/MiniCart';
import NavMobile from '../../components/NavMobile/NavMobile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/actions/userAction';
import Cookies from 'js-cookie';
import { fetchCartData } from '../../redux/actions/cartAction';

const Header = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [languegeState,setLanguageState] = useState('en');
    const [currencyState,setCurrencyState] = useState('USD');
    const handleChangeLanguage = (value) => {
        setLanguageState(value);
        changeLanguage(value);
    }


    useEffect(() => {
        const handleScroll = () => {
          // Lấy vị trí cuộn dọc hiện tại
          const scrollTop = window.scrollY;
    
          // In ra thông số vị trí cuộn dọc
        //   console.log('Vị trí cuộn dọc:', scrollTop);
          const header = document.getElementsByClassName("header-sticky")[0];
          if(scrollTop > 150){
            header.classList.add("sticky-2");
          }else{
            header.classList.remove("sticky-2");
          }
        }
    
        // Gắn sự kiện cuộn vào window
        window.addEventListener('scroll', handleScroll);


    
        return () => {
          // Hủy bỏ sự kiện khi component bị unmounted
          window.removeEventListener('scroll', handleScroll);
        }
      }, []); // Truyền mảng rỗng [] để chỉ gắn sự kiện khi component được mount


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
    // const [user,setUser] = useState();
    const dispatch = useDispatch();
    // console.log(user);
    const user = useSelector((state) => state.user.user);
    const cart = useSelector((state) => state.cart.carts);
    

    useEffect(()=>{
        let accessTokenTemp = Cookies.get("accessToken");
        
        if(accessTokenTemp && !user){
            dispatch(fetchUserData());
            dispatch(fetchCartData());
        }
    },[])

    useEffect(()=>{
        console.log(user);
        console.log(cart);
    },[user,cart]);

    return (
        <>
        
            <div className={" header p-relative"}>
            
                <div className="header-sticky shofy-h-66 mt-5">
                    <div className="container p-relative mt-2">
                        <div className="row">
                            <div className="col-6 col-xl-3 col-lg-3  ">
                                <div className="logo d-flex align-items-center shofy-h-66">
                                    <img src={Logo2} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6  d-none d-lg-block">
                                <div className="shofy-h-66 list-nav">
                                    <div className='d-flex shofy-h-66 align-items-center'>
                                    <Link to={'/'} className='ms-3'>
                                        <span>{t('app.header.Home')}</span>
                                    </Link>
                                    <Link className='ms-3 nav-parent'>
                                        <span>{t('app.header.Category')}</span>
                                        <div className="container nav-chil pb-4">
                                            <div className="row pe-5 ps-5">
                                            <div className="category col-3">
                                                <div className="title mt-2">
                                                    {t('app.header.electronics')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item"> {t('app.header.mobilePhonesAndAccessories')}</div>
                                                    <div className="item">{t('app.header.computersAndLaptops')}</div>
                                                    <div className="item">{t('app.header.camerasAndCamcorders')}</div>
                                                </div>
                                                <div className="title mt-2">
                                                    {t('app.header.fashion')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.clothing')}</div>
                                                    <div className="item">{t('app.header.shoes')}</div>
                                                    <div className="item">{t('app.header.jewelryAndWatches')}</div>
                                                    <div className="item">{t('app.header.bagsAndWallets')}</div>
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.homeAppliances')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.refrigeratorsAndWashingMachines')}</div>
                                                    <div className="item">{t('app.header.furniture')}</div>
                                                    <div className="item">{t('app.header.kitchenAppliances')}</div>
                                                    <div className="item">{t('app.header.lightsAndLightingFixtures')}</div>
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title mt-2">
                                                    {t('app.header.foodAndDrinks')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.freshFood')}</div>
                                                    <div className="item">{t('app.header.cannedFoodAndFastFood')}</div>
                                                    <div className="item">{t('app.header.beverages')}</div>
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.healthAndBeauty')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.cosmetics')}</div>
                                                    <div className="item">{t('app.header.dietarySupplements')}</div>
                                                    <div className="item">{t('app.header.personalMedicalEquipment')}</div>
                                                    <div className="item">{t('app.header.medicinesAndPharmaceuticals')}</div>
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.toysAndEntertainment')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.toysForChildren')}</div>
                                                    <div className="item">{t('app.header.videoGamesAndGamingConsoles')}</div>
                                                    <div className="item">{t('app.header.booksMusicAndMovies')}</div>
                                                   
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title mt-2">
                                                    {t('app.header.toolsAndConstructionEquipment')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.handToolsAndConstructionEquipment')}</div>
                                                    <div className="item">{t('app.header.craftsmanshipAndRepairTools')}</div>
                                                    <div className="item">{t('app.header.buildingMaterials')}</div>
                                                   
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.carsMotorcyclesAndParts')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.newAndUsedCarsAndMotorcycles')}</div>
                                                    <div className="item">{t('app.header.carAndMotorcyclePartsAndAccessories')}</div>
                                                    <div className="item">{t('app.header.maintenanceAndRepairServices')}</div>
                                                   
                                                </div>
                                                <div className="title mt-2">
                                                    {t('app.header.carsMotorcyclesAndParts')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.newAndUsedCarsAndMotorcycles')}</div>
                                                    <div className="item">{t('app.header.carAndMotorcyclePartsAndAccessories')}</div>
                                                    <div className="item">{t('app.header.maintenanceAndRepairServices')}</div>
                                                   
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.sportsAndOutdoors')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.sportsEquipment')}</div>
                                                    <div className="item">{t('app.header.snowSportsAndOutdoorEquipment')}</div>
                                                    <div className="item">{t('app.header.productsRelatedToCampingAndTravel')}</div>
                                                   
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title mt-2">
                                                    {t('app.header.officeSuppliesAndEquipment')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.printersAndComputers')}</div>
                                                    <div className="item">{t('app.header.paperAndOfficeSupplies')}</div>
                                                    <div className="item">{t('app.header.schoolSuppliesAndStudyTools')}</div>
                                                   
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.pets')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.petFoodAndCareProducts')}</div>
                                                    <div className="item">{t('app.header.petCagesAndEquipment')}</div>
                                                    <div className="item">{t('app.header.toysAndAccessoriesForPets')}</div>
                                                   
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.booksAndPhysicalProducts')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.newAndUsedBooks')}</div>
                                                    <div className="item">{t('app.header.eBooks')}</div>
                                                    <div className="item">{t('app.header.paintingsPrintsAndArtProducts')}</div>
                                                   
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                   
                                    <Link to={'/product'} className='ms-3'>
                                        <span>{t('app.header.Product')}</span>
                                    </Link>
                                    <Link className='ms-3'>
                                        <span>{t('app.header.Blog')}</span>
                                    </Link>
                                    <Link className='ms-3'>
                                        <span>{t('app.header.Contact')}</span>
                                    </Link>
                                    <Link className='ms-3'>
                                        <span>{t('app.header.My Profile')}</span>
                                    </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-6 col-xl-3 col-lg-3  ">
                                <div className="user-action d-flex align-items-center justify-content-end shofy-h-66">
                                        <div 
                                            onClick={handleShowInputSearch} 
                                            className='btn-search-icon d-md-block d-lg-none d-xl-none'>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <div className="Wishlist ms-3 d-none d-md-block">
                                            <Link to={'/wishlist'} className='p-2'>
                                                <svg _ngcontent-ng-c3631614527="" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </Link>
                                            <div className="badge ">
                                                <span>1</span>
                                            </div>
                                        </div>

                                        <div 
                                            onClick={handleOpenMiniCart}
                                            className="cart ms-3">
                                            <button className='btn-mini-cart'>
                                                <svg _ngcontent-ng-c3631614527="" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </button>
                                            <div className='badge'>
                                            <span>{cart? cart.length : 0}</span>
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
                    </div>

                    
                </div>
                <div className={styles.headerTop+ " header-top"}>
                    
                <div className='d-none header-top-1 d-lg-block d-xl-block'>
                    <div className="container">
                    <div className="row  align-items-center">
                        <div className="col-6 item-left">
                            <div className="content d-flex align-items-center">
                                <div className="icon">
                                    <svg _ngcontent-ng-c3631614527="" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" d="M14.6364 1H1V12.8182H14.6364V1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M14.6364 5.54545H18.2727L21 8.27273V12.8182H14.6364V5.54545Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M5.0909 17.3636C6.3461 17.3636 7.36363 16.3461 7.36363 15.0909C7.36363 13.8357 6.3461 12.8182 5.0909 12.8182C3.83571 12.8182 2.81818 13.8357 2.81818 15.0909C2.81818 16.3461 3.83571 17.3636 5.0909 17.3636Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M16.9091 17.3636C18.1643 17.3636 19.1818 16.3461 19.1818 15.0909C19.1818 13.8357 18.1643 12.8182 16.9091 12.8182C15.6539 12.8182 14.6364 13.8357 14.6364 15.0909C14.6364 16.3461 15.6539 17.3636 16.9091 17.3636Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className="text ms-2">
                                    {t('app.header.wellcome')}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="content d-flex align-items-center justify-content-end">
                                <div className="languege-lg">
                                    <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="d-flex languege-active">
                                            <div className="img">
                                                <img src={
                                                    languegeState == 'en'?
                                                    usFlag
                                                    :
                                                    vnFlag
                                                } alt="" />
                                            </div>
                                            {/* <div className="text">
                                                English
                                            </div> */}

                                        </div>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-white">
                                        <li
                                            onClick={()=>{handleChangeLanguage('en')}}
                                        >
                                            <a class="dropdown-item" href="#">
                                                <div className="d-flex">
                                                    <div className="img me-2">
                                                        <img src={usFlag} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        English
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            onClick={()=>{handleChangeLanguage('vn')}}
                                        >
                                            <a class="dropdown-item" href="#">
                                                <div className="d-flex">
                                                    <div className="img me-2">
                                                        <img src={vnFlag} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        Việt Nam
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                
                                </div>
                                <div className="currency-lg ms-2">
                                    <div class="dropdown">
                                        <button class="btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            USD
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">VNĐ</a></li>
                                            <li><a class="dropdown-item" href="#">USD</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="setting ms-2    ">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="component-iconify MuiBox-root css-9uy14h iconify iconify--solar" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.409 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083Z" clip-rule="evenodd" opacity=".5"></path><path d="M15.523 12c0 1.657-1.354 3-3.023 3c-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3Z"></path></g></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                    <div class="container shofy-container ">
                        
                        
                        <div class="row align-items-center mt-4 shofy-h-50">
                            <div class="col-xl-2 col-lg-2 col-md-4 col-6 img shofy-h-50">
                                <div className="logo d-flex align-items-center shofy-h-50">
                                    <img src={Logo2} alt="" />
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-6 d-none d-lg-block search shofy-h-50">
                                    <div className="box-search container p-0 row ms-5 w-100 shofy-h-50">
                                        <form className='p-0' action="">
                                            <div className='d-flex align-items-center row shofy-h-50'>
                                                    <div className=" col-10 border-box container">
                                                        <input className=' border-0 outline-0 w-100 ms-3' type="text" placeholder={t('app.header.Search for products...')} />
                                                    </div>
                                                    <div className='icon-search col-2 text-center shofy-h-50'>
                                                        <button className='border-0 btn-search w-100 shofy-h-50'>
                                                            <i class="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            <div className="col-xl-3 col-lg-4 col-md-8 col-6 user align-items-center shofy-h-50">
                                <div className="header-right d-flex align-items-center justify-content-end shofy-h-50">
                                    {
                                        user?
                                        <Link to={'/profile/Home'} className='header-profile d-flex align-items-center d-none d-lg-block'>
                                            <div className="shofy-user d-flex align-items-center">
                                                <div className="img">
                                                    <img src={import.meta.env.VITE_API_URL+user.avatar} alt="" />
                                                </div>
                                                <div className="name ms-2">
                                                    <span>
                                                        {
                                                            user.user_name
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </Link> 
                                        :
                                        <Link to={'/login'} className="header-profile align-items-center d-none d-lg-block ">
                                            <div className="shofy-user d-flex">
                                                <div className="img me-3 d-flex align-items-center justify-content-center">
                                                    <svg _ngcontent-ng-c3631614527="" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-ng-c3631614527="" cx="8.57894" cy="5.77803" r="4.77803" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M1.00002 17.2014C0.998732 16.8655 1.07385 16.5337 1.2197 16.2311C1.67736 15.3158 2.96798 14.8307 4.03892 14.611C4.81128 14.4462 5.59431 14.336 6.38217 14.2815C7.84084 14.1533 9.30793 14.1533 10.7666 14.2815C11.5544 14.3367 12.3374 14.4468 13.1099 14.611C14.1808 14.8307 15.4714 15.27 15.9291 16.2311C16.2224 16.8479 16.2224 17.564 15.9291 18.1808C15.4714 19.1419 14.1808 19.5812 13.1099 19.7918C12.3384 19.9634 11.5551 20.0766 10.7666 20.1304C9.57937 20.2311 8.38659 20.2494 7.19681 20.1854C6.92221 20.1854 6.65677 20.1854 6.38217 20.1304C5.59663 20.0773 4.81632 19.9641 4.04807 19.7918C2.96798 19.5812 1.68652 19.1419 1.2197 18.1808C1.0746 17.8747 0.999552 17.5401 1.00002 17.2014Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                                <div className="user-name d-none d-xl-block">
                                                    <div className="hello">
                                                        {t('app.header.Hello, Sign In')}
                                                    </div>
                                                    <div className="name">
                                                        {t('app.header.Your Account')}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    }
                                    <div className="user-action d-flex align-items-center">
                                        <div 
                                            onClick={handleShowInputSearch} 
                                            className='btn-search-icon d-md-block d-lg-none d-xl-none'>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <Link to={'/wishlist'} className="Wishlist ms-3 d-none d-md-block">
                                            <div className='p-1'>
                                                <svg _ngcontent-ng-c3631614527="" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>
                                            <div className="badge ">
                                                <span>1</span>
                                            </div>
                                        </Link>

                                        <div 
                                            onClick={handleOpenMiniCart}
                                            className="cart ms-3">
                                            <button className='btn-mini-cart'>
                                                <svg _ngcontent-ng-c3631614527="" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </button>
                                            <div className='badge'>
                                            <span>{cart? cart.length : 0}</span>
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
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom+" shofy-header-bottom shofy-h-50 mt-3 d-none d-lg-block d-xl-block"}>
                    <div className="container shofy-h-50">
                        <div className="row p-relative shofy-h-50">
                            <div className="col-3 items-1 dropdown shofy-h-50">
                                <button className='shofy-h-50 ps-3 pe-3 w-100 border-0 d-flex align-items-center justify-content-between dropdown-toggle'
                                        type="button" data-bs-toggle="dropdown" aria-expanded="true"
                                >
                                    <div className="left ">
                                        <svg _ngcontent-ng-c2832150331="" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2832150331="" fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H1Z" fill="currentColor"></path></svg>
                                        <span className='ms-3'> 
                                            {t('app.header.All Categories')}
                                         </span>

                                    </div>
                                    <div className="right">
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </div>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-light menu-dropdown">
                                    <li>
                                        <a class="dropdown-item d-flex justify-content-between ps-4 pe-4 mt-2 align-items-center" href="#">
                                            <div className="left">
                                                <img src="https://i.ibb.co/sVxYFDY/product-cat-1.png" alt="" />
                                                <span> {t('app.header.Headphones')} </span>
                                            </div>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </a>
                                        <ul class="list-group list-group-menu list-group-flush">
                                            <li class="list-group-item ">{t('app.header.Kids Headphones')}</li>
                                            <li class="list-group-item">{t('app.header.Bluetooth Headphones')}</li>
                                            <li class="list-group-item">{t('app.header.On-Ear Headphones')}</li>
                                        
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="dropdown-item d-flex justify-content-between ps-4 pe-4 mt-2 align-items-center" href="#">
                                            <div className="left">
                                                <img src="https://i.ibb.co/xHFpQTV/product-cat-2.png" alt="" />

                                                <span>  {t('app.header.Mobile Tablets')}  </span>
                                            </div>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </a>
                                        <ul class="list-group list-group-menu list-group-flush">
                                            <li class="list-group-item ">Samsung</li>
                                            <li class="list-group-item">Apple</li>
                                            
                                        
                                        </ul>
                                    </li>

                                    <li>
                                        <a class="dropdown-item d-flex justify-content-between ps-4 pe-4 mt-2 align-items-center" href="#">
                                            <div className="left">
                                                <img src="https://i.ibb.co/S0GjZdp/product-cat-3.png" alt="" />

                                                <span>  CPU Heat Pipes  </span>
                                            </div>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </a>
                                        <ul class="list-group list-group-menu list-group-flush">
                                            <li class="list-group-item ">CPU Cooler</li>
                                            <li class="list-group-item">Air CPU Cooler</li>
                                            
                                        
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="dropdown-item d-flex justify-content-between ps-4 pe-4 mt-2 align-items-center" href="#">
                                            <div className="left">
                                                <img src="https://i.ibb.co/g3YK8H2/product-cat-4.png" alt="" />

                                                <span>  Smart Watch  </span>
                                            </div>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </a>
                                        <ul class="list-group list-group-menu list-group-flush">
                                            <li class="list-group-item ">Sports Smart Watch</li>
                                            <li class="list-group-item">Apple Watch</li>
                                            <li class="list-group-item">Fitness Smart Watch</li>
                                            
                                        
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="dropdown-item d-flex justify-content-between ps-4 pe-4 mt-2 align-items-center" href="#">
                                            <div className="left">
                                                <img src="https://i.ibb.co/D9qfYWX/product-cat-5.png" alt="" />

                                                <span>  Bluetooth  </span>
                                            </div>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </a>
                                        <ul class="list-group list-group-menu list-group-flush">
                                            <li class="list-group-item ">Wireless Bluetooth</li>
                                            <li class="list-group-item">Sports Bluetooth</li>
                                            
                                        
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-7 shofy-h-50  nav-chil-home ">
                                <div className='d-flex shofy-h-50 align-items-center'>
                                    <Link to={'/'} className='ms-3'>
                                        <span>{t('app.header.Home')}</span>
                                    </Link>
                                    <Link className='ms-3 nav-parent'>
                                        <span>{t('app.header.Category')}</span>
                                        <div className="container nav-chil pb-4">
                                            <div className="row pe-5 ps-5">
                                            <div className="category col-3">
                                                <div className="title mt-2">
                                                    {t('app.header.electronics')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item"> {t('app.header.mobilePhonesAndAccessories')}</div>
                                                    <div className="item">{t('app.header.computersAndLaptops')}</div>
                                                    <div className="item">{t('app.header.camerasAndCamcorders')}</div>
                                                </div>
                                                <div className="title mt-2">
                                                    {t('app.header.fashion')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.clothing')}</div>
                                                    <div className="item">{t('app.header.shoes')}</div>
                                                    <div className="item">{t('app.header.jewelryAndWatches')}</div>
                                                    <div className="item">{t('app.header.bagsAndWallets')}</div>
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.homeAppliances')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.refrigeratorsAndWashingMachines')}</div>
                                                    <div className="item">{t('app.header.furniture')}</div>
                                                    <div className="item">{t('app.header.kitchenAppliances')}</div>
                                                    <div className="item">{t('app.header.lightsAndLightingFixtures')}</div>
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title mt-2">
                                                    {t('app.header.foodAndDrinks')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.freshFood')}</div>
                                                    <div className="item">{t('app.header.cannedFoodAndFastFood')}</div>
                                                    <div className="item">{t('app.header.beverages')}</div>
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.healthAndBeauty')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.cosmetics')}</div>
                                                    <div className="item">{t('app.header.dietarySupplements')}</div>
                                                    <div className="item">{t('app.header.personalMedicalEquipment')}</div>
                                                    <div className="item">{t('app.header.medicinesAndPharmaceuticals')}</div>
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.toysAndEntertainment')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.toysForChildren')}</div>
                                                    <div className="item">{t('app.header.videoGamesAndGamingConsoles')}</div>
                                                    <div className="item">{t('app.header.booksMusicAndMovies')}</div>
                                                   
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title mt-2">
                                                    {t('app.header.toolsAndConstructionEquipment')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.handToolsAndConstructionEquipment')}</div>
                                                    <div className="item">{t('app.header.craftsmanshipAndRepairTools')}</div>
                                                    <div className="item">{t('app.header.buildingMaterials')}</div>
                                                   
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.carsMotorcyclesAndParts')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.newAndUsedCarsAndMotorcycles')}</div>
                                                    <div className="item">{t('app.header.carAndMotorcyclePartsAndAccessories')}</div>
                                                    <div className="item">{t('app.header.maintenanceAndRepairServices')}</div>
                                                   
                                                </div>
                                                <div className="title mt-2">
                                                    {t('app.header.carsMotorcyclesAndParts')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.newAndUsedCarsAndMotorcycles')}</div>
                                                    <div className="item">{t('app.header.carAndMotorcyclePartsAndAccessories')}</div>
                                                    <div className="item">{t('app.header.maintenanceAndRepairServices')}</div>
                                                   
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.sportsAndOutdoors')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.sportsEquipment')}</div>
                                                    <div className="item">{t('app.header.snowSportsAndOutdoorEquipment')}</div>
                                                    <div className="item">{t('app.header.productsRelatedToCampingAndTravel')}</div>
                                                   
                                                </div>
                                            </div>
                                            <div className="category col-3">
                                                <div className="title mt-2">
                                                    {t('app.header.officeSuppliesAndEquipment')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.printersAndComputers')}</div>
                                                    <div className="item">{t('app.header.paperAndOfficeSupplies')}</div>
                                                    <div className="item">{t('app.header.schoolSuppliesAndStudyTools')}</div>
                                                   
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.pets')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.petFoodAndCareProducts')}</div>
                                                    <div className="item">{t('app.header.petCagesAndEquipment')}</div>
                                                    <div className="item">{t('app.header.toysAndAccessoriesForPets')}</div>
                                                   
                                                </div>

                                                <div className="title mt-2">
                                                    {t('app.header.booksAndPhysicalProducts')}
                                                </div>
                                                <div className="List-items">
                                                    <div className="item">{t('app.header.newAndUsedBooks')}</div>
                                                    <div className="item">{t('app.header.eBooks')}</div>
                                                    <div className="item">{t('app.header.paintingsPrintsAndArtProducts')}</div>
                                                   
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                   
                                    <Link to={'/product'} className='ms-3'>
                                        <span>{t('app.header.Product')}</span>
                                    </Link>
                                    <Link className='ms-3'>
                                        <span>{t('app.header.Blog')}</span>
                                    </Link>
                                    <a href='#footer' className='ms-3'>
                                        <span>{t('app.header.Contact')}</span>
                                    </a>
                                    <Link className='ms-3'>
                                        <span>{t('app.header.My Profile')}</span>
                                    </Link>
                                </div>
                                
                            </div>
                            <div className="col-2 shofy-h-50 shofy-hotline">
                                <div className="d-flex align-items-center">
                                    <div className="svg me-2">
                                        <svg _ngcontent-ng-c3631614527="" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        
                                    </div>
                                    <div className="hotline">
                                            <div className="title">
                                                Hotline:
                                            </div>
                                            <div className="value">
                                                +(84) 386 643 97
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    showInputSearch==true && 
                    <div 
                    onClick={handleHiddenInputSearch} 
                        className="input-search-1">
                            <div className="container w-100">
                                <div class="input-group mb-3 box-search-1 row" >
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
            <app-cart-sidebar>
                <MiniCart open={cartMiniOpen} handleCloseMiniCart={handleCloseMiniCart}/>
            </app-cart-sidebar>

            <app-nav-mobile>
                <NavMobile open={navMobileOpen} handleCloseNavMobile={handleCloseNavMobile}/>
            </app-nav-mobile>
        </>
    );
};

export default Header;
