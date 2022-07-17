import React from 'react'
import { Html, Text3D } from '@react-three/drei';

const Hud = () => {
	return (
		<group position={[0, 0, 0]} className="hud__labels">
			<Html transform center={false} pointerEvents position={[-12, 5, -15]}>
				<h2>Plants in Production: 0</h2>
			</Html>
			<Html transform center={true} pointerEvents position={[-11.3, 3, -15]}>
				<h2>Next Harvest Date: 8/30/2022</h2>
			</Html>
			<Html transform center={false} pointerEvents position={[1, 5, -15]}>
				<h2>Total Production accuracy: 100%</h2>
			</Html>
			<Html transform center={false} pointerEvents position={[2.4, 3, -15]}>
				<h2>Expected Returns From Upcoming Harvest:</h2>
			</Html>
			<Html transform center={false} pointerEvents position={[-10.9, 1, -15]}>
				<h2>Total Return From Last Harvest:</h2>
			</Html>
			<Text3D transform font={'./fonts/helvetiker_regular.typeface.json'} position={[-15, 7, -15]}>
				Welcome to Crescent Robotics!
				<meshNormalMaterial />
			</Text3D>
			{/* <Text3D transform font={'./fonts/helvetiker_regular.typeface.json'} position={[-15, 7, -15]}>
            		_________________________
            	<meshNormalMaterial />
        		</Text3D>
				<Text3D transform font={'./fonts/helvetiker_regular.typeface.json'} position={[-15.5, 7, -15]}>
            		_________________________
            	<meshNormalMaterial />
        		</Text3D> */}

		</group>
	)
}

export default Hud