import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const ProductAPI = {
    GetAll: async () => {
        try {
            let result = null;
            await axiosCustom.get('/product')
            .then(res=>{
                result = res.data;
            })
            .catch(err=>{
                console.log(err);
            })
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    GetDetail: async (ProductId) => {
        try {
            if(!ProductId) return false;
            let result = null;
            await axiosCustom.get(`/detail/${ProductId}`)
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

    GetByName: async (Name) => {
        try {
            if(!Name) return false;
            let result = null;
            await axiosCustom.get(`/get-product-by-nane/${Name}`)
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
    }
}

export default ProductAPI;