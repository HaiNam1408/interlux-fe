/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Center, Box, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// ✅ Khai báo rõ ràng props và truyền đúng kiểu
interface SofaModelProps {
  colorsMap?: Record<string, string>;
}

function SofaModel({ colorsMap = {} }: SofaModelProps) {
  const { scene } = useGLTF("/models/sofa_set.glb");
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

  return <primitive ref={ref} object={scene} position={[0, 0, 0]} />;
}

const AVAILABLE_COLORS = [
  "#f8f6f0",
  "#4a4a4a",
  "#1e3a5f",
  "#556b2f",
  "#d8cab8",
  "#5c3a21",
  "#c48189",
  "#d4a42f",
  "#6a7ba2",
  "#1a1a1a",
  "#b6b6b6",
  "#e2725b",
];
const ModelProduct = () => {
  const [colorModel, setColorModel] = useState<string>("#f8f6f0");

  return (
    <Center width="100%" height="80dvh" bg="gray.900">
      <Box width="100%" height="100%" position={"relative"}>
        <Canvas
          shadows
          camera={{ position: [3, 3, 5], fov: 40 }}
          gl={{ toneMappingExposure: 1.5, antialias: true }}
          style={{ background: "#e0e0e0", backgroundImage: "url(./)" }}
        >
          <hemisphereLight
            args={["#ffffff", "#aaaaaa", 0.8]}
            position={[0, 5, 0]}
          />
          <directionalLight
            position={[3, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
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
          <SofaModel colorsMap={{ Object_3: colorModel }} />

          <OrbitControls
            enablePan
            enableZoom
            enableRotate
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Canvas>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={"1rem"}
          position={"absolute"}
          bottom={"50%"}
          transform={"translateY(50%)"}
          right={"2rem"}
        >
          {AVAILABLE_COLORS.map((color, index) => (
            <GridItem key={index}>
              <Box
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
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Center>
  );
};

export default ModelProduct;
