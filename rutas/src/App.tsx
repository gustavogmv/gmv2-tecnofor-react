import './App.css'
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <h1 style={{backgroundColor: "lightgray"}}>This is the main App page</h1>
            <Outlet></Outlet>
        </>
    )
}

export default App
