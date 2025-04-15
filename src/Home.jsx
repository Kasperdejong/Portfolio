
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiLaravel, SiMysql } from 'react-icons/si';
import Blob from "/components/Blob";
import Blob2 from "/components/Blob2";

function Home() {
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
                <div className="bg-red-600 border-gray-800  border-2 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/2">
                    <h2 className="text-xl font-semibold">Mijn naam is Kasper</h2>
                    <p className="mt-2">
                        Ik ben een student aan de Hogeschool Rotterdam.
                        De opleiding die ik doe is CMGT, Creative Media & Game Technologies.
                        En ben vooral geïnteresseerd in stages waarin ik mijn creativiteit kan uiten.
                        Ik heb ervaring met React, HTML/CSS, Javascript, PHP, Laravel en Fullstack web development.
                    </p>
                </div>

                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-[url(/Portfolio/Closeupfoto.jpg)] border-black bg-cover bg-center rounded-full flex-shrink-0"></div>
            </div>

            <div className="relative w-full flex flex-col items-center">
                <Blob />
                <h2 className="text-red-600 z-10 text-2xl sm:text-3xl md:text-4xl p-8 font-bold text-center drop-shadow-[2px_2px_0px_black]">Mijn Skills</h2>

                {/* Frontend Skills */}
                <div className="mb-8 w-11/12 md:w-3/4">
                    <h3 className="text-red-600 drop-shadow-[1px_1px_0px_black] text-xl sm:text-2xl font-semibold mb-4">Frontend Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        {frontendSkills.map((skill) => (
                            <div key={skill.name}
                                 className="bg-gray-800 text-orange-500 px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-[progress_2s_linear_infinite]"></div>
                                {skill.icon}
                                <p className="mt-2 text-center">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="mb-8 w-11/12 md:w-3/4">
                    <h3 className="text-red-600 drop-shadow-[1px_1px_0px_black] text-xl sm:text-2xl font-semibold mb-4">Backend Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        {backendSkills.map((skill) => (
                            <div key={skill.name}
                                 className="bg-gray-800 text-orange-500 px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-[progress_2s_linear_infinite]"></div>
                                {skill.icon}
                                <p className="mt-2 text-center">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;
