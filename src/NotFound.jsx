import { Link } from "react-router";
import "./NotFound.css";

export default function NotFound () {
    return (
        <div className="notfound-container">
            <div className="notfound-image-wrapper">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4b5b1SyU0Czj9sePpvHMma-E0Kz7PM-85A&s"
                    alt="Not Found"
                    className="notfound-image"
                />
            </div>

            <div className="notfound-card">
                <h1 className="notfound-title">404</h1>
                <p className="notfound-text">Niks te zien hier! Je pagina is niet gevonden.</p>
                <p className="notfound-subtext">
                    Ga terug naar de <Link to="/" className="notfound-link" viewTransition>Homepage</Link>
                </p>
            </div>
        </div>
    );
}