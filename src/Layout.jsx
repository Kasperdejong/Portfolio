import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { toggleBloop, resetBloop } from "./utils/bloopPhysics";
import "./Layout.css";

function Layout() {
    const [isBlooped, setIsBlooped] = useState(false);
    const location = useLocation();

    // Automatically force Unbloop whenever the user changes pages
    useEffect(() => {
        resetBloop();
        setIsBlooped(false);
    }, [location.pathname]);

    const handleBloop = async () => {
        const active = await toggleBloop();
        setIsBlooped(active);
    };

    return (
        <div className="layout-container">
            <header className="navbar-header">
                <nav className="navbar-container">
                    
                    {/* Column 1: Logo */}
                    <div className="nav-logo">
                        <Link to="/" viewTransition>Kasper de Jong</Link>
                    </div>

                    {/* Column 2: Nav Links */}
                    <div className="nav-links">
                        <NavLink to="/" viewTransition>Home</NavLink>
                        <NavLink to="/about" viewTransition>About</NavLink>
                        <NavLink to="/projecten" viewTransition>Projecten</NavLink>
                        <NavLink to="/contact" viewTransition>Contact</NavLink>
                    </div>

                    {/* Column 3: Bloop / Unbloop */}
                    <div className="nav-languages">
                        <button 
                            type="button" 
                            className={`nav-bloop-text ${isBlooped ? "active" : ""}`}
                            onClick={handleBloop}
                        >
                            {isBlooped ? "Unbloop" : "Bloop"}
                        </button>
                    </div>

                </nav>
            </header>

            <main className="main-content-area">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;