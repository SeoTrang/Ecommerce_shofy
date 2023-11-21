import axios from '../../config/axiosBaseUrl/axios';

const BrandAPI = {
    GetByCategory : async (categoryId) => {
        try {
            let result = false;
            await axios.get(`/get-one-by-category/${categoryId}`)
            .then(res=>{
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
    },

    AddBrand: async (Name,Avatar,CategoryId) => {
        try {
            const data = {
               Name,
               Avatar,
               CategoryId
            }
            let result = false;
            await axios.post('/brand', {data: data})
            .then(res=>{
                result = res.status;
            })
            .catch(err => {
                console.log(err);
            })
            if(result == 200) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    DeleteBrand: async (id) => {
        try {
            let result = false;
            await axios.delete(`/brand/${id}`)
            .then(res=>{
                result = res.status;
            })
            .catch( err => {
                console.log(err);
            })
            if(result == 200) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    UpdateBrand: async (id,Name,Avatar) => {
        try {
            let result = false;
            const data = {
                Name,
                Avatar
            }
            await axios.put(`/brand/${id}`,{data:data})
            .then(res=>{
                result = res.status;
            })
            .catch(err=>{
                console.log(err);
            });
            if(result == 200) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default BrandAPI;