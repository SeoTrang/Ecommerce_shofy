const OrderRepository = require("../models/order/OrderRepository");

const OrderService = {
    create: async(data) => {
        return await OrderRepository.create(data);
    },
    getAllByUser: async( user_id ) => {
        return await OrderRepository.getAllByUser(user_id);
    },
    getOneById: async( id ) => {
        return await OrderRepository.getOneById(id);
    },
    getAll: async() => {
        return await OrderRepository.getAll();
    }
}

module.exports = OrderService;