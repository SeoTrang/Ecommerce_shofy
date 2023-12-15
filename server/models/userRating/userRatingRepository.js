const UserRating = require("./userRating");

const UserRatingRepository = {
    create: async (data) => {
        try {
            await UserRating.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    // getByProduct: async (product_id) => {
    //     try {
    //         let result = await UserRating.findAll({
    //             where:{
    //                 product_id: product_id
    //             }
    //         })

    //         if(result) return result;
    //         return false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }
}

module.exports = UserRatingRepository;