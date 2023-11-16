const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    categoryName: {
        type: DataTypes.STRING,
        allowNull: false 
    }

    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
