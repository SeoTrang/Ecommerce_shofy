import axios from '../../config/axiosBaseUrl/axios'

const AttributeAPI = {
    GetAll: async () => {
        try {
            let result = false;
            await axios.get('/attribute')
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
    GetByCategory: async (categoryId) => {
        try {
            if(!categoryId) return false;
            let result = false;
            await axios.get(`/get-attribute-by-category/${categoryId}`)
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

    Create: async (categoryId, attribute)=>{
        try {
            let result = null;
            let data = {
                Name: attribute,
                CategoryId: categoryId
            }
            await axios.post('/attribute',{data: data})
            .then(res => {
                result = res.status;
            })
            .catch (err => {
                console.log(err);
            })

            if(result == 200) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default AttributeAPI;