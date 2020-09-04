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
    
}
const getBook = (id) => {
    
}
const deleteBook = (id) => {

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