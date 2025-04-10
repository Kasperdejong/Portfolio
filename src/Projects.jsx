import "./App.css";
import Blob from "/components/Blob";
import Blob2 from "../components/Blob2.jsx";

function Projects(){

    return (
        <>
            <header className="bg-[url(/artsy-background.jpg)] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col items-center">
                <h1 className='dikketekst z-10 pt-7 drop-shadow-[2px_2px_0px_black]'>Mijn Projecten</h1>
                <Blob/>
                <main>
                    <h1>carousel</h1>
                </main>
            </header>



        </>
    );
}

export default Projects;