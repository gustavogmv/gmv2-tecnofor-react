import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/Error.tsx";
import Info from "./pages/Info.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

// this 'router' is usually defined here
const router = createBrowserRouter([
    {path: '/', element: <App/>, errorElement: <ErrorPage/> /*only in root route*/},
    {path: '/info', element: <Info/>},
    {path: '/about', element: <About/>},
    {path: '/contact', element: <Contact/>}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*<App />*/}
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
