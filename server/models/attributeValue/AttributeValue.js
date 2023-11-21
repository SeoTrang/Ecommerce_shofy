const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Attribute = require('../attribute/attribute');
const Product = require('../product/product');

const AttributeValue = sequelize.define('attributeValues', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    Value:{
        type: DataTypes.STRING,
        allowNull: false
    },
});
AttributeValue.belongsTo(Product,
    {
        foreignKey: 'ProductId'
    }
)

AttributeValue.belongsTo(Attribute,
    {
        foreignKey: 'AttributeId'
    }
)

Product.hasMany(AttributeValue, {
    foreignKey: 'ProductId', // This specifies the foreign key column name
    
});
Attribute.hasMany(AttributeValue, {
    foreignKey: 'AttributeId', // This specifies the foreign key column name
    
});

// sequelize.sync().then(() => {
//     console.log('attributeValues table created successfully!');
  
    
  
//   }).catch((error) => {
//     console.error('Unable to create table attributeValues : ', error);
//   });

module.exports = AttributeValue;