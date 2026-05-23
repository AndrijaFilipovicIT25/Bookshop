import BookLook from "./BookLook";
export default class Book {

  // Fields
  title;
  author;
  description;
  bookLook;

  // Constructor
  constructor(
    title,
    author,
    description,
    bookLook
  ) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.bookLook = bookLook;
  }

    static fromJSON(data) {
    return new Book(
      data.title,
      data.author,
      data.description,
      BookLook.fromJSON(data.bookLook)
    );
  }
  
}