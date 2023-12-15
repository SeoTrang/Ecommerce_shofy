const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Variation = require('../Variation/Variation');
// const Color = require('../color/color');

const ListImg = sequelize.define('listImgs', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

Variation.hasMany(ListImg, {
    foreignKey: 'variation_id', // This specifies the foreign key column name
    
});

// sequelize.sync().then(() => {
//     console.log('ListImg table created successfully!');
  
    
  
//   }).catch((error) => {
//     console.error('Unable to create table ListImg : ', error);
//   });

module.exports = ListImg;