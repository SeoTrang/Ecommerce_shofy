const AttributeService = require('../services/attributeService')
const AttributeController = {
    GetAll: async (req,res)=>{
        try {
            const result = await AttributeService.getAll();
            if(result) return res.status(200).json(result);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error);
        }
    },
    GetByCategory: async (req,res)=>{
        try {
            const categoryId = req.params.categoryId;
            if(!categoryId) return res.status(400).json('missing data');
            const result = await AttributeService.getAllByCategory(categoryId);
            if(result) {
                // for (const key in brands) {
                //    const category = await categoryService.getOne(brands[key].CategoryId)
                //    brands[key].dataValues.CategoryName = category.Name;

                // }
                return res.status(200).json(result);
            }
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    Create: async (req,res)=>{
        try {
            console.log(req.body);
            const data = req.body.data;
            if(!data) return res.status(400).json('Thiếu dữ liệu cần thiết');
            const result = await AttributeService.create(data);
            if(result) return res.status(200).json("success");
            return res.status(400).json("Lỗi trong quá trình thêm vào databases");
        } catch (error) {
            console.log(error);
            return res.status(500).json('error', error)
        }
    },
    Update: async (req,res)=>{
        return res.json("put Attribute");
    },
    Delete: async (req,res)=>{
        return res.json("delete Attribute");
    }
}

module.exports = AttributeController;