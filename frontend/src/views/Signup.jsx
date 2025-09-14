import { useState } from "react";
import { data, Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });
    const { setUser, setToken } = useStateContext();
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post("/signup", formData).then(({data})=>{
            setUser(data.user);
            setToken(data.token);
        }).catch((err)=>{
            const response =err.response;
            if(response&& response.status===422){
                console.log(response.data.errors);
            }
        })
        console.log(formData);
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    axiosClient.pos;

    return (
        <form onSubmit={onSubmit}>
            <h1 className="text-center text-2xl">Signup For Free</h1>
            <div className="flex flex-col gap-3 mt-4">
                <input
                    type="text"
                    name="fullname"
                    placeholder="FullName"
                    className="border-2 border-black p-2 w-[22vw]"
                    onChange={onChange}
                    value={formData.fullname}
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
                    className="border-2 border-black p-2"
                    onChange={onChange}
                    value={formData.password}
                />
                <input
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Password Confirmation"
                    className="border-2 border-black p-2"
                    onChange={onChange}
                    value={formData.passwordConfirmation}
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
