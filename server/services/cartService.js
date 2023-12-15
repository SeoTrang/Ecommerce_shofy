const CartRepository = require("../models/cart/cartRepository");

const cartService = {
    create: async (data) => {
        return await CartRepository.create(data);
    },
    get: async (UserId) => {
        return await CartRepository.get(UserId);
    },
    getByUser: async (UserId) => {
        return await CartRepository.getByUser(UserId);
    },
    checkProductExist: async (user_id, variation_id) => {
        return await CartRepository.checkProductExist(user_id, variation_id);
    },
    addToCart: async (data) => {
        return await CartRepository.addToCart(data);
    },
    getAllByUser: async(user_id) => {
        return await CartRepository.getAllByUser(user_id);
    },
    update: async(id,data) => {
        return await CartRepository.update(id,data);
    },
    delete: async(id) => {
        return await CartRepository.delete(id);
    }
}

module.exports = cartService;