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

  const sideMaterial =
    new THREE.MeshBasicMaterial({
      color: look.sideColor,
      toneMapped: false,
    });

  const materials = [

    // right
    sideMaterial,

    // left (spine)
    new THREE.MeshBasicMaterial({
      map: spineTexture,
      toneMapped: false,
    }),

    // top
    sideMaterial,

    // bottom
    sideMaterial,

    // front
    new THREE.MeshBasicMaterial({
      map: frontTexture,
      toneMapped: false,
    }),

    // back
    new THREE.MeshBasicMaterial({
      map: backTexture,
      toneMapped: false,
    }),
  ];

  return (
    <mesh
      rotation={[0, Math.PI / 2, 0]}
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
