import './App.css'
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.tsx";

function App() {

    return (
        <>
            <NavBar/>
            <h1 style={{backgroundColor: "lightgray"}}>This is the main App page</h1>
            <Outlet></Outlet>
        </>
    )
}

export default App
