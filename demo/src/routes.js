import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import MyBasket from "./Pages/MyBasket/MyBasket";
import Product from "./Pages/Product/Product";
import Profile from "./Pages/Profile/Profile";
import ShowCourse from "./Pages/ShowCourse/ShowCourse";

let routesArray = [
    {path: '/', element: <Home/>},
    {path: '/product', element: <Product/>},
    {path: '/myBasket', element: <MyBasket/>},
    {path: '/profile', element: <Profile/>},
    {path: '/about', element: <About/>},
    {path: '/ShowCourse/:courseName', element: <ShowCourse/>},
]

export default routesArray;