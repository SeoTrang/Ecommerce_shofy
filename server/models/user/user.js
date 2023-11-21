const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UserName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Pass:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Avatar:{
        type: DataTypes.STRING,
        allowNull: true
    },
    Role:{
        type: DataTypes.INTEGER, //0 is client and 1 is admin
        allowNull: false,
        defaultValue: 0
    }
})


// sequelize.sync().then(() => {
//     console.log('users table created successfully!');
 
// }).catch((error) => {
//     console.error('Unable to create table users : ', error);
// });

module.exports = User;