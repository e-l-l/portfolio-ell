"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ParticleCloud = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const originalRadiiRef = useRef<Float32Array>(new Float32Array(6000));
  const particleCount = 3000;
  const sphereRadius = 2; // Base radius of the sphere

  useFrame((state) => {
    if (!particlesRef.current) return;

    // Rotate the particle cloud
    particlesRef.current.rotation.y += 0.00025;

    // Make particles move in a spherical pattern
    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const time = state.clock.getElapsedTime() * 0.1;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];

      const distance = Math.sqrt(x * x + y * y + z * z);
      const normalizedX = x / distance;
      const normalizedY = y / distance;
      const normalizedZ = z / distance;

      // Get original radius from our ref
      const originalRadius = originalRadii[i];

      const waveFactorA = Math.sin(distance * 2 + time + i * 0.02) * 0.06;
      const waveFactorB =
        Math.cos(distance * 1.5 + time * 1.8 + i * 0.01) * 0.08;
      const combinedWaveFactor = waveFactorA + waveFactorB;

      positions[i3] = normalizedX * (originalRadius + combinedWaveFactor);
      positions[i3 + 1] = normalizedY * (originalRadius + combinedWaveFactor);
      positions[i3 + 2] = normalizedZ * (originalRadius + combinedWaveFactor);
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // Generate positions and colors
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);
  const originalRadii = originalRadiiRef.current;

  for (let i = 0; i < particleCount; i++) {
    // Calculate particles starting position - concentrated around the sphere's radius
    let radius;

    // Randomize radius, but concentrate around the sphere surface
    const radiusVariation = Math.pow(Math.random(), 2); // Square makes distribution favor outer values

    if (i < particleCount * 0.7) {
      // 70% of particles near the surface shell
      radius = sphereRadius - 0.1 - radiusVariation * 0.5; // Small inward variation
    } else if (i < particleCount * 0.9) {
      // 20% of particles slightly outside the shell
      radius = sphereRadius + radiusVariation * 0.4;
    } else {
      // 10% of particles further out for atmosphere
      radius = sphereRadius + 0.4 + radiusVariation * 0.8;
    }

    // Store original radius for animation
    originalRadii[i] = radius;

    // Random spherical coordinates - even distribution on sphere
    const theta = Math.random() * Math.PI * 2; // azimuthal angle
    const phi = Math.acos(2 * Math.random() - 1); // polar angle

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    // Position
    const i3 = i * 3;
    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    // Add glow effect with color variation
    // Particles closer to exact radius are brighter
    const distanceFromSurface = Math.abs(radius - sphereRadius);
    const glowFactor = Math.max(0, 1 - distanceFromSurface * 2); // Higher for particles near surface

    // Base intensity is low for dark background, with glow boost
    const intensity = 0.15 + glowFactor * 0.15 + Math.random() * 0.1;

    // Darker grey colors with slight glow variation
    const greyValue = 0.35 - distanceFromSurface * 0.3;
    colors[i3] = greyValue * intensity; // R
    colors[i3 + 1] = greyValue * intensity; // G
    colors[i3 + 2] = (greyValue + 0.05) * intensity; // B - Slight blue for glow effect

    // Vary particle sizes - larger particles have more glow effect
    sizes[i] = 0.04 * (0.7 + glowFactor * 0.5 + Math.random() * 0.2);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

export default function ParticleSphere() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        <pointLight position={[-5, 5, -5]} intensity={0.2} color="#aaa" />
        <ParticleCloud />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
        />
      </Canvas>
    </div>
  );
}
