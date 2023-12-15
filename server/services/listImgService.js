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
    getByVariantion:async (variantion_id) => {
        return await ListImgRepository.getByVariantion(variantion_id);
    },
    update: async (id,data) => {
        return await ListImgRepository.update(id,data);
    },
    delete: async (id) => {
        return await ListImgRepository.delete(id);
    }
}

module.exports = ListImgService;