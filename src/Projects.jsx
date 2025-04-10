import "./App.css";
import Blob from "/components/Blob";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Projects(){

    return (
        <>
            <header className="bg-[url(/artsy-background.jpg)] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col items-center">
                <h1 className='dikketekst z-10 pt-7 drop-shadow-[2px_2px_0px_black]'>Mijn Projecten</h1>
                <Blob/>
                <main>
                    <h1>carousels</h1>
                    <section className="container mx-auto my-8">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Projecten
                        </h2>

                        <div id="gameCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img
                                        src="/helldivers-smaller.jpg"
                                        className="d-block w-100 rounded-lg"
                                        alt="Game 1"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Helldivers 2</h5>
                                        <p>Shoot the bugs and robots and make an explosive entrance in this sick game</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img
                                        src="/mariowii.jpg"
                                        className="d-block w-100 rounded-lg"
                                        alt="Game 2"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-black">Super Mario Bros Wii</h5>
                                        <p className="text-black">Platforming adventure that came with the Wii. Very good and fun</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img
                                        src="/Wow-The-War-Within.jpg"
                                        className="d-block w-100 rounded-lg"
                                        alt="Game 3"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>World of Warcraft</h5>
                                        <p>The biggest MMORPG on the market right now</p>
                                    </div>
                                </div>

                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#gameCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#gameCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
                </main>
            </header>



        </>
    );
}

export default Projects;