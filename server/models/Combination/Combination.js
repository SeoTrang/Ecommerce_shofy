const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Option_value = require("../OptionValue/OptionValue");
const Variation = require("../Variation/Variation");


const Combination = sequelize.define('combinations',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }

})

Combination.belongsTo(Option_value,{
    foreignKey: 'option_value_id'
})

Option_value.hasMany(Combination,{
    foreignKey:'option_value_id'
})

Combination.belongsTo(Variation,{
    foreignKey: 'variation_id'
})

Variation.hasMany(Combination,{
    foreignKey: 'variation_id'
})

module.exports = Combination;