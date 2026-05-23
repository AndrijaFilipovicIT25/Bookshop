import BookCard from "./components/BookCard";
import BookSpineRow from "./components/BookSpineRow";
import BooksService from "./services/BookService";
import BookInfoPanel from "./components/BookInfoPanel";
export default function App() {

  const books = BooksService.getBooks();

  const book = books[1];

  return (





    










    <div>
      <div
      style={{
        
        
        margin:"30px",
        marginLeft: "60px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        width:"80%",
        borderBottom:"solid #85420f 80px"
      }}
      >



     
<BookSpineRow books={books} />
 </div>
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position:"fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",

        padding: "40px 20px",
        visibility:"hidden",

        overflow: "auto",
        flexWrap: "wrap",
        boxSizing: "border-box",
      }}
    >

      <BookCard
        book={book}
        onClick={() => {
          console.log(book);
        }}
      />
      <BookInfoPanel book={book} />

    </div>
</div>
  );

}