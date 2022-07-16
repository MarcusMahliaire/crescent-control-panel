import React from 'react'
import { useSphere } from '@react-three/cannon'

export default function Ball(props) {
  // const textureLoader = new THREE.TextureLoader()
  // const texture = textureLoader.load('./photos/purple.jpg')


  const [ref] = useSphere(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 1, 0.5], ...props }))

  return (

    <mesh receiveShadow castShadow ref={ref} >
      <sphereGeometry />
      <meshStandardMaterial color="#ffffff" metalness={.6} roughness={.2} />
    </mesh>
  )
}