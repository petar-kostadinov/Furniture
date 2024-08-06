import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../info/Info";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '', confirmPassword: '' };

export default function RegisterForm() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, confirmPassword }) => {
        if (password !== confirmPassword) {
            return setError('The passwords do not match');
        }

        try {
            await register(email, password)
            navigate('/')
        } catch (err) {
            setError(err.message);
        }

    };
    const handleRedirectToLogin = () => {
        navigate("/login");
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

    return (
        <div className="sub_page">
            <div className="hero_area">
                <header className="header_section">
                    <h2 className="text-center">Sign Up</h2>
                </header>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={changeHandler}
                                    placeholder="Sokka@qmail.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    value={values.password}
                                    onChange={changeHandler}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Repeat Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="form-control"
                                    value={values.confirmPassword}
                                    onChange={changeHandler}
                                    placeholder="ConfirmPassword"
                                    required
                                />
                                {error && (<p className="field">
                                    <span style={{ color: 'red' }}>{error}</span>
                                </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="btn w-100"
                                style={{
                                    backgroundColor: "#24d278",
                                    border: "none",
                                    color: "#fff"
                                }}
                            >
                                Register
                            </button>

                        </form>

                        <div className="mt-3 text-center">
                            <p>Already a member? <button className="btn btn-link" onClick={handleRedirectToLogin}>Login here</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <Info />
        </div>
    );
}
