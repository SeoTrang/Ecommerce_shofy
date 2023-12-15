
import axios from '../../config/axiosBaseUrl/axios';

const CategoryAPI = {
    GetAll: async() => {
        try {
            let result  = null;
            await axios.get('/category')
            .then(response => {
                // console.log(response.data);
                result = response.data;
                
            })
            .catch(error => {
                console.log(error);
            })
            // console.log(result)
            if(result) return result;
            return false;
            
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    create: async (category)=>{
        try {
            const data = {
                "name": category
            }

        
            let result = false;
            await axios.post('/category',{data})
            .then( res => {
                console.log(res);
                return result = true;
            })
            .catch( err => {
                console.log(err);
            })
            if(result) return true;
            return false;

        } catch (error) {
            console.log(error);
            return false;
        }
    },

    delete: async(id)=>{
        try {
            let result = null;
            await axios.delete(`/category?id=${id}`)
            .then(res=>{
                // console.log(res);
                result = res.status;
            })
            .catch(err=>{
                console.log(err);
            })
            if(result==200) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    update: async (id, NewValue) => {
        try {
            let result = null;
            const data = {
                "Name": NewValue
            }
            await axios.put(`/category?id=${id}`,{data})
            .then(res=>{
                result = res.status;
            })
            .catch(err => {
                console.log(err);
            })
            if(result==200) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }


}

export default CategoryAPI;