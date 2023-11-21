import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import './Wishlist.css';

const Wishlist = () => {

    
    
    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleCloseModalDelete = () => setShowModalDelete(false);
    const handleShowModalDelete = () => setShowModalDelete(true);
    const handleDeleteWishlist = () => {
        toast.success('Remove 1 product successfully!');
        setShowModalDelete(false);
    }

    const handleAddToCart = () => {
        toast.success('Add 1 product to cart successfully!');
    }
    return (
        <div className='shofy-app'>
            <div className="container">
                <div id='wishlist' className="mt-3 mb-5">
                    <div className="title">
                        <h2>Wishlist</h2>
                        <section className="route">
                            <i class="fa-solid fa-house"></i>
                            <span className='ms-1 me-1'>Home</span>
                            /
                            <span className='me-1 ms-1'>Wishlist</span>
                        </section>
                    </div>

                    <div className="list-items mt-4">
                                    <table class="table">
                                        <thead>
                                            <tr className='table-secondary'>
                                                <th scope="col">#</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                {/* <th scope="col">Quantity</th> */}
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{padding:'0'}}>
                                                    <div className='check-box' >
                                                        1
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-des d-flex align-items-center justify-content-start">
                                                        <div className="img ">
                                                            <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" alt="" />
                                                        </div>
                                                        <div className="name ">
                                                            
                                                            Tai nghe Bluetooth AirPods 3 Lightning Charge Apple MPNY3
        
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className='price'>
                                                        $999.00
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="action-mobile d-lg-none d-xl-none d-flex align-items-center">
                                                        <div 
                                                        onClick={handleAddToCart}
                                                        className="add-to-cart d-flex align-items-center justify-content-around">
                                                           
                                                            <i class="fa-solid fa-cart-shopping"></i>
                                                            
                                                        
                                                        </div>
                                                        <div 
                                                        onClick={handleShowModalDelete}
                                                        className="ms-2 action-remove">
                                                            <i class="fa-solid fa-trash"></i>
                                                        </div>
                                                    </div>

                                                    <div className="action-lg d-none d-lg-block d-xl-block ">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <div 
                                                            onClick={handleAddToCart}
                                                            className="add-to-cart d-flex align-items-center justify-content-around ms-3 me-3">
                                                            
                                                                <button className='d-flex align-items-center'>
                                                                    <i class="fa-solid fa-cart-shopping"></i>
                                                                    <span>Add Cart</span>
                                                                </button>
                                                                
                                                            
                                                            </div>
                                                            <div 
                                                            onClick={handleShowModalDelete}
                                                            className="ms-2 action-remove ms-3 me-3">
                                                                <button className='d-flex align-items-center'>
                                                                    <i class="fa-solid fa-trash"></i>
                                                                    <span>Remove</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <td style={{padding:'0'}}>
                                                    <div className='check-box' >
                                                        1
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-des d-flex align-items-center justify-content-start">
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
                                                    <div className="action-mobile d-lg-none d-xl-none d-flex align-items-center">
                                                        <div 
                                                        onClick={handleAddToCart}
                                                        className="add-to-cart d-flex align-items-center justify-content-around">
                                                           
                                                            <i class="fa-solid fa-cart-shopping"></i>
                                                            
                                                        
                                                        </div>
                                                        <div 
                                                        onClick={handleShowModalDelete}
                                                        className="ms-2 action-remove">
                                                            <i class="fa-solid fa-trash"></i>
                                                        </div>
                                                    </div>

                                                    <div className="action-lg d-none d-lg-block d-xl-block ">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <div 
                                                            onClick={handleAddToCart}
                                                            className="add-to-cart d-flex align-items-center justify-content-around ms-3 me-3">
                                                            
                                                                <button className='d-flex align-items-center'>
                                                                    <i class="fa-solid fa-cart-shopping"></i>
                                                                    <span>Add Cart</span>
                                                                </button>
                                                                
                                                            
                                                            </div>
                                                            <div 
                                                            onClick={handleShowModalDelete}
                                                            className="ms-2 action-remove ms-3 me-3">
                                                                <button className='d-flex align-items-center'>
                                                                    <i class="fa-solid fa-trash"></i>
                                                                    <span>Remove</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    
                                                </td>
                                                
                                            </tr>


                                            

                                            
                                            
                                            
                                        </tbody>
                                    </table>
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
                <Button className='btn-sm' variant="danger" onClick={handleDeleteWishlist}>
                    Remove
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Wishlist;