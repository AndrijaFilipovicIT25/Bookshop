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
        border:"solid black 2px",
        background: "rgba(255, 255, 255, 0.2)",
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

        <ambientLight intensity={0.6} />

  <directionalLight
    position={[5, 5, 5]}
    intensity={2}
  />

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