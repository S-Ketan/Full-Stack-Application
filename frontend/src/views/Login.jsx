import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form>
            <h1 className="text-center text-2xl">Login to your account</h1>
            <div className="flex flex-col gap-3 mt-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="border-2 border-black p-2 w-[22vw]"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="border-2 border-black p-2"
                />

                <button
                    type="submit"
                    className="border-2 border-black p-2 bg-purple-600 text-white mt-2"
                    onSubmit={onSubmit}
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
