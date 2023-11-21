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

// category
router.get('/category',categoryController.getCategory);
router.post('/category',categoryController.postCategory);
router.put('/category',categoryController.putCategory);


// product
router.get('/product',productController.getAll);
router.get('/detail/:id',productController.getOne);
router.get('/get-product-by-nane/:Name',productController.getByName);
// list img 
// list imgs

router.get('/list-img',listImgController.getAll);
router.get('/get-list-img-color/:ColorId',listImgController.getByColor);


// attributes
router.get('/get-attributes-category/:categoryId',AttributeController.GetByCategory);

// attributes value
router.get('/get-attributesvalue/:productId',attributeValueController.GetByProduct);


// cart
router.post('/add-cart',CartController.addToCart);

// user
router.get('/get-user',authMiddleware.checkLogin,userController.getOne);



module.exports = router;