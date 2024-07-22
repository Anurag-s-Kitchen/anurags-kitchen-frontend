import {
    createBrowserRouter,
    Navigate,
    RouteObject,
    RouterProvider,
} from "react-router-dom";

import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Pages/Home/Home";
// import LoginRegister from "./components/Auth/LoginRegister";
// import OrderBatter from "./components/Order/OrderBatter";
// import OrderWeekendMenu from "./components/Order/OrderWeekendMenu";
// import Reviews from "./components/Pages/Reviews";
import ContactUs from "./components/Pages/ContactUs";
// import ForgotPassword from "./components/Auth/ForgotPassword";
import Gallery from "./components/Pages/Gallery/Gallery";

const mainRoutes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to="/home" replace />
    },
    {
        path: "/home",
        element: <Home />
    },
    // {
    //     path: "/login",
    //     element: <LoginRegister />,
    // },
    // {
    //     path: "/register",
    //     element: <LoginRegister />
    // },
    // {
    //     path: "/forgot-password",
    //     element: <ForgotPassword />
    // },
    // {
    //     path: "/order/batter",
    //     element: <OrderBatter />
    // },
    // {
    //     path: "/order/weekend-menu",
    //     element: <OrderWeekendMenu />
    // },
    // {
    //     path: "/reviews",
    //     element: <Reviews />
    // },
    {
        path: "/gallery",
        element: <Gallery />
    },
    {
        path: "/contact-us",
        element: <ContactUs />
    }
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        //   loader: rootLoader,
        //   action: rootAction,
        children: mainRoutes,
    },
]);

export default function Route() {
    return (
        <RouterProvider router={router} />
    )
}
