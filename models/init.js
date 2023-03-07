const sequelize = require('../database');

const Author = require('./author');
const Book = require('./book');

Author.hasMany(Book);
Book.belongsTo(Author);
Book.hasMany(Author);
Author.belongsTo(Book);



const init = async () => {
    // await sequelize.sync({alter: true});
    await Author.sync({alter: true});
    await Book.sync({alter: true});
}

module.exports = { init, Author, Book };