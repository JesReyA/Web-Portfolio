import Image from "next/image";
import { FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { SiSpringboot, SiGooglecloud, SiMysql, SiPostman } from "react-icons/si";
import FadeInSection from "./fadeInSection";

const certificados = [
    { id: 1, name: "Hackathon Genius Arena", image: "/certificadoHackathon.png" },
    { id: 2, name: "Google AI", image: "/AiGoogle.png" },
    { id: 3, name: "Google Cloud Foundations", image: "/GCloud.png" },
    { id: 4, name: "Neural Networks with Keras", image: "/KerasCert.png" },
    { id: 5, name: "Data Cleaning and Preprocessing", image: "/LimpiezaCert.png" },
    { id: 6, name: "Linux Foundations", image: "/LinuxCert.png" },
    { id: 7, name: "Python", image: "/pythonCert.png" },
    { id: 8, name: "Software Development", image: "/SoftwareDevCert.png" },
    { id: 9, name: "Web Development", image: "/WebDevCert.png" },
]

const duplicatedCertificates = [...certificados, ...certificados];

export default function Skills() {
    return (


        <section id="skills" className="min-h-screen relative flex flex-col items-center justify-center text-white py-20 -mt-8 md:mt-5 px-8 lg:px-24 pt-20">
            <FadeInSection>
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
                <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

                <div className="relative z-10 max-w-7xl w-full mx-auto rounded-2xl backdrop-blur-2xl bg-white/5  border-t-white/30 border-l-white/30 p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">

                    <h2 className=" relative w-fit mx-auto text-4xl font-bold mb-6 text-center">Skills
                        <span className="absolute bottom-[-10px] left-0 w-4/5 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-full"></span>
                    </h2>


                    <div className="grid grid-cols-3 md:grid-cols-5 md:grid-rows-2 gap-10 mt-10">
                        {/* Html */}
                        <div id="html" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaHtml5 size={28} />
                        </div>
                        {/* Css */}
                        <div id="css" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaCss3Alt size={28} />
                        </div>

                        {/* Java */}
                        <div id="java" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaJava size={28} />
                        </div>

                        {/* JS */}
                        <div id="js" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaJs size={28} />
                        </div>

                        {/* NodeJS */}
                        <div id="nodejs" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaNodeJs size={28} />
                        </div>

                        {/* Python */}
                        <div id="python" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaPython size={28} />
                        </div>

                        {/* Git */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaGitAlt size={28} />
                        </div>

                        {/* Docker */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaDocker size={28} />
                        </div>

                        {/* NextJs */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <RiNextjsLine size={28} />
                        </div>

                        {/* c++ */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <TbBrandCpp size={28} />
                        </div>

                        {/* Spring Boot */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <SiSpringboot size={28} />
                        </div>

                        {/* Google Cloud */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <SiGooglecloud size={28} />
                        </div>

                        {/* MySQL */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <SiMysql size={28} />
                        </div>

                        {/* Postman */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <SiPostman size={28} />
                        </div>

                        {/* React */}
                        <div id="git" className="text-gray-400 hover:text-[#c084fc] mx-auto transition-all duration-300">
                            <FaReact size={28} />
                        </div>

                    </div>

                </div>
            </FadeInSection>
            <FadeInSection>
                <div id="certifications" className="relative z-10 max-w-7xl w-full mx-auto p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] mt-10">
                    <h2 className=" relative w-fit mx-auto text-4xl font-bold mb-6 text-center">Certifications
                        <span className="absolute bottom-[-10px] left-0 w-4/5 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-full"></span>
                    </h2>
                    <div className="w-full overflow-hidden fade-edges py-10">
                        <div className="flex gap-4 w-max animate-scroll">
                            {duplicatedCertificates.map((cert, index) => (
                                <a key={index} href={cert.image} target="_blank" className="group relative w-64 h-40 md:w-80 md:h-48 flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#c084fc]/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.3)] hover:-translate-y-2">
                                    <Image
                                        src={cert.image}
                                        alt={cert.name}
                                        fill
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 320px'
                                        className="object-cover transition-all duration-700 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100"
                                        quality={60}
                                    />

                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4 text-center">
                                        <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cert.name}</h3>
                                    </div>

                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
}