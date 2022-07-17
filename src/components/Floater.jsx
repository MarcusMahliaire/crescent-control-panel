import React from 'react'
import { Sparkles, Float } from '@react-three/drei'

const Floater = () => {
    return (
        <Float
            speed={.5}
            rotationIntensity={.3}
            floatIntensity={.5}
            floatingRange={[0, 2]}

        >
            <mesh position={[-8, 1, 2]} castShadow >
                <sphereGeometry />
                <meshNormalMaterial />
                <Sparkles count={15} scale={2.5} size={20} color={0xffffff} />
            </mesh>
        </Float>
    )
}

export default Floater