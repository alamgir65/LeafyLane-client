import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import useAxios from "../hooks/useAxios";
import PropertyDetails from "../components/Properties/PropertyDetails";
import CreateProperty from "../components/Properties/CreateProperty";


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
                Component: PropertyDetails
            },
            {
                path: 'add-property',
                element: <CreateProperty></CreateProperty>
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])


export default router;