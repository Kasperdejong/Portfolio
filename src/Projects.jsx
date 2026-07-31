import { useState } from "react";
import "./Projects.css";
import Blob3 from "../components/Blob3";
import ProjectShowcase from "../components/ProjectShowcase";
import ProjectCarousel from "../components/ProjectCarousel";

function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <div className="projects-page-container">
            {/* 
              Wrapped in a custom container to handle standard CSS centering,
              bypassing any Tailwind dependencies
            */}
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
                                title="🎶MusicCave🎶"
                                bgColor="#1a1a1a" /* Matches --bg-secondary */
                                theme="musiccave" /* Triggers custom brand styling */
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
                                description="Dit is een tijdelijke plek voor je belangrijkste Jaar 3 project. Vervang de afbeeldingen, deze tekst, de achtergrondkleur en de vaardigheden hieronder om je nieuwe stage- of schoolwerk te laten zien."
                                links={[
                                    { label: "Bekijk het project", url: "https://music-cave.vercel.app/" },
                                    { label: "Instructie website", url: "https://kasperdejong.github.io/MusicCave-website/" }, 
                                    { label: "Chrome extensie", url: "https://chromewebstore.google.com/detail/musiccave/eldnapkjmgljbmdgainoefmpompdjmdh" }
                                ]}
                                skills={["Fullstack", "React", "Chrome-extension", "Supabase", "Web-injections"]}
                            />

                            <ProjectShowcase
                                title="📱 [Jaar 3 Project 2] 📱"
                                bgColor="#064E3B"
                                images={[
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                    "/Portfolio/construction.png",
                                ]}
                                description="Dit is een tijdelijke plek voor je tweede Jaar 3 project. Handig voor grotere opdrachten of creatieve CMGT-oplossingen die je dit jaar hebt ontworpen."
                                projectLink="#"
                                skills={["React","Chrome-extension","Supabase", "Fullstack", "Web-injections"]}
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
                    <div className="project-year-section">
                        <h3 className="year-section-title">Jaar 2 Projecten</h3>
                        <ProjectCarousel>
                            <ProjectShowcase
                                title="👐JazzHands👐"
                                images={[
                                    "/Portfolio/jazzHands1.png",
                                    "/Portfolio/jazzHands2.png",
                                    "/Portfolio/jazzHands3.png",
                                    "/Portfolio/jazzHands4.png",
                                ]}
                                description="Ik heb tijdens dit project geleerd om Mediapipe-handtracking toe te passen op mijn website. Mijn idee was om een website te maken waarbij muzikanten hun handen konden strekken en uitrusten na het spelen van hun instrument, door een korte muzikale game te spelen. Hoe ik dit heb gedaan, is door middel van een zelfgemaakt trainingsproject. Je kunt met dit project de gebaren die worden getoond op de JazzHands-website trainen en het model opslaan. Het opgeslagen model wordt opgehaald in de code van het JazzHands-project, en daarmee kan de game gespeeld worden. De gebaren kun je dan nadoen, en dan speelt er een bijbehorend geluid op basis van het gebaar – bijvoorbeeld een gitaar, basgitaar of een kickdrum. Het is een leuk project, gemaakt voor entertainment, en ik heb mijn passie voor muziek hierin verwerkt!"
                                projectLink="https://kasperdejong.github.io/jazzHands/"
                                skills={["Vite", "Tailwind CSS", "Neural Networks", "Mediapipe", "HTML/CSS"]}
                            />
                            
                            <ProjectShowcase
                                title="👋Gebarentaal bij intake✌️"
                                bgColor="#36013F"
                                images={[
                                    "/Portfolio/signWitch1.png",
                                    "/Portfolio/signWitch2.png",
                                    "/Portfolio/signWitch3.png",
                                    "/Portfolio/signWitch4.png",
                                ]}
                                description="Dit project heb ik samen met 4 anderen gemaakt voor het keuzevak gebarentaal bij intake van de Hogeschool Rotterdam, en ik zat in het frontend team. Wij hadden ook een backend team die de database regelde en alle gebaren naar data omzette. Wij haalden deze data op en hebben een website gemaakt die de studenten die het keuzevak volgen kunnen gebruiken om alle stof uit het werkboek te leren op een leuke manier. Ik heb de homepage, flitskaarten en lessen pagina gemaakt. En ook nog meegeholpen aan de rest van de pagina's gewerkt natuurlijk. Wij hadden origineel een heel leuk idee voor deze app. Het heette SignWitch en het was een woordgrap met sandwitch en sign language. We wilden ook het een leuk paars kleurenthema geven en een heks die een sandwitch maakt waarbij elke opdracht die je deed een ander ingredient toevoegde aan de sandwitch. De opdrachtgever wilden iets serieuzer, dus hebben we de website een complete overhaul gegeven naar een Hogeschool Rotterdam thema met minder gamification. Ik kan dus mijn creativiteit loslaten maar als dat niet kan word er nogsteeds een zeer goed product neergezet. En als laatste is de achtergrond hier een donkerpaars als ode naar Signwitch. Dit project heeft geen link, omdat het alleen beschikbaar is voor de studenten van het keuzevak. De rest wordt er gelijk afgetrapt."
                                skills={["React", "Vite", "Tailwind CSS", "HTML/CSS"]}
                            />

                            <ProjectShowcase
                                title="🎮Gamevault🔒"
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
                                title="🚧Under Construction🚧"
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