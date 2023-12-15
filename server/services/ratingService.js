const RatingRepository = require('../models/rating/ratingRepository');
const RatingService = {
    create: async (data) => {
        return await RatingRepository.create(data);
    }
}

module.exports = RatingService;