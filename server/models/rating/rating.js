const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Product = require("../product/product");

const Rating = sequelize.define('ratings',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    num_rating:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    average_rate:{
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
})

Rating.belongsTo(Product,{
    foreignKey:"product_id"
})

Rating.hasOne(Product,{
    foreignKey:"product_id"
})

Product.hasMany(Rating,{
    foreignKey:"product_id"
})

module.exports = Rating;