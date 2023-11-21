const Brand = require("../brand/Brand");
const Category = require("../category/category");
const Color = require("../color/color");
const Product = require("./product");

const ProductRepository = {
    create: async (data) => {
        try {
            const result = await Product.create(data);
            // console.log(result);
            if(result?.id) return result.id;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await Product.findAll({
                include: [
                    {
                      model: Category,
                    //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Category
                    },
                    {
                      model: Brand,
                    //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Brand
                    },{
                        model: Color
                    }
                ],
            });
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getOne: async(id) => {
        try {
            const result = await Product.findOne({
                where: {id: id},
                include:[
                    {
                        model: Category,
                      //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Category
                      },
                      {
                        model: Brand,
                      //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Brand
                      },{
                          model: Color
                      }
                ]
                
            });
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getByName:async(Name) => {
        try {
            const result = await Product.findAll({
                where:{
                    Name: Name
                },
                include:[
                    {
                        model: Category,
                      //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Category
                      },
                      {
                        model: Brand,
                      //   attributes: ['id', 'name'], // Chọn các trường bạn muốn lấy từ bảng Brand
                      },{
                          model: Color
                      }
                ]
            });
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getByProductName: async (name)=>{
        try {
            const result = await Product.findAll(
                {
                    where:{
                        Name: name
                    }
                }
            );
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    update: async(id,data)=>{
        try {
            const [updated] = await Product.update(data, { where: { id: id } });
            if (updated === 1) {
                return true;
            } else {
                console.error('Không tìm thấy lỗi khi cập nhật.');
                throw new Error('Không tìm thấy lỗi khi cập nhật.');
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    delete: async(id) => {
        try {
            const result = await Product.destroy({ where: { id: id } });
            if (result === 1) {
                return true;
              } else {
                console.error('Không tìm thấy hoặc lỗi khi xóa.');
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = ProductRepository;