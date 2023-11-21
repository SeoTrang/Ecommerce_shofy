import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom'

import './NavMobile.css'

const NavMobile = ({open,handleCloseNavMobile}) => {

    console.log(open);

    const [classNavParentActive,setClassNavParentActive] = useState();
    const [classNavChildActive,setClassNavChildActive] = useState();
    const [navParentActive,setNavParentActive] = useState();
    const [navChildActive,setNavChildActive] = useState();

    const handleNavParentActive = (value) => {
        console.log(value);
        setClassNavParentActive(value);
        if(navParentActive){  // reset nav active
            console.log(navParentActive);
            // navChildActive.classList.remove('nav-active');
            const iconNav = navParentActive.querySelectorAll('.nav-parent .nav-icon-down i')[0];
            iconNav.classList.remove('nav-active');

            const navChil = navParentActive.querySelectorAll('.nav-childs')[0];
            navChil.classList.add('d-none');
            // return;

        }
        if(value == classNavParentActive){
            setClassNavParentActive(null);
            return;
        }
        const node =document.getElementsByClassName(value)[0];
        setNavParentActive(node)
        // node.classList.add('nav-active');
        const iconNav = node.querySelectorAll('.nav-parent .nav-icon-down i')[0];
        // console.log(iconNav);
        iconNav.classList.add('nav-active');
        // console.log(node);

        // visable ul
        const navChil = node.querySelectorAll('.nav-childs')[0];
        navChil.classList.remove('d-none');


    }

    const handleNavChildActive = (e,value) => {
        console.log(e);
        e.stopPropagation();
        // e.preventDefault(); 
        console.log(value);
        setClassNavChildActive(value);
        if(navChildActive){  // reset nav active
            console.log(navChildActive);
            // navChildActive.classList.remove('nav-active');
            const iconNav = navChildActive.querySelectorAll('.nav-child .nav-icon-down i')[0];
            iconNav.classList.remove('nav-active');

            const navChil = navChildActive.querySelectorAll('.nav-child-2')[0];
            navChil.classList.add('d-none');
            // return;

        }
        if(value == classNavChildActive){
            setClassNavChildActive(null);
            return;
        }
        const node = document.getElementsByClassName(value)[0];
        setNavChildActive(node)
        // node.classList.add('nav-active');
        const iconNav = node.querySelectorAll('.nav-child .nav-icon-down i')[0];
        // console.log(iconNav);
        iconNav.classList.add('nav-active');
        // console.log(node);

        // visable ul
        const navChil = node.querySelectorAll('.nav-child-2')[0];
        navChil.classList.remove('d-none');


    }


    useEffect(()=>{
        console.log(navParentActive);
        console.log(navChildActive);
    },navChildActive,navParentActive)


    const handleClose = () => {
        const node = document.getElementsByClassName('nav-mobile')[0];
        node.classList.remove('animate__bounceInRight')
        node.classList.add('animate__bounceOutRight')
        return handleCloseNavMobile();
    }


    return (
        <>
        {
            open
            ?
             <div className="nav-mobile-side-bar">
             <div className='nav-mobile animate__animated animate__bounceInRight'>
                 <div className="container">
                     <div className="action-top mt-3 row">
                         <div className="col-6">
                             <div className="logo">
                                 <img src="	https://shofy-angular.vercel.app/assets/img/logo/logo.svg" alt="" />
                             </div>
                         </div>
                         <div className="col-6 d-flex justify-content-end">
                             <div 
                             onClick={handleClose}
                             className='close-side btn'>
                                 <i class="fa-solid fa-x"></i>
                             </div>
                         </div>
                     </div>
 
                     <div className="nav-category mt-3">
                         <div className="list-nav">
                            <div className="nav-parent mt-2">
                                    {/* <span className='nav-title'>My profile</span> */}
                                    <div className="row nav-profile align-items-center">
                                        <div className="col-8">
                                            <Link to={'/profile/Home'} className="d-flex align-items-center">
                                                <div className="img">
                                                    <img src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg" alt="" />
                                                </div>
                                                <div className="name ms-2">
                                                    Tráng
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4 nav-profile-action d-flex justify-content-end">
                                            <div>
                                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                            </div>
                                        </div>
                                    </div>
    
                            </div>
                            <hr />
                             <div className="nav-parent mt-2">
                                 <span className='nav-title'>Home</span>
 
                             </div>
                             <div
                                 onClick={()=>{handleNavParentActive('nav-parent-category')}}
                                 className="nav-parent nav-parent-category mt-2">
                                 <div 
                                     className='row '>
                                     <div className='col-10'>
                                         <span className='nav-title '>Category</span>
                                     </div>
                                     <div className='col-2'>
                                         <span className='nav-icon-down'><i class="fa-solid fa-angle-right"></i></span>
                                     </div>
                                 </div>
                                 <div className="nav-childs d-none mt-3">
                                     <ul>
                                         
                                         <li>
                                             <div 
                                             onClick={(e)=>{handleNavChildActive(e,'nav-child-Electronics')}}
                                             className='nav-child nav-child-Electronics'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Electronics
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                                 <div className="nav-child-2 d-none pt-2">
                                                     <ul>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             to={'/product'} className='col-10'>Mobile phones </Link> 
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             className='col-10'>Computers and laptops</Link>
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             className='col-10'>Cameras and camcorders</Link>
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             className='col-10'>Home electronics</Link>
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             className='col-10'>Accessories</Link>
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                     </ul>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div 
                                             onClick={(e)=>{handleNavChildActive(e,'nav-child-Fashion')}}
                                             className='nav-child nav-child-Fashion'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Fashion
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                                 <div className="nav-child-2 d-none pt-2">
                                                     <ul>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             className='col-10'>Clothing</Link> 
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             className='col-10'>Shoes</Link>
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             className='col-10'>Jewelry and watches</Link>
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                         <li className='mt-2 row'>
                                                             <Link 
                                                             onClick={handleClose}
                                                             className='col-10'>Bags and wallets</Link>
                                                             <i class="col-2 fa-solid fa-arrow-right"></i>
                                                         </li>
                                                     </ul>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Home Appliances
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Food and Drinks
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Health and Beauty
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Toys and Entertainment
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Tools and Construction Equipment
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Cars, Motorcycles, and Parts
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Sports and Outdoors
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Office Supplies and Equipment
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
 
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Pets
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                         <li>
                                             <div className='nav-child'>
                                                 <div className="row mt-2">
                                                     <div className="col-10">
                                                         <div className="nav-child-title">
                                                             Books and Physical Products
                                                         </div>
 
                                                     </div>
                                                     <div className="col-2">
                                                         <span className='nav-icon-down'>
                                                             <i class="fa-solid fa-angle-right"></i>
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                         </li>
                                         <hr />
                                     </ul>
                                 </div>
 
                             </div>
                             <div 
                                 onClick={()=>{handleNavParentActive('nav-parent-about')}}
                                 className="nav-parent mt-2">
                                 <span className='nav-title'>About</span>
 
                             </div>
                             <div className="nav-parent mt-2">
                                 <span className='nav-title'>Contac</span>
 
                             </div>
                             <div className="nav-parent mt-2">
                                 <span className='nav-title'>Blog</span>
 
                             </div>
                             
                         </div>
                     </div>
                 </div>
                 
             </div>
             <div className="body-overlay opened">
 
             </div>
         </div>
            :
            null
        }   
        </>
    );
};

export default NavMobile;