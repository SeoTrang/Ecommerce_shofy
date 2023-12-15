const { QueryTypes } = require("sequelize");
const Combination = require("../Combination/Combination");
const OptionValue = require("../OptionValue/OptionValue");
const Variation = require("../Variation/Variation");
const Brand = require("../brand/Brand");
const Category = require("../category/category");
const Product = require("./product");
const sequelize = require("../../config/db");
const Option = require("../Option/Option");
const Rating = require("../rating/rating");

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
                    },
                    {
                        model: Rating
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
                          model: Option,
                          include:[
                            {
                                model: OptionValue
                            }
                          ]
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
    },

   getDetailProduct: async (id,condition)=> {
    try {
        let queryString = `SELECT * FROM products as Product
                            JOIN variations as Variation ON Product.id = Variation.product_id
                            JOIN combinations as Combination ON Variation.id = Combination.variation_id`;
        for (let index = 0; index < condition.length; index++) {
            if(index == 0){
                queryString += ` JOIN optionvalues as Option_value ON Combination.option_value_id = Option_value.id  AND Option_value.value = '`+condition[index]+"'";

            }else{
                queryString += ` JOIN (
                    SELECT combinations.variation_id, combinations.option_value_id, Option_value.value, Option_value.color_code
                    FROM combinations
                    JOIN optionvalues as Option_value ON combinations.option_value_id = Option_value.id
                    where
                        Option_value.value  = '${condition[index]}'
                ) AS option${index} ON Variation.id = option${index}.variation_id`;
            }

        }

        queryString += ` WHERE 
                        Product.id = ${id}`


        // console.log(queryString);
        
        const products = await sequelize.query(
            queryString
        ,{
            type: QueryTypes.SELECT 
        })

        if(products) return products;
        return false;
     
    } catch (error) {
        console.log(error);
        return error;
    }
      
   }
}

module.exports = ProductRepository;