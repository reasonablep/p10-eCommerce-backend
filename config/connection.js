require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL 
? new Sequelize (process.env.JAWSDB_URL) :

new Sequelize(

    // DB information

    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    
    // Server configuration object 
{
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        decimaNumbers: true,
    },
});

module.exports = sequelize;