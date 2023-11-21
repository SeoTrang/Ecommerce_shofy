import axios from '../../config/axiosBaseUrl/axios'

const ListImgAPI = {
    GetAll: async () => {
        try {
            let result = false;
            await axios.get('/product')
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

    Create: async (data)=>{
        try {
            let result = null;
            
            await axios.post('/list-img',{data: data})
            .then(res => {
                result = res.status;
            })
            .catch (err => {
                console.log(err);
            })

            if(result == 200) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default ListImgAPI;