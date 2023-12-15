import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const AttributesValueAPI = {
    getVariationId: async(variation_id)=>{
        try {
            let result = null;
            await axiosCustom.get(`/get-attributesvalue/${variation_id}`)
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

export default AttributesValueAPI; 