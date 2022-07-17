import { PerspectiveCamera, OrbitControls, Environment, Stars, Sky, Cloud } from "@react-three/drei";
// import { useFrame} from "@react-three/fiber";
// import {useEffect, useFrame, useRef} from 'react';
// import { usePlane, useSphere } from '@react-three/cannon'
// import gsap from 'gsap';
import * as THREE from 'three';
// import Ground from './Ground';
// import Hydro from './Hydro';
// import Pump from './Pump';
import Cube from "../Box";
import Plane from '../Plane';
import Ball from "../Ball";
import Hud from './Hud';
import Jar from './Jar';
import Floater from "../Floater";

// import { angleToRadians } from "../../utils/angle";


export default function Three() {

    // const lightHelper = new THREE.DirectionalLightHelper()

    return (
        <>
            <Floater />

            <Stars radius={300} depth={50} count={5000} factor={6} saturation={0} fade speed={1} />

            <Sky scale={1200} sunPosition={[2, 0.2, 10]} azimuth={0.25} />

            {/*Jar*/}
            <Jar position={[2, 4, -10]} />

            {/*Hud*/}
            <Hud />


            {/* Camera */}
            <OrbitControls />
            <PerspectiveCamera makeDefault position={[-19, 15, 30]} />

            {/* Cube */}
            <Cube position={[0.4, 6, -1]} />
            <Cube position={[0.5, 10, 1]} />
            <Cube position={[0.7, 12, 1]} />

            {/*ball*/}
            <Ball position={[0.1, 5, 0]} />
            <Ball position={[0.2, 10, -1]} />
            <Ball position={[0.6, 12, -2]} />


            {/* <mesh position={[-2, 2, 0]} castShadow >
            <sphereGeometry args={[.5, 32, 32]} />
            <meshStandardMaterial color="#ffffff" metalness={.6} roughness={.2} />
        </mesh> */}
            {/*Water pump*/}
            {/* <Pump castShadow/> */}

            {/*Hydroponics*/}
            {/* <Hydro/> */}

            {/* Ground
        <Ground recieveShadow /> */}


            {/*Floor*/}
            <Plane />
            {/* <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow >
            <planeGeometry args={[20, 20]}/>
            <meshStandardMaterial color='#895b11' />
        </mesh> */}

            {/* Light: needs own component */}
            {/* <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow /> */}
            <directionalLight args={["#ffffff", .8]} position={[-5, 12, 10]} castShadow shadow-mapSize={[2048, 2048]} shadow-camera-top={50} shadow-camera-right={50} shadow-camera-left={-50} shadow-camera-bottom={-50} />
            <ambientLight args={["#FFFFFF", 0.2]} />

            {/* Environment needs own component*/}
            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial side={THREE.BackSide} color='#C2B280' />
                </mesh>
            </Environment>

            {/* <Environment ground /> */}
            <Cloud
                opacity={0.8}
                speed={0.2} // Rotation speed
                width={1000} // Width of the full cloud
                depth={10} // Z-dir depth
                segments={150} // Number of particles
            />
        </>
    )
}