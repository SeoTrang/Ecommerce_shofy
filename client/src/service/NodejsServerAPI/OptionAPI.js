
import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'


const OptionAPI = {
    getOptionByProduct: async (product_id) => {
        try {
            let result = null;
            await axiosCustom.get(`/option/${product_id}`)
            .then(res => {
                result = res.data;
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
    }
}

export default OptionAPI;