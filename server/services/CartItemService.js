const CartItemRepository = require("../models/cartItem/CartItemRepository");

const CartItemService = {
    create: async(data)=> {
        return await CartItemRepository.create(data);
    },
    update: async (data,id)=> {
        return await CartItemRepository.update(data,id);
    },
    delete: async (id) => {
        return await CartItemRepository.delete(id);
    }
}

module.exports = CartItemService;