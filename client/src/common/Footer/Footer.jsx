import React from 'react';

import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer ' id='footer'>
            <div className="container">
                <div className="row pt-95 pb-40">
                    <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                        <div className="logo">
                            <img src="https://shofy-angular.vercel.app/assets/img/logo/logo.svg" alt="" />
                        </div>
                        <div className="short-description mt-4">
                            We are a team of designers and developers that create high quality WordPress
                        </div>

                        <div className="social-network mt-4">
                            <Link>
                                <i class="fa-brands fa-facebook-f"></i>
                            </Link>
                            <Link>
                                <i class="fa-brands fa-twitter"></i>
                            </Link>
                            <Link>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </Link>
                            <Link>
                                <i class="fa-brands fa-vimeo-v"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="my-acc nav-footer">
                            <div className="title">
                                <h5>My Account</h5>
                            </div>
                            <div className="list-menu">
                                <ul>
                                    <li>
                                        <Link>
                                            Track Orders
                                        </Link>

                                    </li>
                                    <li>
                                        <Link>
                                            Shipping
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Wishlist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            My Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Order History
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Returns
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="infomation nav-footer">
                            <div className="title">
                                <h5>Infomation</h5>
                            </div>
                            <div className="list-menu">
                                <ul>
                                    <li>
                                        <Link>
                                            Our Story
                                        </Link>

                                    </li>
                                    <li>
                                        <Link>
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Latest News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="talk-to-us">
                            <div className="title">
                                <h5>
                                    Talk To Us
                                </h5>
                            </div>
                            <span>Got Questions? Call us</span>
                            <h5 className='mt-2'>
                                +670 413 90 762
                            </h5>

                            <div className="email items-bottom">
                                <span className="icon me-2">
                                    <svg _ngcontent-ng-c1082963611="" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1082963611="" d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c1082963611="" d="M13 5.40039L10.496 7.40039C9.672 8.05639 8.32 8.05639 7.496 7.40039L5 5.40039" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c1082963611="" d="M1 11.4004H5.8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c1082963611="" d="M1 8.19922H3.4" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    
                                </span>
                                <span className="text">
                                    shofy@support.com
                                </span>
                            </div>
                            <div className="address items-bottom mt-2">
                                <span className="icon me-2 ">
                                    <svg _ngcontent-ng-c1082963611="" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1082963611="" d="M8.50001 10.9417C9.99877 10.9417 11.2138 9.72668 11.2138 8.22791C11.2138 6.72915 9.99877 5.51416 8.50001 5.51416C7.00124 5.51416 5.78625 6.72915 5.78625 8.22791C5.78625 9.72668 7.00124 10.9417 8.50001 10.9417Z" stroke="currentColor" stroke-width="1.5"></path><path _ngcontent-ng-c1082963611="" d="M1.21115 6.64496C2.92464 -0.887449 14.0841 -0.878751 15.7889 6.65366C16.7891 11.0722 14.0406 14.8123 11.6313 17.126C9.88298 18.8134 7.11704 18.8134 5.36006 17.126C2.95943 14.8123 0.210885 11.0635 1.21115 6.64496Z" stroke="currentColor" stroke-width="1.5"></path></svg>
                                </span>
                                <span className="text">
                                    79 Sleepy Hollow St.
                                    Jamaica, New York 1432
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <hr />
                <div className="row">
                    <div className="col-6">

                    </div>
                </div> */}

            </div>
           
        </div>
    );
};

export default Footer;Footer