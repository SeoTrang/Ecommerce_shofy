import React, { useEffect, useState } from 'react';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

import CardMd from '../../components/Card/CardMd/CardMd';

import './Product.css';
import ProductAPI from '../../service/NodejsServerAPI/ProductAPI';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


const Product = () => {
    

    // product
    
    const [products,setProducts] = useState();

    useEffect(()=>{
        let productTemp = ProductAPI.GetAll();
        productTemp
        .then(data => setProducts(data))
        .catch(err => console.log(err))
    },[])

    useEffect(()=>{
        console.log(products);
    },[products])



    // filter

    const [minPriceFilter,setMinpriceFilter] = useState(1);
    const [maxPriceFilter,setMaxpriceFilter] = useState(50);
    function logRange(value) {
        console.log(value); //eslint-disable-line
        setMinpriceFilter(value[0]);
        setMaxpriceFilter(value[1]);
      }

    const [isOpen, setIsOpen] = useState(false);

    const toggleSelect = () => {
    setIsOpen(!isOpen);
    };

    const handleChangePagination = (e,value)=>{
        // console.log(e);
        console.log(value);
    }


    const [showFilter, setShowFilter] = useState(false);

    const handleCloseFilter = () => setShowFilter(false);
    const handleShowFilter = () => setShowFilter(true);

    const [sort,setSort] = useState('default');

    const handleChangeSort = (e) => {
        // console.log(e.target.value);
        setSort(e.target.value);
    }
    function sortByPriceLowToHigh() {
        const sorted = products.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setProducts(sorted);
    }
    
    function sortByPriceHighToLow() {
        const sorted = products.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setProducts(sorted);
    }

    useEffect(()=>{
        console.log(sort);
        switch(sort){
            case 'default':
                
                break;
            case 'low-to-hight':
                console.log('hello');
                sortByPriceLowToHigh();
                break;
            case 'hight-to-low':
                sortByPriceHighToLow();
                break;
            default:
                break;
        }
    },[sort])

    

    return (

        <div className='shofy-app'>
            <div className='product-page'>
                <div className="container">
                    <div className="route">
                        <span><i class="fa-solid fa-house"></i></span>
                        <span className='ms-1'>
                            Home
                        </span>
                        /
                        <span>
                            Headphones
                        </span>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-xl-3 col-lg-4">
                            <div className="filter-left filter-product-detail d-none d-xl-block d-lg-block">
                                <div className="filter-range-price">
                                    <div className="title">
                                        <span>Price Filter</span>
                                    </div>
                                    <div className='d-flex justify-content-between price-value-init'>
                                        <span>
                                            1

                                        </span>
                                        <span>
                                            50
                                        </span>
                                    </div>
                                    <div className='range-price mt-2' >
                                        <Slider 
                                            range allowCross={false} 
                                            defaultValue={[1, 50]} 
                                            min={1}  // Giá trị tối thiểu
                                            max={50} // Giá trị tối đa
                                            onChange={logRange} 
                                            reverse={false}
                                            />
                                    </div>
                                    <div className="action-price-filter mt-2 row">
                                        <div className='col-8 value-filter d-flex'>
                                            <span className='min-value me-2'>
                                                ${minPriceFilter}
                                            </span>
                                            -
                                            <span className=' max-value ms-2'>
                                                ${maxPriceFilter}
                                            </span>
                                        </div>
                                        <div className="btn-filter col-4 d-flex justify-content-end">
                                            <button>Filter</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-status mt-4">
                                    <div className="title">
                                        <span>Product Status</span>
                                    </div>

                                    <div className="content mt-1">
                                        <div className='d-flex value mt-1' >
                                            <input type="radio" id='on-sale' name='ProductStatus' />
                                            <label for = 'on-sale'  className='ms-2'>On sale</label>
                                        </div>

                                        <div className='d-flex value mt-1' >
                                            <input type="radio" id='in-stock' name='ProductStatus' />
                                            <label for="in-stock" className='ms-2'>In Stock</label>
                                        </div>

                                        <div className='d-flex value mt-1' >
                                            <input type="radio" id='out-of-stock' name='ProductStatus' />
                                            <label for = "out-of-stock" className='ms-2'>Out of stock</label>
                                        </div>

                                        <div className="btn-reset-status mt-3">
                                            <button>
                                                Reset Status
                                            </button>
                                        </div>

                                    </div>


                                </div>

                                <div className="filter-category mt-5">
                                    <div className="title">
                                        Categories
                                    </div>

                                    <hr/>
                                    <div className="box-filter-category">
                                        <ul>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Headphones
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Mobile Tablets 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        CPU Heat Pipes 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Smart Watch 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Bluetooth 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Clothing 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Bags
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Shoes
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Discover Skincare 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Beauty of Skin 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Awesome Lip Care 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Bracelets 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Earrings 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Necklaces 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='d-flex justify-content-between mt-1'>
                                                    <span>
                                                        Facial Care 
                                                    </span>
                                                    <i class="fa-solid fa-arrow-right me-4"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <hr />

                                <div className="filter-brands mt-5">
                                    <div className="title">
                                        Brands
                                    </div>
                                    <div className="content row mt-2">
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value1'/>
                                            <label className='ms-2' for="value1">Apple</label>
                                        </div>
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value2'/>
                                            <label className='ms-2' for="value2">Samsung</label>
                                        </div>
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value3'/>
                                            <label className='ms-2' for="value3">Anker</label>
                                        </div>
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value4'/>
                                            <label className='ms-2' for="value4">iValue</label>
                                        </div>
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value5'/>
                                            <label className='ms-2' for="value5">Oppo</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-color mt-5">
                                    <div className="title">
                                        Colors
                                    </div>
                                    <div className="content d-flex mt-2">
                                        <div className="color me-1" style={{backgroundColor:"rgb(216, 215, 221)"}}>

                                        </div>
                                        <div className="color me-1 colorActive" style={{backgroundColor:"rgb(193, 186, 228)"}}>
                                        </div>
                                        <div className="color me-1" style={{backgroundColor:"rgb(243, 192, 209)"}}>
                                        </div>
                                        <div className="color me-1" style={{backgroundColor:"rgb(100, 191, 209)"}}>
                                        </div>
                                        <div className="color me-1" style={{backgroundColor:"rgb(255, 122, 122)"}}>
                                        </div>
                                        <div className="color me-1" style={{backgroundColor:"rgb(107, 122, 255)"}}>
                                        </div>
                                    </div>
                                </div>


                                
                            </div>
                            <div className='d-md-block d-sm-block d-xl-none d-lg-none'>
                                <div
                                    onClick={handleShowFilter} 
                                    className="button-filter btn ">
                                    <i class="fa-solid fa-sliders"></i>
                                    <span className='ms-2'>Filter</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="products-right mt-2">
                                <div className="filter-top row">
                                    <div className="text-left col-4 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                                        <i class="fa-brands fa-trello me-2 d-none d-md-block d-sm-block d-xl-block d-lg-block"></i>
                                        {products ? products.length + ' sản phẩm': 'Không có sản phẩm'}
                                    </div>

                                    <div className="filter-right col-8 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-end">
                                       
                                        {/* <div className="custom-select position-relative">
                                            <div
                                            className={`d-flex align-items-center justify-content-between custom-select-filter-top  ${isOpen ? 'open-select-filter-top' : ''}`}
                                            onClick={toggleSelect}
                                            >
                                                <span className='me-4'>Default Sorting</span>
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </div>
                                            {isOpen && (
                                            <ul className="custom-select-list">
                                                <li className='pt-2 sort-active'>Low to High</li>
                                                <li className='pt-2 '>High to Low</li>
                                                <li className='pt-2 '>On Sale</li>
                                            </ul>
                                            )} 
                                        </div> */}
                                        <FormControl fullWidth>
                                            {/* <InputLabel id="demo-simple-select-label">Sắp xếp</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={sort}
                                                // label="Sắp xếp"
                                                onChange={handleChangeSort}
                                            >
                                                <MenuItem value={'default'}>Mặc định</MenuItem>
                                                <MenuItem value={'low-to-hight'}>Thấp đến cao</MenuItem>
                                                <MenuItem value={'hight-to-low'}>Cao đến thấp</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="products mt-4">
                                    <div className='row list-products box-product'>
                                        {
                                        products &&
                                        products.map((value,index) => (
                                            <div className='col-6 col-xl-4 col-lg-6 col-md-6 mb-3'>
                                                <CardMd key={index} item={value} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pagination-bottom d-flex align-items-center justify-content-center">
                                    <Pagination 
                                        count={10} 
                                        onChange={handleChangePagination}
                                        className={"my-pagination"}
                                        color="primary" />
                                </div>

                                {/* <PaginationCustom/> */}

                                
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            {/* filet mobile */}
            <Modal show={showFilter} onHide={handleCloseFilter} className='filter-product-mobile'>
                <Modal.Header closeButton>
                <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content-filter">
                        <div className="filter-range-price">
                                    <div className="title">
                                        <span>Price Filter</span>
                                    </div>
                                    <div className='d-flex justify-content-between price-value-init'>
                                        <span>
                                            1

                                        </span>
                                        <span>
                                            50
                                        </span>
                                    </div>
                                    <div className='range-price mt-2' >
                                        <Slider 
                                            range allowCross={false} 
                                            defaultValue={[1, 50]} 
                                            min={1}  // Giá trị tối thiểu
                                            max={50} // Giá trị tối đa
                                            onChange={logRange} 
                                            reverse={false}
                                            />
                                    </div>
                                    <div className="action-price-filter mt-2 row">
                                        <div className='col-8 value-filter d-flex'>
                                            <span className='min-value me-2'>
                                                ${minPriceFilter}
                                            </span>
                                            -
                                            <span className=' max-value ms-2'>
                                                ${maxPriceFilter}
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="product-status mt-4">
                                    <div className="title">
                                        <span>Product Status</span>
                                    </div>

                                    <div className="content mt-1">
                                        <div className='d-flex value mt-1' >
                                            <input type="radio" id='on-sale' name='ProductStatus' />
                                            <label for = 'on-sale'  className='ms-2'>On sale</label>
                                        </div>

                                        <div className='d-flex value mt-1' >
                                            <input type="radio" id='in-stock' name='ProductStatus' />
                                            <label for="in-stock" className='ms-2'>In Stock</label>
                                        </div>

                                        <div className='d-flex value mt-1' >
                                            <input type="radio" id='out-of-stock' name='ProductStatus' />
                                            <label for = "out-of-stock" className='ms-2'>Out of stock</label>
                                        </div>

                                        <div className="btn-reset-status mt-3">
                                            <button>
                                                Reset Status
                                            </button>
                                        </div>

                                    </div>


                                </div>

                                <hr />

                                <div className="filter-brands mt-5">
                                    <div className="title">
                                        Brands
                                    </div>
                                    <div className="content row mt-2">
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value1'/>
                                            <label className='ms-2' for="value1">Apple</label>
                                        </div>
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value2'/>
                                            <label className='ms-2' for="value2">Samsung</label>
                                        </div>
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value3'/>
                                            <label className='ms-2' for="value3">Anker</label>
                                        </div>
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value4'/>
                                            <label className='ms-2' for="value4">iValue</label>
                                        </div>
                                        <div className="value mt-1 col-6" >
                                            <input type="checkbox" id='value5'/>
                                            <label className='ms-2' for="value5">Oppo</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-color mt-5">
                                    <div className="title">
                                        Colors
                                    </div>
                                    <div className="content d-flex mt-2">
                                        <div className="color me-1" style={{backgroundColor:"rgb(216, 215, 221)"}}>

                                        </div>
                                        <div className="color me-1 colorActive" style={{backgroundColor:"rgb(193, 186, 228)"}}>
                                        </div>
                                        <div className="color me-1" style={{backgroundColor:"rgb(243, 192, 209)"}}>
                                        </div>
                                        <div className="color me-1" style={{backgroundColor:"rgb(100, 191, 209)"}}>
                                        </div>
                                        <div className="color me-1" style={{backgroundColor:"rgb(255, 122, 122)"}}>
                                        </div>
                                        <div className="color me-1" style={{backgroundColor:"rgb(107, 122, 255)"}}>
                                        </div>
                                    </div>
                                </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseFilter}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseFilter}>
                    Filter
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Product;