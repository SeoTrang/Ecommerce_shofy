import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const ListImgAPI = {
    GetByVariation: async (variation_id) => {
        try {
            let result = null;
            // console.log(colorId);
            await axiosCustom.get(`/get-list-img/${variation_id}`)
            .then(res=>{
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
    }
}

export default ListImgAPI;