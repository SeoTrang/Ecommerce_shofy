const { generateAccesstoken, generateRefreshtoken } = require("../auth/auth");
const RefreshTokenService = require("../services/refreshTokenService");
const UserService = require("../services/userService");
const bcrypt = require('../util/bcrypt')

const AuthController = {
    register: async (req,res) => {
        try {
            
            let user = req.body.data;
            if(!user) return res.status(400).json('missing data')
            if(user.Email){
                let user_temp = await UserService.findByEmail(user.Email);
                if(user_temp) return res.status(409).json("Email đã tồn tại")
            }


            const listAvatar = [
                '/img/imgHuman/avatar_default.jpg',
                '/img/imgHuman/avatar_1.jpg',
                '/img/imgHuman/avatar_2.jpg',
                '/img/imgHuman/avatar_3.jpg',
                '/img/imgHuman/avatar_4.jpg',
                '/img/imgHuman/avatar_5.jpg',
                '/img/imgHuman/avatar_6.jpg',
                '/img/imgHuman/avatar_7.jpg',
                '/img/imgHuman/avatar_8.jpg',
                '/img/imgHuman/avatar_9.jpg',
                '/img/imgHuman/avatar_10.jpg',
                '/img/imgHuman/avatar_11.jpg',
                '/img/imgHuman/avatar_12.jpg',
                '/img/imgHuman/avatar_13.jpg',
                '/img/imgHuman/avatar_14.jpg',
                '/img/imgHuman/avatar_15.jpg',
                '/img/imgHuman/avatar_16.jpg',
                '/img/imgHuman/avatar_17.jpg',
                '/img/imgHuman/avatar_18.jpg',
                '/img/imgHuman/avatar_19.jpg',
                '/img/imgHuman/avatar_20.jpg',
                '/img/imgHuman/avatar_21.jpg',
                '/img/imgHuman/avatar_22.jpg',
                '/img/imgHuman/avatar_23.jpg',
                '/img/imgHuman/avatar_24.jpg',
            ]
            // Generate a random index within the range of the array length
            const randomIndex = Math.floor(Math.random() * listAvatar.length);

            // Get the random avatar URL using the random index
            const randomAvatar = listAvatar[randomIndex];

            const encodePass = await bcrypt.hash(user?.Pass);

            user.Pass = encodePass;
            user.Avatar = randomAvatar;

            const result = await UserService.register(user);
            if(result) return res.status(200).json('success');
            return res.status(400).json('error when insert to database');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },
    login: async (req, res) => {
        try {
            const data = req.body.data;
            const user = await UserService.findByEmail(data.Email);
            if(!user) {
                return res.status(404).json("not found");
            }
            if(!await bcrypt.compare(data.Pass,user.Pass)) return res.status(404).json('username or pass invalid');
            let accessToken;
            let refreshToken;
            if (user) {
                // return res.json(user);
                // console.log(user);
                accessToken = await generateAccesstoken(user);
                refreshToken = await generateRefreshtoken(user);

            // console.log("accessToken : ",accessToken);
            // console.log("refreshToken : ",refreshToken);
            }
            if(refreshToken && accessToken){
                const data = {
                    RefreshToken: refreshToken,
                    userId: user.id
                }
                const resultAddRefreshToken = RefreshTokenService.create(data);
                if(resultAddRefreshToken) return res.status(200).json({
                    refreshToken:refreshToken,
                    accessToken:accessToken
                })
            }
            return res.status(500).json('server error');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },
    logout: async (req,res) => {
        try {
            const refreshToken = req.headers.authorization.split(' ')[1];
            // console.log(refreshToken);
            if(!refreshToken) return res.status(403).json('unauthorized')
            const result = await RefreshTokenService.delete(refreshToken);
            if(result) return res.status(200).json('success');
            return res.status(400).json('error when deleting refresh token');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    }

}

module.exports = AuthController;