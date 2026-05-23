import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Book from "./Book";

export default function FocusedBookCard({
  book,
}) {

  const look = book.bookLook;

  return (

    <div
      style={{
        width:
          `${look.width * 120}px`,

        height:
          `${look.height * 120}px`,

        overflow: "visible",
      }}
    >

      <Canvas
        orthographic
        flat

        camera={{
          zoom: 210,
          position: [0, 0, 5],
        }}
      >

        <ambientLight intensity={2} />

        <Book book={book} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />

      </Canvas>

    </div>

  );
}