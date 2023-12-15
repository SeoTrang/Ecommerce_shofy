const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../user/user');
const Variation = require('../Variation/Variation');

const Cart = sequelize.define('carts',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false

    }
})

Cart.belongsTo(Variation,{
    foreignKey: 'variation_id'
})

// Cart.hasOne(Variation,{
//     foreignKey: 'variation_id'
// })

// Variation.hasMany(Cart,{
//     foreignKey:'variation_id'
// })


Cart.belongsTo(User,{
    foreignKey: 'user_id'
})


User.hasMany(Cart,{
    foreignKey: 'user_id'
})


// sequelize.sync().then(() => {
//     console.log('Carts table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table Carts : ', error);
// });




module.exports = Cart;
