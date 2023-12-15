import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const ProductAPI = {
    GetAll: async () => {
        try {
            let result = null;
            await axiosCustom.get('/product')
            .then(res=>{
                console.log(res.data);
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
    GetDetail: async (product_id,linkTo) => {
        try {
            if(!product_id) return false;
            let result = null;
            // product-detail/1?arrayParam=Xanh Lá,128GB
            await axiosCustom.get(`/product-detail/${product_id}?arrayParam=${linkTo}`)
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
    },

    GetById: async (id) => {
        try {
            if(!id) return false;
            let result = null;
            await axiosCustom.get(`/product/${id}`)
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