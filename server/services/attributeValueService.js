const AttributeValueRepository = require("../models/attributeValue/attributeValueRepository");


const AttributeValueService = {
    create: async (data) => {
        return AttributeValueRepository.create(data);
    },
    getAll: async () => {
        return AttributeValueRepository.getAll();
    },
    GetByVariation: async (variation_id) => {
        return AttributeValueRepository.GetByVariation(variation_id);
    },
    getOne: async (id) => {
        return AttributeValueRepository.getOne(id);
    },
    update: async(id,data) => {
        return AttributeValueRepository.update(id,data);
    },
    delete: async (id) => {
        return AttributeValueRepository.delete(id);
    },

    getAllByCategory: async(categoryId)=>{
        return AttributeValueRepository.getByCategoryId(categoryId);
    }
}

module.exports = AttributeValueService;