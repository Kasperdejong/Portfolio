import { Link, Outlet } from "react-router"; // useLocation is no longer needed here
import "./Layout.css";

function Layout() {
    return (
        <div className="layout-container">
            <header className="navbar-header">
                <nav className="navbar-container">
                    
                    {/* Column 1: Logo (Left Aligned) */}
                    <div className="nav-logo">
                        <Link to="/" viewTransition>Kasper de Jong</Link>
                    </div>

                    {/* Column 2: Nav Tags (Center Aligned) */}
                    <div className="nav-links">
                        <Link to="/" viewTransition>Home</Link>
                        <Link to="/about" viewTransition>About</Link>
                        <Link to="/projecten" viewTransition>Projecten</Link>
                        <Link to="/contact" viewTransition>Contact</Link>
                    </div>

                    {/* Column 3: Language Selector */}
                    <div className="nav-languages">
                        <span className="flag-placeholder active" title="Nederlands">🇳🇱</span>
                        <span className="flag-placeholder" title="English">🇬🇧</span>
                    </div>

                </nav>
            </header>

            {/* 
              We no longer need to force React to unmount/remount the layout main wrapper. 
              The browser will capture and transition the changes natively on the screen.
            */}
            <main className="main-content-area">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;