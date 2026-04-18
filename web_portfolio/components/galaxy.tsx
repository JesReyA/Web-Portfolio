'use client';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import GalaxyBackground from './galaxyBackground';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
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
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
                setIsVisible(true);
            }, 500);

        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        let particleArray: Particle[] = [];
        let animationFrameId: number;
        let resizeTimeout: NodeJS.Timeout;

        const initText = () => {
            particleArray = [];

            const isMobile = window.innerWidth < 768;
            const isLandscapeMobile = window.innerHeight < 500;

            let fontSize;
            if (isLandscapeMobile) {
                fontSize = Math.min(window.innerWidth / 12, 50);
            } else {
                fontSize = Math.min(Math.max(window.innerWidth / 8, 40), 120);
            }

            const gap = isMobile ? 3 : 4;

            ctx.font = `bold ${fontSize}px sans-serif`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const positionY = isLandscapeMobile ? canvas.height * 0.35 : canvas.height * 2 / 7;

            ctx.fillText('Jesús Reyna', canvas.width / 2, positionY);
            const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let y = 0; y < textCoordinates.height; y += gap) {
                for (let x = 0; x < textCoordinates.width; x += gap) {
                    const opacityIndex = (y * textCoordinates.width + x) * 4 + 3;
                    const opacity = textCoordinates.data[opacityIndex];

                    if (opacity > 128) {
                        particleArray.push(new Particle(x, y, 'rgba(255, 255, 255, 0.8)'));
                    }
                }
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            particleArray = [];

            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                initText();
            }, 200);
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initText();
        window.addEventListener('resize', resize);

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
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            <GalaxyBackground />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full">
            </canvas>

            <div className="absolute z-10 text-center top-[40%] pointer-events-none h-12 flex justify-center items-center overflow-hidden w-full">
                <p className={`absolute text-xl md:text-2xl text-gray-400 tracking-widest uppercase font-light transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {roles[currentRole]}
                </p>

            </div>
            <div className="absolute bottom-30 md:bottom-20 z-10 flex gap-8 items-center">
                {/* GitHub */}
                <a href="https://github.com/JesReyA" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#c084fc] hover:scale-110 transition-all duration-300">
                    <FiGithub size={28} />
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/jesreyav" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#c084fc] hover:scale-110 transition-all duration-300">
                    <FiLinkedin size={28} />
                </a>

                {/* Email / Contacto */}
                <a href="mailto:jesreyav@gmail.com" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#c084fc] hover:scale-110 transition-all duration-300">
                    <FiMail size={28} />
                </a>

            </div>
        </section>
    );
};

export default Home;