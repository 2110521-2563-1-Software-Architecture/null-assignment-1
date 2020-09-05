import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from 'book';

@Injectable()
export class AppService {
  private readonly books: Book[] = [ 
    { id: 123, title: "A Tale of Two Cities", author: "Charles Dickens" },
];

  listBooks(): Book[] {
    return this.books;
  }

  insertBook(book: Book) {
    this.books.push(book);
  }

  deleteBook(id: Number) {
    for (let i=0; i<this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books.splice(i, 1);
        return null;
      }
    }
    throw "Not Found";
  }

  getBook(id: Number): Book {
    for (let i=0; i<this.books.length; i++) {
      if (this.books[i].id === id) {
        return this.books[i];
      }
    }
    throw "Not Found";
  }

}
