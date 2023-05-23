import * as THREE from "three";
import { Center, useGLTF, shaderMaterial, useTexture } from "@react-three/drei";

const FlowerModel = () => {
  const { nodes, materials } = useGLTF("./models/flower.glb");
  console.log("🚀 ~ file: index.jsx:6 ~ FlowerModel ~ nodes:", nodes);
  const petalTexture = useTexture("./textures/petalColor.jpg");

  console.log(nodes);
  return (
    <>
      <Center>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.firstPetals.geometry}
            scale={0.3}
          >
            <meshBasicMaterial map={petalTexture} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.secondPetals.geometry}
            material={materials.petal}
            scale={0.3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.thirdPetals.geometry}
            material={materials.petal}
            scale={0.3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.petalsSmall.geometry}
            scale={0.3}
            material={materials.petal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.filaments.geometry}
            material={materials.filament}
            rotation={[0, Math.PI / 2, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pistil.geometry}
            material={materials.bulb}
            scale={0.3}
          />
        </group>
      </Center>
    </>
  );
};

export default FlowerModel;
