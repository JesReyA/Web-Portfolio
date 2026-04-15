'use client';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
//import {} from 'next/font/google';

class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    color: string;

    constructor(x: number, y: number, color: string) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Dibuja un círculo: (x, y, radio, ángulo inicio, ángulo final)
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}


const Home = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const roles = [
        "Computer Engineer",
        "Full-Stack Developer",
        "Mobile Developer"
    ]

    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const fontSize = Math.min(window.innerWidth / 10, 100);
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillText('Jesús Reyna', canvas.width / 2, canvas.height * 2 / 7);
        const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let particleArray: Particle[] = [];

        const gap = 4;
        for (let y = 0; y < textCoordinates.height; y += gap) {
            for (let x = 0; x < textCoordinates.width; x += gap) {
                const opacityIndex = (y * textCoordinates.width + x) * 4 + 3;
                const opacity = textCoordinates.data[opacityIndex];

                if (opacity > 128) {
                    particleArray.push(new Particle(x, y, 'rgba(255, 255, 255, 0.8)'));
                }
            }
        }

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particleArray.length; i++) {
                let p = particleArray[i];
                let dx = p.baseX - p.x;
                let dy = p.baseY - p.y;

                p.x += dx * 0.05;
                p.y += dy * 0.05;

                p.draw(ctx);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-white overflow-hidden ">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full">
            </canvas>
            <div className="relative z-10 text-center -mt-20 pointer-events-none h-12 flex justify-center">
                <p key={currentRole} className="text-xl md:text-2xl text-gray-400 animate-slide-up tracking-widest uppercase font-light">
                    {roles[currentRole]}
                </p>
            </div>
        </section>
    );
};

export default Home;