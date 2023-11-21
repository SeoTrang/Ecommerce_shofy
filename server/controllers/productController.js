const productService = require("../services/productService");

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
            console.log(req.body.data);
            if(!req.body.data) return res.status(400).json({ error: 'Thiếu dữ liệu cần thiết.' })
            const result = await productService.create(req.body.data);
            if(result) return res.status(200).json( result );
            return res.status(500).json({ error: 'lỗi khi thêm vào databases.' });
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
    }
}

module.exports = productController;