import book from "./Book"
export default function BookSpineRow({ books }) {

  return (

    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        marigin:"50px",
        gap: "8px",

        width: "100%",
      }}
    >

      {books.map((book, index) => {

        const look = book.bookLook;

        const height = 600 * look.height/25;

        const width =
          height * look.depth;

        return (

          <img
            key={index}

            src={look.spineTexture}

            alt={book.title}

            style={{
              height: `${height}px`,
              width: `${width}px`,
              
              objectFit: "cover",

              borderRadius: "4px",

              boxShadow:
                "0 4px 12px rgba(0,0,0,0.25)",

              userSelect: "none",

              display: "block",
            }}
          />

        );

      })}

    </div>

  );

}