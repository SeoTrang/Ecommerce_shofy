const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Category = require('../category/category');
const Brand =  require('../brand/Brand')

const Product = sequelize.define('products',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    Version: {
        type: DataTypes.STRING,
        allowNull:false
    },
    NumberOfRate:{
        type: DataTypes.INTEGER,
        allowNull:true,
        defaultValue:0
    },
    AverageRate:{
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0
    },
    Article: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    // BrandId: {
    //     type: DataTypes.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'brands',
    //         key:'id'
    //     }
    // },
    // CategoryId: {
    //     type: DataTypes.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'categories',
    //         key:'id'
    //     }
    // }
    
})

Category.hasMany(Product,{
    foreignKey: 'CategoryId',
})
Brand.hasMany(Product,{
    foreignKey: 'BrandId',
})

Product.belongsTo(Brand, {
    foreignKey: 'BrandId', // This specifies the foreign key column name
    
});
Product.belongsTo(Category, {
    foreignKey: 'CategoryId', // This specifies the foreign key column name
    
});



// sequelize.sync().then(() => {
//     console.log('products table created successfully!');
  
    
//   }).catch((error) => {
//     console.error('Unable to create table products : ', error);
//   });

module.exports = Product;