const UserRepository = require("../models/user/userRepository");

const UserService = {
    register: async (data)=>{
        return await UserRepository.register(data);
    },
    findByEmail: async (Email)=>{
        return await UserRepository.findUserByEmail(Email);
    },
    getOne: async (id)=>{
        return await UserRepository.getOne(id);
    }
}

module.exports = UserService;