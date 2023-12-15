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
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    img_preview:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0 
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    
    
})

Category.hasMany(Product,{
    foreignKey: 'category_id',
})
Brand.hasMany(Product,{
    foreignKey: 'brand_id',
})

Product.belongsTo(Brand, {
    foreignKey: 'brand_id', // This specifies the foreign key column name
    
});
Product.belongsTo(Category, {
    foreignKey: 'category_id', // This specifies the foreign key column name
    
});



// sequelize.sync().then(() => {
//     console.log('products table created successfully!');
  
    
//   }).catch((error) => {
//     console.error('Unable to create table products : ', error);
//   });

module.exports = Product;