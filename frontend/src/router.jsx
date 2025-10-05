import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";
import Dashboard from "./views/Dashboard";
import UserForm from "./views/UserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,   // For logged-in users
    children: [
      {
        path: "users",    
        element: <Users />,
      },
      {
        path: "users/new",    
        element: <UserForm key='userCreate'/>,
      },
      {
        path: "users/:id",    
        element: <UserForm key='userUpdate'/>,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,   // For guests
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
