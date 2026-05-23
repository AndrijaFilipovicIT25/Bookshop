export default function BookSpineRow({
  books,
  onBookClick,
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

      {books.map((book, index) => {

        const look = book.bookLook;

        const height =
          600 * look.height / 25;

        const width =
          height * look.depth;

        return (

          <img
            key={index}

            src={look.spineTexture}

            alt={book.title}

            onClick={() => onBookClick(book)}

            style={{
              height: `${height}px`,
              width: `${width}px`,

              objectFit: "cover",

              borderRadius: "4px",

              boxShadow:
                "0 4px 12px rgba(0,0,0,0.25)",

              userSelect: "none",

              display: "block",

              cursor: "pointer",

              transition:
                "transform 0.2s ease",
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";
            }}
          />

        );

      })}

    </div>

  );

}