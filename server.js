const express = require("express");
const bookCollection = express();
bookCollection.use(express.static("./public"));
bookCollection.use(express.json()); // * TO GET THE JSON DATA FROM USER
bookCollection.use(express.urlencoded()); // * TO GET THE web FORM DATA FROM USER

//* HOME PAGE ROUTES
bookCollection.get("/", (req, res) => {
  //* INITIAL BOOKS
  res.status(200);
  console.log("Home Page");
});

//* GET BOOKS ROUTE
bookCollection.get("/books", (req, res) => {
  res.json({});
});

//* INSERT BOOK ROUTE
bookCollection.post("/books", (req, res) => {
  const { title, author, publishedDate } = req.body;
  //* BUILD NEW ID
  const id = Math.floor(Math.random() * 999999999 + new Date().getTime());

  newBook = {
    id: id,
    title: title,
    author: author,
    publishedDate: publishedDate,
  };

  //* SUCCCESS MESSAGE
  res.status(201).send(`${title} has been inserted successfully`);
});

//* DELETE A BOOK ROUTE

bookCollection.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: "The Book has been successfully Deleted !" });
});

bookCollection.listen(8000);
