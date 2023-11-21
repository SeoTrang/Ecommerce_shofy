
import Cookies from 'js-cookie';
import axiosCustom from '../../config/axiosBaseUrl/axiosCustom'

const AuthAPI = {
    register: async (data)=> {
        try {
            let result = null;
            await axiosCustom.post('/auth/register', {data: data})
            .then(res=>{
                result = res.status;
            })
            .catch(err=>{

                console.log(err);
                result = err.response.status;
            })
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    login: async(data)=>{
        try {
            let result = null;
            await axiosCustom.post('/auth/login', {data: data})
            .then(res=>{
                result = res.data;
            })
            .catch(err=>{
                console.log(err);
            })
            console.log(result);
            
            if(result) {
                let accessToken = result.accessToken;
                let refreshToken = result.refreshToken;
                Cookies.set("accessToken",accessToken);
                Cookies.set("refreshToken",refreshToken);
                return true;
            }
            return false;

        } catch (error) {
            console.log(error);
            return false;
        }
    },

    logout: async () => {
        try {
            let result = null;
            await axiosCustom.post('/auth/logout')
            .then(res=>{
                result = res.status;
            })
            .catch(err=>{
                console.log(err);
            })
            if(result == 200) return true;
            return false;

        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default AuthAPI;
