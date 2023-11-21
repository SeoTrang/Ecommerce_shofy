const BrandRepository = require('../models/brand/brandRepository')

const BrandService = {
    create: async (data) => {
        return BrandRepository.create(data);
    },
    getAll: async () => {
        return BrandRepository.getAll();
    },
    getOne: async (id) => {
        return BrandRepository.getOne(id);
    },
    update: async(id,data) => {
        return BrandRepository.update(id,data);
    },
    delete: async (id) => {
        return BrandRepository.delete(id);
    },

    getAllByCategory: async(categoryId)=>{
        return BrandRepository.getByCategoryId(categoryId);
    }
}

module.exports = BrandService;