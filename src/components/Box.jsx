import React from "react";
import { useBox } from "@react-three/cannon";
import { Interactive, RayGrab } from "@react-three/xr";
import { useState } from "react";
// import { Sparkles, } from "@react-three/drei";

export default function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))

  const [isHovered, setIsHovered] = useState(false)

  return (
    <Interactive onSelect={() => console.log(isHovered)} onHover={() => setIsHovered(true)} onBlur={() => setIsHovered(false)} >
      <RayGrab>
        <mesh receiveShadow castShadow ref={ref}>
          <boxGeometry />
          <meshLambertMaterial color="hotpink" />
          {/* <Sparkles count={5} scale={[2, 2, 2]} size={25} speed={0.8} color={0xffffff} /> */}
        </mesh >
      </RayGrab>
    </Interactive>
  )
}