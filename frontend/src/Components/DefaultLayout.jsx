import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";

const DefaultLayout = () => {
    const { user, token, notification, setUser, setToken } = useStateContext();
    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    if (!token) {
        return <Navigate to="/login" />;
    }
    // console.log("DefaultLayout token:", token); // Debugging line
    useEffect(() => {
        axiosClient.get("/user").then((data) => {
            setUser(data);
        });
    }, []);
    return (
        <div>
            <div className="flex w-full h-full">
                <div className="bg-purple-600 w-[25vw] h-[100vh]">
                    <aside>
                        <div className="flex flex-col gap-4 p-4 text-xl  mt-4 text-white">
                            <Link
                                to="/dashboard"
                                className="p-2 shadow-2xl bg-purple-700 "
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/users"
                                className="p-2 shadow-2xl bg-purple-700 "
                            >
                                Users
                            </Link>
                        </div>
                    </aside>
                </div>
                <div className="bg-gray-100 w-full h-[100vh]">
                    <header>
                        <div className="bg-white w-full h-[15vh] shadow-2xs flex justify-between items-center px-8">
                            <p>Header</p>
                            <div className="flex gap-4 items-center">
                                <p>{user ? user.name : ""}</p>
                                <button
                                    onClick={onLogout}
                                    className="cursor-pointer"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </header>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
            {notification && (
                <div
                    className={`fixed bottom-4 right-4 ${
                        notification === "User was successfully deleted"
                            ? "bg-red-500"
                            : "bg-green-500"
                    } text-white px-4 py-2 rounded shadow-lg`}
                >
                    {notification}
                </div>
            )}
        </div>
    );
};

export default DefaultLayout;
