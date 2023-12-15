const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Category = require('../category/category');

const Brand = sequelize.define('brands',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    avatar:{
        type:DataTypes.STRING,
        allowNull:true
    }
    
})

Brand.belongsTo(Category, {
    foreignKey: 'category_id', // This specifies the foreign key column name
    
});

Category.hasMany(Brand, {
    foreignKey: 'category_id', // This specifies the foreign key column name
    
})
// Define the foreign key relationship in the Task model


// sequelize.sync().then(() => {
//     console.log('brands table created successfully!');
  
    
  
//   }).catch((error) => {
//     console.error('Unable to create table brands : ', error);
//   });


module.exports = Brand;