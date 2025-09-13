import React, { useState } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const DefaultLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <div className="flex w-full h-full">
                <div className="bg-purple-600 w-[25vw] h-[100vh]">
                    <aside>
                        <div className="flex flex-col gap-4 p-4 text-xl  mt-4 text-white">
                            <Link
                                to="/dashboard"
                                className="p-2 shadow-2xl border-b-2 border-r-2 border-gray-400"
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/users"
                                className="p-2 shadow-2xl border-b-2 border-r-2 border-gray-400"
                            >
                                Users
                            </Link>
                        </div>
                    </aside>
                </div>
                <div className="bg-gray-100 w-full h-[100vh]">
                    <header>
                        <div className="bg-white w-full h-[15vh] shadow-2xl flex justify-between items-center px-8">
                            <p>Header</p>
                            <p>User Info</p>
                        </div>
                    </header>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
