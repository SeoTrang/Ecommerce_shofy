const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Category = require('../category/category');

const Attribute = sequelize.define('attributes', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    CategoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'categories',
            key:'id'
        }
    }
});

Attribute.belongsTo(Category, {
    foreignKey: 'CategoryId', // This specifies the foreign key column name
    
});

// SectionAttribute.hasMany(Attribute);
// Attribute.belongsTo(SectionAttribute);

// Attribute.belongsTo(SectionAttribute, {
//     foreignKey: 'SectionAttributeId', // This specifies the foreign key column name
    
// });

// sequelize.sync().then(() => {
//     console.log('attributes table created successfully!');
  
    
  
//   }).catch((error) => {
//     console.error('Unable to create table attributes : ', error);
//   });

module.exports = Attribute;