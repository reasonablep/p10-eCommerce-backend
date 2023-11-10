const express = require('express');
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = new Sequelize( {

    username: 'ROOT',
    password: 'PASSWORD',
    database: 'mysql2',
    host: `localhost:${3001}`
})