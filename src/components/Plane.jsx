import React from 'react'
import { usePlane } from '@react-three/cannon'
// import { useTexture } from '@react-three/drei'
// import * as THREE from 'three'

export default function Plane() {
  // const textureLoader = new THREE.TextureLoader()

  // const grassColorTexture = textureLoader.load('/grass/color.jpg')
  // const grassAmbientOcclusionTexture = textureLoader.load('/grass/ambientOcclusion.jpg')
  // const grassNormalTexture = textureLoader.load('/grass/normal.jpg')
  // const grassRoughnessTexture = textureLoader.load('/grass/roughness.jpg')

  // const props = useTexture({
  //   map: '/grass/color.jpg'
  // })

  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#175400" />
    </mesh>
  )
}