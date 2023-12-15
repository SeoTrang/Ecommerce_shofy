const querystring = require('querystring');
const url = require('url');
const productService = require("../services/productService");
const RatingService = require('../services/ratingService');

const productController = {
    getAll:async(req, res) => {
        try {
            const result = await productService.getAll();
            if(result) return res.status(200).json(result);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error);
        }
    },
    getOne:async(req, res) => {
        try {
            const id = req.params.id;
            if(!id) return res.status(400).json('Thiếu dữ liệu cần thiết !!');

            const result = await productService.getOne(id);
            if(result) return res.status(200).json(result);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error);
        }
    },
    getByName:async(req, res) => {
        try {
            const Name = req.params.Name;
            if(!Name) return res.status(400).json('Thiếu dữ liệu cần thiết !!');

            const result = await productService.getByName(Name);
            if(result) return res.status(200).json(result);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error);
        }
    },
    postProduct: async (req,res)=>{
        try {
            // console.log(req.body.data);
            // debugger;
            // return res.json('test')
            if(!req.body.data) return res.status(400).json({ error: 'Thiếu dữ liệu cần thiết.' })
            const result = await productService.create(req.body.data);
            if(!result) return res.status(500).json({ error: 'lỗi khi thêm vào databases.' });
            let ratingData = {
                num_rating: 1,
                average_rate: 5,
                product_id: result
            }
            RatingService.create(ratingData);

            
            return res.status(200).json( result );


            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error});
        }
    },
    putProduct: async (req,res)=>{
        return res.json("put Product");
    },
    deleteProduct: async (req,res)=>{
        return res.json("delete Product");
    },

    getDetail:async(req, res) => {
        try {
            const id = req.params.id;
            
            if(!id) return res.status(400).json('Thiếu dữ liệu cần thiết !!');
            // Lấy giá trị của tham số truy vấn 'arrayParam' từ req.query
            const arrayParamValue = req.query.arrayParam;

            // Giải mã giá trị của tham số truy vấn nếu cần
            // const decodedArrayParamValue = arrayParamValue ? decodeURIComponent(arrayParamValue) : '';

            // Chuyển đổi giá trị thành mảng (nếu cần)
            // const arrayValues = decodedArrayParamValue ? decodedArrayParamValue.split(',') : [];
            const arrayValues = arrayParamValue ? arrayParamValue.split(',') : [];

            console.log(arrayValues);
            // return res.json(arrayValues);
            

            const result = await productService.getDetail(id,arrayValues);
            if(result) return res.status(200).json(result);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error);
        }
    },
}

module.exports = productController;