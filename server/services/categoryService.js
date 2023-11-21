const CategoryRepository = require('../models/category/categoryRepository');

const categoryService = {
    create: async (data) => {
        return await CategoryRepository.create(data);
    },
    getOne:async (id) => {
        return await CategoryRepository.getOne(id);
    },

    getAll: async () => {
        return await CategoryRepository.getAll();
    },
    update: async (id,data) => {
        return await CategoryRepository.update(id,data);
    },
    delete: async (id) => {
        return await CategoryRepository.delete(id);
    }
}

module.exports = categoryService;