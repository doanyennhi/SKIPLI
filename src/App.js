import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import StartPage from "./StartPage";
import DashboardPage from "./DashboardPage";
import Accounts from "./Accounts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StartPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
    {
        path: "/dashboard/accounts",
        element: <Accounts />
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
