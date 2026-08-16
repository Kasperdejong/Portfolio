import { useState } from "react";
import "./Projects.css";
import Blob3 from "../components/Blob3";
import ProjectShowcase from "../components/ProjectShowcase";
import ProjectCarousel from "../components/ProjectCarousel";

function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    // Helper function to show Year 2 and scroll smoothly to it
    const scrollToJazzhands = () => {
        // If the Year 2 section is currently hidden by the filter, reset it
        if (activeFilter === "year3") {
            setActiveFilter("all");
        }

        // Wait a brief moment for React to render the Year 2 section, then scroll
        setTimeout(() => {
            const element = document.getElementById("jaar2-section");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <div className="projects-page-container">
            <div className="blob-header-container">
                <Blob3 />
            </div>
            
            <h2 className="projects-page-title">
                Mijn Projecten
            </h2>

            {/* Custom Filter Selector */}
            <div className="filter-container">
                <button 
                    className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                    onClick={() => setActiveFilter("all")}
                >
                    Alles Tonen
                </button>
                <button 
                    className={`filter-btn ${activeFilter === "year3" ? "active" : ""}`}
                    onClick={() => setActiveFilter("year3")}
                >
                    Jaar 3
                </button>
                <button 
                    className={`filter-btn ${activeFilter === "year2" ? "active" : ""}`}
                    onClick={() => setActiveFilter("year2")}
                >
                    Jaar 2
                </button>
            </div>

            <main className="projects-main-content">
                
                {/* Year 3 Section */}
                {(activeFilter === "all" || activeFilter === "year3") && (
                    <div className="project-year-section">
                        <h3 className="year-section-title">Jaar 3 Projecten</h3>
                        <ProjectCarousel>
                           <ProjectShowcase
                                title={
                                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                                        <span>🎶</span>
                                        <img 
                                            src="/Portfolio/LogoMusicCave.png" 
                                            alt="MusicCave Icon Left" 
                                            style={{ 
                                                width: "32px", 
                                                height: "32px", 
                                                borderRadius: "6px",
                                                transform: "rotate(-10deg) translateY(-2px)",
                                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                                                display: "inline-block"
                                            }} 
                                        />
                                        <span>MusicCave</span>
                                        <img 
                                            src="/Portfolio/LogoMusicCave.png" 
                                            alt="MusicCave Icon Right" 
                                            style={{ 
                                                width: "32px", 
                                                height: "32px", 
                                                borderRadius: "6px",
                                                transform: "rotate(10deg) translateY(-2px)",
                                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                                                display: "inline-block"
                                            }} 
                                        />
                                        <span>🎶</span>
                                    </span>
                                }
                                bgColor="#1a1a1a"
                                theme="musiccave"
                                images={[
                                    "/Portfolio/MusicCaveVideo.mp4", 
                                    "/Portfolio/MusicCave1.png",
                                    "/Portfolio/MusicCave2.png",
                                    "/Portfolio/MusicCave3.png",
                                    "/Portfolio/MusicCave4.png",
                                    "/Portfolio/MusicCave5.png",
                                    "/Portfolio/MusicCave6.png",
                                    "/Portfolio/MusicCave7.png",
                                ]}
                                description="MusicCave is het project wat de AppleMusic web versie aan de Spotify web versie koppelt door middel van een Chrome extensie. Ik heb dit gedaan door scripts uit te voeren in de code die bepaalde acties uitvoeren om te zorgen dat jouw playlists overgezet kunnen worden. Alle playlists kunnen met deze applicatie overgezet worden zonder veel handmatig werk. Wat dit uniek maakt is dat het unieke nummers overzet door een scan uit te voeren en dubbele nummers niet toe te voegen. Hiermee kan de gebruiker van een volledige muzieklibrary genieten. Dit idee kwam uit een irritatie vanuit mijzelf, omdat alleen volledige playlists overgezet konden worden met bestaande tools. Terwijl ik juist  volledige crossplatform playlists wil. De duur van dit project was een halfjaar!"
                                links={[
                                    { label: "Bekijk het project", url: "https://music-cave.vercel.app/" },
                                    { label: "Instructie website", url: "https://kasperdejong.github.io/MusicCave-website/" }, 
                                    { label: "Chrome extensie", url: "https://chromewebstore.google.com/detail/musiccave/eldnapkjmgljbmdgainoefmpompdjmdh" }
                                ]}
                                skills={["Fullstack", "React", "Chrome-extension", "Supabase", "Web-injections"]}
                            />

                            <ProjectShowcase
                                title={
                                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                                        <img 
                                            src="/Portfolio/Adillo.ico" 
                                            alt="Arm-adillo Icon Left" 
                                            style={{ 
                                                width: "32px", 
                                                height: "32px", 
                                                borderRadius: "6px",
                                                transform: "rotate(-10deg) translateY(-2px)",
                                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                                                display: "inline-block"
                                            }} 
                                        />
                                        <span>Arm-adillo gebarentaal</span>
                                        <img 
                                            src="/Portfolio/Adillo.ico" 
                                            alt="Arm-adillo Icon Right" 
                                            style={{ 
                                                width: "32px", 
                                                height: "32px", 
                                                borderRadius: "6px",
                                                transform: "rotate(10deg) translateY(-2px)",
                                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                                                display: "inline-block"
                                            }} 
                                        />
                                    </span>
                                }
                                bgColor="#064E3B"
                                images={[
                                    "/Portfolio/Armadillo-full.mov",
                                    "/Portfolio/Armadillowithsound.mov",
                                    "/Portfolio/Armadillo-indevelopment.png",
                                    "/Portfolio/Armadillo-1.png",
                                    "/Portfolio/Armadillo-2.png",
                                    "/Portfolio/Armadillo-3.png",
                                ]}
                                description={
                                    <div>
                                        Zorg dat geluid werkt met de video!!!
                                        <br /><br />
                                        Dit is een stageproject waarmee ik mediapipe's handtracking toepas om een MVP te creëren waarmee MCW (Mijn stagebedrijf) naar een opdrachtgever kan gaan om door middel van deze creative experience een leuk project neer te zetten voor gebarentaal. Dit project kwam voort uit onderzoek wat ik eerder had gedaan met een kinect dieptecamera en een poppenkast applicatie die ik eerder had gemaakt samen met veel andere creatieve demo's, om mijn stage ervan te overtuigen dat hier werk in te vinden valt. Ook heb ik mijn kennis toegepast van het{" "}
                                        <button 
                                            type="button"
                                            className="project-description-link" 
                                            onClick={scrollToJazzhands}
                                        >
                                            Jazzhands project
                                        </button>{" "}
                                        waaraan ik een jaar eerder had gewerkt om te vertellen dat er nog een model getrained kon worden voor verdere uitwerking. Voor alle animaties en tekeningen gaat alle credit naar Myrthe van het bedrijf MCW.

                                        {/* Dutch installation guidance for unsigned macOS/Windows apps */}
                                        <div className="download-disclaimer-card">
                                            <p className="disclaimer-heading"><br></br>ℹInstallatie Hulp</p>
                                            <p className="disclaimer-body">
                                                <strong>macOS:</strong> Klik met de rechtermuisknop (of Control-klik) op het gedownloade app-icoon en kies <strong>'Open'</strong> om de melding over een onbekende ontwikkelaar te omzeilen. En anders "System Settings - Privacy & Security, scroll down to the Security section, and click Open Anyway next to the blocked app's notification"
                                            </p>
                                            <br></br>
                                            <p className="disclaimer-body">
                                                <strong>Windows:</strong> Windows Defender SmartScreen kan de app blokkeren. Klik op <strong>'Meer informatie'</strong> en daarna op <strong>'Toch uitvoeren'</strong>.
                                            </p>
                                        </div>
                                    </div>
                                }
                                links={[
                                    { 
                                        label: "Download voor macOS (.dmg)", 
                                        url: "https://drive.google.com/uc?export=download&id=1_T6Rioi_50P_O34Ox4o7AgRMQVmexhCk" 
                                    },
                                    { 
                                        label: "Download voor Windows (.exe)", 
                                        url: "https://drive.google.com/uc?export=download&id=1Fr67WZ0pH4npfL2VNvJHiba-rgpfaqRK" 
                                    }
                                ]}
                                skills={["Python", "Electron", "MediaPipe", "Computer Vision","javascript","Samenwerking met een animator",]}
                            />

                            <ProjectShowcase
                                title="🎨 [Jaar 3 Project 3] 🎨"
                                bgColor="#581C87"
                                images={[
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                ]}
                                description="Dit is een tijdelijke plek voor je derde Jaar 3 project. Ideaal om extra frontendvaardigheden, interactieve designs of experimentele web-apps uit te lichten."
                                projectLink="#"
                                skills={["UX/UI", "JavaScript", "Responsive Design"]}
                            />
                        </ProjectCarousel>
                    </div>
                )}

                {/* Year 2 Section */}
                {(activeFilter === "all" || activeFilter === "year2") && (
                    <div id="jaar2-section" className="project-year-section">
                        <h3 className="year-section-title">Jaar 2 Projecten</h3>
                        <ProjectCarousel>
                            <ProjectShowcase
                                title="👐 JazzHands 👐"
                                images={[
                                    "/Portfolio/jazzHands1.png",
                                    "/Portfolio/jazzHands2.png",
                                    "/Portfolio/jazzHands3.png",
                                    "/Portfolio/jazzHands4.png",
                                ]}
                                description="Ik heb tijdens dit project geleerd om Mediapipe-handtracking toe te passen op mijn website. Mijn idee was om een website te maken waarbij muzikanten hun handen konden strekken en uitrusten na het spelen van hun instrument, door een korte muzikale game te spelen. Hoe ik dit heb gedaan, is door middel van een zelfgemaakt trainingsproject. Je kunt met dit project de gebaren die worden getoond op de JazzHands-website trainen en het model opslaan. Het opgeslagen model wordt opgehaald in de code of het JazzHands-project, en daarmee kan de game gespeeld worden. De gebaren kun je dan nadoen, en dan speelt er een bijbehorend geluid op basis van het gebaar – bijvoorbeeld een gitaar, basgitaar of een kickdrum. Het is een leuk project, gemaakt voor entertainment, en ik heb mijn passie voor muziek hierin verwerkt!"
                                projectLink="https://kasperdejong.github.io/jazzHands/"
                                skills={["Vite", "Tailwind CSS", "Neural Networks", "Mediapipe", "HTML/CSS"]}
                            />
                            
                            <ProjectShowcase
                                title="👋 Gebarentaal bij intake ✌️"
                                bgColor="#36013F"
                                images={[
                                    "/Portfolio/signWitch1.png",
                                    "/Portfolio/signWitch2.png",
                                    "/Portfolio/signWitch3.png",
                                    "/Portfolio/signWitch4.png",
                                ]}
                                description="Dit project heb ik samen met 4 anderen gemaakt voor het keuzevak gebarentaal bij intake of de Hogeschool Rotterdam, en ik zat in het frontend team. Wij hadden ook een backend team die de database regelde en alle gebaren naar data omzette. Wij haalden deze data op en hebben een website gemaakt die de studenten die het keuzevak volgen kunnen gebruiken om alle stof uit het werkboek te leren op een leuke manier. Ik heb de homepage, flitskaarten en lessen pagina gemaakt. En ook nog meegeholpen aan de rest van de pagina's gewerkt natuurlijk. Wij hadden origineel een heel leuk idee voor deze app. Het heette SignWitch en het was een woordgrap met sandwitch and sign language. We wilden ook het een leuk paars kleurenthema geven en een heks die een sandwitch maakt waarbij elke opdracht die je deed een ander ingredient toevoegde aan de sandwitch. De opdrachtgever wilden iets serieuzer, dus hebben we de website een complete overhaul gegeven naar een Hogeschool Rotterdam thema met minder gamification. Ik kan dus mijn creativiteit loslaten maar als dat niet kan word er nogsteeds een zeer goed product neergezet. En als laatste is de achtergrond hier een donkerpaars als ode naar Signwitch. Dit project heeft geen link, omdat het alleen beschikbaar is voor de studenten van het keuzevak. De rest wordt er gelijk afgetrapt."
                                skills={["React", "Vite", "Tailwind CSS", "HTML/CSS"]}
                            />

                            <ProjectShowcase
                                title="🎮 Gamevault 🔒"
                                bgColor="#020079"
                                images={[
                                    "/Portfolio/gameVault1.png",
                                    "/Portfolio/gameVault2.png",
                                    "/Portfolio/gameVault3.png",
                                    "/Portfolio/gameVault4.png",
                                ]}
                                description="Hier ging ik voor het eerst aan de slag met Laravel. De naam of het project is Gamevault. Ik wilde een website maken waar gebruikers hun favoriete games kunnen delen met elkaar. Laravel was een erg fijn framework om mee te werken. Het heeft een hele fijne mappenstructuur wat goed is voor het overzicht en door de ORM van Laravel is het ook heel makkelijk om met de database te werken. Ook heb ik hier voor het eerst met een Bootstrap carousel gewerkt wat een hele leuke toevoeging was aan de website. Het zag er gelijk een struk beter uit."
                                skills={["Laravel", "Tailwind CSS", "Javascript", "PHP", "MySQL", "Bootstrap", "HTML/CSS"]}
                            />

                            <ProjectShowcase
                                title="🚧 Under Construction 🚧"
                                bgColor="#F4BC1C"
                                images={[
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                ]}
                                description={
                                    <div>
                                        <p style={{ margin: 0 }}>Het volgende project wat ik toe wil voegen komt hier!</p>
                                        <div className="construction-gif-wrapper">
                                            <img 
                                                src="/Portfolio/constructionworker.gif" 
                                                alt="Construction Worker" 
                                                className="construction-gif"
                                            />
                                        </div>
                                    </div>
                                }
                                skills={["wordt vervolgd"]}
                            />
                        </ProjectCarousel>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Projects;