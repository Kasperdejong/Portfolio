import {Link} from "react-router";
import {useState} from "react";
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaPhp, FaDatabase} from 'react-icons/fa';
import {SiTailwindcss, SiTypescript, SiMongodb, SiLaravel, SiMysql} from 'react-icons/si';
import Blob from "/components/Blob";
import Blob2 from "/components/Blob2";

function Home() {
    const frontendSkills = [
        {name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500 text-3xl"/>},
        {name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl"/>},
        {name: 'ReactJS', icon: <FaReact className="text-blue-500 text-3xl"/>},
        {name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-3xl"/>},
    ];

    const backendSkills = [
        {name: 'PHP', icon: <FaPhp className="text-indigo-500 text-3xl"/>},
        {name: 'Laravel', icon: <SiLaravel className="text-red-600 text-3xl"/>},
        {name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl"/>},
        {name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl"/>},
        {name: 'SQL', icon: <SiMysql className="text-blue-400 text-3xl"/>},
    ];
    return (
        <header className="bg-[url(/artsy-background.jpg)] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col items-center">
            <h1 className="text-red-600 z-10 text-4xl  pt-12 font-bold text-center drop-shadow-[2px_2px_0px_black]">
                Welkom op mijn CV website
            </h1>
            <Blob2 />
            <div className="flex items-center justify-center max-w-screen-xl w-full gap-32">
                <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg flex-1">
                    <h2 className="text-xl font-semibold">Mijn naam is Kasper</h2>
                    <p className="mt-2">
                        Ik ben een student aan de Hogeschool Rotterdam.
                        De opleiding die ik doe is CMGT, Creative Media & Game Technologies.
                        En ben vooral geïnteresseerd in banen waarin ik mijn creativiteit kan uiten.
                        Ik heb ervaring met HTML/CSS, PHP, Javascript, Laravel en Fullstack web development.
                    </p>
                </div>
                <div
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-[url(/Closeupfoto.jpg)] border-black bg-cover bg-center rounded-full"></div>
            </div>

            <div className="w-full flex flex-col items-center">
                <h2 className="text-red-600 z-10 text-4xl p-10 font-bold text-center drop-shadow-[2px_2px_0px_black]">Mijn Skills</h2>
                <Blob />

                {/* Frontend Skills */}
                <div className="mb-8 w-3/4">
                    <h3 className="text-red-600 drop-shadow-[1px_1px_0px_black] text-2xl font-semibold mb-4">Frontend Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {frontendSkills.map((skill) => (
                            <div key={skill.name}
                                 className="bg-gray-900 text-orange-500 px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-[progress_2s_linear_infinite]"></div>
                                {skill.icon}
                                <p className="mt-2">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="mb-8 w-3/4">
                    <h3 className="text-red-600 drop-shadow-[1px_1px_0px_black] text-2xl font-semibold mb-4">Backend Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {backendSkills.map((skill) => (
                            <div key={skill.name}
                                 className="bg-gray-900 text-orange-500 px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-[progress_2s_linear_infinite]"></div>
                                {skill.icon}
                                <p className="mt-2">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>


    );
}

export default Home;