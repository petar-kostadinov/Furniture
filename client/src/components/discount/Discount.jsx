import { Link } from "react-router-dom";
import { useGetLast } from "../../hooks/useFurniture";

export default function Discount() {
    const [furnitures] = useGetLast();

    // Find the latest product with a discount of 50% or more
    const discountedProduct = furnitures
        .filter(furniture => furniture.discount >= 50)
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))[0]; // Sort by dateAdded and take the first one

    return (
        <section className="discount_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <h2>The Latest Collection</h2>
                            <h2 className="main_heading">50% DISCOUNT</h2>
                            {discountedProduct ? (
                                <div className="">
                                    <Link to={`/catalog/furnitures/${discountedProduct._id}/details`}>Details</Link>
                                </div>
                            ) : (
                                <h2><strong>Sorry - there are currently no products with discount.</strong></h2>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        {discountedProduct ? (
                            <div className="img-box">
                                <img src={discountedProduct.imageUrl || "public/images/discount-img.png"} alt={discountedProduct.name} />
                            </div>
                        ) : (
                            <div className="img-box">
                                <img src="public/images/discount-img.png" alt="No discounted products" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
