import { PerspectiveCamera, OrbitControls, Environment} from "@react-three/drei";
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

// import { angleToRadians } from "../../utils/angle";


export default function Three() {

    //physics
//     const [ref, api] = useSphere(() => ({ mass: 1 }))
//     useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0))
//     const velocity = useRef([0, 0, 0])

//     useEffect(() => {
//     const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v))
//     return unsubscribe
// }, [])

    //textures
    // const textureLoader = new THREE.TextureLoader()
    // const texture = textureLoader.load('./photos/purple.jpg')


    // Animation in progress
    // const ballRef = useRef(null)
    // useEffect(() => {
    //     if(!!ballRef.current) {
        
    //         //timeline
    //         const timeline = gsap.timeline({paused: true});

    //         // x-axis motion
    //         timeline.to(ballRef.current.position, {
    //             x: 1,
    //             duration: 2,
    //             ease: "power2.out"
    //         });

    //         // y-axis motion
    //         timeline.to(ballRef.current.position, {
    //             y: .5,
    //             duration: 1.5,
    //             ease: "bounce.out"
    //         }, "<");

    //         //play
    //         timeline.play();
            
    //     }
    // }, [])

    return (
        <>
        {/*Jar*/}
        <Jar position= {[14, 4, -7]}/>
        <Jar position= {[2, 4, -7]}/>
        <Jar position= {[4, 4, -7]}/>
        <Jar position= {[6, 4, -7]}/>
        <Jar position= {[8, 4, -7]}/>
        <Jar position= {[10, 4, -7]}/>
        <Jar position= {[12, 4, -7]}/>
        <Jar position= {[14, 4, -10]}/>
        <Jar position= {[2, 4, -10]}/>
        <Jar position= {[4, 4, -10]}/>
        <Jar position= {[6, 4, -10]}/>
        <Jar position= {[8, 4, -10]}/>
        <Jar position= {[10, 4, -10]}/>
        <Jar position= {[12, 4, -10]}/>
        
        {/* <Jar position= {[14, 5, -7]}/>
        <Jar position= {[2, 5, -7]}/>
        <Jar position= {[4, 5, -7]}/>
        <Jar position= {[6, 5, -7]}/>
        <Jar position= {[8, 5, -7]}/>
        <Jar position= {[10, 5, -7]}/>
        <Jar position= {[12, 5, -7]}/>
        <Jar position= {[14, 5, -10]}/>
        <Jar position= {[2, 5, -10]}/>
        <Jar position= {[4, 5, -10]}/>
        <Jar position= {[6, 5, -10]}/>
        <Jar position= {[8, 5, -10]}/>
        <Jar position= {[10, 5, -10]}/>
        <Jar position= {[12, 5, -10]}/>
        
        <Jar position= {[14, 6, -7]}/>
        <Jar position= {[2, 6, -7]}/>
        <Jar position= {[4, 6, -7]}/>
        <Jar position= {[6, 6, -7]}/>
        <Jar position= {[8, 6, -7]}/>
        <Jar position= {[10, 6, -7]}/>
        <Jar position= {[12, 6, -7]}/>
        <Jar position= {[14, 6, -10]}/>
        <Jar position= {[2, 6, -10]}/>
        <Jar position= {[4, 6, -10]}/>
        <Jar position= {[6, 6, -10]}/>
        <Jar position= {[8, 6, -10]}/>
        <Jar position= {[10, 6, -10]}/>
        <Jar position= {[12, 6, -10]}/> */}

        {/*Hud*/}
        <Hud/>
    

        {/* Camera */}
        <OrbitControls/>
        <PerspectiveCamera makeDefault position={[-20, 15, 0]}/>

        {/* Cube */}
        <Cube position={[0.4, 6, -1]}/>
        <Cube position={[0.5, 10, 1]}/>
        <Cube position={[0.7, 12, 1]}/>

        {/*ball*/}
        <Ball position={[0.1, 5, 0]}/>
        <Ball position={[0.2, 10, -1]}/>
        <Ball position={[0.6, 12, -2]}/>

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
        <Plane/>
        {/* <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow >
            <planeGeometry args={[20, 20]}/>
            <meshStandardMaterial color='#895b11' />
        </mesh> */}

        {/* Light */}
        {/* <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow /> */}
        <directionalLight args={["#ffffff", .8]} position={[-5, 20, 25]} castShadow shadow-mapSize={[7000, 7000]} shadow-camera-top={100} shadow-camera-right={100} shadow-camera-left={-100} shadow-camera-bottom={-100}/>
        <ambientLight args={["#FFFFFF", 0.2]} />

        {/* Environment */}
        <Environment background>
            <mesh>
            <sphereGeometry args={[50, 100, 100]} />
            <meshBasicMaterial side={THREE.BackSide} color='#C2B280' />
            </mesh>
        </Environment>
        </>
    )
}