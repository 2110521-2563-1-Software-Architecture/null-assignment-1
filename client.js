const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const { LITTLE_ENDIAN } = require("bytebuffer");
const { list } = require("tar");

// const defn = protoLoader.loadSync(
//     "books.proto",
// );

const booksProto = grpc.load("books.proto"); // .<filename>
// const books = booksProto.books;

// console.log(books);

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
    console.log("Wrong command");
}