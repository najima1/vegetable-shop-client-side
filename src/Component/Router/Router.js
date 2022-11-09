import { createBrowserRouter } from "react-router-dom";
import Add_service from "../Pages/Add_service/Add_service";
import Blogs from "../Pages/Blogs/Blogs";
import Error_page from "../Pages/Error_page/Error_page";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";
import Service from "../Pages/Service/Service";
import Signup from "../Pages/Signup/Signup";
import View_details from "../Pages/View_details/View_details";
import Private_route from "../PrivateRoute/Private_route";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error_page />,
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
                loader: () => fetch(`https://restaurant-server-ga3g2szoo-najima1.vercel.app/review`),

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
            {
                path: '/view/:id',
                loader: ({ params }) => fetch(`https://restaurant-server-7fz2zsaca-najima1.vercel.app/product/${ params.id }`),
                element: <Private_route><View_details /></Private_route>
            },
            {
                path: '/addservice',
                element: <Private_route>
                    <Add_service />
                </Private_route>
            }

        ]
    }
])

export default router