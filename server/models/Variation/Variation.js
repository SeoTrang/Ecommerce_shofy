const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Product = require('../product/product');

const Variation = sequelize.define('variations',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    SKU:{
        type: DataTypes.STRING,
        allowNull: false
    },
    qty_in_stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    import_price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.STRING,
        allowNull: false
    },
    sale_price:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

})


Variation.belongsTo(Product,{
    foreignKey: "product_id"
})

Product.hasMany(Variation,{
    foreignKey: "product_id"
})


module.exports =  Variation;

