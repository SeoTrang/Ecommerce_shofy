const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');
const brandController = require('../controllers/BrandController');
const productController = require('../controllers/productController');
const AttributeController = require('../controllers/attributeController');
const colorController = require('../controllers/colorController');
const attributeValueController = require('../controllers/attributeValueController');
const listImgController = require('../controllers/listImgsController');

// category
router.get('/category',categoryController.getCategory);
router.get('/get-one-category',categoryController.getOneCategory);
router.post('/category',categoryController.postCategory);
router.put('/category',categoryController.putCategory);
router.delete('/category',categoryController.deleteCategory);

// brand
router.post('/brand',brandController.createBrand);
router.put('/brand/:id',brandController.update);
router.get('/brand',brandController.getAll);
router.get('/one-brand/:id',brandController.getOne);
router.get('/get-one-by-category/:categoryId',brandController.getOneByCategory);
router.delete('/brand/:id',brandController.delete);

// product
router.post('/product',productController.postProduct);
router.put('/product/:id',productController.putProduct);
router.get('/product',productController.getAll);
// router.get('/one-product/:id',productController.getOne);
router.delete('/product/:id',productController.deleteProduct);

// color
router.post('/color',colorController.create);
router.put('/color/:id',colorController.update);
router.get('/color',colorController.getAll);
router.delete('/color/:id',colorController.delete);

// list imgs
router.post('/list-img',listImgController.create);
router.put('/list-img/:id',listImgController.update);
router.get('/list-img',listImgController.getAll);
router.get('/get-list-img-color/:ColorId',listImgController.getByColor);
router.delete('/list-img/:id',listImgController.delete);


// attribute value
router.post('/attribute-value',attributeValueController.create);
router.put('/attribute-value/:id',attributeValueController.update);
router.get('/attribute-value',attributeValueController.getAll);
router.delete('/attribute-value/:id',attributeValueController.delete);



// attribute
router.post('/attribute',AttributeController.Create);
router.put('/attribute/:id',AttributeController.Update);
router.get('/attribute',AttributeController.GetAll);
router.get('/get-attribute-by-category/:categoryId',AttributeController.GetByCategory);
// router.get('/one-product/:id',AttributeController.getOne);
router.delete('/attribute/:id',AttributeController.Delete);




module.exports = router;