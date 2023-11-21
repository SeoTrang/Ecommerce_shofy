const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Product = require('../product/product');

const Color = sequelize.define('colors',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    Color:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    ImportPrice:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    Price:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    DiscountPrice:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    Avatar:{
        type: DataTypes.STRING,
        allowNull:false
    },
    
    Sold:{
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0
    },
})

Product.hasMany(Color,{
    foreignKey: 'ProductId', // This specifies the foreign key column name
});

Color.belongsTo(Product,{
    foreignKey: 'ProductId', 
})

// sequelize
//   .sync()
//   .then(() => {
//     console.log("colors table created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create table colors : ", error);
//   });

module.exports = Color;