import {VRCanvas} from '@react-three/xr';
import { Suspense } from 'react';
import './App.css';
import Three from './components/three/scene';
import {Physics} from '@react-three/cannon';

function App() {
  return (
    <VRCanvas vr="true" id="three-canvas-container" shadows>
      <Suspense fallback={null}>
      <Physics
      iterations={5}
      maxSubSteps={10}
      size={1000}
      stepSize={1/60}
      tolerance= {0.001}
      >
        <Three/>
        </Physics>
      </Suspense>
    </VRCanvas>
  );
}

export default App;
