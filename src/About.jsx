import { useState, useEffect } from "react";
import Blob from "/components/Blob";
import Blob2 from "/components/Blob2";
import "./App.css";

function About(){
    const [cvData, setCvData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCv = async () => {
        try {
            const response = await fetch("/digitalecv.json");
            if (!response.ok) {
                throw new Error("Er is iets mis met het ophalen van de data");
            }
            const data = await response.json();
            setCvData(data);  // Zet de opgehaalde data in de state

        } catch (error) {
            setError(error.message);  // Foutafhandelingsbericht
        }
    };
        fetchCv()
    }, []);


    console.log(cvData);

    return (
        <>
            <header className="relative bg-[url(/Portfolio/artsy-background.jpg)] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col items-center">
                <div className="bg-red-600 border-gray-800 border-2 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/2 flex flex-col items-center mt-20 mb-10">
                <h1 className="text-white-600 z-10 text-2xl sm:text-3xl md:text-4xl font-bold pb-4 drop-shadow-[2px_2px_0px_black]">
                    Waarom doe ik wat ik doe?
                </h1>
                <p className="text-lg text-center max-w-7xl mb-8 px-4">
                    Ik heb altijd al interesse gehad in computers en andere media. Ik ben opgegroeid met videogames en het internet, dus ik heb altijd al de behoefte gehad om hier zelf wat op te kunnen maken.
                    Nu ik beter ben geworden in het programmeren besef ik me dat ik nog zoveel creativiteit kan toepassen in mijn werk, want ik heb altijd al goede ideeën en nu ook de skills om het uit te kunnen werken.
                    Na het ervaring opdoen met de verschillende stylen van back-end en front-end development, ben ik erachter gekomen dat ik het meeste ga bereiken als front-end developer. Op het moment ben ik ook aan het leren
                    om FLstudio te gebruiken om mijn eigen muziek te kunnen maken. Ik speel al 7 jaar basgitaar en ik wil dit met de technologische kennis die ik heb opgebouwd uitbreiden naar het web.
                </p>
                </div>

            <main>
                <Blob/>
                <h2 className="text-red-600 z-10 text-3xl sm:text-3xl md:text-4xl pt-8 font-bold text-center drop-shadow-[2px_2px_0px_black]">
                    Mijn CV
                </h2>
                <div>
                    <img src="/Portfolio/cv.png" alt="cv" className="w-2/3 rounded-lg h-auto mx-auto mt-10 pt-10 mb-10" />
                </div>
            </main>
        </header>



        </>
    );
}

export default About;