import Authorization from '../../config/axiosBaseUrl/Authorization';
import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const CartAPI = {
    getCartByUser: async () => {
        try {
            let result = null;
            await axiosCustom.get('/get-all-by-user')
            .then(res=>{
                console.log(res);
                result = res.data;
            })
            .catch(err=>{
                console.log(err);
                
            })
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    addToCart: async (data) => {
        try {
            // console.log(data);
            let result = null;
            if(!Authorization()) return false;
         
            await axiosCustom.post('/add-cart', {data: data})
            .then(res=>{
                result = res.status;
            })
            .catch(err=>{
                console.log(err);
                
            })

            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
        }
    },
    removeFromCart: async (id) => {
        try {
            let result = null;
            console.log("delete from cart");
            await axiosCustom.delete(`/delete-cart/${id}`)
            .then(res=>{
                result = res.status;
            })
            .catch(err=>{
                console.log(err);
                
            })

            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    updateCart: async(id,data) => {
        try {
            let result = null;
            console.log("updateCart");
            await axiosCustom.patch(`/update-cart/${id}`, {data: data})
            .then(res=>{
                result = res.status;
            })
            .catch(err=>{
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

export default CartAPI;