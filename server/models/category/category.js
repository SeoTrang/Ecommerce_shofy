const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Category = sequelize.define('categories',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

// sequelize.sync().then(() => {
//     console.log('categories table created successfully!');

//   }).catch((error) => {
//     console.error('Unable to create table categories : ', error);
//   });


module.exports = Category;