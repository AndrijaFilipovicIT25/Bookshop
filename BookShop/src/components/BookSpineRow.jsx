export default function BookSpineRow({
  books,
  onBookClick,
  hiddenBookKey,
  getBookKey,
}) {

  return (

    <div
      style={{
        display: "flex",
        alignItems: "flex-end",

        gap: "8px",

        width: "100%",
      }}
    >

      {books.map((book) => {

        const look = book.bookLook;
        const bookKey = getBookKey(book);
        const isHidden =
          hiddenBookKey === bookKey;

        const height =
          600 * look.height / 25;

        const width =
          height * look.depth;

        return (

          <img
            key={bookKey}

            src={look.spineTexture}

            alt={book.title}

            onClick={(event) => onBookClick(book, event)}

            style={{
              height: `${height}px`,
              width: `${width}px`,

              objectFit: "fill",

              

              

              userSelect: "none",

              display: "block",

              opacity: isHidden ? 0 : 1,
              pointerEvents: isHidden ? "none" : "auto",

              cursor: "pointer",


            }}


          />

        );

      })}

    </div>

  );

}
