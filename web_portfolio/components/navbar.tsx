import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a10]/60 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-widest text-white transition-colors">
                    JR<span className="text-blue-500">.</span>
                </Link>

                {/* Nav Secciones Portafolio*/}
                <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">

                    {/* Home */}
                    <li className="relative group cursor-pointer py-1">
                        <Link href="#home" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                            Home
                        </Link>
                        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                    </li>

                    {/* About */}
                    <li className="relative group cursor-pointer py-1">
                        <Link href="#about" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                            About
                        </Link>
                        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                    </li>

                    {/* Projects */}
                    <li className="relative group cursor-pointer py-1">
                        <Link href="#projects" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                            Projects
                        </Link>
                        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                    </li>

                    {/* Skills */}
                    <li className="relative group cursor-pointer py-1">
                        <Link href="#skills" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                            Skills
                        </Link>
                        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                    </li>

                    {/* Contact */}
                    <li className="relative group cursor-pointer py-1">
                        <Link href="#contact" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                            Contact
                        </Link>
                        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;