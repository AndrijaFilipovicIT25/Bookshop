import { useEffect, useMemo, useRef, useState } from "react";

import BookCard from "./components/BookCard";
import BookSpineRow from "./components/BookSpineRow";
import BookInfoPanel from "./components/BookInfoPanel";

import BooksService from "./services/BookService";
import BookTransitionService from "./services/BookTransitionService";

const getBookKey = (book) => book.title;
const BOOK_SCENE_ZOOM = 100;
const BOOK_WORLD_HEIGHT = 8;
const BOOK_SCENE_HEIGHT =
  BOOK_WORLD_HEIGHT * BOOK_SCENE_ZOOM;

const bookViewerFrameStyle = {
  width: 800,
  height: 900,
  maxWidth: "90vw",
  maxHeight: "calc(100vh - 40px)",
  position: "relative",
};

function getUnhoveredRect(element) {
  const previousTransform = element.style.transform;

  element.style.transform = "translateY(0px)";

  const rect =
    element.getBoundingClientRect();

  element.style.transform = previousTransform;

  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  };
}

export default function App() {

  const books = useMemo(() => BooksService.getBooks(), []);

  const [selectedBook, setSelectedBook] = useState(null);
  const [transitionBook, setTransitionBook] = useState(null);
  const [transitionPhase, setTransitionPhase] = useState("idle");
  const [fromRect, setFromRect] = useState(null);
  const [closeStartRect, setCloseStartRect] = useState(null);

  const floatingBookRef = useRef(null);
  const targetSpineRef = useRef(null);
  const transitionStartedRef = useRef(false);

  const hiddenBook =
    selectedBook ?? transitionBook;
  const hiddenBookKey =
    hiddenBook ? getBookKey(hiddenBook) : null;
  const targetSpineSize = selectedBook
    ? {
        width:
          BOOK_SCENE_HEIGHT * selectedBook.bookLook.depth,
        height: BOOK_SCENE_HEIGHT,
      }
    : null;

  function handleBookClick(book, event) {
    if (transitionPhase !== "idle") {
      return;
    }

    const rect =
      getUnhoveredRect(event.currentTarget);

    event.currentTarget.style.transform =
      "translateY(0px)";

    setFromRect(rect);

    setSelectedBook(book);
    setTransitionBook(book);
    setTransitionPhase("opening");
    transitionStartedRef.current = false;
    setCloseStartRect(null);
  }

  function closeFocusedView() {
    if (!selectedBook || transitionPhase !== "open") {
      return;
    }

    const targetElement = targetSpineRef.current;

    if (!targetElement) {
      return;
    }

    const rect =
      targetElement.getBoundingClientRect();

    setCloseStartRect({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });

    setTransitionBook(selectedBook);
    setTransitionPhase("closing");
    transitionStartedRef.current = false;
  }

  useEffect(() => {
    if (
      transitionPhase !== "opening" ||
      transitionStartedRef.current
    ) {
      return;
    }

    const floatingElement = floatingBookRef.current;
    const targetElement = targetSpineRef.current;

    if (!floatingElement || !targetElement || !fromRect) {
      return;
    }

    const toRect =
      targetElement.getBoundingClientRect();

    transitionStartedRef.current = true;

    BookTransitionService.animateOpen({
      floatingElement,
      fromRect,
      toRect,
      onComplete: () => {
  setTransitionPhase("open");
  transitionStartedRef.current = false;

  // Fade out the floating img before removing it
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      
      setTimeout(() => {
        setTransitionBook(null);
      }, 150);
    });
  });
},
    });
  }, [fromRect, transitionPhase]);

  useEffect(() => {
    if (
      transitionPhase !== "closing" ||
      transitionStartedRef.current
    ) {
      return;
    }

    const floatingElement = floatingBookRef.current;

    if (
      !floatingElement ||
      !fromRect ||
      !closeStartRect
    ) {
      return;
    }

    transitionStartedRef.current = true;

    BookTransitionService.animateClose({
      floatingElement,
      fromRect: closeStartRect,
      toRect: {
        ...fromRect,
        top: fromRect.top,
      },
      onBeforeReturn: () => {
        setSelectedBook(null);
      },
onComplete: () => {
  setTransitionPhase("idle");
  setFromRect(null);
  setCloseStartRect(null);
  transitionStartedRef.current = false;
  setTransitionBook(null);

},
    });
  }, [closeStartRect, fromRect, transitionPhase]);

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
          hiddenBookKey={hiddenBookKey}
          getBookKey={getBookKey}
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
          pointerEvents:
            selectedBook && transitionPhase !== "opening"
              ? "all"
              : "none",

          transition: "opacity 0.35s ease",
        }}
      >

        {selectedBook && (
          <>

            <div style={bookViewerFrameStyle}>
              {transitionPhase !== "opening" &&
                transitionPhase !== "closing" && (
                <BookCard
                  book={selectedBook}
                  onClick={() => {
                    console.log(selectedBook);
                  }}
                />
              )}

              <div
                ref={targetSpineRef}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: targetSpineSize
                    ? `${targetSpineSize.width}px`
                    : "80px",
                  height: targetSpineSize
                    ? `${targetSpineSize.height}px`
                    : "800px",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  opacity: 0,
                }}
              />
            </div>

            <div
              style={{
                visibility:
                  transitionPhase === "opening"
                    || transitionPhase === "closing"
                    ? "hidden"
                    : "visible",
              }}
            >
              <BookInfoPanel
                book={selectedBook}
                onClose={closeFocusedView}
              />
            </div>

          </>
        )}

      </div>

      {transitionBook && fromRect && (
        <img
          ref={floatingBookRef}
          src={transitionBook.bookLook.spineTexture}
          alt=""
          aria-hidden="true"
          style={{
            position: "fixed",
            left:
              transitionPhase === "closing" && closeStartRect
                ? closeStartRect.left
                : fromRect.left,
            top:
              transitionPhase === "closing" && closeStartRect
                ? closeStartRect.top
                : fromRect.top,
            width:
              transitionPhase === "closing" && closeStartRect
                ? closeStartRect.width
                : fromRect.width,
            height:
              transitionPhase === "closing" && closeStartRect
                ? closeStartRect.height
                : fromRect.height,
            objectFit: "fill",
            
            pointerEvents: "none",
            zIndex: 100000,
          }}
        />
      )}

    </div>

  );

}
