import Cookies from 'js-cookie';
import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const UserAPI = {
    getUser: async()=>{
        // let accessToken = Cookies.get("accessToken");
        // if(!accessToken) return false;
        let result = null;
        await axiosCustom.get('/get-user')
        .then(res=>{
            result = res.data;
        })
        .catch(err=>{
            console.log(err);
        });

        if(result) return result;
        return false;

    }
}

export default UserAPI;