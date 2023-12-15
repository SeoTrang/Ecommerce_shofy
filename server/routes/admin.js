const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');
const brandController = require('../controllers/brandController');
const productController = require('../controllers/productController');
const AttributeController = require('../controllers/attributeController');
// const colorController = require('../controllers/colorController');
const attributeValueController = require('../controllers/attributeValueController');
const listImgController = require('../controllers/listImgsController');
const VariationController = require('../controllers/variationController');
const OptionController = require('../controllers/optionController');
const OptionValueController = require('../controllers/optionValueController');
const CombinationController = require('../controllers/combinationController');

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
router.get('/product/:id',productController.getOne);
router.get('/product-detail/:id',productController.getDetail);



// list imgs
router.post('/list-img',listImgController.create);
router.put('/list-img/:id',listImgController.update);
router.get('/list-img',listImgController.getAll);
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
router.delete('/attribute/:id',AttributeController.Delete);



// Variation
router.post('/variation',VariationController.create);
router.get('/get-variation-by-product/:product_id',VariationController.getByProduct);
// router.get('/variation',AttributeController.GetAll);


// option
router.post('/option',OptionController.create);
router.get('/option/:product_id',OptionController.getByProduct);
// router.get('/option',OptionController.getByProduct);


// option value
router.post('/option-value',OptionValueController.create);
router.get('/option-value/:option_id',OptionValueController.getByOption);


// combination
router.post('/combination',CombinationController.create);

module.exports = router;