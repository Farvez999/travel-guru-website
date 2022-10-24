import Main from "../layouts/Main";
import Home from "../pages/Home";
import PlacesDetails from "../pages/PlacesDetails";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch('https://travel-guru-server-ochre.vercel.app/places')
            },
            {
                path: "/places/:id",
                element: <PlacesDetails></PlacesDetails>,
                loader: ({ params }) => fetch(`https://travel-guru-server-ochre.vercel.app/places/${params.id}`)
            },
        ]
    },
]);