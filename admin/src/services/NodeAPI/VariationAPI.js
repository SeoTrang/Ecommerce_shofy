import axios from '../../config/axiosBaseUrl/axios'


const VariationAPI = {
    create: async (data) => {
        try {
            let result = false;
            await axios.post('/variation',{
                data: data
            })
            .then( res => {
                result = res.data;
            })
            .catch( err => {
                console.log(err);
            })
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getVariantionByProduct: async (product_id) => {
        try {
            if(!product_id) return false;
            let result = false;
            await axios.get(`/get-variation-by-product/${product_id}`)
            .then( res => {
                result = res.data;
            })
            .catch( err => {
                console.log(err);
            })
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default VariationAPI;