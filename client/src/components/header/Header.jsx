import { useLocation } from "react-router-dom";
import NavBar from "../navbar/NavBar";

export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <div className={!isHomePage ? 'sub_page' : ''}>
            < header className="header_section" >
                <NavBar />
            </header >
        </div>
    );
}