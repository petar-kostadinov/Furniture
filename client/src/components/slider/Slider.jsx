import { Link } from "react-router-dom";
import { useGetLast } from "../../hooks/useFurniture";

export default function Slider() {
    const [furnitures, setFurnitures] = useGetLast();

    return (
        <section className="slider_section">
            <div className="play_btn">
                <a href="">
                    <img src="public/images/play.png" alt="Play" />
                </a>
            </div>
            <div className="number_box">
                <div>
                    <ol className="carousel-indicators indicator-2">
                        {furnitures.map((_, index) => (
                            <li
                                key={index}
                                data-target="#carouselExampleIndicators"
                                data-slide-to={index}
                                className={index === 0 ? "active" : ""}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="container">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        {furnitures.map((_, index) => (
                            <li
                                key={index}
                                data-target="#carouselExampleIndicators"
                                data-slide-to={index}
                                className={index === 0 ? "active" : ""}
                            />
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {furnitures.map((furniture, index) => (
                            <div
                                key={furniture._id}
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail-box">
                                            <h1>
                                                {furniture.name}
                                                <span>Furniture</span>
                                            </h1>
                                            <p>{furniture.description}</p>
                                            <div className="btn-box">
                                                <Link to={`/catalog/${furniture._id}`} className="btn-1">
                                                    Read More
                                                </Link>
                                                <Link to="/contact" className="btn-2">
                                                    Contact us
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 img-container">
                                        <div className="img-box">
                                            <img
                                                src={furniture.imageUrl || "public/images/slider-img.png"}
                                                alt={furniture.name}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
