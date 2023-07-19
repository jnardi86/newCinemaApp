import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView";
import LoginView from "../../pages/login/views/LoginView";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import GeneralLayout from "../layouts/GeneralLayout";


export const Router = createBrowserRouter([


    {
        path: "/",
        element: (
            <ProtectedRoutes>
                <GeneralLayout>
                    <HomeView />
                </GeneralLayout>
            </ProtectedRoutes>
        ),
    },

    {
        path: "/login",
        element: (
            <PublicRoutes>
                <LoginView />
            </PublicRoutes>
        )
    },

    // {
    //     path: "*",
    //     element: <Navigate to="/" />
    // }
]);

export const routes = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Nosotros",
        to: "#",
    },
    {
        name: "Películas",
        to: "#",
    },
    {
        name: "Series",
        to: "#",
    },
    {
        name: "Contacto",
        to: "#",
    }
]