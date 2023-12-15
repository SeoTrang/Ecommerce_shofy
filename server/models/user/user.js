const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    pass:{
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar:{
        type: DataTypes.STRING,
        allowNull: true
    },
    role:{
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