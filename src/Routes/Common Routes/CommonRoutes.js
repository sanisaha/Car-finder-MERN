import Main from "../../Layout/Main/Main";
import CarsWithCategory from "../../Pages/CarCategory/CarsWithCategory";
import Home from "../../Pages/Home/Home/Home";

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
        element: <CarsWithCategory></CarsWithCategory>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
    }
    ]
}])

export default router;