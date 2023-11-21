const BrandService = require('../services/brandService');
const categoryService = require('../services/categoryService');


const BrandController = {
    createBrand: async (req,res) => {
        try {
            console.log(req.body);
            const data = req.body.data;
            if(!data) return res.status(400).json('Thiếu dữ liệu cần thiết');
            const result = await BrandService.create(data);
            if(result) return res.status(200).json("success");
            return res.status(400).json("Lỗi trong quá trình thêm vào databases");
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error)
        }
    },
    update: async (req, res) => {
        try {
            // console.log(req.params.id);
            // console.log(req.body);
            // res.json("ok")
            const id = req.params.id;
            const data = req.body.data;
            if(!id || !data) return res.status(400).json('missing data');
            const result = await BrandService.update(id,data);
            if(result) return res.status(200).json('success');
            return res.status(400).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error')
        }
    },
    
    getAll:async(req, res) => {
        try {
            const brands = await BrandService.getAll();
            if(brands) return res.status(200).json(brands);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error);
        }
    },

    getOne: async(req,res) => {
        try {
            const id = req.params.id;
            if(!id) return res.status(400).json('missing data');
            const brand = await BrandService.getOne(id);
            if(brand) return res.status(200).json(brand);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error);
        }
    },
    getOneByCategory: async(req,res)=>{
        try {
            const categoryId = req.params.categoryId;
            if(!categoryId) return res.status(400).json('missing data');
            const brands = await BrandService.getAllByCategory(categoryId);
            if(brands) {
                for (const key in brands) {
                   const category = await categoryService.getOne(brands[key].CategoryId)
                   brands[key].dataValues.CategoryName = category.Name;

                }
                return res.status(200).json(brands);
            }
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },

    delete: async(req,res) => {
        try {
            const id = req.params.id;
            if(!id) return res.status(400).json('missing data');
            const brand = await BrandService.delete(id);
            if(brand) return res.status(200).json("success");
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error);
        }
    }
}

module.exports = BrandController;