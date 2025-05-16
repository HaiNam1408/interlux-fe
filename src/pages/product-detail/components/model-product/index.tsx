import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Center, Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'



function PlaneModel() {
  const { scene } = useGLTF('/models/plane.glb')  // load từ public
  return <primitive object={scene} />
}


function SofaModel({ colorsMap = {} }) {
  const { scene } = useGLTF('/models/armChair.glb')
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return

    ref.current.traverse((child) => {
      if (child.isMesh) {
        console.log('Mesh name:', child.name)
      }
    })

    ref.current.traverse((child) => {
      if (child.isMesh && child.material) {
        for (const partName in colorsMap) {
          if (child.name.includes(partName)) {
            child.material.color.set(colorsMap[partName])
          }
        }
      }
    })
  }, [colorsMap])

  return <primitive ref={ref} object={scene} position={[0, 1.24, 0]} />
}

const ModelProduct = () => {
  return (
    <Center width="100%" height="100dvh" bg="gray.900">
      <Box width="100%" height="100%">
        <Canvas
          shadows
          camera={{ position: [3, 2, 5], fov: 50 }}
          gl={{ toneMappingExposure: 1.5, antialias: true }}
        >
          {/* Ánh sáng nền dịu nhẹ */}
          <ambientLight intensity={0.4} />

          {/* Đèn sân khấu trung tâm từ trên xuống */}
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

          {/* Đèn sân khấu trái */}
          <spotLight
            castShadow
            intensity={30}
            angle={0.3}
            penumbra={0.5}
            distance={8}
            decay={2}
            position={[-3, 4, 3]}
            color="#fff" // trắng ấm
          />

          {/* Đèn sân khấu phải */}
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

          {/* Mặt sàn phản chiếu ánh sáng */}
          <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.01, 0]}>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>

          <SofaModel colorsMap={{ Cube001: 'white' }} />
          <PlaneModel />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1.5} // tốc độ quay, có thể điều chỉnh
          />
        </Canvas>
      </Box>
    </Center>
  )
}

export default ModelProduct
