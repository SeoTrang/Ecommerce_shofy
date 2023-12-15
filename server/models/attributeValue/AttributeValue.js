const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Attribute = require('../attribute/attribute');
const Product = require('../product/product');
const Variation = require('../Variation/Variation');

const AttributeValue = sequelize.define('attributeValues', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    value:{
        type: DataTypes.STRING,
        allowNull: false
    },
});
AttributeValue.belongsTo(Variation,
    {
        foreignKey: 'variation_id'
    }
)

AttributeValue.belongsTo(Attribute,
    {
        foreignKey: 'attribute_id'
    }
)

Variation.hasMany(AttributeValue, {
    foreignKey: 'variation_id', // This specifies the foreign key column name
    
});
Attribute.hasMany(AttributeValue, {
    foreignKey: 'attribute_id', // This specifies the foreign key column name
    
});

// sequelize.sync().then(() => {
//     console.log('attributeValues table created successfully!');
  
    
  
//   }).catch((error) => {
//     console.error('Unable to create table attributeValues : ', error);
//   });

module.exports = AttributeValue;