import { useState } from "react";

import BookCard from "./components/BookCard";
import BookSpineRow from "./components/BookSpineRow";
import BookInfoPanel from "./components/BookInfoPanel";

import BooksService from "./services/BookService";

export default function App() {

  const books = BooksService.getBooks();

  const [selectedBook, setSelectedBook] = useState(null);

  function handleBookClick(book) {
    setSelectedBook(book);
  }

  function closeFocusedView() {
    setSelectedBook(null);
  }

  return (

    <div>

      {/* SHELF */}
      <div
        style={{
          margin: "30px",
          marginLeft: "60px",

          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",

          width: "80%",

          borderBottom: "solid #85420f 80px",
        }}
      >

        <BookSpineRow
          books={books}
          onBookClick={handleBookClick}
        />

      </div>


      {/* FOCUSED VIEW */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",

          position: "fixed",

          top: "50%",
          left: "50%",

          transform: "translate(-50%, -50%)",

          zIndex: 9999,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          gap: "40px",

          padding: "40px 20px",

          overflow: "auto",
          flexWrap: "wrap",
          boxSizing: "border-box",

          opacity: selectedBook ? 1 : 0,
          pointerEvents: selectedBook ? "all" : "none",

          transition: "opacity 0.35s ease",
        }}
      >

        {selectedBook && (
          <>

            <BookCard
              book={selectedBook}
              onClick={() => {
                console.log(selectedBook);
              }}
            />

            <BookInfoPanel
              book={selectedBook}
              onClose={closeFocusedView}
            />

          </>
        )}

      </div>

    </div>

  );

}