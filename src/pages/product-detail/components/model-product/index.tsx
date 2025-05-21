/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Center, Box, Stack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function PlaneModel() {
  const { scene } = useGLTF("/models/plane.glb"); // load từ public
  return <primitive object={scene} />;
}

// ✅ Khai báo rõ ràng props và truyền đúng kiểu
interface SofaModelProps {
  colorsMap?: Record<string, string>;
}

function SofaModel({ colorsMap = {} }: SofaModelProps) {
  const { scene } = useGLTF("/models/armChair.glb");
  const ref = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        console.log("Mesh name:", mesh.name);

        if (mesh.material && mesh.name) {
          for (const partName in colorsMap) {
            if (mesh.name.includes(partName)) {
              const material = mesh.material as THREE.MeshStandardMaterial;
              material.color.set(colorsMap[partName]);
            }
          }
        }
      }
    });
  }, [colorsMap]);

  return <primitive ref={ref} object={scene} position={[0, 1.24, 0]} />;
}

const AVAILABLE_COLORS = ["white", "red", "blue", "green", "orange", "black"];

const ModelProduct = () => {
  const [colorModel, setColorModel] = useState<string>("white");

  return (
    <Center width="100%" height="100dvh" bg="gray.900">
      <Box width="100%" height="100%" position={"relative"}>
        <Canvas
          shadows
          camera={{ position: [3, 2, 5], fov: 50 }}
          gl={{ toneMappingExposure: 1.5, antialias: true }}
        >
          <ambientLight intensity={0.4} />
          <spotLight
            castShadow
            intensity={30}
            angle={0.45}
            penumbra={0.4}
            distance={10}
            decay={2}
            position={[0, 5, 0]}
            color="#ffffff"
          />
          <spotLight
            castShadow
            intensity={30}
            angle={0.3}
            penumbra={0.5}
            distance={8}
            decay={2}
            position={[-3, 4, 3]}
            color="#fff"
          />
          <spotLight
            castShadow
            intensity={30}
            angle={0.3}
            penumbra={0.5}
            distance={8}
            decay={2}
            position={[3, 4, 3]}
            color="#fff"
          />

          <mesh
            receiveShadow
            rotation-x={-Math.PI / 2}
            position={[0, -0.01, 0]}
          >
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>

          {/* ✅ Truyền màu theo phần tên mesh */}
          <SofaModel colorsMap={{ Cube001: colorModel }} />
          <PlaneModel />

          <OrbitControls
            enablePan
            enableZoom
            enableRotate
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Canvas>
        <Stack
          direction={"column"}
          gap={"2rem"}
          position={"absolute"}
          bottom={"50%"}
          transform={"translateY(50%)"}
          right={"2rem"}
        >
          {AVAILABLE_COLORS.map((color) => (
            <Box
              key={color}
              w="60px"
              h="60px"
              borderRadius="full"
              bg={color}
              cursor="pointer"
              onClick={() => setColorModel(color)}
              boxShadow="inset -5px -5px 10px rgba(255,255,255,0.3), inset 5px 5px 10px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.5)"
              transition="all 0.2s ease"
              _hover={{
                transform: "scale(1.1)",
                boxShadow:
                  "inset -6px -6px 12px rgba(255,255,255,0.35), inset 6px 6px 12px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.6)",
              }}
            />
          ))}
        </Stack>
      </Box>
    </Center>
  );
};

export default ModelProduct;
