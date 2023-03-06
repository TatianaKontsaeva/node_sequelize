const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('library_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Author = sequelize.define('Author', {
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

// `sequelize.define` also returns the model
console.log(Author === sequelize.models.Author); // true

const Book = sequelize.define('books', {
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

; (async () => {
  try {
    await Author.sync({
      alter: true,
      force: false
    })
    await Book.sync({
      alter: true,
      force: false
  });

    // Create a new user
  const author_add = await Author.create({ 
  first_name: "Joe", 
  last_name: "Preston",
  birthday: '1995-04-20'});


console.log("author's auto-generated ID:", author_add.id); 

//select

     const author_list = await Author.findAll();
     console.log(author_list);

    const author_find = await Author.findOne({
      where: {
        first_name: "Ольга"

      }
    });
    console.log(author_find);


    const book_find = await Book.findByPk(5);
    console.log(book_find);

    //Редактирование элемента
    const elem_corr = await Book.findOne({
      where: {
          name: "Figures"
      }
  });
  elem_corr.name = "Figures and figures";
  elem_corr.save();
  console.log(elem_corr);

  
const author_delete = await Author.findByPk(2);
        author_delete.destroy();  //delete
        author_delete.save();

        console.log(author_delete);

  } catch (error) {
    console.error(error);
  }
}) ();




