/**
 * HeroScene.tsx — IoT Network Visualization
 *
 * Depicts an IoT ecosystem:
 *  - Central edge hub (glowing octahedron)
 *  - Satellite device nodes (sensors, gateways, servers) orbiting at different radii
 *  - Animated data-pulse particles travelling along connection lines
 *  - Floating ring planes representing wireless broadcast signals
 *  - Background star/particle field
 */

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial, Torus } from "@react-three/drei";
import * as THREE from "three";

// ── Types ─────────────────────────────────────────────────────────────────────

interface NodeDef {
  id: number;
  position: [number, number, number];
  size: number;
  color: string;
  emissive: string;
  shape: "box" | "sphere" | "octahedron" | "cylinder";
  floatSpeed: number;
  floatIntensity: number;
}

// ── Node definitions (IoT devices) ───────────────────────────────────────────

const NODES: NodeDef[] = [
  // Edge gateway — top right
  { id: 0, position: [ 2.8,  1.2,  0.0], size: 0.22, color: "#2563eb", emissive: "#3b82f6", shape: "box",        floatSpeed: 1.2, floatIntensity: 0.5 },
  // Sensor node — left
  { id: 1, position: [-2.6,  0.6, -0.4], size: 0.16, color: "#0891b2", emissive: "#06b6d4", shape: "sphere",     floatSpeed: 0.9, floatIntensity: 0.7 },
  // AI server — bottom right
  { id: 2, position: [ 2.2, -1.8,  0.6], size: 0.20, color: "#7c3aed", emissive: "#8b5cf6", shape: "octahedron", floatSpeed: 1.4, floatIntensity: 0.4 },
  // IoT sensor — top left
  { id: 3, position: [-1.8,  2.0,  0.3], size: 0.14, color: "#0284c7", emissive: "#38bdf8", shape: "sphere",     floatSpeed: 1.0, floatIntensity: 0.6 },
  // Industrial PLC — bottom left
  { id: 4, position: [-2.4, -1.6,  0.2], size: 0.18, color: "#1d4ed8", emissive: "#60a5fa", shape: "box",        floatSpeed: 0.8, floatIntensity: 0.5 },
  // RTLS beacon — far top
  { id: 5, position: [ 0.4,  2.8, -0.5], size: 0.13, color: "#0e7490", emissive: "#22d3ee", shape: "cylinder",   floatSpeed: 1.3, floatIntensity: 0.8 },
  // Cloud endpoint — far right
  { id: 6, position: [ 3.4, -0.2,  0.1], size: 0.15, color: "#4f46e5", emissive: "#818cf8", shape: "sphere",     floatSpeed: 1.1, floatIntensity: 0.6 },
  // Wearable/tracker — bottom
  { id: 7, position: [ 0.8, -2.8,  0.4], size: 0.12, color: "#0369a1", emissive: "#7dd3fc", shape: "octahedron", floatSpeed: 1.5, floatIntensity: 0.9 },
];

// ── Connection pairs (which nodes are linked) ─────────────────────────────────

const CONNECTIONS: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [0, 5], [0, 6], [0, 7],
  [1, 3], [2, 7], [3, 5],
];

// ── Central Hub ───────────────────────────────────────────────────────────────

function CentralHub() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = state.clock.elapsedTime * 0.10;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.55, 2]} />
      <MeshDistortMaterial
        color="#1e40af"
        emissive="#3b82f6"
        emissiveIntensity={0.7}
        distort={0.18}
        speed={2.0}
        roughness={0.05}
        metalness={0.9}
        transparent
        opacity={0.95}
      />
    </mesh>
  );
}

// ── Broadcast signal rings around hub ────────────────────────────────────────

function SignalRing({ radius, speed, opacity }: { radius: number; speed: number; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
    // Pulse opacity
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.opacity = opacity * (0.5 + 0.5 * Math.sin(state.clock.elapsedTime * 1.5 + radius));
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 8, 120]} />
      <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1.2} transparent opacity={opacity} />
    </mesh>
  );
}

// ── Device node ───────────────────────────────────────────────────────────────

function DeviceNode({ node }: { node: NodeDef }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    // Pulse emissive intensity
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.5 + 0.4 * Math.sin(state.clock.elapsedTime * 1.8 + node.id);
  });

  const geometry = useMemo(() => {
    switch (node.shape) {
      case "box":        return <boxGeometry args={[node.size, node.size, node.size]} />;
      case "octahedron": return <octahedronGeometry args={[node.size, 0]} />;
      case "cylinder":   return <cylinderGeometry args={[node.size * 0.6, node.size * 0.8, node.size * 1.2, 8]} />;
      default:           return <sphereGeometry args={[node.size, 16, 16]} />;
    }
  }, [node.shape, node.size]);

  return (
    <Float speed={node.floatSpeed} rotationIntensity={0.3} floatIntensity={node.floatIntensity}>
      <mesh ref={ref} position={node.position}>
        {geometry}
        <meshStandardMaterial
          color={node.color}
          emissive={node.emissive}
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>
    </Float>
  );
}

// ── Static connection lines ───────────────────────────────────────────────────

function ConnectionLines() {
  const positions = useMemo(() => {
    const pts: number[] = [];
    CONNECTIONS.forEach(([a, b]) => {
      const na = NODES[a].position;
      const nb = NODES[b].position;
      // from hub (0,0,0) or between nodes
      const start = a === 0 ? [0, 0, 0] : na;
      const end   = b === 0 ? [0, 0, 0] : nb;
      pts.push(...start, ...end);
    });
    return new Float32Array(pts);
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const ref = useRef<THREE.LineSegments>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.LineBasicMaterial;
    mat.opacity = 0.15 + 0.08 * Math.sin(state.clock.elapsedTime * 0.5);
  });

  return (
    <lineSegments ref={ref} geometry={geo}>
      <lineBasicMaterial color="#3b82f6" transparent opacity={0.18} linewidth={1} />
    </lineSegments>
  );
}

// ── Data pulse — a glowing dot travelling from node to hub ────────────────────

function DataPulse({ from, speed, offset }: { from: NodeDef; speed: number; offset: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    // t goes 0→1 then resets
    const t = ((state.clock.elapsedTime * speed + offset) % 1 + 1) % 1;
    const start = new THREE.Vector3(...from.position);
    const end   = new THREE.Vector3(0, 0, 0);
    ref.current.position.lerpVectors(start, end, t);

    // Fade in/out
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    const fade = Math.sin(t * Math.PI);
    mat.emissiveIntensity = fade * 2.5;
    mat.opacity = fade * 0.9;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshStandardMaterial
        color={from.emissive}
        emissive={from.emissive}
        emissiveIntensity={2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// ── Particle field ────────────────────────────────────────────────────────────

function ParticleField() {
  const count = 320;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * Math.PI;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#93c5fd" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// ── Grid plane (representing a digital floor / network substrate) ─────────────

function NetworkGrid() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.opacity = 0.06 + 0.03 * Math.sin(state.clock.elapsedTime * 0.4);
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.2, 0]}>
      <planeGeometry args={[18, 18, 24, 24]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.07}
      />
    </mesh>
  );
}

// ── Main exported component ───────────────────────────────────────────────────

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 7], fov: 52 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.25} />
      <pointLight position={[4,  4,  4]}  intensity={1.4} color="#3b82f6" />
      <pointLight position={[-4, -2, -4]} intensity={0.7} color="#06b6d4" />
      <pointLight position={[0,  0,  3]}  intensity={0.5} color="#ffffff" />

      {/* Scene elements */}
      <Stars radius={55} depth={25} count={700} factor={2} saturation={0} fade speed={0.5} />
      <ParticleField />
      <NetworkGrid />

      {/* Central IoT hub */}
      <CentralHub />

      {/* Signal broadcast rings */}
      <SignalRing radius={0.85} speed={0.35} opacity={0.45} />
      <SignalRing radius={1.35} speed={-0.22} opacity={0.28} />
      <SignalRing radius={1.85} speed={0.15} opacity={0.16} />

      {/* Connection lines between nodes */}
      <ConnectionLines />

      {/* Device nodes */}
      {NODES.map((node) => (
        <DeviceNode key={node.id} node={node} />
      ))}

      {/* Data pulses travelling from each node toward the hub */}
      {NODES.map((node, i) => (
        <DataPulse key={node.id} from={node} speed={0.28 + i * 0.04} offset={i * 0.13} />
      ))}
    </Canvas>
  );
}
