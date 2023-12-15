const Variation = require("./Variation");

const VariationRepository = {
    create: async (data) => {
        try {
            const result = await Variation.create(data);
            // console.log(result);
            if(result?.id) return result.id;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getByProduct: async (product_id) => {
        try {
            let result = await Variation.findAll({
                where:{
                    product_id: product_id
                }
            })

            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    // getAll: async () => {
    //     try {
    //         const result = await Variation.findAll({
    //             include: [
    //                 {
    //                   model: Category,
    //                 //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Category
    //                 },
    //                 {
    //                   model: Brand,
    //                 //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Brand
    //                 },{
    //                     model: Color
    //                 }
    //             ],
    //         });
    //         if(result) return result;
    //         return false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // },
    // getOne: async(id) => {
    //     try {
    //         const result = await Variation.findOne({
    //             where: {id: id},
    //             include:[
    //                 {
    //                     model: Category,
    //                   //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Category
    //                   },
    //                   {
    //                     model: Brand,
    //                   //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Brand
    //                   },{
    //                       model: Color
    //                   }
    //             ]
    //         });
    //         if(result) return result;
    //         return false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // },
    // getByName:async(Name) => {
    //     try {
    //         const result = await Variation.findAll({
    //             where:{
    //                 Name: Name
    //             },
    //             include:[
    //                 {
    //                     model: Category,
    //                   //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Category
    //                   },
    //                   {
    //                     model: Brand,
    //                   //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Brand
    //                   },{
    //                       model: Color
    //                   }
    //             ]
    //         });
    //         if(result) return result;
    //         return false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // },
    // getByVariationName: async (name)=>{
    //     try {
    //         const result = await Variation.findAll(
    //             {
    //                 where:{
    //                     Name: name
    //                 }
    //             }
    //         );
    //         if(result) return result;
    //         return false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // },

    // update: async(id,data)=>{
    //     try {
    //         const [updated] = await Variation.update(data, { where: { id: id } });
    //         if (updated === 1) {
    //             return true;
    //         } else {
    //             console.error('Không tìm thấy lỗi khi cập nhật.');
    //             throw new Error('Không tìm thấy lỗi khi cập nhật.');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // },

    // delete: async(id) => {
    //     try {
    //         const result = await Variation.destroy({ where: { id: id } });
    //         if (result === 1) {
    //             return true;
    //           } else {
    //             console.error('Không tìm thấy hoặc lỗi khi xóa.');
    //             return false;
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }
}

module.exports = VariationRepository;