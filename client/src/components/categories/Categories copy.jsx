import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetLast } from "../../hooks/useFurniture";

export default function Trending() {
    const [furnitures] = useGetLast();
    const [activeCategory, setActiveCategory] = useState('Chairs'); // Default category

    // Filter furnitures based on the selected category
    const getFilteredFurnitures = (category) => {
        return furnitures.filter(furniture => furniture.category === category);
    };

    const categories = ['Chairs', 'Tables', 'Beds', 'Wardrobes'];

    return (
        <section className="trending_section layout_padding">
            <div id="accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>Trending Categories</h2>
                                </div>
                                <div className="tab_container">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className={`t-link-box ${activeCategory === category ? '' : 'collapsed'}`}
                                            onClick={() => setActiveCategory(category)}
                                        >
                                            <div className="number">
                                                <h5>{`0${index + 1}`}</h5>
                                            </div>
                                            <hr />
                                            <div className="t-name">
                                                <h5>{category}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`collapse ${activeCategory === category ? 'show' : ''}`}
                                >
                                    <div className="img_container">
                                        {getFilteredFurnitures(category).length > 0 ? (
                                            getFilteredFurnitures(category).map((furniture, idx) => (
                                                <div className={`box ${idx % 2 === 0 ? 'b-1' : 'b-2'}`} key={furniture._id}>
                                                    <div className="img-box">
                                                        <Link to={`/catalog/furnitures/${furniture._id}/details`}>
                                                            <img src={furniture.imageUrl || "public/images/slider-img.png"} alt={furniture.name} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="box b-1">
                                                <div className="img-box">
                                                    <img src="public/images/slider-img.png" alt="No items" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
