const bcryptjs = require('bcryptjs');
const bcrypt = {
    hash:async(pass)=>{
        
        let salt = await bcryptjs.genSaltSync(10);
        let hash = await bcryptjs.hashSync(pass, salt);

        if(hash) return hash;
        return false;
    
    }
    ,

    compare:async(pass1,pass2)=>{
        let result = await bcryptjs.compareSync(pass1,pass2);
        if(result) return true;
        return false;
    }
}


module.exports = bcrypt;