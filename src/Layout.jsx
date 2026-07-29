import { Link, NavLink, Outlet } from "react-router"; // Imported NavLink
import "./Layout.css";

function Layout() {
    return (
        <div className="layout-container">
            <header className="navbar-header">
                <nav className="navbar-container">
                    
                    {/* Column 1: Logo (Left Aligned) - Kept as a standard Link */}
                    <div className="nav-logo">
                        <Link to="/" viewTransition>Kasper de Jong</Link>
                    </div>

                    {/* Column 2: Nav Tags (Center Aligned) - Switched to NavLink */}
                    <div className="nav-links">
                        <NavLink to="/" viewTransition>Home</NavLink>
                        <NavLink to="/about" viewTransition>About</NavLink>
                        <NavLink to="/projecten" viewTransition>Projecten</NavLink>
                        <NavLink to="/contact" viewTransition>Contact</NavLink>
                    </div>

                    {/* Column 3: Language Selector */}
                    <div className="nav-languages">
                        <span className="flag-placeholder active" title="Nederlands">🇳🇱</span>
                        <span className="flag-placeholder" title="English">🇬🇧</span>
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