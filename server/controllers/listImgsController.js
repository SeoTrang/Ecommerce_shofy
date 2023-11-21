const ListimgService =  require('../services/listImgService')
const listImgController = {
     // [GET] : get all category
     getAll: async (req,res)=>{

        try {
            const result = await ListimgService.getAll();
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
    getByColor:async (req,res)=>{

        try {
            const ColorId = req.params.ColorId;
            console.log(ColorId);
            const result = await ListimgService.getByColor(ColorId);
            if(!result) return res.status(400).json('lỗi lấy dữ liệu databases');
          
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
    //         const result = await ListimgService.getOne(id);
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
                let resultInsert = await ListimgService.create(data[index]);
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
            const result = await ListimgService.update(id, data);
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
            const result =  await ListimgService.delete(id);
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
}

module.exports = listImgController;