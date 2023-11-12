const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init ()