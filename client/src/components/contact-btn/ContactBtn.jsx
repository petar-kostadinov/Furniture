import Contact from "../contact/Contact";
import Header from "../header/Header";
import Info from "../info/Info";

export default function ContactBtn() {
  return (
<div className="sub_page">
            <div className="hero_area">
                <Header />
            </div>
            <Contact />
            <Info />
        </div>
  );
}