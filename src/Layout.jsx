import { Link, Outlet } from "react-router";
import "./Layout.css"; // Imported the custom CSS

function Layout() {
    return (
        <div className="layout-container">
            <header className="navbar-header">
                <nav className="navbar-container">
                    
                    {/* Column 1: Logo (Left Aligned) */}
                    <div className="nav-logo">
                        <Link to="/">Kasper de Jong</Link>
                    </div>

                    {/* Column 2: Nav Tags (Center Aligned) */}
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projecten">Projecten</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    {/* Column 3: Language Selector (Right Aligned Placeholder) */}
                    <div className="nav-languages">
                        <span className="flag-placeholder active" title="Nederlands">🇳🇱</span>
                        <span className="flag-placeholder" title="English">🇬🇧</span>
                    </div>

                </nav>
            </header>

            {/* Main content slot where routing sub-pages render */}
            <main className="main-content-area">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;