const grpc = require("grpc");

const booksProto = grpc.load("books.proto"); // .<filename>

const client = new booksProto.books.BookService('127.0.0.1:50051',
    grpc.credentials.createInsecure());

const printResponse = (err, books) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Response:", books);
    }
};

const listBooks = () => client.list({}, printResponse);
const insertBook = (id, title, author) => {
    const book = {id: parseInt(id), title, author};
    client.insert(book, printResponse);
}
const getBook = (id) => {
    const bookIdRequest = {id: parseInt(id)};
    client.get(bookIdRequest, printResponse);
}
const deleteBook = (id) => {
    const bookIdRequest = {id: parseInt(id)};
    client.delete(bookIdRequest, printResponse);
}
const watchBooks = () => {
    const call = client.watch({});
    call.on('data', (book) => {
        console.log("Recv book:", book);
    });
}

const [processName, scriptName, command, ...args] = process.argv;
if (command === "list")
    listBooks();
else if (command === "insert") 
    insertBook(args[0], args[1], args[2]);
else if (command === "get")
    getBook(args[0]);
else if (command === "delete")
    deleteBook(args[0]);
else if (command === "watch")
    watchBooks()
else {
    console.log(`Usage:
node client.js list                            List all books
node client.js insert <id> <title> <author>    Insert a book
node client.js get <id>                        Get a book by its ID
node client.js delete <id>                     Delete a book by its ID
node client.js watch                           Watch for inserted books`);
}