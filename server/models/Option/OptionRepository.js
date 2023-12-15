const OptionValue = require("../OptionValue/OptionValue");
const Option = require("./Option");

const OptionRepository = {
    create: async (data) => {
        try {
            await Option.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await Option.findAll();
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getByProuct: async (product_id) => {
        try {
            const result = await Option.findAll({
                where:{
                    product_id: product_id
                },
                include:[
                    {
                        model: OptionValue
                    }
                ]
            });
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = OptionRepository;