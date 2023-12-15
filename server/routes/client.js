const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const listImgController = require('../controllers/listImgsController');
const AttributeController = require('../controllers/attributeController');
const attributeValueController = require('../controllers/attributeValueController');
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const CartController = require('../controllers/CartController');
const OptionController = require('../controllers/optionController');
const orderController = require('../controllers/orderController');

// category
router.get('/category',categoryController.getCategory);
router.post('/category',categoryController.postCategory);
router.put('/category',categoryController.putCategory);


// product
router.get('/product',productController.getAll);
router.get('/product/:id',productController.getOne);
router.get('/product-detail/:id',productController.getDetail);
router.get('/get-product-by-nane/:Name',productController.getByName);

// list imgs
router.get('/list-img',listImgController.getAll);
router.get('/get-list-img/:variantion_id',listImgController.getByVariantion);


// attributes
router.get('/get-attributes-category/:categoryId',AttributeController.GetByCategory);

// attributes value
router.get('/get-attributesvalue/:variation_id',attributeValueController.GetByVariation);


// cart
router.post('/add-cart',authMiddleware.checkLogin,CartController.addToCart);
router.patch('/update-cart/:id',authMiddleware.checkLogin,CartController.updateCart);
router.delete('/delete-cart/:id',authMiddleware.checkLogin,CartController.deletecart);
router.get('/get-all-by-user',authMiddleware.checkLogin,CartController.getAllByUser);

// user
router.get('/get-user',authMiddleware.checkLogin,userController.getOne);

// option
router.get('/option/:product_id',OptionController.getByProduct);

// order
router.post('/add-new-order',authMiddleware.checkLogin,orderController.create);
router.get('/get-order',authMiddleware.checkLogin,orderController.getAllByUser);
router.get('/get-order-detail/:id',authMiddleware.checkLogin,orderController.getOneById);


module.exports = router;