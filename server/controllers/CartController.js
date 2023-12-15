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
    addToCart: async (req,res) => {
        try {
            console.log(req.body.data);
            console.log(req.body.decode);
            const dataBody = req.body.data;
            const user = req.body.decode;

            if(!dataBody || !user) return res.status(401).json('Unauthorized');

            // check product exits in cart
            let productExist = await cartService.checkProductExist(user.id,dataBody.variation_id);
            if(productExist) return res.status(409).json('Product already exists in the cart.')

            let data = {
                ...dataBody,
                user_id: user.id,
            }

            console.log(data);
            // res.json(data);

            let result = await cartService.addToCart(data);
            if(!result) return res.status(500).json('add to cart error');
            return res.status(200).json('success');
            
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },
    getAllByUser: async(req,res) => {
        try {
            const user = req.body.decode;
            console.log(user);
            if(!user) return res.status(401).json('unauthorized');
            let result = await cartService.getAllByUser(user.id);
            if(!result) return res.status(404).json('not found');
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },

    updateCart:async (req,res) => {
        try {
            const id = req.params.id;
            const data = req.body.data;
            if(!id || !data) return res.status(409).json('missing data');
            // console.log(id);
            // console.log(data);
            const result = await cartService.update(id,data);
            if(result) return res.status(200).json('success');
            return res.status(400).json('error when updating sql');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },

    deletecart: async(req,res) => {
        try {
            const id = req.params.id;
            if(!id) return res.status(409).json('missing data');
            // console.log(id);
            // console.log(data);
            const result = await cartService.delete(id);
            if(result) return res.status(200).json('success');
            return res.status(400).json('error when delete sql');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    }
}

module.exports = CartController;