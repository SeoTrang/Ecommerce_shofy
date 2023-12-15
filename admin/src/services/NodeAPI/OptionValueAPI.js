
import axios from '../../config/axiosBaseUrl/axios'

const OptionValueAPI = {
    create: async (data) => {
        try {
            let result = null;
            if(!data) return false;
            await axios.post('/option-value',{
                data: data
            })
            .then(res => {
                result = res.status;
            })
            .catch(err=> {
                console.log(err);
            })

            if(result) return result;
            return false; 
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getByOption: async (option_id) => {
        try {
            let result = null;
            await axios.get(`/option-value/${option_id}`)
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

export default OptionValueAPI;