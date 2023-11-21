const UserService = require("../services/userService");

const userController = {
    getOne: async (req,res) => {
        try {
            let id = req.body.decode.id;
            // console.log(req.body);
            // res.json('ok')
            if(!id) return res.status(400).json('missing data');
            const user = await UserService.getOne(id);
            if(user) return res.status(200).json(user);
            return res.status(404).json('not found');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    }
}

module.exports = userController;