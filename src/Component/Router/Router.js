import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";
import Service from "../Pages/Service/Service";
import Signup from "../Pages/Signup/Signup";
import Private_route from "../PrivateRoute/Private_route";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/reviews',
                element: <Private_route><Reviews /></Private_route>
            },
            {
                path: '/service',
                element: <Private_route><Service /></Private_route>
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            
        ]
    }
])

export default router