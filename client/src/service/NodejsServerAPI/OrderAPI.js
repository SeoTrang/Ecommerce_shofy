import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const OrderAPI = {
    create: async (data)=>{
        try {
            let result = null;
            console.log(data);
            // return true;

            await axiosCustom.post('/add-new-order',{data: data})
            .then(res=>{
                result = res.status;
            })
            .catch(err => {
                console.log(err);
            })

            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAllByUser: async () => {
        try {
            let result = null;
            await axiosCustom.get('/get-order')
            .then( res => result = res.data)
            .catch( err => {
                throw new Error(err) 
            })

            return result;

        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getOrderDetail: async (id) => {
        try {
            let result = null;
            await axiosCustom.get('/get-order-detail/' + id)
            .then( res => result = res.data)
            .catch( err => {
                throw new Error(err) 
            })

            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default OrderAPI;