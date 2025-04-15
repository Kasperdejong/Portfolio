import "./App.css";
import Blob3 from "/components/Blob3";
import ProjectsCarousel from "../components/Carousel.jsx";
import ProjectShowcase from "../components/ProjectShowcase";

function Projects() {
    return (
        <>
            <header className="bg-[url('/Portfolio/artsy-background.jpg')] bg-cover bg-center bg-no-repeat min-h-screen w-full relative">
                <div className="absolute top-4/4 left-1/2 transform -translate-x-1/2 z-0">
                    <Blob3/>
                </div>

                <h2 className="text-red-600 z-10 text-3xl p-10 font-bold text-center drop-shadow-[2px_2px_0px_black]">
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
                            skills={["Vite ", "Tailwind CSS ", "Neural Networks ", "Mediapipe"]}
                        />
                        </div>
                        <div className="border-2 border-amber-600 rounded-3xl mt-10">
                        <ProjectShowcase
                            title="👐Totaal ander project👐"
                            bgColor="#0f766e"
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
                            skills={["Vite ", "Tailwind CSS ", "Neural Networks ", "Mediapipe"]}
                        />
                        </div>
                    </section>
                </main>
            </header>
        </>
    );
}

export default Projects;