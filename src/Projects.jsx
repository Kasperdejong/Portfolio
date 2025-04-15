import "./App.css";
import Blob3 from "/components/Blob3";
import ProjectShowcase from "../components/ProjectShowcase";

function Projects() {
    return (
        <>
            <header className="bg-[url('/Portfolio/artsy-background.jpg')] bg-cover bg-center bg-no-repeat min-h-screen w-full relative">
                <div className="absolute top-4/4 left-1/2 transform -translate-x-1/2 z-0 pt-5">
                    <Blob3/>
                </div>
                <h2 className="text-red-600 z-10 text-3xl pt-14 pb-6 font-bold text-center drop-shadow-[2px_2px_0px_black]">
                    mijn Projecten
                </h2>

                <main>
                    <section className="container mx-auto my-8">
                        <div className="border-2 border-amber-600 rounded-3xl">
                        <ProjectShowcase
                            title="👐JazzHands👐"
                            images={[
                                "/Portfolio/jazzHands1.png",
                                "/Portfolio/jazzHands2.png",
                                "/Portfolio/jazzHands3.png",
                                "/Portfolio/jazzHands4.png",
                            ]}
                            description="Ik heb tijdens dit project geleerd om Mediapipe-handtracking toe te passen op mijn website. Mijn idee was om een website te maken waarbij muzikanten hun handen konden strekken en uitrusten na het spelen van hun instrument, door een korte muzikale game te spelen.
                            Hoe ik dit heb gedaan, is door middel van een zelfgemaakt trainingsproject. Je kunt met dit project de gebaren die worden getoond op de JazzHands-website trainen en het model opslaan. Het opgeslagen model wordt opgehaald in de code van het JazzHands-project, en daarmee kan de game gespeeld worden.
                            De gebaren kun je dan nadoen, en dan speelt er een bijbehorend geluid op basis van het gebaar – bijvoorbeeld een gitaar, basgitaar of een kickdrum.
                            Het is een leuk project, gemaakt voor entertainment, en ik heb mijn passie voor muziek hierin verwerkt!"
                            projectLink="https://kasperdejong.github.io/jazzHands/"
                            skills={["Vite ", "Tailwind CSS ", "Neural Networks ", "Mediapipe"]}
                        />
                        </div>
                        <div className="border-2 border-amber-600 rounded-3xl mt-10">
                        <ProjectShowcase
                            title="👋Gebarentaal bij intake✌️"
                            bgColor="#36013F"
                            images={[
                                "/Portfolio/signWitch1.png",
                                "/Portfolio/signWitch2.png",
                                "/Portfolio/signWitch3.png",
                                "/Portfolio/signWitch4.png",
                            ]}
                            description="Dit project heb ik samen met 4 anderen gemaakt voor het keuzevak gebarentaal bij intake van de Hogeschool Rotterdam, en ik zat in het frontend team. Wij hadden ook een backend team die de database regelde en alle
                             gebaren naar data omzette. Wij haalden deze data op en hebben een website gemaakt die de studenten die het keuzevak volgen kunnen gebruiken om alle stof uit het werkboek te leren op een leuke manier.
                             Ik heb de homepage, flitskaarten en lessen pagina gemaakt. En ook nog meegeholpen aan de rest van de pagina's gewerkt natuurlijk.
                             Wij hadden origineel een heel leuk idee voor deze app. Het heette
                             SignWitch en het was een woordgrap met sandwitch en sign language. We wilden ook het een leuk paars kleurenthema geven en een heks die een sandwitch maakt waarbij elke opdracht die je deed een ander ingredient toevoegde aan de sandwitch.
                             De opdrachtgever wilden iets serieuzer, dus hebben we de website een complete overhaul gegeven naar een Hogeschool Rotterdam thema met minder gamification. Ik kan dus mijn creativiteit loslaten maar als dat niet kan word er nogsteeds een zeer goed product neergezet.
                             En als laatste is de achtergrond hier een donkerpaars als ode naar Signwitch. Dit project heeft geen link, omdat het alleen beschikbaar is voor de studenten van het keuzevak. De rest wordt er gelijk afgetrapt."
                            skills={["React", "Vite ", "Tailwind CSS "]}
                        />
                        </div>
                    </section>
                </main>
            </header>
        </>
    );
}

export default Projects;