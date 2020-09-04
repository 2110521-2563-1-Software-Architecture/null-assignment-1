const request = require("superagent");
const { get } = require("superagent");

// TODO, don't change function signature !!
const listBooks = () => {
    request.get('http://localhost:3000/books/list')
    .then(res => {
        console.log(res.body);
    });
}
const insertBook = (id, title, author) => {
    request.post("http://localhost:3000/books/insert")
    .send({id, title, author})
    .then(res => {
        console.log(res.body);
    });
}
const getBook = (id) => {
    request.get("http://localhost:3000/books/get")
    .query("id="+String(id))
    .then(res => {
        console.log(res.body);
    })
    .catch(err => {
        console.log(err.message);
    });
}
const deleteBook = (id) => {
    request.delete("http://localhost:3000/books/delete")
    .query("id=" + String(id))
    .then(res => {
        console.log(res.body);
    })
    .catch(err => {
        console.log(err.message);
    });
}

// no need to implement watch for REST API

// const watchBooks = () => {
//     const call = client.watch({});
//     call.on('data', (book) => {
//         console.log("Recv book:", book);
//     });
// }

const [processName, scriptName, command, ...args] = process.argv;
if (command === "list") {
    listBooks();
}
else if (command === "insert") 
    insertBook(args[0], args[1], args[2]);
else if (command === "get")
    getBook(args[0]);
else if (command === "delete")
    deleteBook(args[0]);
else {
    console.log("Wrong command");
}
// else if (command === "watch")
    // watchBooks()