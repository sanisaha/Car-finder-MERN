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
import AddAProduct from "../../Pages/DashBoard/Sellers/AddAProduct/AddAProduct";
import Myproducts from "../../Pages/DashBoard/Sellers/MyProducts/Myproducts";
import Home from "../../Pages/Home/Home/Home";
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
        path: '/category/:id',
        element: <PrivateRoutes><CarsWithCategory></CarsWithCategory></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
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
    }
    ]
},
{
    path: '/blog',
    element: <Blog></Blog>
}
])

export default router;