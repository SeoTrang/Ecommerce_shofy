const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Option = require('../Option/Option');

const OptionValue = sequelize.define('OptionValues',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    value:{
        type: DataTypes.STRING,
        allowNull: false
    },
    color_code:{
        type: DataTypes.STRING,
        allowNull: true
    }
})

OptionValue.belongsTo(Option,{
    foreignKey: 'option_id'
})

Option.hasMany(OptionValue,{
    foreignKey: 'option_id'
})

module.exports = OptionValue;