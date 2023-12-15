const OptionRepository = require("../models/Option/OptionRepository");

const OptionService = {
    create: async (data) => {
        return await OptionRepository.create(data);
    },
    getAll : async () => {
        return await OptionRepository.getAll();
    },
    getByProuct: async(product_id) => {
        return await OptionRepository.getByProuct(product_id);
    }
}

module.exports = OptionService;