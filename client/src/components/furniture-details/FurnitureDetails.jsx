import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteProduct, useGetOneFurniture } from "../../hooks/useFurniture";
import Header from "../header/Header";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";

import "./details.css";


export default function FurnitureDetails() {
  const { furnitureId } = useParams();
  const [furniture, setFurniture] = useGetOneFurniture(furnitureId);
  const { userId, isAuthenticated } = useContext(AuthContext);
  const isCreator = userId === furniture?._ownerId;

  const deleteProduct = useDeleteProduct();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteProduct(furnitureId);
      navigate('/catalog');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };



  return (
    <div className="sub_page">
      <div className="hero_area">
        <Header />
      </div>
      <div className="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="details_container" style={{ width: "700px", height: "700px", paddingBottom: 100 }}>
              <div className="img-box">
                <img src={furniture.imageUrl} alt={furniture.name} />
              </div>
              <div className="product_info">
                <h2>{furniture.name}</h2>
                <p className="category"><strong>Category:</strong> {furniture.category}</p>
                <p className="price"><strong>Price:</strong> {furniture.price}€</p>
                <p className="discount"><strong>Discount:</strong> {furniture.discount}%</p>
                <p className="description"><strong>Description:</strong> {furniture.description}</p>
              </div>
              {isAuthenticated && isCreator && (
                <div className="action_buttons" key={furniture._id}>
                  <Link to={`/catalog/furnitures/${furniture._id}/details/edit`}
                    className="btn edit-btn" style={{ backgroundColor: "#24d278", border: "none", color: "#fff", padding: 5 }}>
                    Edit
                  </Link>
                  <button onClick={handleDelete} className="btn delete-btn" style={{ backgroundColor: "#ff0000", border: "none", color: "#fff" }}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
