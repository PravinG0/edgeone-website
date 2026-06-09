import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Torus, Ring } from "@react-three/drei";
import * as THREE from "three";

// Floating node sphere
function NodeSphere({ position, size, speed, color }: { position: [number, number, number]; size: number; speed: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} transparent opacity={0.85} />
      </mesh>
    </Float>
  );
}

// Animated orbital ring
function OrbitalRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 8, 120]} />
      <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.6} transparent opacity={0.35} />
    </mesh>
  );
}

// Animated dot travelling along a ring
function OrbitDot({ radius, speed, offset, tilt }: { radius: number; speed: number; offset: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + offset;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t) * radius * Math.cos(tilt);
      ref.current.position.z = Math.sin(t) * radius * Math.sin(tilt);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={1.5} />
    </mesh>
  );
}

// Central distorted core globe
function CoreGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.12;
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.1, 64, 64]} />
      <MeshDistortMaterial
        color="#1d4ed8"
        emissive="#1e40af"
        emissiveIntensity={0.5}
        distort={0.28}
        speed={1.4}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// Particle field
function ParticleField() {
  const count = 280;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#93c5fd" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

// Connection lines between nodes
function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(2.2, 1.0, 0.5),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(-1.8, 1.4, -0.3),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(1.5, -1.6, 0.8),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(-2.0, -1.0, 0.4),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.5, 2.2, -0.6),
      new THREE.Vector3(2.2, 1.0, 0.5), new THREE.Vector3(-1.8, 1.4, -0.3),
      new THREE.Vector3(1.5, -1.6, 0.8), new THREE.Vector3(-2.0, -1.0, 0.4),
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.12 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#3b82f6" transparent opacity={0.18} />
    </lineSegments>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#3b82f6" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#0ea5e9" />
      <pointLight position={[0, 0, 3]} intensity={0.4} color="#ffffff" />

      <Stars radius={60} depth={30} count={800} factor={2} saturation={0} fade speed={0.6} />
      <ParticleField />
      <ConnectionLines />

      {/* Core globe */}
      <CoreGlobe />

      {/* Orbital rings */}
      <OrbitalRing radius={1.9} speed={0.3} tilt={Math.PI / 6} />
      <OrbitalRing radius={2.5} speed={-0.18} tilt={Math.PI / 3} />
      <OrbitalRing radius={3.1} speed={0.12} tilt={Math.PI / 2.2} />

      {/* Travelling dots */}
      <OrbitDot radius={1.9} speed={0.7} offset={0} tilt={Math.PI / 6} />
      <OrbitDot radius={2.5} speed={-0.5} offset={2} tilt={Math.PI / 3} />
      <OrbitDot radius={3.1} speed={0.4} offset={4} tilt={Math.PI / 2.2} />

      {/* Floating satellite nodes */}
      <NodeSphere position={[2.2,  1.0,  0.5]} size={0.18} speed={1.2} color="#3b82f6" />
      <NodeSphere position={[-1.8, 1.4, -0.3]} size={0.14} speed={0.9} color="#0ea5e9" />
      <NodeSphere position={[1.5, -1.6,  0.8]} size={0.16} speed={1.4} color="#6366f1" />
      <NodeSphere position={[-2.0,-1.0,  0.4]} size={0.12} speed={1.0} color="#38bdf8" />
      <NodeSphere position={[0.5,  2.2, -0.6]} size={0.15} speed={0.8} color="#818cf8" />
    </Canvas>
  );
}
