const cartService = require("../services/cartService");

const CartController = {
    getCartId: async (UserId) => {
        try {
            let result  = await cartService.getByUser(UserId);
            if(result) return result;
            return false;
        } catch (error) {
            return false;
        }
    },
    create: async (UserId) => {
        try {
            let data  = {
                UserId: UserId
            }
            let result =  await cartService.create(data);
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    addToCart: async (req,res) => {
        try {
            console.log(req.body);
            res.json('ok');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    }
}

module.exports = CartController;