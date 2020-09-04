const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const { NotImplemented } = require("http-errors");

// swagger docs stuff
const swaggerUI = require("swagger-ui-express");
const YAMLjs = require("yamljs");
const spec = YAMLjs.load("spec.yaml");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const books = [ 
    { id: 123, title: "A Tale of Two Cities", author: "Charles Dickens" },
];


// setup swagger
app.use("/docs", swaggerUI.serve, swaggerUI.setup(spec));


// APIs
app.get("/books/list", (req, res) => {
    res.send(books);
});

app.post("/books/insert", (req, res) => {
    const {id, title, author} = req.body;
    books.push({id: parseInt(id), title, author});
    res.send({})
});

app.get("/books/get", (req, res) => {
    const id = parseInt(req.query.id)
    for (let book of books) {
        if (book.id === id)
            return res.send(book);
    }
    res.status(404).send({
        message: "Not Found",
    });
});

app.delete("/books/delete", (req, res) => {
    const id = parseInt(req.query.id)
    for (let i=0; i<books.length; i++) {
        if (books[i].id === id) {
            books.splice(i, 1);
            return res.send({});
        }
    }
    res.status(404).send({
        message: "Not Found",
    });
});
app.get("/books/watch", (req, res) => res.status(NotImplemented).send({}));

app.listen(3000, () => console.log("server started at port 3000"));