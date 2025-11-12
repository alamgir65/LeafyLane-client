import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'auth/register',
                Component: Register
            },
            {
                path: 'auth/login',
                Component: Login
            }
        ]
    }
])


export default router;