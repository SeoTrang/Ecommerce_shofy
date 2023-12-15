const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../user/user');

const Order = sequelize.define('orders',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    code:{
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_name:{
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    phone_number:{
        type: DataTypes.STRING,
        allowNull: false,
        maxLength:10
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    subtotal_price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    shiping:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_price:{
        type: DataTypes.INTEGER
    },
    state:{
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    note:{
        type: DataTypes.TEXT,
        allowNull: true
    }
})

Order.belongsTo(User,{
    foreignKey:'user_id',
})

User.hasMany(Order,{
    foreignKey:'user_id',
})

module.exports = Order;