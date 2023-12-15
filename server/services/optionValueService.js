const OptionValueRepository = require("../models/OptionValue/OptionValueRepository");

const OptionValueService = {
    create: async (data)=> {
        return await OptionValueRepository.create(data);
    },
    getAll: async () => {
        return await OptionValueRepository.getAll();
    },
    getByOption: async (option_id) => {
        return OptionValueRepository.getByOption(option_id);
    }
}

module.exports = OptionValueService;