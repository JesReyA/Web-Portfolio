'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GalaxyBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // 1. ESCENA, CÁMARA Y RENDERIZADOR
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.x = 0;
        camera.position.y = 3.5; // Un poco más alto para apreciar los colores
        camera.position.z = 5.5;
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // 2. PARÁMETROS DE LA NEBULOSA
        const parameters = {
            count: 15000,       // Aumentamos a 15,000 estrellas para más densidad
            size: 0.02,         // Estrellas un poco más grandes para que el color brille más
            radius: 5,          // Radio total de la galaxia
            branches: 3,        // Brazos en espiral
            spin: 1.3,          // Torsión de los brazos (un poco más enroscada)
            randomness: 0.25,   // Dispersión del polvo estelar
            randomnessPower: 3, // Concentración en el núcleo
            insideColor: '#c084fc',  // Núcleo brillante (Morado cósmico)
            outsideColor: '#1e40af'  // Brazos fríos (Azul profundo)
        };

        const geometry = new THREE.BufferGeometry();

        // Arreglos de memoria plana: uno para posiciones y otro para colores
        const positions = new Float32Array(parameters.count * 3);
        const colors = new Float32Array(parameters.count * 3);

        // Convertimos los códigos HEX a objetos de Color de Three.js
        const colorInside = new THREE.Color(parameters.insideColor);
        const colorOutside = new THREE.Color(parameters.outsideColor);

        for (let i = 0; i < parameters.count; i++) {
            const i3 = i * 3;

            // --- CÁLCULO DE POSICIONES ---
            const radius = Math.random() * parameters.radius;
            const spinAngle = radius * parameters.spin;
            const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

            const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
            const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
            const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

            positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            positions[i3 + 1] = randomY;
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

            // --- CÁLCULO DE COLORES (LA MAGIA) ---
            // Clonamos el color interior para no modificar el original
            const mixedColor = colorInside.clone();

            // .lerp() mezcla el color interior con el exterior. 
            // Si el radio es 0 (centro), es 100% color Inside. 
            // Si el radio es máximo (orillas), es 100% color Outside.
            mixedColor.lerp(colorOutside, radius / parameters.radius);

            // Guardamos los valores RGB en la memoria de colores
            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
        }

        // Inyectamos las posiciones y los colores en la geometría
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); // ¡NUEVO!

        const material = new THREE.PointsMaterial({
            size: parameters.size,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true // ¡NUEVO! Le decimos al material que use los colores de los vértices, no un color sólido
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // 3. ANIMACIÓN
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            // Gira lentamente
            points.rotation.y -= 0.0015;
            renderer.render(scene, camera);
        };
        animate();

        // 4. RESPONSIVE
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // LIMPIEZA
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            renderer.forceContextLoss();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
}