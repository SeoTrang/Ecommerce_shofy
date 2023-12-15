const cartService = require("../services/cartService");
const OrderDetailService = require("../services/orderDetailService");
const OrderService = require("../services/orderService");
const generateUniqueCode  = require("../util/generateUniqueCode.js");



const orderController = {
    create: async(req,res) => {
        try {
            let orderData = req.body.data.order;
            let orderDetailData = req.body.data.orderDetail;
            let cartDelete = req.body.data.cartDelete;
            const user = req.body.decode;
            console.log(user);
            if(!orderData || !orderDetailData) return res.status(400).json('missing data');
            let orderCode = generateUniqueCode();
            let newOrderData = {
                    ...orderData,
                    user_id: user.id,
                    code: orderCode
                }
            let orderId = await OrderService.create(newOrderData);
            // console.log("orderId: " + orderId);
            if(!orderId) throw new Error('error when creating order');
            let newOrderDetailData = orderDetailData.map((value,index)=>{
                return {
                    ...value,
                    order_id: orderId
                }
            })

            let result = await OrderDetailService.create(newOrderDetailData);
            if(!result) throw new Error('erorr when creating order detail');
            
            // sau khi thêm đơn hàng mới thì xóa các sản phẩm khỏi giỏ hàng
            for (let index = 0; index < cartDelete.length; index++) {
                console.log("cart id delete : "+cartDelete[index]);
                await cartService.delete(cartDelete[index]);
            }
            return res.status(200).json('success');
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },

    getAllByUser: async (req,res) => {
        try {
            const user = req.body.decode;
            if(!user) return res.status(401).json('unauthorized');
            console.log(user);
            const order = await OrderService.getAllByUser(user.id);
            if(order) return res.status(200).json(order);
            throw new Error('error when query database');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getOneById: async (req,res)=> {
        try {
            const id = req.params.id;
            if(!id) return res.status(400).json('missing data');
            const result = await OrderService.getOneById(id);
            if(result) return res.status(200).json(result);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    }
}

module.exports = orderController;