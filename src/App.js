import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { Suspense } from 'react';
import './App.css';
import Three from './components/three/scene';
import { Physics } from '@react-three/cannon';
import { Loader } from '@react-three/drei'

function App() {

  return (
    <>
      <VRCanvas vr="true" id="three-canvas-container" shadows>
        <DefaultXRControllers />
        <Suspense fallback={null}>
          <Physics
            iterations={5}
            maxSubSteps={10}
            size={1000}
            stepSize={1 / 60}
            tolerance={0.001}
          >
            <Three />
          </Physics>
        </Suspense>
      </VRCanvas>
      <Loader scale={10} size={5} />
    </>
  );
}

export default App;
