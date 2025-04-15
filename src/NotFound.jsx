import {Link} from "react-router";

export default function NotFound () {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <div className="w-full max-w-md h-64 mb-8 overflow-hidden rounded-lg shadow-lg">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4b5b1SyU0Czj9sePpvHMma-E0Kz7PM-85A&s"
                    alt="Not Found"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="text-center max-w-lg mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-8">
                <h1 className="text-5xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-6">Niks te zien hier! Je pagina is niet gevonden.</p>
                <p className="text-xl mb-4">Ga terug naar de <Link to="/" className="text-blue-500 hover:underline">Homepage</Link>
                </p>
            </div>
        </div>
    )
}
