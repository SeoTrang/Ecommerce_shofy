const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Color = require('../color/color');
const Cart = require('../cart/cart');
const User = require('../user/user');

const CartItem = sequelize.define('cartItems',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false 

    }
})

CartItem.belongsTo(Color,{
    primaryKey: 'ColorId'
})

CartItem.belongsTo(Cart,{
    primaryKey: 'CartId'
})

Cart.hasMany(CartItem)

CartItem.belongsTo(User,{
    primaryKey: 'UserId'
})


// sequelize.sync().then(() => {
//     console.log('cartItems table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table cartItems : ', error);
// });




module.exports = CartItem;
