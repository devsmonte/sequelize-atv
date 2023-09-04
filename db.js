const Sequelize = require('sequelize');

//construtor da classe 
//nome - usuario - senha - options
const sequelize = new Sequelize('atv', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    host: 3306,
});


module.exports = sequelize;