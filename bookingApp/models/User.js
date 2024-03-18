const Sequelize = require('sequelize')
const sequelize = require('../util/databse')

const User = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true 
    },

    name: Sequelize.STRING,

    email:{
        type:Sequelize.STRING,
        unique:true
    },

    phone:{
        type:Sequelize.INTEGER,
        unique:true
    } 

});

module.exports = User