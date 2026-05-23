export default function BookThumbnailCard({
  book,
  onClick,
  hidden = false,
}) {

  return (

    <div
      onClick={onClick}

      style={{

       width: `${book.bookLook.width * 120}px`,
        height: `${book.bookLook.height * 120}px`,

        opacity: hidden ? 0 : 1,

        transition:
          "opacity 0s linear 0.08s",

        cursor: "pointer",

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