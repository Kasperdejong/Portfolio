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
                <h1 className="text-red-600 z-10 text-2xl sm:text-3xl md:text-4xl pt-12 font-bold text-center drop-shadow-[2px_2px_0px_black]">
                    Waarom doe ik wat ik doe?
                </h1>
            <main>
                <div>
                    <img src="/Portfolio/cv.png" alt="cv" className="w-2/3 rounded-lg h-auto mx-auto mt-10 pt-10 mb-10" />
                </div>
            </main>
        </header>



        </>
    );
}

export default About;