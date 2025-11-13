import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import useAxios from "../hooks/useAxios";
import CreateProperty from "../components/Properties/CreateProperty";
import AllProperties from "../components/Properties/AllProperties";
import PrivateRouter from "../context/PrivateRouter";
import PropertyDetails from "../components/Properties/PropertyDetails";
import MyProperties from "../components/Properties/MyProperties";


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
            },
            {
                path: 'property-details/:id',
                loader: ({params}) => fetch(`http://localhost:3000/properties/${params.id}`),
                element: <PrivateRouter><PropertyDetails></PropertyDetails> </PrivateRouter>
            },
            {
                path: 'add-property',
                element: <PrivateRouter><CreateProperty></CreateProperty></PrivateRouter>
            },
            {
                path: 'all-properties',
                element: <PrivateRouter><AllProperties></AllProperties></PrivateRouter>
            },
            {
                path: 'my-properties',
                element: <PrivateRouter><MyProperties></MyProperties> </PrivateRouter>
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])


export default router;