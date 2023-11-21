import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Cart.css';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [quantity,setQuantity] = useState(1);
    const notifySuccess = () => toast.success('Added 1 product successfully!');
    const notifyWarning = () => toast.success('Successfully reduced 1 product!');
    const notifyError = () => toast.error('product cannot be less than 1!');

    const handleAddProduct = () => {
        setQuantity(quantity+1)
        notifySuccess();
    }
    const handleReducedProduct = () => {
        if(quantity==1){
            return notifyError();
        }
        setQuantity(quantity-1)
        notifyWarning();
    }


    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleCloseModalDelete = () => setShowModalDelete(false);
    const handleShowModalDelete = () => setShowModalDelete(true);
    const handleDeleteCart = () => {
        toast.success('Remove 1 product successfully!');
        setShowModalDelete(false);
    }
    return (
        <div className='shofy-app'>
            <div id='cart' className='mt-3 mb-5'>
                <div className="container">
                    <div className="title-cart">
                        <h2>Shopping Cart</h2>
                    </div>
                    
                    <section className="route">
                        <i class="fa-solid fa-house"></i>
                        <span className='ms-1 me-1'>Home</span>
                        /
                        <span className='me-1 ms-1'>Shopping Cart</span>
                    </section>

                    <div className="content-cart mt-3">
                        <div className="row">
                            <div className="col-12 col-xl-9 mb-3">
                                <div className="list-carts">
                                    <table class="table">
                                        <thead>
                                            <tr className='table-secondary'>
                                                <th scope="col"></th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{padding:'0'}}>
                                                    <div className='check-box' >
                                                        <input type="checkbox" name="" id="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-des d-flex align-items-center">
                                                        <div className="img ">
                                                            <img src="https://i.ibb.co/kxGMcrw/ipad-1.png" alt="" />
                                                        </div>
                                                        <div className="name ">
                                                            Apple iPad Air
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className='price'>
                                                        $999.00
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="quantity d-flex align-items-center justify-content-around">
                                                        <button 
                                                        onClick={handleReducedProduct}
                                                        className=''>
                                                            <i class="fa-solid fa-minus"></i>
                                                        </button>
                                                        <span className='quantity-value'>
                                                            {quantity}
                                                        </span>
                                                        <button
                                                        onClick={handleAddProduct}
                                                        >
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div 
                                                    onClick={handleShowModalDelete}
                                                    className="action-remove">
                                                        <i class="fa-solid fa-trash"></i>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{padding:'0'}}>
                                                    <div className='check-box' >
                                                        <input type="checkbox" name="" id="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-des d-flex align-items-center">
                                                        <div className="img ">
                                                            <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" alt="" />
                                                        </div>
                                                        <div className="name ">
                                                            Headphones Wireless.
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className='price'>
                                                        $999.00
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="quantity d-flex align-items-center justify-content-around">
                                                        <button 
                                                        onClick={handleReducedProduct}
                                                        className=''>
                                                            <i class="fa-solid fa-minus"></i>
                                                        </button>
                                                        <span className='quantity-value'>
                                                            {quantity}
                                                        </span>
                                                        <button
                                                        onClick={handleAddProduct}
                                                        >
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div 
                                                    onClick={handleShowModalDelete}
                                                    className="action-remove">
                                                        <i class="fa-solid fa-trash"></i>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{padding:'0'}}>
                                                    <div className='check-box' >
                                                        <input type="checkbox" name="" id="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-des d-flex align-items-center">
                                                        <div className="img ">
                                                            <img src="https://i.ibb.co/kxGMcrw/ipad-1.png" alt="" />
                                                        </div>
                                                        <div className="name ">
                                                            Apple iPad Air
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className='price'>
                                                        $999.00
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="quantity d-flex align-items-center justify-content-around">
                                                        <button 
                                                        onClick={handleReducedProduct}
                                                        className=''>
                                                            <i class="fa-solid fa-minus"></i>
                                                        </button>
                                                        <span className='quantity-value'>
                                                            {quantity}
                                                        </span>
                                                        <button
                                                        onClick={handleAddProduct}
                                                        >
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div 
                                                    onClick={handleShowModalDelete}
                                                    className="action-remove">
                                                        <i class="fa-solid fa-trash"></i>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{padding:'0'}}>
                                                    <div className='check-box' >
                                                        <input type="checkbox" name="" id="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-des d-flex align-items-center">
                                                        <div className="img ">
                                                            <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" alt="" />
                                                        </div>
                                                        <div className="name ">
                                                            Headphones Wireless.
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className='price'>
                                                        $999.00
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="quantity d-flex align-items-center justify-content-around">
                                                        <button 
                                                        onClick={handleReducedProduct}
                                                        className=''>
                                                            <i class="fa-solid fa-minus"></i>
                                                        </button>
                                                        <span className='quantity-value'>
                                                            {quantity}
                                                        </span>
                                                        <button
                                                        onClick={handleAddProduct}
                                                        >
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div 
                                                    onClick={handleShowModalDelete}
                                                    className="action-remove">
                                                        <i class="fa-solid fa-trash"></i>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            
                                        </tbody>
                                    </table>
                                </div>

                                <div className="coupon-code">
                                    <div>
                                        Coupon Code:
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12 col-lg-6 col-xl-6 d-flex mb-2">
                                            <input class="form-control rounded-0" type="text" placeholder='Enter Coupon Code' />
                                            <button className='btn bg-dark text-white rounded-0'>Apply</button>
                                        </div>
                                        <div className="clear-cart col-12 col-lg-6 col-xl-6  mb-2 d-none d-md-none d-lg-block d-xl-block">
                                            <button className='rounded-0 btn border border-secondary'>
                                                Clear Cart
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-xl-3 mb-3">
                                <div className="row">
                                    <div className="action col-12 col-md-6 col-lg-6 col-xl-12">
                                        <div className="subtotal d-flex justify-content-between">
                                            <h6>
                                                Subtotal:
                                            </h6>
                                            <h6>
                                                $1774.65
                                            </h6>
                                        </div>
                                        <div className="shiping mt-1 d-flex justify-content-between">
                                            <div>
                                                Shipping:
                                            </div>
                                            <div>
                                                ---
                                            </div>
                                        </div>
                                        <div className="discount mt-1 d-flex justify-content-between">
                                            <div>
                                                Discount:
                                            </div>
                                            <div>
                                                ---
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="total-price mt-2 d-flex justify-content-between">
                                            <h4>
                                                Total:
                                            </h4>
                                            <h4>
                                                $2610.00
                                            </h4>
                                        </div>

                                        <div className="btn-bottom-action mt-4">
                                            <Link to={'/checkout'} className='btn w-100 rounded-0 bg-dark text-white'>
                                                Proceed to Checkout
                                            </Link>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Modal show={showModalDelete} onHide={handleCloseModalDelete}>
                <Modal.Header closeButton>
                <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to remove the product from your shopping cart?</Modal.Body>
                <Modal.Footer>
                <Button className='btn-sm' variant="secondary" onClick={handleCloseModalDelete}>
                    Close
                </Button>
                <Button className='btn-sm' variant="danger" onClick={handleDeleteCart}>
                    Remove
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
        
    );
};

export default Cart;