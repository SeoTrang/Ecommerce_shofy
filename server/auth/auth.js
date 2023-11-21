const jwt = require('jsonwebtoken');


const Auth = {
    generateAccesstoken:async(user)=>{
        try {
            return jwt.sign(
                {id:user.id,admin:user.role}, 
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:60*30});
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    generateRefreshtoken:async(user)=>{
        try {
            return jwt.sign(
                {id:user.id,admin:user.Role},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:60*60});
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },

    refreshtoken_create_new_accesstoken:async(refreshToken)=>{
        // Verify the refresh token
        try {
            const decoded = await Auth.verifyRefreshToken(refreshToken);
  
            if(decoded === "jwt expired") return decoded;
            // Generate a new access token using the decoded user information from the refresh token
            let user = {
              id:decoded.id,
              role:decoded.Role
            }
            const accessToken = Auth.generateAccesstoken(user);
            // Return the new access token
            return accessToken;
          } catch (err) {
            // Handle the error, such as by returning an error response or redirecting to a login page
            console.error(err);
            return null;
          }
    },

    verifyAccessToken:async(token)=>{
        try {
            console.log("acess token : ",token);
            console.log("env access token : ",process.env.ACCESS_TOKEN_SECRET);
  
              // Verify the token using the secret key
              const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
              return decoded; // Return the decoded token data
          } catch (err) {
              console.error(err);
              if(err.message === "jwt expired") return err.message;
              return null; // Return null if token is not valid or has expired
          }
    },

    verifyRefreshToken:async(token)=>{
        try {
            // Verify the token using the secret key
            const decoded = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
            return decoded; // Return the decoded token data
        } catch (err) {
            console.error(err);
            if(err.message === "jwt expired") return err.message;
            return null; // Return null if token is not valid or has expired
        }
    }
}

module.exports = Auth;
