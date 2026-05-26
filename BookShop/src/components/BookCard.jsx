import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Book from "./Book";

export default function BookCard({
  book,
  onClick,
}) {

  const look = book.bookLook;

  return (

    <div
      onClick={onClick}
      style={{
        width: 800,
        height: 900,
        cursor: "pointer",
        overflow: "hidden",
        display:"inline-block",
        verticalAlign: "top",
        position:"relative",
        
        padding: "0px",
        margin:"0px",
        boxSizing: "border-box",
        maxWidth: "90vw",
        maxHeight: "calc(100vh - 40px)",
      }}
    >

      <Canvas
        orthographic
        flat
        camera={{
          zoom:  100,
          position: [0, 0, 10],
        }}
      >

        <Book book={book} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />

      </Canvas>

    </div>

  );
}
