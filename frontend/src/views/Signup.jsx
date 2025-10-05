import { useState } from "react";
import { data, Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useStateContext();
    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(null);
        axiosClient
            .post("/signup", formData)
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
                        setErrors({ message: [response.data.message] });
                    }
                }
            });
        console.log(formData);
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={onSubmit}>
            <h1 className="text-center text-2xl">Signup For Free</h1>
            {errors && (
                <div className="bg-red-500 p-3 text-white">
                    {Object.keys(errors).map((key) => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
            )}
            <div className="flex flex-col gap-3 mt-4">
                <input
                    type="text"
                    name="name"
                    placeholder="FullName"
                    className="border-2 border-black p-2 w-[22vw]"
                    onChange={onChange}
                    value={formData.name}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="border-2 border-black p-2 w-[22vw]"
                    onChange={onChange}
                    value={formData.email}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border-2 border-black p-2  w-[22vw]"
                    onChange={onChange}
                    value={formData.password}
                />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                    className="border-2 border-black p-2 w-[22vw]"
                    onChange={onChange}
                    value={formData.password_confirmation}
                />

                <button
                    type="submit"
                    className="border-2 border-black p-2 bg-purple-600 text-white mt-2"
                >
                    Signup
                </button>

                <p>
                    Already have an Account?
                    <Link to="/login" className="text-blue-600 hover:underline">
                        {" "}
                        Login
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default Signup;
