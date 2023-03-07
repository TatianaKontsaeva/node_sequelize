const express = require("express");
const { init, Author, Book } = require("./models/init");

const app = express();

app.get("/", async (req, res) => {
  const items = await Author.findAll({
    include: Book,
  });
  return res.json(items);
});

app.get("/books/:id", async (req, res) => {
  const items = await Book.findAll({
    where: {
      id: req.params.id,
    },
    include: Author,
  });
  return res.json(items);
});

app.listen(3000, async () => {
  await init();
});
