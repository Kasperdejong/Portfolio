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
                <nav
                    className="relative flex justify-between items-center p-4 text-red drop-shadow-[1px_1px_0px_#f97316] z-10">
                    <div className="text-2xl font-bold italic">
                        <Link to="/" className="hover:text-gray-200">Kasper de Jong</Link>
                    </div>

                    <div className="absolute gap-20 left-1/2 -translate-x-1/2 text-2xl flex space-x-6">
                        <Link to="/"
                              className="hover:text-gray-200">Home
                        </Link>

                        <Link to="/about"
                              className="hover:text-gray-200">About
                        </Link>

                        <Link to="/projecten"
                              className="hover:text-gray-200">Projecten
                        </Link>

                        <Link to="/contact"
                              className="hover:text-gray-200">Contact
                        </Link>

                    </div>
                </nav>
            </header>


    <main className="bg-blue-950">
        <Outlet/>
    </main>
</div>
)
    ;
}

export default Layout;
