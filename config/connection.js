const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize (

    // DB information

    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    
    // Server configuration object 
{
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize;