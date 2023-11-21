const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Color = require('../color/color');

const ListImg = sequelize.define('listImgs', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    Url:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

Color.hasMany(ListImg, {
    foreignKey: 'ColorId', // This specifies the foreign key column name
    
});

// sequelize.sync().then(() => {
//     console.log('ListImg table created successfully!');
  
    
  
//   }).catch((error) => {
//     console.error('Unable to create table ListImg : ', error);
//   });

module.exports = ListImg;