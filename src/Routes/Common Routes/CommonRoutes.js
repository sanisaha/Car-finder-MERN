import { baseURL } from "../../Context/AuthProvider";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blogs/Blog";
import CarsWithCategory from "../../Pages/CarCategory/CarsWithCategory";
import Login from "../../Pages/Credentials/Login/Login";
import Register from "../../Pages/Credentials/Register/Register";
import MyDashboard from "../../Pages/DashBoard/MyDashboard/MyDashboard";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MySellers from "../../Pages/DashBoard/MySellers/MySellers";
import MyUsers from "../../Pages/DashBoard/MyUsers/MyUsers";
import Payment from "../../Pages/DashBoard/Payment/Payment/Payment";
import AddAProduct from "../../Pages/DashBoard/Sellers/AddAProduct/AddAProduct";
import Myproducts from "../../Pages/DashBoard/Sellers/MyProducts/Myproducts";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/Other/Error";
import PrivateRoutes from "../Private Routes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [{
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/carItems',
        element: <CarsWithCategory></CarsWithCategory>,
        loader: () => fetch(`${baseURL}/advertize`)
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }]
},
{
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [{
        path: '/dashboard',
        element: <MyDashboard></MyDashboard>
    },

    {
        path: '/dashboard/buyers',
        element: <MyUsers></MyUsers>
    },
    {
        path: '/dashboard/sellers',
        element: <MySellers></MySellers>
    },
    {
        path: '/dashboard/myproducts',
        element: <Myproducts></Myproducts>
    },
    {
        path: '/dashboard/add',
        element: <AddAProduct></AddAProduct>
    },
    {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`${baseURL}/bookings/${params.id}`)
    }
    ]
},
{
    path: '/blog',
    element: <Blog></Blog>
},
{
    path: '*',
    element: <Error></Error>
}
])

export default router;