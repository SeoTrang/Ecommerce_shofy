const OrderDetailRepository = require("../models/orderDetail/OrderDetailRepository")

const OrderDetailService = {
    create: async(data)=>{
        return await OrderDetailRepository.create(data);
    }
}

module.exports = OrderDetailService;