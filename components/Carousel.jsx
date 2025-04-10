import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ProjectsCarousel = () => {
    return (
        <section className="container mx-auto my-8">
            <h2 className="text-2xl font-bold text-center mb-6">
                Top Games Shared by Our Users
            </h2>

            <div id="ProjectsCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img
                            src="/artsy-background.jpg"
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
                            src="/Closeupfoto.jpg"
                            className="d-block w-100 rounded-lg"
                            alt="Game 2"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-black">Dit project</h5>
                            <p className="text-black"></p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/cv.png"
                            className="d-block w-100 rounded-lg"
                            alt="Game 3"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Project</h5>
                            <p>Dit is wat ik deed tijdens dit project</p>
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
    );
};

export default ProjectsCarousel;