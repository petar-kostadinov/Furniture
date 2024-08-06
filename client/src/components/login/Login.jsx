import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import Info from "../info/Info";

const initialValues = { email: '', password: '' };

export default function LoginForm() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate('/')
        } catch (err) {
            setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        loginHandler,
    );

    const redirect = () => {
        navigate("/register");
    };
    return (
        <div className="sub_page">
            <div className="hero_area">
                <header className="header_section">
                    <h2 className="text-center">Log In</h2>
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
                                    placeholder="Sokka@qmail.com"
                                    value={values.email}
                                    onChange={changeHandler}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={changeHandler}
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
                                style={{ backgroundColor: "#24d278", border: "none", color: "#fff" }}
                            >
                                Sign in
                            </button>
                        </form>
                        <div className="mt-3 text-center">
                            <p>Don t have an account? <button className="btn btn-link" onClick={redirect}>Register now</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <Info />
        </div>
    );
}
