import book from "./Book"
export default function BookInfoPanel({
  book,
  onClose,
}) {

  return (

    <div
      style={{
        position: "relative",

        

       
        
        display:"inline-block",
        verticalAlign: "top",
        position:"relative",
        width: "560px",
        height: "900px",

        padding: "50px",

        boxSizing: "border-box",

        borderRadius: "28px",

        background: "rgba(255,255,255,0.08)",

        backdropFilter: "blur(14px)",

        border: "1px solid rgba(255,255,255,0.15)",

        boxShadow:
          "0 10px 40px rgba(0,0,0,0.35)",

        color: "white",

        fontFamily: "sans-serif",

        zIndex: 10,

        maxWidth: "90vw",
        maxHeight: "calc(100vh - 40px)",
        overflow: "auto",
        
        flexDirection: "column",
        justifyContent: "center",
      }}
    >

      <div
        style={{
          fontSize: "14px",

          letterSpacing: "4px",

          opacity: 0.7,

          marginBottom: "20px",
        }}
      >
        FEATURED BOOK
      </div>

      <h1
        style={{
          fontSize: "64px",

          lineHeight: 1,

          margin: 0,

          marginBottom: "24px",

          fontWeight: "700",
        }}
      >
        {book.title}
      </h1>

      <div
        style={{
          fontSize: "28px",

          opacity: 0.85,

          marginBottom: "40px",

          fontWeight: "500",
        }}
      >
        by {book.author}
      </div>

      <p
        style={{
          fontSize: "20px",

          lineHeight: 1.8,

          opacity: 0.9,

          marginBottom: "60px",
        }}
      >
        {book.description}
      </p>

      <div
        style={{
          display: "flex",

          gap: "18px",

          marginTop: "auto",
        }}
      >

        <button
          style={{
            padding: "18px 34px",

            border: "none",

            borderRadius: "16px",

            background: "white",

            color: "black",

            fontWeight: "bold",

            fontSize: "16px",

            cursor: "pointer",

            transition: "0.2s",
          }}
        >
          Read More
        </button>

        <button
          style={{
            padding: "18px 34px",

            borderRadius: "16px",

            border:
              "1px solid rgba(255,255,255,0.2)",

            background: "rgba(255,255,255,0.05)",

            color: "white",

            fontSize: "16px",

            cursor: "pointer",

            transition: "0.2s",
          }}
        >
          Add to Library
        </button>

<button
  onClick={onClose}
  style={{
    padding: "18px 34px",

    borderRadius: "16px",

    border:
      "1px solid rgba(255,255,255,0.2)",

    background: "rgba(255,255,255,0.05)",

    color: "white",

    fontSize: "16px",

    cursor: "pointer",

    transition: "0.2s",
  }}
>
  Close
</button>

      </div>

    </div>

  );

}