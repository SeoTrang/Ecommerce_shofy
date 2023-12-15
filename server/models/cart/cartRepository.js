const Variation = require("../Variation/Variation");
const Product = require("../product/product");
const User = require("../user/user");
const Cart = require("./cart");

const CartRepository = {
    create: async (data) => {
        try {
            let result = await Cart.create(data);
            if(result) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    update: async (id,data) => {
        try {
            const [updated] = await Cart.update(data, { where: { id: id } });
            if (updated === 1) {
                return true;
            } else {
                console.error('Không tìm thấy Cart hoặc lỗi khi cập nhật.');
                throw new Error('Không tìm thấy Cart hoặc lỗi khi cập nhật.');
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    delete: async (id) => {
        try {
            const result = await Cart.destroy({ where: { id: id } });
            if (result === 1) {
                return true;
              } else {
                console.error('Không tìm thấy CartItem hoặc lỗi khi xóa.');
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    checkProductExist: async (user_id,variation_id)=>{
        try {
            const result = await Cart.findOne({
                where:{
                    user_id: user_id,
                    variation_id: variation_id
                }
            })
            if(result) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    addToCart: async (data)=> {
        try {
            let result = await Cart.create(data);
            if(result) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getAllByUser: async (user_id) => {
        try {
            let result = await Cart.findAll({
                where:{
                    user_id: user_id
                },
                include:[
                    {
                        model:Variation,
                        include:[
                            {
                                model: Product
                            }
                        ]
                    }
                ]
            })
          
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

module.exports = CartRepository;