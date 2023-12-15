const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const User = require("../user/user");
const Product = require("../product/product");


const UserRating = sequelize.define('userratings',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    star:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comments:{
        type: DataTypes.TEXT,
        allowNull: true
    }
})

UserRating.belongsTo(Product,{
    foreignKey: 'product_id'
})

UserRating.belongsTo(User,{
    foreignKey: 'user_id'
})

UserRating.hasOne(Product,{
    foreignKey: 'product_id'
})

UserRating.hasOne(User,{
    foreignKey: 'user_id'
})

Product.hasMany(UserRating,{
    foreignKey: 'product_id'
})

User.hasOne(UserRating,{
    foreignKey: 'user_id'
})

module.exports = UserRating;