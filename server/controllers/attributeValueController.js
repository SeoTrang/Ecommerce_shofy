const AttributeValueService = require('../services/attributeValueService')
const attributeValueController = {
    // [GET] : get all category
    getAll: async (req,res)=>{

        try {
            const result = await AttributeValueService.getAll();
            if(!result) return res.status(400).json('lỗi lấy dữ liệu databases');
            // console.log(result);
            for (const key in result) {
                // console.log(key);
                const countBrand = await BrandService.getAllByCategory(result[key].id);
                result[key].dataValues.BrandCount = countBrand.length;

            }
            return res.status(200).json(result);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    GetByVariation: async (req,res)=>{
        try {

            const variation_id = req.params.variation_id;
            console.log(variation_id);
            if(!variation_id) return res.status(400).json('missing data');
            const result = await AttributeValueService.GetByVariation(variation_id);
            if(result) {
                return res.status(200).json(result);
            }
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },

    // [GET] get one category
    // getOneProduct: async (req,res)=>{

    //     try {
    //         const id = req.query.id;
    //         if( !id) return res.status(400).json({ error:"thiếu dữ liệu cần thiết"});
    //         const result = await AttributeValueService.getOne(id);
    //         if(result) return res.status(200).json(result);
    //         return res.status(500).json('lỗi lấy dữ liệu databases');
            
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({error: error});
    //     }
    // },

    // [POST] : add new category
    create: async (req,res)=>{
        try {
            console.log(req.body.data);
            let result = true;
            
            if(!req.body.data) return res.status(400).json({ error: 'Thiếu dữ liệu cần thiết.' })
            let data = req.body.data;
            let len = req.body.data.length;
            for (let index = 0; index < len; index++) {
                let resultInsert = await AttributeValueService.create(data[index]);
                if(!resultInsert){
                    result = false;
                    break;
                }
                
            }
            
            if(result) return res.status(200).json( result );
            return res.status(500).json({ error: 'lỗi khi thêm vào databases.' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error});
        }
    },

    // [PUT] : change category
    update: async (req,res)=>{
        
        try {
            const data = req.body.data; // Lấy dữ liệu từ phần thân (body) của yêu cầu
            const id = req.query.id;

            if(! data || !id) return res.status(400).json({ error:"thiếu dữ liệu cần thiết"});
            const result = await AttributeValueService.update(id, data);
            if(result) return res.status(200).json(result);

            if (result) {
                return res.status(200).json(result);
            } else {
                return res.status(400).json({ error: 'Không tìm thấy category hoặc lỗi khi cập nhật.' });
            }
            // return res.json("put Categories");
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error});
        }
    },

    // [DELETE] : delete category
    delete: async (req,res)=>{
        try {
            const id = req.query.id;
            if(!id) return res.status(400).json({ error:"thiếu dữ liệu cần thiết"});
            const result =  await AttributeValueService.delete(id);
            if (result) {
                return res.status(200).json(result);
            } else {
                return res.status(400).json({ error: 'Không tìm thấy category hoặc lỗi khi cập nhật.' });
            }
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error});
        }
    },

    // // post
    // AddCategory: async (req, res)=>{
    //     console.log(req.body);
    //     return res.json("Add Category");
    // }
}

module.exports = attributeValueController;