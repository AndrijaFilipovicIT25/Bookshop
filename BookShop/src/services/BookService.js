import booksData from "../data/books.json";
import Book from "../models/Book";

class BooksService {
  static getBooks() {
    return booksData.map((bookData) =>
      Book.fromJSON(bookData)
    );
  }
}

export default BooksService;