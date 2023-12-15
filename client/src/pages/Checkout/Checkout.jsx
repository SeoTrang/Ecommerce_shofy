import React, { useEffect, useState } from 'react';

import './Checkout.css';
import { TextField } from '@mui/material';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import formatCurrencyVND from '../../../util/formatCurrencyVND';
import OrderAPI from '../../service/NodejsServerAPI/OrderAPI';
import { fetchCartData } from '../../redux/actions/cartAction';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const notifySuccess = () => toast.success('Order successfully!');
    const notifyWarning = () => toast.success('Successfully reduced 1 product!');
    const notifyError = () => toast.error('product cannot be less than 1!');
    const cart = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        phoneNumber: '',
        detailAddress: '',
        note: ''
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

    
    //   handle box right
    const [totalPrice,setTotalPrice] = useState();
    // handle total price
    const calculateTotalPrice = () => {
        let sum = 0;
        for (let index = 0; index < cart.length; index++) {
            if(cart[index].active){
                sum += (cart[index].variation.sale_price*cart[index].quantity);
            }
        }
        return sum;
    }
    useEffect(()=>{
        const tempTotalPrice = calculateTotalPrice();
        setTotalPrice(tempTotalPrice);
    },[cart]);


    const validateForm = () => {
        if(formData.firstName.trim() === '') {
            setFormData({
                ...formData,
                [`firstNameError`]: true,
            });
            return false;
        }

        if(formData.phoneNumber.trim() === '') {
            setFormData({
                ...formData,
                [`phoneNumberError`]: true,
            });
            return false;
        }
        if(formData.detailAddress.trim() === '') {
            setFormData({
                ...formData,
                [`detailAddressError`]: true,
            });
            return false;
        }

        return true;
    }

    const handleCheckout = async() => {
        let validate = validateForm();
        if(!validate) return toast.error('Vui lòng nhập đầy đủ thông tin !');
        // lấy ra các sản phẩm trong giỏ hàng được tích
        const cartActive = cart.filter((value) => value.active)
        // console.log(cartActive);
        let orderDetail = [];
        let cartDelete = []; // chứa danh sách id các item trong giỏ hàng sẽ bị xóa khi đặt hàng thành công
        for (let index = 0; index < cartActive.length; index++) {
            let orderDetailItem = {
                avatar: cartActive[index].variation.product.img_preview,
                name: cartActive[index].variation.name,
                quantity: cartActive[index].quantity,
                price: cartActive[index].variation.sale_price
            }
            orderDetail.push(orderDetailItem);
            cartDelete.push(cartActive[index].id);
        }
        let data = {
            order:{
                customer_name: formData.firstName,
                phone_number: formData.phoneNumber,
                address: formData.detailAddress,
                subtotal_price: totalPrice,
                discount: 0,
                shiping: 34000,
                total_price: totalPrice
            },
            orderDetail:orderDetail,
            cartDelete: cartDelete
        }

        let result = await OrderAPI.create(data);
        if(!result) return notifyError(); 
        dispatch(fetchCartData());
        notifySuccess();
        return navigate('/');
    }
    return (
        <div className="checkout-bg">
            <div className='shofy-app'>
            <div id='checkout' className="mt-3 pb-5">
                <div className="container">
                    <div className="title">
                        <h2>Đặt hàng</h2>
                        <section className="route">
                            <i class="fa-solid fa-house"></i>
                            <span className='ms-1 me-1'>Trang chủ</span>
                            /
                            <span className='me-1 ms-1'>Đặt hàng</span>
                        </section>
                    </div>

                    <div className="content-checkout mt-3">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                <div className="billing-details">
                                    <div className="title">
                                        {/* <h3>Billing Details</h3> */}
                                        <h3>Thông tin nhận hàng</h3>
                                    </div>
                                    <div className="address mt-3">
                                        <div class="vtrWey"></div>
                                        <div className="title d-flex mt-3 align-items-center">
                                            <i class="fa-solid fa-location-dot"></i>
                                            <h5 className='ms-2'>Delivery address</h5>
                                        </div>

                                        {/* <div className="user-address row mt-2">
                                            <div className="addr col-12 col-lg-10">
                                                
                                                <span>Xóm nước 2, Xã Quyết Thắng, Thành Phố Thái Nguyên, Thái Nguyên</span>
                                            </div>
                                            <div className="address-action col-12 col-lg-2">
                                                <div className="btn btn-sm bg-white text-primary">
                                                    Thay Đổi
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="form-input mt-4">
                                            <div className="row">
                                                <div className="user-name col-12 col-md-6 col-lg-6 mb-3">
                                                    <label htmlFor="UserName">Tên người nhận <span className='require'> *</span></label>
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
                                                            <div className="error">Trường bắt buộc</div>
                                                        )}
                                                </div>
                                                <div className="user-phone col-12 col-md-6 col-lg-6 mb-3">
                                                    <label htmlFor="PhoneNumber">Số điện thoại người nhận <span className='require'> * </span></label>
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
                                                            <div className="error">Trường bắt buộc</div>
                                                        )}
                                                </div>
                                            </div>

                                            

                                            <div className="user-address-detail mb-3">
                                                <label htmlFor="AddressDetail">Địa chỉ người nhận <span className='require'> *</span></label>
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
                                                        <div className="error">Trường bắt buộc</div>
                                                    )}
                                            </div>
                                            <div className="note mb-3">
                                                <label htmlFor="note">Ghi chú</label>
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
                                        <h3>Sản phẩm đặt</h3>
                                    </div>

                                    <div className="products">
                                        <div className="product-title row">
                                            <b className='col-9'>
                                                Sản phẩm
                                            </b>
                                            <b className='col-3'>
                                                Giá
                                            </b>
                                        </div>
                                        <hr />
                                        {
                                            cart &&
                                            cart.filter(value => value.active)
                                            .map((value,index)=>{
                                                return (
                                                    <>
                                                    <div className="product row">
                                                        <div className="product-name col-9">
                                                            <div className="row">
                                                                <div className="name col-9">
                                                                    {value.variation.name}
                                                                </div>
                                                                <span className="quantity col-3">
                                                                    x {value.quantity}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="price col-3">
                                                            {formatCurrencyVND(value.variation.sale_price*value.quantity)+'₫'}
                                                        </div>
                                                    </div>

                                                    <hr />
                                                    </>
                                                )
                                            })
                                        }

                                        <div className="subtotal mt-5 row">
                                            {/* <hr /> */}
                                            <div className="product-name col-8">
                                                <div className="row">
                                                    <div className="name col-9">
                                                        Tạm tính
                                                    </div>
                                                    {/* <b className="quantity col-3">
                                                        x 3
                                                    </b> */}
                                                </div>
                                            </div>
                                            <div className="price col-4">
                                                {formatCurrencyVND(totalPrice)+'₫'}
                                            </div>
                                        </div>

                                      
                                        <div className="shipping row mt-3">
                                            <div className="product-name col-8">
                                                <div className="row">
                                                    <div className="name col-9">
                                                        Phí vận chuyển
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
                                                        Giả giá
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
                                                        <h5>Tổng</h5>
                                                    </div>
                                                    {/* <b className="quantity col-3">
                                                        x 3
                                                    </b> */}
                                                </div>
                                            </div>
                                            <div className="price col-4">
                                                <h5>
                                                    {formatCurrencyVND(totalPrice)+'₫'}
                                                </h5>
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