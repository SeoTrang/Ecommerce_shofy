const Rating = require("./rating");

const RatingRepository = {
    create: async (data) => {
        try {
            await Rating.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getByProduct: async (product_id) => {
        try {
            let result = await Rating.findAll({
                where:{
                    product_id: product_id
                }
            })

            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

module.exports = RatingRepository;