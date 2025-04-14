import { Link, Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";

function Layout() {
    const location = useLocation();
    const [inProp, setInProp] = useState(true);

    useEffect(() => {
        setInProp(false);
        const transitionTimeDelay = setTimeout(() => {
            setInProp(true);
        }, 0);

        return () => clearTimeout(transitionTimeDelay);
    }, [location]);

    return (
        <div className="mx-auto text-red-600">
            <header className="bg-gray-800 overflow-hidden border-b-2 border-amber-600">
                <nav className="relative flex flex-col sm:flex-row items-center justify-center px-6 py-4 text-red drop-shadow-[1px_1px_0px_#f97316]">
                    <div className="z-20 text-2xl font-bold italic whitespace-nowrap text-center mb-4 sm:mb-0 sm:text-left">
                        <Link to="/" className="hover:text-gray-200">Kasper de Jong</Link>
                    </div>

                    <div className="flex flex-row space-x-6 sm:text-xl sm:px-4 z-10 sm:space-x-6 sm:text-2xl">
                        <Link to="/" className="hover:text-gray-200">Home</Link>
                        <Link to="/about" className="hover:text-gray-200">About</Link>
                        <Link to="/projecten" className="hover:text-gray-200">Projecten</Link>
                        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                    </div>
                </nav>
            </header>

            <main className="bg-blue-950">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
