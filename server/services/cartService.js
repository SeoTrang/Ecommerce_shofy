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
    }
}

module.exports = cartService;