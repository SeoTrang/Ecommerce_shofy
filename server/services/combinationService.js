const CombinationRepository = require("../models/Combination/CombinationRepository");

const CombinationService = {
    create: async (data) => {
        return await CombinationRepository.create(data);
    },
    getAll: async () => {
        return await CombinationRepository.getAll();
    }
}

module.exports = CombinationService;