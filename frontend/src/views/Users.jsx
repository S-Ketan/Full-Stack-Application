import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../contexts/ContextProvider";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const { notification, setNotification } = useStateContext();

    useEffect(() => {
        getUsers();
    }, []);

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return;
        }
        axiosClient.delete(`/users/${id}`).then(() => {
            getUsers();
            setNotification("User was successfully deleted");
        });
    };
    const getUsers = () => {
        setLoading(true);
        axiosClient
            .get("/users")
            .then(({ data }) => {
                setLoading(false);
                setUsers(data);
               
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <div className="p-4">
            <div className="flex justify-between mb-4 align-middle">
                <h1 className="text-4xl font-bold">Users</h1>
                <Link
                    to="/users/new"
                    className="bg-green-500 text-white px-4 py-2 rounded font-bold"
                >
                    Add new
                </Link>
            </div>
            <div>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Date Created</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    {loading && (
                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-center py-4">
                                    Loading...
                                </td>
                            </tr>
                        </tbody>
                    )}
                    {!loading && (
                        <tbody>
                            {users.map((u) => (
                                <tr
                                    key={u.id}
                                    className="hover:bg-purple-100 transition-colors"
                                >
                                    <td className="py-2 px-4 border-b">
                                        {u.id}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {u.name}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {u.email}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {u.created_at}
                                    </td>
                                    <td className="py-2 px-4 border-b flex justify-center gap-4 ">
                                        <Link
                                            to={`/users/${u.id}`}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded font-bold transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(u.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-bold transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default Users;
