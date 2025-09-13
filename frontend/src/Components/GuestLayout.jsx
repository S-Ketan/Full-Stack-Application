import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
const GuestLayout = () => {
    const { token } = useStateContext();
    console.log("GuestLayout token:", token); // Debugging line
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div className="bg-slate-300 flex my-auto h-[100vh]">
            <div className="m-auto p-10 border-2 border-black bg-white">
            <Outlet />
        </div> </div>
    );
};

export default GuestLayout;
