import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form action="post">
            <h1 className="text-center text-2xl">Signup For Free</h1>
            <div className="flex flex-col gap-3 mt-4">
                <input
                    type="text"
                    placeholder="FullName"
                    className="border-2 border-black p-2 w-[22vw]"
                />
                <input
                    type="text"
                    placeholder="Email Address"
                    className="border-2 border-black p-2 w-[22vw]"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="border-2 border-black p-2"
                />
                <input
                    type="password"
                    placeholder="Password Confirmation"
                    className="border-2 border-black p-2"
                />

                <button
                    type="submit"
                    className="border-2 border-black p-2 bg-purple-600 text-white mt-2"
                    onSubmit={onSubmit}
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
