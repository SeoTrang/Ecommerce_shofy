import React, { useState } from 'react';

import './Checkout.css';
import { TextField } from '@mui/material';
import toast from 'react-hot-toast';

const Checkout = () => {
    const notifySuccess = () => toast.success('Order successfully!');
    const notifyWarning = () => toast.success('Successfully reduced 1 product!');
    const notifyError = () => toast.error('product cannot be less than 1!');


    const [formData, setFormData] = useState({
        firstName: '',
        phoneNumber: '',
        detailAddress: '',
        note: '',
        // Thêm nhiều trường dữ liệu khác ở đây
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log(e.target.name);
        // console.log(e.target.value);
        setFormData({
          ...formData,
          [name]:value,
        });
      };
    
      const handleBlur = (e) => {
        console.log(e.target.name);
        const { name, value } = e.target;
        if (value === '') {
          setFormData({
            ...formData,
            [name]: value,
            [`${name}Error`]: true,
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
            [`${name}Error`]: false,
          });
        }
      };

    const handleCheckout = () => {
        notifySuccess();
    }
    return (
        <div className="checkout-bg">
            <div className='shofy-app'>
            <div id='checkout' className="mt-3 pb-5">
                <div className="container">
                    <div className="title">
                        <h2>Checkout</h2>
                        <section className="route">
                            <i class="fa-solid fa-house"></i>
                            <span className='ms-1 me-1'>Home</span>
                            /
                            <span className='me-1 ms-1'>Checkout</span>
                        </section>
                    </div>

                    <div className="content-checkout mt-3">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                <div className="billing-details">
                                    <div className="title">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="address mt-3">
                                        <div class="vtrWey"></div>
                                        <div className="title d-flex mt-3 align-items-center">
                                            <i class="fa-solid fa-location-dot"></i>
                                            <h5 className='ms-2'>Delivery address</h5>
                                        </div>

                                        <div className="user-address row mt-2">
                                            <div className="addr col-12 col-lg-10">
                                                
                                                <span>Xóm nước 2, Xã Quyết Thắng, Thành Phố Thái Nguyên, Thái Nguyên</span>
                                            </div>
                                            <div className="address-action col-12 col-lg-2">
                                                <div className="btn btn-sm bg-white text-primary">
                                                    Thay Đổi
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-input mt-4">
                                            <div className="row">
                                                <div className="user-name col-12 col-md-6 col-lg-6 mb-3">
                                                    <label htmlFor="UserName">User Name <span className='require'> *</span></label>
                                                    <input 
                                                        type="text" 
                                                        className='form-control rounded-0 no-outline' 
                                                        id='UserName' 
                                                        placeholder='User Name'
                                                        name='firstName'
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        onBlur={handleBlur}
                                                        />
                                                        {formData.firstNameError && (
                                                            <div className="error">Phone Number is required</div>
                                                        )}
                                                </div>
                                                <div className="user-phone col-12 col-md-6 col-lg-6 mb-3">
                                                    <label htmlFor="PhoneNumber">Phone Number <span className='require'> * </span></label>
                                                    <input 
                                                        type="text" 
                                                        className='form-control rounded-0 no-outline' 
                                                        id='PhoneNumber' 
                                                        name='phoneNumber'
                                                        placeholder='Phone Number'
                                                        value={formData.phoneNumber}
                                                        onChange={handleInputChange}
                                                        onBlur={handleBlur}
                                                        />
                                                        {formData.phoneNumberError && (
                                                            <div className="error">Phone Number is required</div>
                                                        )}
                                                </div>
                                            </div>

                                            

                                            <div className="user-address-detail mb-3">
                                                <label htmlFor="AddressDetail">Detail Address <span className='require'> *</span></label>
                                                <input 
                                                    type="text" 
                                                    className='form-control rounded-0 no-outline' 
                                                    id='AddressDetail' 
                                                    name='detailAddress'
                                                    placeholder='Detail Address'
                                                    value={formData.detailAddress}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    
                                                    
                                                    />
                                                    {formData.detailAddressError && (
                                                        <div className="error">Phone Number is required</div>
                                                    )}
                                            </div>
                                            <div className="note mb-3">
                                                <label htmlFor="note">Note</label>
                                                <textarea 
                                                    type="text" 
                                                    className='form-control rounded-0 no-outline' 
                                                    id='AddressDetail' 
                                                    name='note'
                                                    placeholder='Note'
                                                    value={formData.note}
                                                    onChange={handleInputChange}
                                                    rows="5"
                                                    // onBlur={handleBlur}
                                                    
                                                    />
                                                    
                                            </div>
                                           
                                            
                                        </div>
                                        


                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                <div className="your-order">
                                    
                                    <div className="title">
                                        <h3>Your Order</h3>
                                    </div>

                                    <div className="products">
                                        <div className="product-title row">
                                            <b className='col-9'>
                                                Product
                                            </b>
                                            <b className='col-3'>
                                                Total
                                            </b>
                                        </div>
                                        <hr />
                                        <div className="product row">
                                            <div className="product-name col-9">
                                                <div className="row">
                                                    <div className="name col-9">
                                                        Apple iPad Air
                                                    </div>
                                                    <span className="quantity col-3">
                                                        x 2
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="price col-3">
                                                $949.05
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="product row">
                                            <div className="product-name col-9">
                                                <div className="row">
                                                    <div className="name col-9">
                                                        Headphones Wireless.
                                                    </div>
                                                    <span className="quantity col-3">
                                                        x 3
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="price col-3">
                                                $103.20
                                            </div>
                                        </div>

                                        <hr />

                                        <div className="subtotal mt-5 row">
                                            {/* <hr /> */}
                                            <div className="product-name col-8">
                                                <div className="row">
                                                    <div className="name col-9">
                                                        Subtotal
                                                    </div>
                                                    {/* <b className="quantity col-3">
                                                        x 3
                                                    </b> */}
                                                </div>
                                            </div>
                                            <div className="price col-4">
                                                $1774.65
                                            </div>
                                        </div>

                                      
                                        <div className="shipping row mt-3">
                                            <div className="product-name col-8">
                                                <div className="row">
                                                    <div className="name col-9">
                                                        Shipping
                                                    </div>
                                                    {/* <b className="quantity col-3">
                                                        x 3
                                                    </b> */}
                                                </div>
                                            </div>
                                            <div className="price col-4">
                                                ---
                                            </div>
                                        </div>

                       
                                        <div className="discount row mt-3">
                                            <div className="product-name col-8">
                                                <div className="row">
                                                    <div className="name col-9">
                                                        Discout
                                                    </div>
                                                    {/* <b className="quantity col-3">
                                                        x 3
                                                    </b> */}
                                                </div>
                                            </div>
                                            <div className="price col-4">
                                                ---
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="shipping row mb-5">
                                            <div className="product-name col-8">
                                                <div className="row">
                                                    <div className="name col-9">
                                                        <h5>Total</h5>
                                                    </div>
                                                    {/* <b className="quantity col-3">
                                                        x 3
                                                    </b> */}
                                                </div>
                                            </div>
                                            <div className="price col-4">
                                                <h5>$1774.65</h5>
                                            </div>
                                        </div>

                                        <hr />
                                        <div 
                                        onClick={handleCheckout}
                                        className="btn-checkout">
                                            <button className="btn btn-md w-100 bg-primary text-white rounded-0">
                                                Place Order
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

export default Checkout;