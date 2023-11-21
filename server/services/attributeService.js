const AttributeRepository = require("../models/attribute/attributeRepository");


const AttributeService = {
    create: async (data) => {
        return AttributeRepository.create(data);
    },
    getAll: async () => {
        return AttributeRepository.getAll();
    },
    getOne: async (id) => {
        return AttributeRepository.getOne(id);
    },
    update: async(id,data) => {
        return AttributeRepository.update(id,data);
    },
    delete: async (id) => {
        return AttributeRepository.delete(id);
    },

    getAllByCategory: async(categoryId)=>{
        return AttributeRepository.getByCategoryId(categoryId);
    }
}

module.exports = AttributeService;