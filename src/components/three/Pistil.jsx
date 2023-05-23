import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { useGLTF, Center, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const Pistil = () => {
  const { nodes } = useGLTF("./models/flower.glb");
  const texture = useTexture("./textures/circle_05.png");

  let sampler;
  const petalsGeometry = new THREE.BufferGeometry();
  const vertices = [];
  const positions = new THREE.Vector3();

  useEffect(() => {
    sampler = new MeshSurfaceSampler(nodes.pistil).build();
    transformMesh();
  }, []);

  function transformMesh() {
    for (let i = 0; i < 1000; i++) {
      sampler.sample(positions);
      vertices.push(positions.x, positions.y, positions.z);
    }
    petalsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
  }
  const petals = useRef();
  useFrame((state, delta) => {
    petals.current.rotation.y += delta * 0.05;
  });

  return (
    <>
      <Center>
        <points
          ref={petals}
          geometry={petalsGeometry}
          scale={0.2}
          position={[1, -0.5, 0]}
          rotation-x={Math.PI / 3}
          rotation-z={Math.PI / 6}
        >
          <pointsMaterial
            color="#ffdb29"
            size={0.05}
            blending={THREE.AdditiveBlending}
            transparent={true}
            opacity={1}
            depthWrite={false}
            sizeAttenuation={true}
            map={texture}
          />
        </points>
      </Center>
    </>
  );
};

export default Pistil;
