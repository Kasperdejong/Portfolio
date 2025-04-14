import "./App.css";
import Blob from "/components/Blob";
import ProjectsCarousel from "../components/Carousel.jsx";

function Projects(){
    const images = [
        "/Portfolio/artsy-background.jpg",
        "/Portfolio/Closeupfoto.jpg",
        "/Portfolio/cv.png"
    ];

    return (
        <>
            <header className="bg-[url(/Portfolio/artsy-background.jpg)] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col items-center">
                <Blob />
                <h2 className="text-red-600 z-10 text-3xl p-10 font-bold text-center drop-shadow-[2px_2px_0px_black]">mijn Projecten</h2>

                <main>
                    <h1>carousels</h1>
                    <section className="container mx-auto my-8">
                        <ProjectsCarousel images={images} autoSlide={true} autoSlideInterval={3000} />
                    </section>
                </main>
            </header>



        </>
    );
}

export default Projects;