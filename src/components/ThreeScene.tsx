import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";

const Scene = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#0016a9" wireframe />
    </mesh>
  );
};

const Fallback = () => (
  <div className="w-full h-full flex items-center justify-center text-gray-500">
    Loading 3D scene...
  </div>
);

const ErrorFallback = () => (
  <div className="w-full h-full flex items-center justify-center text-gray-500">
    Could not load 3D scene
  </div>
);

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          gl={{ 
            antialias: true,
            alpha: true,
          }}
        >
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls 
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default ThreeScene;