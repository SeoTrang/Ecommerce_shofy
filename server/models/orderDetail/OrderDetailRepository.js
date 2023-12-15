const OrderDetail = require("./OrderDetail");

const OrderDetailRepository = {
    create: async (data)=>{
        try {
            for (let index = 0; index < data.length; index++) {
                await OrderDetail.create(data[index]);
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

module.exports = OrderDetailRepository;