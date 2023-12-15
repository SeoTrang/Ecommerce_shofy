const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Variation = require('../Variation/Variation');
const Product = require('../product/product');

const Option = sequelize.define('options',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

Option.belongsTo(Product,{
    foreignKey:'product_id'
})

Product.hasMany(Option,{
    foreignKey:'product_id'
})



module.exports = Option;