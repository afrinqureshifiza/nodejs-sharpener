const Sequelize = require('sequelize')

const sequelize = new Sequelize('cricket','root', 'Afrin@786', {
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize