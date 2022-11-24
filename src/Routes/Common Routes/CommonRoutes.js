import Main from "../../Layout/Main/Main";
import CarsWithCategory from "../../Pages/CarCategory/CarsWithCategory";
import Login from "../../Pages/Credentials/Login/Login";
import Register from "../../Pages/Credentials/Register/Register";
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
    }
    ]
}])

export default router;