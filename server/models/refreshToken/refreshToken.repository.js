const RefreshToken = require("./refreshToken");


const RefreshTokenRepository = {
    create: async (data) => {
        try {
            let result = await RefreshToken.create(data);
            if(result) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    delete: async (refreshToken) => {
        try {
            
            const result = await RefreshToken.destroy({
                where:{
                    RefreshToken: refreshToken
                }
            })
            if(result === 1) return true;
            console.log('khong tim thay hoac loi khi xoa');
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = RefreshTokenRepository;
