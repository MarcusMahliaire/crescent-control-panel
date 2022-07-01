import React from 'react'
import { usePlane } from '@react-three/cannon'

export default function Plane() {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0]}))
    return (
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial color="#171717" transparent opacity={0.5} />
      </mesh>
    )
  }