const ListImgRepository = require('../models/listImg/listImgRepository')
const ListImgService = {
    create: async (data) => {
        return await ListImgRepository.create(data);
    },
    getOne:async (id) => {
        return await ListImgRepository.getOne(id);
    },

    getAll: async () => {
        return await ListImgRepository.getAll();
    },
    getByColor:async (ColorId) => {
        return await ListImgRepository.getByColor(ColorId);
    },
    update: async (id,data) => {
        return await ListImgRepository.update(id,data);
    },
    delete: async (id) => {
        return await ListImgRepository.delete(id);
    }
}

module.exports = ListImgService;