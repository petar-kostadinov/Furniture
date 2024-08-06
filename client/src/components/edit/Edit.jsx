import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneFurniture, useUpdateProduct } from "../../hooks/useFurniture";
import "./edit.css";

export default function Edit() {
    const { furnitureId } = useParams();
    const [furniture, setFurniture] = useGetOneFurniture(furnitureId);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const updateProduct = useUpdateProduct();

    // Fetch the furniture details and set them as the initial form values


    const {
        values,
        changeHandler,
        submitHandler,
        setValues,
    } = useForm({}, async (values) => {

        try {
            await updateProduct(furnitureId, values);
            navigate(`/catalog/furnitures/${furnitureId}/details`);


        } catch (err) {
            setError(err.message);
        }
    });

    useEffect(() => {
        if (furniture) {
            setValues({
                name: furniture.name || '',
                category: furniture.category || '',
                price: furniture.price || '',
                discount: furniture.discount || '',
                imageUrl: furniture.imageUrl || '',
                description: furniture.description || '',
            });
        }
    }, [furniture, setValues]);

    return (
        <div className="sub_page">
            <div className="hero_area">
                <header className="header_section">
                    <h2 className="text-center">Edit Product</h2>
                </header>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form onSubmit={submitHandler} className="edit-product-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={values.name || ''}
                                    onChange={changeHandler}
                                    placeholder="Enter product name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={values.category}
                                    onChange={changeHandler}
                                    required
                                >
                                    <option value="" disabled>Select category</option>
                                    <option value="Chairs">Chairs</option>
                                    <option value="Tables">Tables</option>
                                    <option value="Beds">Beds</option>
                                    <option value="Wardrobes">Wardrobes</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={values.price || ''}
                                    onChange={changeHandler}
                                    placeholder="Enter product price"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="discount">Discount</label>
                                <input
                                    type="number"
                                    id="discount"
                                    name="discount"
                                    value={values.discount || ''}
                                    onChange={changeHandler}
                                    placeholder="Enter discount"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="imageUrl">Image</label>
                                <input
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={values.imageUrl || ''}
                                    onChange={changeHandler}
                                    placeholder="Enter image URL"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={values.description || ''}
                                    onChange={changeHandler}
                                    placeholder="Enter description"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn w-100">Save Changes</button>
                            {error && <p className="text-danger">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
