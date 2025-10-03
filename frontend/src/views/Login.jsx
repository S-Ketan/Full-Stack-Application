import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(null);
        axiosClient
            .post("/login", formData)
            .then((data) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({ email: [response.data.message] });
                    }
                }
            });
    };
    return (
        <form onSubmit={onSubmit}>
            <h1 className="text-center text-2xl">Login to your account</h1>
            {errors && (
                <div className="bg-red-500 p-3 text-white">
                    {Object.keys(errors).map((key) => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
            )}
            <div className="flex flex-col gap-3 mt-4">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    className="border-2 border-black p-2  "
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    className="border-2 border-black p-2 "
                    onChange={onChange}
                />

                <button
                    type="submit"
                    className="border-2 border-black p-2 bg-purple-600 text-white mt-2"
                 
                >
                    Login
                </button>

                <p>
                    Not Registered?
                    <Link
                        to="/signup"
                        className="text-blue-600 hover:underline"
                    >
                        {" "}
                        Signup Now
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default Login;
