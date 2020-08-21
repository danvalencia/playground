import DefaultLayout from 'src/layouts/DefaultLayout'
import { Canvas, useFrame } from 'react-three-fiber'
import { useRef, useState } from 'react'

const Box = (props) => {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      position={[-1.2, 0, 0]}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  )
}
const ThreeFiberPage = () => {
  return (
    <DefaultLayout>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={'hotpink'} />
        </Box>
      </Canvas>
    </DefaultLayout>
  )
}

export default ThreeFiberPage
