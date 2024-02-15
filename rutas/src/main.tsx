import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/Error.tsx";
import AdminLayout from "./pages/layout/AdminLayout.tsx";
import Graphics from "./pages/admin/Graphics.tsx";
import Lists from "./pages/admin/Lists.tsx";
import Info from "./pages/Info.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import AuthLayout from "./pages/layout/AuthLayout.tsx";
import Login from "./pages/auth/Login.tsx";
import Register from "./pages/auth/Register.tsx";

/**
 * APP
 *
 * LAYOUT ADMIN
 *  /admin/graficos
 *  /admin/listados
 *
 * LAYOUT AUTH
 *  /login
 *  /register
 */

// this 'router' is usually defined here
const router = createBrowserRouter([
    {
        path: '/', element: <App/>, errorElement: <ErrorPage/> /*only in root route*/,
        children: [
            {path: 'info', element: <Info/>},
            {path: 'about', element: <About/>},
            {path: 'contact', element: <Contact/>},
            {
                path: 'admin', element: <AdminLayout/>,
                children: [{path: 'graphics', element: <Graphics/>},
                    {path: 'lists', element: <Lists/>}]
            },
            {
                element: <AuthLayout/>,
                children: [{path: 'login', element: <Login/>},
                    {path: 'register', element: <Register/>}]
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*<App />*/}
        <RouterProvider router={router}/>
    </React.StrictMode>,
)