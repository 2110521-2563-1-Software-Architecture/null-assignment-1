import { Controller, Get, Post, Body, Query, NotFoundException, ParseIntPipe, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from 'book';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBody, ApiQuery, ApiNoContentResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags("books")
@Controller("/books")
@UsePipes(new ValidationPipe())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/list")
  @ApiOkResponse({
    description: "OK",
    type: [Book]
  })
  listBooks(): Book[] {
    return this.appService.listBooks();
  }

  @Post("/insert")
  @ApiCreatedResponse({
    description: "OK"
  })
  @ApiBody({
    description: "Book to insert",
    type: Book,
  })
  insertBook(@Body() book: Book) {
    return this.appService.insertBook(book);
  }

  @Get("/get") 
  @ApiQuery({
    name: "id",
    type: Number,
  })
  @ApiOkResponse({
    description: "Book with specified ID",
    type: Book,
  })
  @ApiNotFoundResponse({
    description: "Book with specified ID not found",
  })
  getBook(@Query("id", ParseIntPipe) id) { // use ParseIntPipe to transform
    try {
      const book = this.appService.getBook(id);
      return book;
    } catch { 
      throw new NotFoundException("Not Found"); 
    }
  }

  @Delete("/delete")
  @ApiQuery({
    name: "id",
    type: Number,
  })
  @ApiOkResponse({
    description: "Book with specified ID was deleted",
  })
  @ApiNotFoundResponse({
    description: "Book with specified ID not found",
  })
  deleteBook(@Query("id", ParseIntPipe) id) {
    try {
      this.appService.deleteBook(id);
      return;
    } catch { 
      throw new NotFoundException("Not Found"); 
    }
    
  }

  
}
