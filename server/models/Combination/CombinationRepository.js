const Combination = require("./Combination");

const CombinationRepository = {
    create: async (data) => {
        try {
            await Combination.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await Combination.findAll();
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
}

module.exports = CombinationRepository;