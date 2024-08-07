import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetLast } from "../../hooks/useFurniture";

export default function Slider() {
    const [furnitures] = useGetLast();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="slider_section">
            <div className="play_btn">
                {furnitures.length > 0 ? (
                    <Link to={`/catalog/furnitures/${furnitures[activeIndex]._id}/details`}>
                        <img src="images/play.png" alt="Play" />
                    </Link>
                ) : (
                    <Link to="/catalog">
                        <img src="images/play.png" alt="Play" />
                    </Link>
                )}
            </div>
            <div className="number_box">
                <div>
                    <ol className="carousel-indicators indicator-2">
                        {furnitures.map((_, index) => (
                            <li
                                key={index}
                                data-target="#carouselExampleIndicators"
                                data-slide-to={index}
                                className={index === activeIndex ? "active" : ""}
                                onClick={() => setActiveIndex(index)}
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
                >
                    <ol className="carousel-indicators">
                        {furnitures.map((_, index) => (
                            <li
                                key={index}
                                data-target="#carouselExampleIndicators"
                                data-slide-to={index}
                                className={index === activeIndex ? "active" : ""}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {furnitures.length > 0 ? (
                            furnitures.map((furniture, index) => (
                                <div
                                    key={furniture._id}
                                    className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h1>
                                                    Last
                                                    Added
                                                    <br />
                                                    <span>Furniture</span>
                                                </h1>
                                                <p>{furniture.description}</p>
                                                <div className="btn-box">
                                                    <Link to={`/catalog/furnitures/${furniture._id}/details`} className="btn-1">
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
                                                <Link to={`/catalog/furnitures/${furniture._id}/details`}>
                                                    <img
                                                        src={furniture.imageUrl || "images/slider-img.png"}
                                                        alt={furniture.name}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail-box">
                                            <h1>Last 
                                                Added
                                                <br />
                                                <span>Furniture</span>
                                            </h1>
                                            <div className="btn-box">
                                                <Link to="/catalog" className="btn-1">
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
                                            <img src="images/slider-img.png" alt="Furniture" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
