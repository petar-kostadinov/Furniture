import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import "./addNew.css";
import { useCreateProduct } from "../../hooks/useFurniture";

const initialValues = {
    name: '',
    category: '',
    price: '',
    discount: '',
    imageUrl: '',
    description: '',
};

export default function AddNew() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const newProduct = useCreateProduct();

    const createHandler = async (values) => {
        try {
            const { _id: productId } = await newProduct(values);

            navigate(`/catalog/furnitures/${productId}/details`)
        } catch (err) {
            setError(err.message);

        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler)






    return (
        <div className="sub_page">
            <div className="hero_area">
                <header className="header_section">
                    <h2 className="text-center">Add new</h2>
                </header>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form onSubmit={submitHandler} className="create-product-form">
                            <div className="form-group">
                                <label htmlFor="category">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChange={changeHandler}
                                    placeholder="Enter product name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    value={values.category}
                                    onChange={changeHandler}
                                    placeholder="Enter product category"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={values.price}
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
                                    value={values.discount}
                                    onChange={changeHandler}
                                    placeholder="Enter discount"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Image</label>
                                <input
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={values.image_url}
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
                                    value={values.description}
                                    onChange={changeHandler}
                                    placeholder="Enter description"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn w-100"
                            >
                                Create Product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}
