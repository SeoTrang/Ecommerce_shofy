const UserRatingRepository = require('../models/userRating/userRatingRepository');
const UserRatingSerive = {
    create: async (data) => {
        return await UserRatingRepository.create(data);
    }
}

module.exports = UserRatingSerive;