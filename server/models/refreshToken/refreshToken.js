const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../user/user');

const RefreshToken = sequelize.define('refreshTokens',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    refreshToken:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

RefreshToken.belongsTo(User,{
    primaryKey: 'user_id'
})

User.hasMany(RefreshToken)

RefreshToken.hasOne(User)

// sequelize.sync().then(() => {
//     console.log('refreshTokens table created successfully!');
 
// }).catch((error) => {
//     console.error('Unable to create table refreshTokens : ', error);
// });

module.exports = RefreshToken;