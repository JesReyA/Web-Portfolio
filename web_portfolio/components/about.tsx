import Image from "next/image";
import FadeInSection from "./fadeInSection";
export default function About() {
    return (
        <section id="about" className="min-h-screen relative flex items-center justify-center text-white py-20 px-8 lg:px-24 pt-20">
            <FadeInSection>
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

                <div className="relative z-10 max-w-6xl w-full mx-auto backdrop-blur-2xl bg-white/5 rounded-2xl border-t-white/30 border-l-white/30 p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div id="myImage" className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#c084fc]/30 shadow-[0_0_40px_rgba(192,132,252,0.2)] max-w-xs mx-auto animate-float">
                            <Image
                                src="/my-image.jpg"
                                alt="Jesús Reyna - Software Engineer"
                                fill
                                className="object-cover"
                            />

                        </div>
                        <div id="aboutText">
                            <h2 className="relative w-fit text-4xl font-bold mb-6">
                                About <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ">Me</span>
                                <span className="absolute bottom-[-10px] left-0 w-4/5 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-full"></span>
                            </h2>
                            <p className="text-gray-400 mb-6 mt-15">
                                I am a Computer Engineering student at UNAM with experience in building web applications.                        </p>
                            <p className="text-gray-400 mb-6">
                                I led the development of Toka2Play, a semifinalist project at the Genius Arena Hackathon 2026.
                                During this project, my team and I integrated microservices, databases, and AI APIs
                                to create a disruptive user experience.
                            </p>
                            <p className="text-gray-400 mb-6">
                                Technically, my expertise spans across Full-Stack and Mobile development
                            </p>

                            <a href="/cv-jesus-reyna.pdf" download="cv-jesus-reyna.pdf"
                                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 mt-10">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
}