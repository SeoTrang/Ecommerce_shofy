const CartItem = require("../cartItem/CartItem");
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
    get: async (UserId) => {
        try {
            let result = await Cart.findAll({
                where:{
                    UserId: UserId
                },
                include:[
                    {
                        model: CartItem
                    }
                ]
            })
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getByUser: async (UserId) => {
        try {
            let result = await Cart.findOne({
                where:{
                    UserId: UserId
                }
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