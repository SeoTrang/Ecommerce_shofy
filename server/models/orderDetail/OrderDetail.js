const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Order = require('../order/Order');

const OrderDetail = sequelize.define('orderdetails',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    avatar:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

OrderDetail.belongsTo(Order,{
    foreignKey:'order_id',
})

Order.hasMany(OrderDetail,{
    foreignKey: 'order_id',
})

module.exports = OrderDetail;