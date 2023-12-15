const VariationRepository = require("../models/Variation/VariationRepository");

const VariationService = {
    create: async (data) => {
        return await VariationRepository.create(data);
    },
    getByProduct: async (product_id) => {
        return await VariationRepository.getByProduct(product_id);
    }

}

module.exports = VariationService;