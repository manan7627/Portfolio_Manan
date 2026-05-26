"use client";
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <section className={styles.heroSection}>
      {isMounted && !isReducedMotion && (
        <div className={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
            <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#d946ef" />
            <Sphere visible args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#00f0ff"
                emissive="#100030"
                emissiveIntensity={0.5}
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.1}
                metalness={0.9}
                clearcoat={1}
                clearcoatRoughness={0.1}
              />
            </Sphere>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
      )}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={styles.textContent}
        >
          <h1 className={styles.title}>
            <span className={styles.greeting}>Hi, I'm</span>
            <br />
            <span className={styles.name}>Manan Sharma</span>
          </h1>
          <p className={styles.subtitle}>
            Freelance Full-Stack Developer & AI Systems Integrator
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryAction} onClick={() => {
              const el = document.getElementById('projects');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Work
            </button>
            <button className={styles.secondaryAction} onClick={() => window.location.href = 'mailto:mrsharma7627@gmail.com'}>
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
