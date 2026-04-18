import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen relative flex items-center justify-center text-white py-20 px-8 lg:px-24 pt-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-6xl w-full mx-auto rounded-2xl backdrop-blur-2xl bg-white/5  border-t-white/30 border-l-white/30 p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">

                <h2 className=" relative w-fit mx-auto text-4xl font-bold mb-6 text-center">Projects
                    <span className="absolute bottom-[-10px] left-0 w-4/5 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-full"></span>
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
                    <div id="project1" className=" group relative w-full md:row-span-2 h-full min-h-[400px] md:min-h-[500px] overflow-hidden rounded-2xl border border-[#c084fc]/30 shadow-[0_0_40px_rgba(192,132,252,0.2)] transition-all duration-700 ">
                        <Image
                            src="/inicio-toka2play.jpg"
                            alt="Toka2Play"
                            fill
                            quality={60}
                            className="object-cover md:grayscale md:opacity-70 group-hover:md:grayscale-0 group-hover:md:opacity-100"
                        />
                        <div className="absolute top-0 left-0 w-full h-1 hidden md:block bg-gradient-to-r from-transparent via-[#c084fc] to-transparent opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-[400px] transition-all duration-[1500ms] ease-in-out"></div>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-0 md:translate-y-[120%] group-hover:md:translate-y-0 transition-transform duration-500 ease-out">
                            <h3 className="text-2xl font-bold mb-2">Toka2Play</h3>
                            <p className="text-gray-400 mb-4">Videogame miniapp made for Toka at Genius Arena Hackathon 2026 (Semifinalist)</p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/JesReyA/Toka2Play.git" target="_blank" className="text-purple-500 hover:text-purple-400 transition-colors">GitHub</a>
                                {/*<a href="#" target="_blank" className="text-purple-500 hover:text-purple-400 transition-colors">Live</a>*/}
                            </div>
                        </div>
                    </div>

                    <div id="project2" className="group relative w-full overflow-hidden rounded-2xl border border-[#c084fc]/30 shadow-[0_0_40px_rgba(192,132,252,0.2)] h-full min-h-[300px]">
                        <Image
                            src="/metodos-numericos.png"
                            alt="Numerical Methods"
                            fill
                            quality={60}
                            className="object-cover md:grayscale md:opacity-70 group-hover:md:grayscale-0 group-hover:md:opacity-100"
                        />
                        <div className="absolute top-0 left-0 w-full h-1 hidden md:block bg-gradient-to-r from-transparent via-[#c084fc] to-transparent opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-[400px] transition-all duration-[1500ms] ease-in-out"></div>

                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-0 md:translate-y-[120%] group-hover:md:translate-y-0 transition-transform duration-500 ease-out">
                            <h3 className="text-2xl font-bold mb-2">Numerical Methods</h3>
                            <p className="text-gray-400 mb-4">Application to implement Numerical Methods to solver differen types of equations</p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/JesReyA/MetodosNum-ricos.git" target="_blank" className="text-purple-500 hover:text-purple-400 transition-colors">GitHub</a>
                                {/*<a href="#" target="_blank" className="text-purple-500 hover:text-purple-400 transition-colors">Live</a>*/}
                            </div>
                        </div>
                    </div>

                    <div id="project3" className="group relative w-full overflow-hidden rounded-2xl border border-[#c084fc]/30 shadow-[0_0_40px_rgba(192,132,252,0.2)] h-full min-h-[300px]">
                        <Image
                            src="/ecuaciones-diferenciales.png"
                            alt="Differential Equations"
                            fill
                            quality={60}
                            className="object-cover md:grayscale md:opacity-70 group-hover:md:grayscale-0 group-hover:md:opacity-100"
                        />
                        <div className="absolute top-0 left-0 w-full h-1 hidden md:block bg-gradient-to-r from-transparent via-[#c084fc] to-transparent opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-[400px] transition-all duration-[1500ms] ease-in-out"></div>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-0 md:translate-y-[120%] group-hover:md:translate-y-0 transition-transform duration-500 ease-out">
                            <h3 className="text-2xl font-bold mb-2">Differential Equations</h3>
                            <p className="text-gray-400 mb-4">Application to solver Differential Equations using 2 methods</p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/samuelbahena67-cmd/proyecto.git" target="_blank" className="text-purple-500 hover:text-purple-400 transition-colors">GitHub</a>
                                {/*<a href="#" target="_blank" className="text-purple-500 hover:text-purple-400 transition-colors">Live</a>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
