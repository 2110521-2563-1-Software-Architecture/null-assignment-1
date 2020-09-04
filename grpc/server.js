const grpc = require("grpc");
const event = require("events");

const bookStream = new event.EventEmitter();

const booksProto = grpc.load("books.proto");

const server = new grpc.Server();

// in-memory book array as database
const books = [ 
    { id: 123, title: "A Tale of Two Cities", author: "Charles Dickens" },
];

server.addService(booksProto.books.BookService.service, {
    list: (call, callback) => { // call = request message 
        callback(null, books); // error is null
    },
    insert: ({request}, callback) => {
        const book = request;
        
        books.push(book);
        bookStream.emit("new_book", book);

        callback(null, {});
    },
    get: ({request}, callback) => {
        const id = parseInt(request.id);
        for (let book of books)
            if (book.id === id) 
                return callback(null, book);
        callback({
            code: grpc.status.NOT_FOUND,
            details: "Not found"
        });
    },
    delete: ({request}, callback) => {
        for (let i=0; i<books.length; i++)
            if (books[i].id == request.id) {
                books.splice(i, 1);
                return callback(null, {});
            } 
        callback({
            code: grpc.status.NOT_FOUND,
            details: "Not found"
        });
    },
    watch: (stream) => {
        bookStream.on("new_book", (book) => {
            stream.write(book);
        });
    }
})

server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
console.log("server started at http://0.0.0.0:50051");
server.start();