import { useState, useEffect } from "react";
import Blob from "../components/Blob";      
import Blob2 from "../components/Blob2";  
import Blob3 from "../components/Blob3";    
import "./About.css";

function About(){
    const [cvData, setCvData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCv = async () => {
            try {
                // Corrected path so it loads successfully under your Portfolio base path
                const response = await fetch("/Portfolio/digitalecv.json");
                if (!response.ok) {
                    throw new Error("Er is iets mis met het ophalen van de data");
                }
                const data = await response.json();
                setCvData(data);  
                
                // Safe console log location: inside the effect, preventing React DevTools spam
                console.log(data);

            } catch (error) {
                setError(error.message);  
            }
        };
        fetchCv();
    }, []);

    return (
        <>
            <header className="about-header">
                {/* Intro Card */}
                <div className="about-info-card">
                    <h1 className="about-title">Waarom doe ik wat ik doe?</h1>
                    <p className="about-p">
                        Ik heb altijd al interesse gehad in computers en andere media. Ik ben opgegroeid met videogames en het internet, dus ik heb altijd al de behoefte gehad om hier zelf wat op te kunnen maken.
                        Nu ik beter ben geworden in het programmeren besef ik me dat ik nog zoveel creativiteit kan toepassen in mijn werk, want ik heb altijd al goede ideeën gehad en nu ook de skills om het uit te werken.
                    </p>
                    <p className="about-p">
                        Na het ervaring opdoen met de verschillende stylen van back-end en front-end development, ben ik erachter gekomen dat ik het meeste ga bereiken als front-end developer. Op het moment ben ik ook aan het leren
                        om FLstudio te gebruiken om mijn eigen muziek te kunnen maken. Ik speel al 7 jaar basgitaar en ik wil dit met de technologische kennis die ik heb opgebouwd uitbreiden naar het web.
                    </p>
                </div>

                <main className="about-main">
                    <div className="about-download-wrapper">
                        <a
                            href="/Portfolio/cv.pdf"
                            download="KasperdeJong_CV.pdf"
                            className="about-download-btn"
                        >
                            Download CV (PDF)
                        </a>
                    </div>

                    <div className="cv-header-wrapper">
                        <div className="about-blob-container">
                            <Blob3/>
                        </div>
                        <h2 className="about-cv-title">
                            Mijn CV
                        </h2>
                    </div>

                    <div className="about-cv-image-container">
                        <img src="/Portfolio/cv.png" alt="cv" className="about-cv-image" />
                    </div>
                </main>
            </header>
        </>
    );
}

export default About;