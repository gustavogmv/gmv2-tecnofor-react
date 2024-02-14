import './App.css'
import Efectos from "./components/Efectos.tsx";
import Intervalo from "./components/Intervalo.tsx";
import {useState} from "react";

function App() {
    // const [count, setCount] = useState(0)

    const [showDate, setShowDate] = useState(true)

    return (
        <>
            <button onClick={()=>{setShowDate(!showDate)}}>{showDate} ? 'Hide' : 'Show'</button>
            <Efectos/>
            {showDate && <Intervalo/>}
        </>
    )
}

export default App
