import { useState } from "react";
import { Link } from "react-router"; // Ensure Link is imported
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiLaravel, SiMysql } from 'react-icons/si';
import Blob from "/components/Blob";
import Blob2 from "/components/Blob2";
import "./App.css"; // Explicitly imported your App.css stylesheet

function Home() {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);

    const frontendSkills = [
        { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500 text-2xl sm:text-3xl" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-2xl sm:text-3xl" /> },
        { name: 'ReactJS', icon: <FaReact className="text-blue-500 text-2xl sm:text-3xl" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-2xl sm:text-3xl" /> },
    ];

    const backendSkills = [
        { name: 'PHP', icon: <FaPhp className="text-indigo-500 text-2xl sm:text-3xl" /> },
        { name: 'Laravel', icon: <SiLaravel className="text-red-600 text-2xl sm:text-3xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-2xl sm:text-3xl" /> },
        { name: 'SQL', icon: <SiMysql className="text-blue-400 text-2xl sm:text-3xl" /> },
    ];

    return (
        <header className="relative bg-[url(/Portfolio/artsy-background.jpg)] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col items-center">
            <Blob2 />
            <h1 className="text-red-600 z-10 text-2xl sm:text-3xl md:text-4xl pt-14 font-bold text-center drop-shadow-[2px_2px_0px_black]">
                Welkom op mijn CV website
            </h1>

            <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-xl w-full gap-10 p-4 mt-20 sm:mt-16 md:mt-24">
                <div className="bg-red-600 border-gray-800 border-2 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/2">
                    <h2 className="text-xl font-semibold">Mijn naam is Kasper</h2>
                    <p className="mt-2">
                        Ik ben een student aan de Hogeschool Rotterdam.
                        De opleiding die ik doe is CMGT, Creative Media & Game Technologies.
                        En ben vooral geïnteresseerd in stages waarin ik mijn creativiteit kan uiten.
                        Ik heb ervaring met React, HTML/CSS, Javascript, PHP, Laravel en Fullstack web development.
                    </p>
                    <h2 className="text-xl font-semibold pt-6">Wat zoek ik?</h2>
                    <p className="">
                        Ik zoek een <b>stage</b> voor <b>fullstack development</b> of in de <b>creatieve sector</b>. Het liefst een plek waar ik mijn
                        creativiteit kan uiten en goed aan de slag kan gaan.
                    </p>
                </div>

                {/* Profile Photo Wrapper Container with hover tracking */}
                <Link to="/about" className="profile-avatar-link" viewTransition>
                    <div 
                        className="profile-avatar-container"
                        onMouseEnter={() => setIsAvatarHovered(true)}
                        onMouseLeave={() => setIsAvatarHovered(false)}
                    >
                        <div className="profile-avatar bg-[url(/Portfolio/Closeupfoto.jpg)] bg-cover bg-center rounded-full"></div>
                        
                        {isAvatarHovered && (
                            <img 
                                src="/Portfolio/overmij_bubbleright.png" 
                                alt="Spreekt" 
                                className="profile-bubble"
                            />
                        )}
                    </div>
                </Link>
            </div>

            <div className="relative w-full flex flex-col items-center">
                <Blob />
                <h2 className="text-red-600 z-10 text-2xl sm:text-3xl md:text-4xl p-8 font-bold text-center drop-shadow-[2px_2px_0px_black]">Mijn Skills</h2>

                {/* Frontend Skills */}
                <div className="mb-8 w-11/12 md:w-3/4">
                    <h3 className="text-red-600 drop-shadow-[1px_1px_0px_black] text-xl sm:text-2xl font-semibold mb-4">Frontend Development</h3>
                    <div className="grid grid-cols-2 gap-6">
                        {frontendSkills.map((skill) => (
                            /* Converted from <a> to <Link> for instant view transitions */
                            <Link key={skill.name} to="/projecten" className="no-underline" viewTransition>
                                <div className="bg-gray-800 text-orange-500 px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-[progress_2s_linear_infinite]"></div>
                                    {skill.icon}
                                    <p className="mt-2 text-center">{skill.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="mb-8 w-11/12 md:w-3/4">
                    <h3 className="text-red-600 drop-shadow-[1px_1px_0px_black] text-xl sm:text-2xl font-semibold mb-4">Backend Development</h3>
                    <div className="grid grid-cols-2 gap-6">
                        {backendSkills.map((skill) => (
                            /* Converted from <a> to <Link> for instant view transitions */
                            <Link key={skill.name} to="/projecten" className="no-underline" viewTransition>
                                <div className="bg-gray-800 text-orange-500 px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-[progress_2s_linear_infinite]"></div>
                                    {skill.icon}
                                    <p className="mt-2 text-center">{skill.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;