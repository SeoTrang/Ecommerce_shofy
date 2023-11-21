const RefreshTokenRepository = require("../models/refreshToken/refreshToken.repository")

const RefreshTokenService = {
    create: async (data) => {
        return await RefreshTokenRepository.create(data);
    },
    delete: async (refreshToken) => {
        return await RefreshTokenRepository.delete(refreshToken);
    }
}

module.exports = RefreshTokenService;