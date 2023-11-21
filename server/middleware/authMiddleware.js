const Auth = require("../auth/auth");

// middleware.js
module.exports = {
    checkLogin: async (req, res, next) => {
        try {
            // console.log(req);
            console.log("accesstoken ======>>> :  ",req.headers.authorization);
            if(!req.headers.authorization) return res.status(401).json("invalid access token");
            const token = req.headers.authorization.split(' ')[1]; //get token
            console.log("token :",token);
            // console.log("env access token : ",process.env.ACCESS_TOKEN_SECRET);
            const decode = await Auth.verifyAccessToken(token);
            // console.log("decode : ",decode);


            if(decode === "jwt expired") {
                console.log("access token expired");
                
                return res.status(401).json("access token expired");
            }else if(!decode) return res.status(401).json("invalid access token");

            req.body.decode = decode;

            next();
        } catch (error) {
            console.log(error);

        }
    },
    checkAdmin: (req, res, next) => {
        return res.json("khong co quyen truy cap")
    }
};
  