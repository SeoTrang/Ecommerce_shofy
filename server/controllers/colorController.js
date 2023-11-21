const colorService = require('../services/colorService');
const colorController = {
    // [GET] : get all category
    getAll: async (req,res)=>{

        try {
            const result = await colorService.getAll();
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

    // [GET] get one category
    // getOneProduct: async (req,res)=>{

    //     try {
    //         const id = req.query.id;
    //         if( !id) return res.status(400).json({ error:"thiếu dữ liệu cần thiết"});
    //         const result = await colorService.getOne(id);
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
            if(!req.body.data) return res.status(400).json({ error: 'Thiếu dữ liệu cần thiết.' })
            const result = await colorService.create(req.body.data);
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
            const result = await colorService.update(id, data);
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
            const result =  await colorService.delete(id);
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

module.exports = colorController;