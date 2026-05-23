export default function FocusedBookImage({
  book,
}) {

  return (

    <div
      style={{

        width:
          `${book.bookLook.width * 120}px`,

        height:
          `${book.bookLook.height * 120}px`,

        overflow: "hidden",

        borderRadius: "12px",
      }}
    >

      <img
        src={book.bookLook.frontTexture}

        alt={book.title}

        style={{
          width: "100%",
          height: "100%",

          objectFit: "contain",

          display: "block",
        }}
      />

    </div>

  );
}