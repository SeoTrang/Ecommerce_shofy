const ProductRepository = require('../models/product/productRepository')
const productService = {
    create: async (data) => {
        return await ProductRepository.create(data);
    },
    getOne:async (id) => {
        return await ProductRepository.getOne(id);
    },
    getByName:async (Name) => {
        return await ProductRepository.getByName(Name);
    },

    getAll: async () => {
        return await ProductRepository.getAll();
    },
    update: async (id,data) => {
        return await ProductRepository.update(id,data);
    },
    delete: async (id) => {
        return await ProductRepository.delete(id);
    },
    getDetail: async (id, condition) => {
        return await ProductRepository.getDetailProduct(id,condition);
    }
}

module.exports = productService;