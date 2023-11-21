const ColorRepository = require('../models/color/colorRepository')
const colorService = {
    create: async (data) => {
        return await ColorRepository.create(data);
    },
    getOne:async (id) => {
        return await ColorRepository.getOne(id);
    },

    getAll: async () => {
        return await ColorRepository.getAll();
    },
    update: async (id,data) => {
        return await ColorRepository.update(id,data);
    },
    delete: async (id) => {
        return await ColorRepository.delete(id);
    }
}

module.exports = colorService;