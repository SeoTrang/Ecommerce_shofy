import React, { useEffect, useState } from 'react';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AttributesAPI from '../../../../service/NodejsServerAPI/AttributesAPI';
import AttributesValueAPI from '../../../../service/NodejsServerAPI/AttributesValueAPI';

const DetailBottom = ({product,variation_id}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const [numberRatingOfUser,setNumberRatingOfUser] = useState(0);

    const [attributes,setAttributes] = useState();

    useEffect(()=>{
        async function fetchData() {
            console.log(product);
            console.log(variation_id);
            const result = await AttributesValueAPI.getVariationId(variation_id)
            console.log(result);
            if(result) setAttributes(result);
        }
        fetchData();
    },[product,variation_id])
    return (
        // <></>
        <section className="detail-bottom mt-5">
                <nav>
                    <div class="nav nav-tabs align-items-center justify-content-center" id="nav-tab" role="tablist">
                        <button class="nav-link active ps-4 pe-4" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            {/* Description */}
                            Mô tả
                        </button>
                        <button class="nav-link ps-4 pe-4" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            {/* Additional information */}
                            Thông tin chi tiết
                        </button>
                        <button class="nav-link ps-4 pe-4" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            {/* Reviews (3) */}
                            Đánh giá
                        </button>
                        
                    </div>
                </nav>
                <div class="tab-content mt-5 mb-5" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div _ngcontent-ng-c4203954032="" class="row">
                            <div _ngcontent-ng-c4203954032="" class="col-lg-12 description">
                                <div _ngcontent-ng-c4203954032="" class="tp-product-details-desc-content pt-25">
                                    <span _ngcontent-ng-c4203954032="">
                                        {
                                            product &&
                                            product.category.name
                                        }
                                    </span>
                                    <h3 _ngcontent-ng-c4203954032="" class="tp-product-details-desc-title">
                                        {
                                            product &&
                                            product.name
                                        }
                                    </h3>
                                </div>
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: product && product.description}} />
                                </div>
                            </div>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <table class="table ms-xl-5 ms-lg-5 ms-md-4 me-xl-5 me-lg-5 me-md-4">
                            {/* <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {
                                    attributes && 
                                    attributes.map((value,index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {value.attribute.name}
                                                </td>
                                                <td>{value.value}</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                                {/* <tr>
                                    <td>
                                        Colors
                                    </td>
                                    <td>Purply Blue, Light Grey, Baby Pink, Bluish Cyan</td>
                                </tr>
                                <tr>
                                    <td>Screen Resolution</td>
                                    <td>
                                        1920 x 1200 Pixels
                                    </td>
                                </tr>
                                <tr>
                                    <td>Max Screen Resolution</td>
                                    <td>
                                        2000 x 1200
                                    </td>
                                </tr>

                                <tr>
                                    <td>Processor</td>
                                    <td>
                                        2.3 GHz (128 GB)
                                    </td>
                                </tr>

                                <tr>
                                    <td>Graphics Coprocessor</td>
                                    <td>
                                        Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        
                        <div className="review">
                            <div className="title">
                                <h5>Customer reviews</h5>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-8">
                                    <div className="row justify-content-center mt-4 b-5">
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-center justify-content-center">
                                            
                                            <div className="average-rating d-flex  align-items-center justify-content-center">
                                                Average Rating
                                            </div>
                                            <div className="number-star">
                                                <div className="number d-flex  align-items-center justify-content-center">
                                                    <h3>4/5</h3>
                                                </div>
                                                <div className='star d-flex  align-items-center justify-content-center'>
                                                {
                                                    Array.from({ length: 5 }).map((_, index) => (
                                                        <span className='ms-1' key={index}><i class="fa-solid fa-star"></i></span>
                                                    ))
                                                }
                                                </div>
                                            </div>
                                            <div className="number-of-rating d-flex  align-items-center justify-content-center">
                                                <span>3 Reviews</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-center justify-content-center">
                                            <div className="content">
                                                <div className="5-star row">
                                                    <div className="title col-1">
                                                        5
                                                    </div>
                                                    <div className="progress col-10">
                                                        <div className="progress-bar" style={{width:"10%"}} >

                                                        </div>
                                                    </div>
                                                    
                                                    <div className="value col-1">
                                                        6
                                                    </div>
                                                </div>
                                                <div className="4-star row">
                                                    <div className="title col-1">
                                                        4
                                                    </div>
                                                    <div className="progress col-10">
                                                        <div className="progress-bar" style={{width:"80%"}}>

                                                        </div>
                                                    </div>
                                                    <div className="value col-1">
                                                        79
                                                    </div>
                                                    
                                                </div>
                                                <div className="3-star row">
                                                    <div className="title col-1">
                                                        3
                                                    </div>
                                                    <div className="progress col-10">
                                                        <div className="progress-bar" style={{width:"10%"}}>
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="value col-1">
                                                        5
                                                    </div>
                                                    
                                                </div>
                                                <div className="2-star row">
                                                    <div className="title col-1">
                                                        2
                                                    </div>
                                                    <div className="progress col-10">
                                                        <div className="progress-bar" style={{width:"0%"}}>
                                                        
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="value col-1">
                                                        0
                                                    </div>
                                                </div>
                                                <div className="1-star row">
                                                    <div className="title col-1">
                                                        1
                                                    </div>
                                                    <div className="progress col-10">
                                                        <div className="progress-bar" style={{width:"0%"}}>
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="value col-1">
                                                        0
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-xl-4 d-flex flex-column align-items-center justify-content-center">
                                    <div className=''>
                                        <span>Have you used the product yet?</span>
                                    </div>
                                    <div className=''>
                                        <button onClick={handleShow} className='btn btn-md btn-primary mt-2'>
                                            Review this product
                                        </button>
                                    </div>
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Review this product</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="review-modal">
                                            <div className="img text-center">
                                                <img src="https://i.ibb.co/SrPq3r0/headphone-4.png" alt="" />
                                            </div>
                                            <div className="name text-center">
                                                <h4>
                                                    Headphones Wireless.
                                                </h4>
                                            </div>
                                            <div className="number-rating-user mt-3 text-center">
                                                {
                                                    Array.from({ length: numberRatingOfUser }).map((_, index) => (
                                                        <span
                                                        onClick={()=>setNumberRatingOfUser(index+1)}
                                                        className='ms-1' key={index}>
                                                            {/* <i class="fa-regular fa-star"></i> */}
                                                            <i class="fa-solid fa-star"></i>
                                                        </span>
                                                    ))
                                                }
                                                {
                                                    Array.from({ length: (5-numberRatingOfUser) }).map((_, index) => (
                                                        <span
                                                        onClick={()=>setNumberRatingOfUser(numberRatingOfUser+(index+1))}
                                                        className='ms-1' key={index}>
                                                            <i class="fa-regular fa-star"></i>
                                                            {/* <i class="fa-solid fa-star"></i> */}
                                                        </span>
                                                    ))

                                                    
                                                }
                                                
                                            </div>

                                            <div className="content-review mt-3">
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                                    <label for="floatingTextarea" required>Your comment</label>
                                                    <div class="invalid-feedback">
                                                        Please enter a message in the textarea.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="user-name">

                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" >
                                        Submit
                                    </Button>
                                    </Modal.Footer>
                                </Modal>

                            </div>

                            
                        </div>

                        <div className="Rating-review mt-5">
                            <div className="container">
                                <div className="title">
                                    <h5>Rating & Review</h5>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-3 col-md-2 col-lg-1 col-xl-1">
                                        <img src="https://shofy-angular.vercel.app/assets/img/users/user-2.jpg" alt="" />
                                    </div>

                                    <div className="col-9 col-md-10 col-lg-11 col-xl-11">
                                        <div className="star">
                                            {
                                                Array.from({ length: 5 }).map((_, index) => (
                                                    <span className='ms-1' key={index}><i class="fa-solid fa-star"></i></span>
                                                ))
                                            }
                                        </div>
                                        <div className="user-info d-flex">
                                            <span className="name">
                                                John doe
                                            </span>
                                            <span className="date-time ms-3">
                                                06 March, 2023
                                            </span>
                                        </div>
                                        <div className="content-comment">
                                            Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-3 col-md-2 col-lg-1 col-xl-1">
                                        <img src="https://shofy-angular.vercel.app/assets/img/users/user-3.jpg" alt="" />
                                    </div>

                                    <div className="col-9 col-md-10 col-lg-11 col-xl-11">
                                        <div className="star">
                                            {
                                                Array.from({ length: 5 }).map((_, index) => (
                                                    <span className='ms-1' key={index}><i class="fa-solid fa-star"></i></span>
                                                ))
                                            }
                                        </div>
                                        <div className="user-info d-flex">
                                            <span className="name">
                                                John doe
                                            </span>

                                            <span className="date-time ms-3">
                                                06 March, 2023
                                            </span>
                                        </div>
                                        <div className="content-comment">
                                            Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                </section>
    );
};

export default DetailBottom;