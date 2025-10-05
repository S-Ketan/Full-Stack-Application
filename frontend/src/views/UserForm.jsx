import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const UserForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const { notification, setNotification } = useStateContext();
    const [user, setUser] = useState({
        id: null,
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(null);
        if (user.id) {
            axiosClient
                .put(`/users/${user.id}`, user)
                .then(() => {
                    navigate("/users");
                    setNotification("User was successfully updated");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        } else {
            axiosClient
                .post(`/users`, user)
                .then(() => {
                    navigate("/users");
                    setNotification("User was successfully created");
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
        }
    };
    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get(`/users/${id}`)
                .then(({ data }) => {
                    setUser(data);
                    console.log(data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }
    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    {user && user.id ? `Update User: ${user.name}` : "New User"}
                </h1>
            </div>
            {loading && (
                <div className="text-center my-4 text-purple-600 font-semibold">
                    Loading...
                </div>
            )}
            {errors && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {Object.keys(errors).map((key) => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
            )}
            {!loading && (
                <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Name
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Name"
                            value={user.name}
                            onChange={(e) =>
                                setUser({ ...user, name: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Email"
                            type="email"
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Password"
                            type="password"
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Password Confirmation
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Password Confirmation"
                            type="password"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    password_confirmation: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition font-semibold"
                    >
                        {user && user.id ? "Update User" : "Create User"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default UserForm;
