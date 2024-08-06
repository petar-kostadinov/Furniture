import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 992);
    const { isAuthenticated } = useContext(AuthContext)
   
    useEffect(() => {
        const handleResize = () => {
            setIsResponsive(window.innerWidth <= 992);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
                <Link className="navbar-brand" to="/">
                    <img src="/images/logo.png" alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`navbar-collapse collapse ${isMenuOpen ? (isResponsive ? 'show' : 'lg_nav-toggle') : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                    </ul>
                    <div className="user_option">
                        {isAuthenticated ? (
                            <Link to="/logout">
                                <span>Logout</span>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <img src="/images/user.png" alt="User" />
                                <span>Login</span>
                            </Link>
                        )}
                        <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                            <button
                                className="btn my-2 my-sm-0 nav_search-btn"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
                <div className={`custom_menu-btn ${isMenuOpen ? 'menu_btn-style' : ''}`}>
                    <button onClick={toggleMenu}>
                        <span className="s-1"></span>
                        <span className="s-2"></span>
                        <span className="s-3"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
