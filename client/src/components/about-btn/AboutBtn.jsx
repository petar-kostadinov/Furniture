import Header from "../header/Header";
import Info from "../info/Info";
import AboutUs from "../about/AboutUs";


export default function AboutBtn() {
    return (
        <div className="sub_page">
            <div className="hero_area">
                <Header />
            </div>
            <AboutUs />
            <Info />
        </div>
    );
}