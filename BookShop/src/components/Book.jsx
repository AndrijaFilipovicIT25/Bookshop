import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export default function Book({ book }) {

  const look = book.bookLook;

  const [
    frontTexture,
    spineTexture,
    backTexture,
  ] = useTexture([
    look.frontTexture,
    look.spineTexture,
    look.backTexture,
  ]);

  frontTexture.colorSpace = THREE.SRGBColorSpace;
  spineTexture.colorSpace = THREE.SRGBColorSpace;
  backTexture.colorSpace = THREE.SRGBColorSpace;

  const materials = [

    // right
    new THREE.MeshStandardMaterial({
      color: look.sideColor,
    }),

    // left (spine)
    new THREE.MeshBasicMaterial({
      map: spineTexture,
    }),

    // top
    new THREE.MeshStandardMaterial({
      color: look.sideColor,
    }),

    // bottom
    new THREE.MeshStandardMaterial({
      color: look.sideColor,
    }),

    // front
    new THREE.MeshBasicMaterial({
      map: frontTexture,
    }),

    // back
    new THREE.MeshBasicMaterial({
      map: backTexture,
    }),
  ];

  return (
    <mesh
      rotation={[0, 1.57, 0]}
      material={materials}
    >
      <boxGeometry
args={[
  8*look.width,
  8,
  8*look.depth,
]}
      />
    </mesh>
  );
}