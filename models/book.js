const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Book = sequelize.define('Book', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    published: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    // Other model options go here
    tableName: 'books',
    timestamps: false
  });
  
  module.exports = Book;