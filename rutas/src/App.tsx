import './App.css'
import {Outlet, useMatch} from "react-router-dom";
import NavBar from "./components/NavBar.tsx";

function App() {

    const match = useMatch('login')

    if(match){console.log("In 'LOGIN' route")}

    return (
        <>
            <NavBar/>
            <h1 style={{backgroundColor: "lightgray"}}>This is the main App page</h1>
            <Outlet></Outlet>
        </>
    )
}

export default App
