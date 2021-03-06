/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";
import * as THREE from 'three'

export default function Model(props) {
  const [ref] = useBox(() => ({ mass: 1, ...props }))
  const { nodes } = useGLTF('/models/jar/Hexapod-transformed.glb')
  nodes.HoneyComb.material.color = new THREE.Color('#50C878')
  return (
    <group ref={ref} dispose={null} scale={.015}>
      <mesh castShadow receiveShadow geometry={nodes.HoneyComb.geometry} material={nodes.HoneyComb.material} position={[0, 16, 0]} rotation={[-Math.PI, 0, Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/models/jar/Hexapod-transformed.glb')
