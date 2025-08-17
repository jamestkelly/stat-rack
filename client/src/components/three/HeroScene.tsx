"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const HeroScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    camera.position.z = 7.5;

    const loader = new GLTFLoader();
    loader.load(
      "/models/Dumbbell.glb",
      (gltf) => {
        gltf.scene.scale.set(15, 15, 15);
        gltf.scene.position.set(0, 0, 0);
        modelRef.current = gltf.scene;
        scene.add(modelRef.current);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened loading the GLB model:", error);
      }
    );

    let mouseX = 0;
    let mouseY = 0;

    const onDocumentMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.005;
      mouseY = (event.clientY - windowHalfY) * 0.005;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      // Check if the model has been loaded before attempting to rotate it
      if (modelRef.current) {
        modelRef.current.rotation.y = mouseX;
        modelRef.current.rotation.x = mouseY;
      }
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", onDocumentMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      if (currentMount && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();

      if (modelRef.current) {
        modelRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) object.material.dispose();
          }
        });
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};
