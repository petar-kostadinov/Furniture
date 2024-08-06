/* eslint-disable no-unused-vars */
import { useContext } from "react";

import { Link, useLocation } from "react-router-dom";
import { useGetAllFurnitures } from "../../hooks/useFurniture";
import { AuthContext } from "../../contexts/AuthContexts";


export default function Catalog() {
    const [furnitures, setFurnitures] = useGetAllFurnitures();
    const location = useLocation()
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <section className="brand_section">
            <div className="container">
                <div className="heading_container">
                    <h2>Featured Brands</h2>
                </div>
                <div className="brand_container layout_padding2">
                    {furnitures.length > 0 ? furnitures.map((furnitures) => (
                        <div className="box" key={furnitures._id}>
                            <Link to={location.pathname === '/' ?
                                `catalog/furnitures/${furnitures._id}/details` :
                                `furnitures/${furnitures._id}/details`}>
                                <div className="new">
                                    <h5>Details</h5>
                                </div>
                            </Link>
                            <div className="img-box">
                                <img src={furnitures.imageUrl} />
                            </div>
                            <div className="detail-box">
                                <h6 className="price">
                                    <strong>Price:</strong> {furnitures.price}€
                                </h6>
                                <h6>
                                    <strong>Name:</strong> {furnitures.name}
                                </h6>
                                <h6>
                                    <strong>Description:</strong> {furnitures.description}
                                </h6>
                            </div>
                        </div>
                    )) : <h2 className="heading_container">No furniture yet</h2>}
                </div>

                {isAuthenticated ? (
                    <Link to="/add-new" className="brand-btn">
                        Add New
                    </Link>
                ) : ('')
                }
            </div>
            <br />
        </section>

    );
}
