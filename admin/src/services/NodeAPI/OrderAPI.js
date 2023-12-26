import axios from '../../config/axiosBaseUrl/axios'

const OrderAPI = {
    getAll: async() => {
        try {
            let result = null;
            await axios.get('/all-orders')
            .then(res => result = res.data)
            .catch(err => {
                throw new Error('Error getting all orders')
            }) 
            if(result) return result;
            return null;
        } catch (error) {
            console.log(err);
            return false;
        }
    }
}

export default OrderAPI;