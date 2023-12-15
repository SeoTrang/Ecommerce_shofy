import axios from '../../config/axiosBaseUrl/axios'

const CombinationAPI = {
    create: async (data) => {
        try {
            let result = false;
            await axios.post('/combination',{
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
    }
}

export default CombinationAPI;
