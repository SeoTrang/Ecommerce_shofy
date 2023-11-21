import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './MiniCart.css';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const customModalClass = 'your-custom-modal-class';

const MiniCart = ({open,handleCloseMiniCart}) => {
    const notify = () => toast.success('Remove to cart successfully!');


    // const [overlayOpened,setOnverlayOpened] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        notify();

    }
    const handleShow = () => setShow(true);

    const closeMiniCart = () => {
        return handleCloseMiniCart(false);
    }


    

    return (
        
            <>
            {/* modal delte */}
            <Modal show={show} onHide={handleClose} className='model-minicart' dialogClassName={customModalClass}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>



            {
                open 
                &&
                <div className={' cart-side-bar '}>
                    <div className={'animate__animated animate__bounceInRight mini-cart '+(show?'opacity-07':null)}>
                        <div className=" content-cart">
                            <div className="title-top mt-4 mb-4 d-flex align-items-center justify-content-between">
                                <div className="title">
                                    Shopping Cart
                                </div>
                                <div 
                                    onClick={closeMiniCart}
                                    className="icon-close">
                                    <i class="fa-solid fa-x"></i>
                                </div>
                            </div>
                            <hr />
                            <dir className="mt-4"></dir>
                            <hr />
                            <div className="box-cart-items mt-4">                       
                                <div className='cart-item row mt-3'>
                                    <div className="img col-3 ">
                                        <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" alt="" />
                                    </div>

                                    <div className="short-des col-7">
                                        <div className="name">
                                        Tai nghe Bluetooth AirPods Pro (2nd Gen) MagSafe Charge Apple MQD83 
                                        </div>
                                        <div className="price mt-2 d-flex">
                                            <div className="product-price me-2">
                                                103.20 
                                            </div>
                                            <div>
                                                <span className='multiply'>
                                                    x
                                                </span>
                                            </div>
                                            <div className="quantity-product ms-2 d-flex align-items-end">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="action col-2">
                                        <div onClick={handleShow} className="delete-cart">
                                            <i class="fa-solid fa-x"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='cart-item row mt-3'>
                                    <div className="img col-3 ">
                                        <img src="https://i.ibb.co/kxGMcrw/ipad-1.png" alt="" />
                                    </div>

                                    <div className="short-des col-7">
                                        <div className="name">
                                        Apple iPad Air
                                        </div>
                                        <div className="price mt-2 d-flex">
                                            <div className="product-price me-2">
                                                103.20 
                                            </div>
                                            <div>
                                                <span className='multiply'>
                                                    x
                                                </span>
                                            </div>
                                            <div className="quantity-product ms-2 d-flex align-items-end">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="action col-2">
                                        <div onClick={handleShow} className="delete-cart">
                                            <i class="fa-solid fa-x"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='cart-item row mt-3'>
                                    <div className="img col-3 ">
                                        <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" alt="" />
                                    </div>

                                    <div className="short-des col-7">
                                        <div className="name">
                                        Tai nghe Bluetooth AirPods Pro (2nd Gen) MagSafe Charge Apple MQD83 
                                        </div>
                                        <div className="price mt-2 d-flex">
                                            <div className="product-price me-2">
                                                103.20 
                                            </div>
                                            <div>
                                                <span className='multiply'>
                                                    x
                                                </span>
                                            </div>
                                            <div className="quantity-product ms-2 d-flex align-items-end">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="action col-2">
                                        <div onClick={handleShow} className="delete-cart">
                                            <i class="fa-solid fa-x"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='cart-item row mt-3'>
                                    <div className="img col-3 ">
                                        <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" alt="" />
                                    </div>

                                    <div className="short-des col-7">
                                        <div className="name">
                                        Tai nghe Bluetooth AirPods Pro (2nd Gen) MagSafe Charge Apple MQD83 
                                        </div>
                                        <div className="price mt-2 d-flex">
                                            <div className="product-price me-2">
                                                103.20 
                                            </div>
                                            <div>
                                                <span className='multiply'>
                                                    x
                                                </span>
                                            </div>
                                            <div className="quantity-product ms-2 d-flex align-items-end">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="action col-2">
                                        <div onClick={handleShow} className="delete-cart">
                                            <i class="fa-solid fa-x"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='cart-item row mt-3'>
                                    <div className="img col-3 ">
                                        <img src="https://i.ibb.co/kxGMcrw/ipad-1.png" alt="" />
                                    </div>

                                    <div className="short-des col-7">
                                        <div className="name">
                                        Apple iPad Air
                                        </div>
                                        <div className="price mt-2 d-flex">
                                            <div className="product-price me-2">
                                                103.20 
                                            </div>
                                            <div>
                                                <span className='multiply'>
                                                    x
                                                </span>
                                            </div>
                                            <div className="quantity-product ms-2 d-flex align-items-end">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="action col-2">
                                        <div onClick={handleShow} className="delete-cart">
                                            <i class="fa-solid fa-x"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='cart-item row mt-3'>
                                    <div className="img col-3 ">
                                        <img src="https://i.ibb.co/WVdTgR8/headphone-1.png" alt="" />
                                    </div>

                                    <div className="short-des col-7">
                                        <div className="name">
                                        Tai nghe Bluetooth AirPods Pro (2nd Gen) MagSafe Charge Apple MQD83 
                                        </div>
                                        <div className="price mt-2 d-flex">
                                            <div className="product-price me-2">
                                                103.20 
                                            </div>
                                            <div>
                                                <span className='multiply'>
                                                    x
                                                </span>
                                            </div>
                                            <div className="quantity-product ms-2 d-flex align-items-end">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="action col-2">
                                        <div onClick={handleShow} className="delete-cart">
                                            <i class="fa-solid fa-x"></i>
                                        </div>
                                    </div>
                                </div>
                                

                                

                                
                            </div>
                            <hr />

                            <div className="subtotal mt-3 mb-3">
                                <div className="title">
                                    Subtotal:
                                </div>
                                <div className="subtotal-value">
                                    $1052.25
                                </div>
                            </div>

                            <div className="action-bottom ">
                                <Link onClick={closeMiniCart} to={'/cart'} className="mt-2 btn  w-100 text-light btn-action-bottom view-cart">
                                    View Cart
                                </Link>
                                <div className="mt-2 btn  w-100 bg-white text-dark btn-action-bottom checkout">
                                    CheckOut
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="body-overlay opened">

                    </div>
            </div>
            }


            </>
       
    );
};

export default MiniCart;