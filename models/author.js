const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Author = sequelize.define('author', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    // Other model options go here
    tableName:'authors',
    timestamps: false
  });

module.exports = Author;