const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../user/user');


const Cart = sequelize.define('carts',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})

Cart.belongsTo(User,{
        primaryKey: 'UserId'
    }
)
User.hasOne(Cart)

// sequelize.sync().then(() => {
//     console.log('carts table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table carts : ', error);
// });

module.exports = Cart;
