import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const AttributesAPI = {
    getByCategoryId: async(categoryId)=>{
        try {
            let result = null;
            await axiosCustom.get(`/get-attributes-category/${categoryId}`)
            .then( res => {
                result = res.data;
            })
            .catch(err => {
                console.log(err);
            });
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default AttributesAPI; 