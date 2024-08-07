import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <section className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>About Us</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam
                            </p>
                            <Link to="https://videnov.bg/page/za-nas">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src="public/images/about-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}