const OptionValue = require("./OptionValue");


const OptionValueRepository = {
    create: async (data) => {
        try {
            await OptionValue.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await OptionValue.findAll();
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getByOption: async (option_id) => {
        try {
            const result = await OptionValue.findAll({
                where:{
                    option_id: option_id
                }
            });
            if(result) return result;
            return false;
        } catch (error) {
            console.log(err);
            return error;
        }
    }
}

module.exports = OptionValueRepository;